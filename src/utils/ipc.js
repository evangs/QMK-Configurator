import { ipcRenderer } from 'electron'
import Alert from 'react-s-alert'

export const flashFirmware = data => {
  ipcRenderer.send('flash-firmware', data)
}

export function bindEvents () {
  ipcRenderer.on('flash-firmware-response', (event, arg) => {
    const { ok, message } = JSON.parse(arg)
    if (ok) {
      Alert.success(message)
    } else {
      Alert.error(message)
    }
    this.setState({ buildInProgress: false })
  })
}
