import { BrowserWindow } from 'electron'
import config from 'config'

let window = null
/* moved to config
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`
*/

const init = (user) => {
  /**
   * Initial window options
   */
  const windowSettings = {}

  switch (process.platform) {
    case 'darwin': {
      windowSettings.titleBarStyle = 'hidden-inset'
      break
    }
    case 'win32':
      break
    case 'freebsd':
    case 'linux':
    case 'sunos':
      break
  }
  window = new BrowserWindow(windowSettings)

  window.loadURL(`${config.electron.WIN_URL}/#/main`)

  window.once('on-ready-show', () => {
    window.show()
  })

  window.on('closed', () => {
    window = null
  })

  if (user) window.user = user
}

const hide = () => {
  if (!window) return
  window.hide()
}

export default {
  init,
  window,
  hide
}
