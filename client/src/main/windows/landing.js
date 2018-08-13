import { BrowserWindow } from 'electron'
import config from 'config'

let window = null
/* moved to config
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`
*/

const init = () => {
  if (window) {
    return window.show()
  }
  /**
   * Initial window options
   */
  const windowSettings = {
    height: 580,
    width: 1050,
    resizable: false,
    useContentSize: true,
    titleBarStyle: 'hidden',
    frame: false,
    webPreferences: {
      webSecurity: false
    },
    scollable: false
  }

  switch (process.platform) {
    case 'darwin': {
      windowSettings.height = 580
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

  window.loadURL(config.electron.WIN_URL)

  window.once('on-ready-show', () => {
    window.show()
  })

  window.on('closed', () => {
    window = null
  })
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
