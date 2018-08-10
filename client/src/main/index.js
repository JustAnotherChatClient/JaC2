'use strict'

import { app, BrowserWindow } from 'electron'
// BrowserWindow

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  /**
   * Initial window options
   */
  const windowSettings = {
    height: 615,
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
  mainWindow = new BrowserWindow(windowSettings)

  mainWindow.loadURL(winURL)

  // mainWindow.setBounds

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
