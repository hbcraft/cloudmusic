import { ipcMain, BrowserWindow } from 'electron'

/**
 * 加载此文件时请调用默认导出的方法并传入主窗口对象
 * @param win 主窗口
 */
export default function (win: BrowserWindow) {
  /**
   * IPC
   */
  // 监听主窗口隐藏事件
  ipcMain.on('hide', () => {
    win?.hide()
  })

  // 监听主窗口最小化事件
  ipcMain.on('minimized', () => {
    win?.minimize()
  })

  // 监听主窗口最大化事件
  ipcMain.on('maximized', () => {
    if (win?.isMaximized()) {
      win.unmaximize()
    } else {
      win?.maximize()
    }
  })

  /**
   * eventListener
   */
  win.on('maximize', () => {
    win?.webContents.send('isMaximized', true)
  })
  win.on('unmaximize', () => {
    win?.webContents.send('isMaximized', false)
  })
}
