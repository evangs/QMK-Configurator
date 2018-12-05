import { ipcRenderer } from 'electron'

export const flashFirmware = (data) => {
  ipcRenderer.send('flash-firmware', data)
}

ipcRenderer.on('flash-firmware-response', (event, arg) => {
  console.log(arg)
})
