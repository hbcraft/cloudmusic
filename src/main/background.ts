'use strict'

import { app, protocol, BrowserWindow } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import installExtension, { VUEJS_DEVTOOLS } from 'electron-devtools-installer'
import appIcon from './tray'
import mainWindowIpc from './ipc/mainWindow'

const isDevelopment = process.env.NODE_ENV !== 'production'

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win: BrowserWindow | null
// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])

// 创建主窗口事件
function createWindow() {
  // 设置窗口属性
  win = new BrowserWindow({
    width: 1022, // 宽度
    minWidth: 1022, // 最小宽度
    height: 670, // 高度
    minHeight: 670, // 最小高度
    frame: false, // 无边框窗口
    webPreferences: {
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      // 启用node集成
      nodeIntegration: (process.env.ELECTRON_NODE_INTEGRATION as unknown) as boolean,
      // nodeIntegration: true
    }
  })

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // 在使用webpack-dev-server时使用url加载窗口内容
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL as string)
    // 测试模式自动打开devtools
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    // 在非开发模式中使用文件加载
    win.loadURL('app://./index.html')
  }

  // 将主窗口对象传入系统托盘模块
  appIcon(win)
  // 将主窗口对象传入主窗口ipc模块
  mainWindowIpc(win)

  // 当主窗口关闭是清除窗口对象，因为本应用可以口泰运行，所以注释掉
  // win.on('closed', () => {
  //   win = null
  // })
}

// 关闭所有窗口后退出。因为本应用可以口泰运行，所以注释掉
// app.on('window-all-closed', () => {
//   // On macOS it is common for applications and their menu bar
//   // to stay active until the user quits explicitly with Cmd + Q
//   if (process.platform !== 'darwin') {
//     app.quit()
//   }
// })

// 当Electron准备完成时将调用此方法
// 初始化并准备创建浏览器窗口
// 有些API仅在此事件发生后才能使用。
app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // 安装 Vue Devtools
    try {
      await installExtension(VUEJS_DEVTOOLS)
    } catch (e) {
      console.error('Vue Devtools安装失败:', e.toString())
    }
  }
  // 创建窗口
  createWindow()
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}
