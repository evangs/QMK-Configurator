import { ipcRenderer } from 'electron'

export const flashFirmware = (data) => {
  ipcRenderer.send('flash-firmware', data)
}

export const bindEvents = () => {
  ipcRenderer.on('flash-firmware-response', (event, arg) => {
    this.setState({ buildInProgress: false })
  })
}
