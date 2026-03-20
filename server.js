const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;
const BASE_DIR = __dirname;

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.txt': 'text/plain'
};

const server = http.createServer((req, res) => {
  // 处理 CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // API: 保存文件
  if (req.url === '/api/save' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      try {
        const { filename, content } = JSON.parse(body);
        const filePath = path.join(BASE_DIR, filename);

        // 安全检查：确保文件在允许目录内
        const resolvedPath = path.resolve(filePath);
        if (!resolvedPath.startsWith(BASE_DIR)) {
          res.writeHead(403, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: '不允许的路径' }));
          return;
        }

        fs.writeFileSync(resolvedPath, content, 'utf8');
        console.log(`✓ 已保存：${filename}`);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true }));
      } catch (e) {
        console.error('保存失败:', e);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: e.message }));
      }
    });
    return;
  }

  // API: 读取文件
  if (req.url.startsWith('/api/read?')) {
    const filename = req.url.split('=')[1];
    if (filename) {
      const filePath = path.join(BASE_DIR, filename);
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ content }));
      } catch (e) {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: '文件不存在' }));
      }
      return;
    }
  }

  // 静态文件服务
  let filePath = req.url === '/' ? '/index.html' : req.url;

  // 移除查询参数
  filePath = filePath.split('?')[0];

  filePath = path.join(BASE_DIR, filePath);

  const ext = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404);
        res.end('文件不存在：' + filePath);
      } else {
        res.writeHead(500);
        res.end('服务器错误：' + err.message);
      }
      return;
    }

    res.writeHead(200, { 'Content-Type': contentType });

    // 视频文件支持范围请求
    if (ext === '.mp4' || ext === '.webm') {
      const stat = fs.statSync(filePath);
      const fileSize = stat.size;
      res.setHeader('Content-Length', fileSize);
      res.setHeader('Accept-Ranges', 'bytes');
    }

    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════╗
║      本地服务器已启动！                 ║
╠────────────────────────────────────────╣
║  主页： http://localhost:${PORT}/        ║
║  编辑器：http://localhost:${PORT}/editor.html ║
║                                        ║
║  按 Ctrl+C 停止服务器                   ║
╚════════════════════════════════════════╝
  `);
});
