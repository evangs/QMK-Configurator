const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')
const isDev = require('electron-is-dev')

let mainWindow

const WINDOW_CONFIG = {
  width: 1920,
  height: 1080,
  titleBarStyle: 'hiddenInset'
}

function createWindow() {
  mainWindow = new BrowserWindow(WINDOW_CONFIG)
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`)
  mainWindow.on('closed', () => mainWindow = null)
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


// Attach listener in the main process with the given ID
electron.ipcMain.on('flash-firmware', (event, arg) => {
  console.log(arg)
  // Return some data to the renderer process with the mainprocess-response ID
  event.sender.send('flash-firmware-response', { hi: 'hi' })
});
