/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
module.exports = {
  // 插件配置
  pluginOptions: {
    // 全局less变量
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/static/common.less')
      ]
    }
  }
}
