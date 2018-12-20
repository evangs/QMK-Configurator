const electron = require('electron')
const rimraf = require('rimraf')
const url = require('url')
const { exec } = require('child_process')
const { join } = require('path')
const isDev = require('electron-is-dev')
const firstRun = require('electron-first-run')
const { setupFirmware, buildFirmware } = require('../server/firmware')

const app = electron.app
const BrowserWindow = electron.BrowserWindow

const HEX_BASE = join(__dirname, '..', 'server', 'qmk_firmware')
const DFU_SOURCE = join(__dirname, '..', 'server', 'dfu-programmer')
const DFU_EXE = join(__dirname, '..', 'server')

if (firstRun()) {
  if (process.platform === 'darwin') {
    (async function() {
      try {
        const dfuInstalled = await checkForDFU()
        if (!dfuInstalled) {
          await configureDFU()
          await makeDFU()
          await installDFU()
          console.log('dfu-programmer installed')
        }
      } catch (err) {
        console.error(err)
      }
    })()
  }
}

let mainWindow

const WINDOW_CONFIG = {
  width: 1920,
  height: 1080,
  titleBarStyle: 'hiddenInset'
}

function createWindow() {
  mainWindow = new BrowserWindow(WINDOW_CONFIG)
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${join(__dirname, '../build/index.html')}`)
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


electron.ipcMain.on('flash-firmware', async (event, arg) => {
  const { config, rules, configKeymap, keymap, indicators } = JSON.parse(arg)
  let dir = ''
  let hexFile = ''
  try {
    // Setup firmware source
    dir = await setupFirmware(config, rules, configKeymap, keymap, indicators)
    // Build firmware
    await buildFirmware(dir)
    // Flash Firmware
    hexFile = join(HEX_BASE, `${dir}_default.hex`)
    await eraseFirmware()
    await flashFirmware(hexFile)
    await startFirmware()
    // Send success response
    console.log('firmware flashed successfully')
    event.sender.send('flash-firmware-response', { ok: true })
    // Clean up build files
    rimraf(join(HEX_BASE, 'keyboards', dir), () => {})
    rimraf(join(HEX_BASE, '.build', `*${dir}*`), () => {})
    // Clean up hex file
    rimraf(hexFile, () => {})
  } catch (err) {
    // Send down error
    console.error(err.message)
    event.sender.send('flash-firmware-response', {
      ok: false,
      message: 'No device found. Did you push the reset button on your device?'
    })
    // Clean up build files
    rimraf(join(HEX_BASE, 'keyboards', dir), () => {})
    rimraf(join(HEX_BASE, '.build', `*${dir}*`), () => {})
    // Clean up hex file
    rimraf(hexFile, () => {})
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
    exec('./configure', { cwd: DFU_SOURCE }, (err, stdout) => {
      if (err) {
        return reject(err)
      }
      return resolve()
    })
  })
}

function makeDFU () {
  return new Promise((resolve, reject) => {
    exec('make', { cwd: DFU_SOURCE }, (err, stdout) => {
      if (err) {
        return reject(err)
      }
      return resolve()
    })
  })
}

function installDFU () {
  return new Promise((resolve, reject) => {
    exec('make install', { cwd: DFU_SOURCE }, (err, stdout) => {
      if (err) {
        return reject(err)
      }
      return resolve()
    })
  })
}

function eraseFirmware () {
  return new Promise((resolve, reject) => {
    if (process.platform === 'darwin') {
      exec('dfu-programmer atmega32u4 erase --force', (err, stdout) => {
        if (err) {
          return reject(err)
        }
        return resolve()
      })
    } else {
      exec('dfu-programmer.exe atmega32u4 erase --force', { cwd: DFU_EXE }, (err, stdout) => {
        if (err) {
          return reject(err)
        }
        return resolve()
      })
    }
  })
}

function flashFirmware (hexFile) {
  return new Promise((resolve, reject) => {
    if (process.platform === 'darwin') {
      exec(`dfu-programmer atmega32u4 flash ${hexFile}`, (err, stdout) => {
        if (err) {
          return reject(err)
        }
        return resolve()
      })
    } else {
      exec(`dfu-programmer.exe atmega32u4 flash ${hexFile}`, { cwd: DFU_EXE }, (err, stdout) => {
        if (err) {
          return reject(err)
        }
        return resolve()
      })
    }
  })
}


function startFirmware () {
  return new Promise((resolve, reject) => {
    if (process.platform === 'darwin') {
      exec(`dfu-programmer atmega32u4 start`, (err, stdout) => {
        if (err) {
          return reject(err)
        }
        return resolve()
      })
    } else {
      exec(`dfu-programmer.exe atmega32u4 start`, { cwd: DFU_EXE }, (err, stdout) => {
        if (err) {
          return reject(err)
        }
        return resolve()
      })
    }
  })
}
