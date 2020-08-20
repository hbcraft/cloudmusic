// 系统托盘菜单
import { Tray, Menu, app, BrowserWindow } from 'electron'
import { loadFile } from './common'
// 菜单项
let appIcon: Tray | null = null
let trayMenu: Menu = Menu.buildFromTemplate([
  {
    label: '退出',
    click() {
      app.exit()
    }
  }
])
export default function (win: BrowserWindow) {
  // 设置菜单图标
  appIcon = new Tray(loadFile('icon-small.ico'))
  // 设置鼠标指向托盘图标时显示的文字
  appIcon.setToolTip('网易云音乐')
  // 设置托盘右键菜单
  appIcon.setContextMenu(trayMenu)

  // 点击菜单栏图标时触发
  appIcon.on('click', () => {
    // 如果窗口隐藏则显示
    if (!win.isVisible()) return win.show()
    // 如果窗口最小化则还原
    if (win.isMinimized()) return win.restore()
    // 窗口聚焦
    if (!win.isFocused()) return win.focus()
  })
}
