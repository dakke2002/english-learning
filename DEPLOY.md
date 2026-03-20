# 英语学习网站 - Railway 部署指南

## 部署步骤

### 1. 上传代码到 GitHub

1. 在 GitHub 创建新仓库（例如：`english-learning`）
2. 将此文件夹的所有内容上传到 GitHub：
   ```bash
   cd E:\projects\english-learning
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/你的用户名/english-learning.git
   git push -u origin main
   ```

### 2. 部署到 Railway

1. 访问 [Railway](https://railway.app/) 并注册账号（可用 GitHub 登录）

2. 点击 **"New Project"** → **"Deploy from GitHub repo"**

3. 选择你刚才上传的仓库 `english-learning`

4. Railway 会自动识别 Dockerfile 并开始构建

5. 构建完成后，点击 **"Settings"** → **"Ports"** 确认端口 3001 已配置

6. 点击 **"Settings"** → **"Variables"** 添加环境变量：
   - `NODE_ENV`: `production`
   - `JWT_SECRET`: 设置一个随机密钥（例如：`my-super-secret-key-12345`）

7. 点击 **"Deploy"** 重新部署

### 3. 配置持久化存储

Railway 默认是临时文件系统，需要配置持久化存储来保存 SQLite 数据库：

1. 在 Railway 项目页面，点击 **"Volumes"** 标签
2. 点击 **"New Volume"**
3. 设置 Mount Path 为 `/app`
4. 保存后重新部署

### 4. 获取访问 URL

部署成功后，Railway 会分配一个公网 URL，格式类似：
```
https://your-app-production.up.railway.app
```

你可以把这个链接分享给任何人访问！

### 5. (可选) 绑定自定义域名

在 Railway 的 **"Settings"** → **"Domains"** 可以绑定自己的域名。

---

## 注意事项

1. **数据库**: SQLite 适合小型应用，如果用户量大建议迁移到 PostgreSQL
2. **费用**: Railway 有免费额度，超出后按使用量收费（约 $5/月起）
3. **环境变量**: 不要在代码中硬编码敏感信息，全部使用环境变量

---

## 本地测试 Docker

在部署前，可以在本地测试 Docker 构建：

```bash
cd E:\projects\english-learning
docker-compose up --build
```

然后访问 http://localhost:3001
