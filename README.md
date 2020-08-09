# 网易云音乐windows桌面客户端（开发中）

## 介绍

这是一款使用vue和electron搭建的高仿网易云windows桌面客户端

使用vue-cli4创建项目

启用的选项

* vuex
* router （hash模式）
* typescript
* eslint (标准配置)
* babel
* CSS Pre-processors （less）

添加的vue-cli插件(直接在项目根目录使用`vue add 插件名`添加)：

- electron-builder

## 怎么运行

### 一、安装yarn包管理器

```bash
npm i -g yarn # 全局安装yarn包管理器
```

### 二、安装依赖

```bash
yarn | yarn install # 加不加install都可以
```

### 三、运行命令

```bash
yarn electron:serve # electron开发模式，包含热重载
yarn electron:build # electron-build打包
yarn serve # vue开发环境，使用浏览器预览，包含热重载
yarn build # vue项目打包
...
```

