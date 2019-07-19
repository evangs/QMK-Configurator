export const isElectron = () => window && window.process && window.process.type
export const isWindows = () => window && window.process && window.process.platform === 'win32'
export const isMac = () => window && window.process && window.process.platform === 'darwin'
export const isLinux = () => window && window.process && window.process.platform === 'linux'

export const Electron = (props) => {
  return isElectron() ? props.children : ''
}

export const NotElectron = (props) => {
  return !isElectron() ? props.children : ''
}

export const Windows = (props) => {
  return isWindows() ? props.children : ''
}

export const Mac = (props) => {
  return isMac() ? props.children : ''
}

export const Linux = (props) => {
  return isLinux() ? props.children : ''
}
