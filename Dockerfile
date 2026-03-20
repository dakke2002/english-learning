# 多阶段构建 - 前端
FROM node:20-alpine AS frontend-builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build

# 生产阶段
FROM node:20-alpine
WORKDIR /app

# 安装后端依赖
COPY package*.json ./
RUN npm install --production

# 复制所有源码
COPY . ./

# 复制前端构建产物到 public 目录
COPY --from=frontend-builder /app/dist ./public

# 暴露端口
EXPOSE 3001

# 启动服务
CMD ["node", "server.js"]
