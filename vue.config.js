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
      mainProcessFile: 'src/main/background.ts', // 入口文件
      mainProcessWatch: ['src/main/**/*'], // 监听文件更改
      builderOptions: { // electron-builder配置
        appId: 'cn.hbcraft.cloudmusic',
        productName: '',
        files: [
          '**/*',
          'icon.ico',
          'icon-small.ico'
        ],
        icon: 'public/icon.ico',
        win: {
          icon: 'public/icon.ico'
        },
        nsis: {
          oneClick: false,
          perMachine: true,
          allowToChangeInstallationDirectory: true,
          uninstallDisplayName: '卸载网易云音乐',
          shortcutName: '网易云音乐'
        }
      }
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
