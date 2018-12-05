export const isElectron = () => window && window.process && window.process.type;
export const isWindows = () => window && window.navigator && window.navigator.platform.indexOf('Win') > -1;
export const isMac = () => window && window.navigator && window.navigator.platform.indexOf('Mac') > -1;
export const isLinux = () => window && window.navigator && window.navigator.platform.indexOf('Linux') > -1;

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
