/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
module.exports = {
  pages: {
    index: {
      entry: 'src/render/main.ts'
    }
  },
  // 插件配置
  pluginOptions: {
    // 全局less变量
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/render/static/common.less')
      ]
    },
    electronBuilder: {
      nodeIntegration: true, // 启用node集成
      mainProcessFile: 'src/main/background.ts'
    }
  },
  // 配置webpack
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/render/')
      }
    }
  }
}
