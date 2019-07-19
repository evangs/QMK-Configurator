const rimraf = require('rimraf')
const { resolve, join } = require('path')
const fixPath = require('fix-path')
const log = require('electron-log')
const electron = require('electron')
const isDev = require('electron-is-dev')
const { exec } = require('child_process')
const firstRun = require('electron-first-run')
const { autoUpdater } = require('electron-updater')
const { setupFirmware, buildFirmware } = require('../server/src/firmware')

// Fix the path
fixPath()

// Set log level
log.transports.file.level = 'info'

// Electron window
const app = electron.app
const BrowserWindow = electron.BrowserWindow

// DFU
const HEX_BASE = resolve(__dirname, '..', 'server', 'qmk_firmware')
const DFU_SOURCE = resolve(__dirname, '..', 'server', 'dfu-programmer')

if (firstRun()) {
  const { platform } = process
  switch (platform) {
    case 'darwin':
    case 'linux': {
      (async function () {
        try {
          const dfuInstalled = await checkForDFU()
          if (!dfuInstalled) {
            log.info('installing dfu-programmer')
            await configureDFU()
            await makeDFU()
            await installDFU()
            log.info('dfu-programmer installed')
          }
        } catch (err) {
          log.error(err)
        }
      })()
      break
    }
    default:
      // NO-OP
  }
}

let mainWindow

const WINDOW_CONFIG = {
  width: 1920,
  height: 1080,
  titleBarStyle: 'hiddenInset',
  webPreferences: {
    nodeIntegration: true
  }
}

function createWindow() {
  autoUpdater.checkForUpdatesAndNotify()
  mainWindow = new BrowserWindow(WINDOW_CONFIG)
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${resolve(__dirname, '../build/index.html')}`)
  mainWindow.on('closed', () => mainWindow = null)
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  app.quit()
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

electron.ipcMain.on('flash-firmware', async (event, arg) => {
  const { config, rules, configKeymap, keymap, indicators } = JSON.parse(arg)
  const { platform } = process

  switch (platform) {
    // Darwin and linux can build the firmware locally
    // Windows can not. Have to generate the hex on the server.
    case 'darwin':
    case 'linux': {

      let dir = ''
      let hexFile = ''
      try {
        // Setup firmware source
        dir = await setupFirmware(config, rules, configKeymap, keymap, indicators)
        log.info('firmware setup')
        // Build firmware
        await buildFirmware(dir)
        // Flash Firmware
        hexFile = `${dir}_default.hex`
        log.info(dir)
        log.info(hexFile)

        log.info('erasing firmware')
        await eraseFirmware()
        log.info('firmware erased')
        log.info('flashing firmware')
        await flashFirmware(hexFile)
        log.info('firmware flashed')
        log.info('starting firmware')
        await startFirmware()
        log.info('firware started')
        // Send success response
        log.info('firmware flash complete')
        event.sender.send('flash-firmware-response', JSON.stringify({
          ok: true,
          message: 'Firmware flashed successfully.'
        }))
        // TODO: Clean up build files
        rimraf(join(HEX_BASE, 'keyboards', dir), () => {})
        rimraf(join(HEX_BASE, '.build', `*${dir}*`), () => {})
        // Clean up hex file
        rimraf(join(HEX_BASE, hexFile), () => {})
      } catch (err) {
        // Send down error
        log.error(err)
        event.sender.send('flash-firmware-response', JSON.stringify({
          ok: false,
          message: 'No device found. Did you push the reset button on your keyboard?'
        }))
      }
      break
    }
    // Get the hex file from server since you have to jump through flaming
    // hoops to get qmk to work on windows
    case 'win32':
    default:
      // NO-OP
  }
})

function checkForDFU () {
  return new Promise(resolve => {
    exec('which dfu-programmer', (err, stdout) => {
      if (err) {
        return resolve(false)
      }
      if (stdout) {
        return resolve(true)
      }
      return resolve(false)
    })
  })
}

function configureDFU () {
  return new Promise((resolve, reject) => {
    exec('./configure', { cwd: DFU_SOURCE }, err => {
      if (err) {
        return reject(err)
      }
      return resolve()
    })
  })
}

function makeDFU () {
  return new Promise((resolve, reject) => {
    exec('make', { cwd: DFU_SOURCE }, err => {
      if (err) {
        return reject(err)
      }
      return resolve()
    })
  })
}

function installDFU () {
  return new Promise((resolve, reject) => {
    exec('make install', { cwd: DFU_SOURCE }, err => {
      if (err) {
        return reject(err)
      }
      return resolve()
    })
  })
}

function eraseFirmware () {
  return new Promise((resolve, reject) => {
    exec('dfu-programmer atmega32u4 erase --force', (err, stdout) => {
      if (err) {
        return reject(err)
      }
      return resolve()
    })
  })
}

function flashFirmware (hexFile) {
  return new Promise((resolve, reject) => {
    exec(`dfu-programmer atmega32u4 flash ${hexFile}`, { cwd: HEX_BASE }, (err, stdout) => {
      if (err) {
        return reject(err)
      }
      return resolve()
    })
  })
}

function startFirmware () {
  return new Promise((resolve, reject) => {
    exec(`dfu-programmer atmega32u4 start`, (err, stdout) => {
      if (err) {
        return reject(err)
      }
      return resolve()
    })
  })
}
