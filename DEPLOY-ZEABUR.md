# 英语学习网站 - Zeabur 部署指南

## Zeabur 简介

Zeabur 是一个现代化的部署平台，支持从 Gitee 直接部署，无需 GitHub，非常适合中国大陆用户。

官网：https://zeabur.com

---

## 部署步骤

### 1. 上传代码到 Gitee（码云）

#### 1.1 在 Gitee 创建仓库

1. 访问 https://gitee.com/
2. 登录/注册账号
3. 点击右上角 **+** → **新建仓库**
4. 仓库名称：`english-learning`
5. 设置为 **公开仓库** 或 **私有仓库**
6. 不要勾选「使用模板」「README」「.gitignore」等
7. 点击 **创建**

#### 1.2 上传代码

在 PowerShell 或命令行中执行：

```bash
cd E:\projects\english-learning
git init
git add .
git commit -m "Initial commit - English Learning App"
git branch -M main
```

然后关联 Gitee 仓库（替换为你的 Gitee 用户名）：

```bash
git remote add origin https://gitee.com/你的用户名/english-learning.git
git push -u origin main
```

---

### 2. 部署到 Zeabur

#### 2.1 注册 Zeabur

1. 访问 https://zeabur.com
2. 点击 **Sign Up**
3. 使用 GitHub 或 邮箱 注册

#### 2.2 创建项目

1. 登录后点击 **Dashboard**
2. 点击 **Create Project**
3. 输入项目名称：`english-learning`
4. 点击 **Create**

#### 2.3 添加服务

1. 在项目页面点击 **Create Service**
2. 选择 **Deploy from Source Code**
3. 选择 **Gitee** 作为代码源

#### 2.4 连接 Gitee

1. 首次使用需要授权 Zeabur 访问 Gitee
2. 点击 **Authorize** 授权
3. 选择你刚才创建的 `english-learning` 仓库

#### 2.5 配置构建

1. **Build Command**: `npm install && npm run build`
2. **Start Command**: `node server.js`
3. **Port**: `3001`

#### 2.6 设置环境变量

点击 **Environment Variables**，添加：

| Key | Value |
|-----|-------|
| `NODE_ENV` | `production` |
| `JWT_SECRET` | `your-secret-key-12345` (随意设置一个复杂密钥) |

#### 2.7 配置存储（重要！）

因为使用 SQLite 数据库，需要配置持久化存储：

1. 点击 **Volumes** 标签
2. 点击 **Add Volume**
3. 设置：
   - **Mount Path**: `/app/database.sqlite`
   - **Size**: `1 GB`
4. 点击 **Save**

#### 2.8 开始部署

点击 **Deploy**，等待构建完成（约 3-5 分钟）

---

### 3. 获取访问链接

部署成功后，Zeabur 会分配一个域名，格式类似：

```
https://english-learning-xxxx.zeabur.app
```

在 **Domains** 标签可以查看完整链接。

把这个链接分享给别人就可以访问了！

---

### 4. (可选) 绑定自定义域名

1. 在 **Domains** 标签点击 **Add Domain**
2. 输入你的域名
3. 按提示配置 DNS CNAME 记录

---

## 费用说明

- Zeabur 有免费额度（每月 $5）
- 超出后按实际使用量计费
- 小型应用通常每月 $5-10 足够

---

## 验证部署

部署完成后：

1. 访问分配的域名
2. 测试登录/注册功能
3. 测试课程学习功能
4. 检查验证码邮件功能（如果配置了）

---

## 故障排查

### 构建失败

检查日志，常见问题：
- 依赖安装失败 → 检查 package.json
- TypeScript 编译错误 → 运行 `npm run build` 本地测试

### 服务启动失败

- 检查环境变量是否配置
- 检查端口是否正确（3001）
- 查看日志中的错误信息

### 数据库问题

- 确保持久化存储已配置
- 检查数据库文件路径

---

## 其他部署平台

如果 Zeabur 不满意，还可以考虑：

- **Vercel** - 前端托管（需要分离后端）
- **Netlify** - 前端托管
- **Railway** - 全栈托管（需要 GitHub）
- **Fly.io** - 全栈托管
- **阿里云/腾讯云** - 传统云服务器

---

## 技术支持

遇到问题可以查看：
- Zeabur 文档：https://docs.zeabur.com
- Zeabur Discord 社区
