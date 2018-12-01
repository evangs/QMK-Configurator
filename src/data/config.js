function mapFiles(context) {
  const keys = context.keys();
  const values = keys.map(context);
  return keys.reduce((accumulator, key, index) => ({
    ...accumulator,
    [key.replace('./', '').replace('.js', '')]: values[index].default,
  }), {});
}

export const config = mapFiles(require.context('./boards', true, /\.js$/))
// TODO: add localstorage
const activeBoard = Object.keys(config)[0]
const activeLayer = 0
const activeKeyType = 'normal'
const layoutName = 'Default'
const keymap = config[activeBoard].keymap()
const layers = config[activeBoard].layers()
const zones = config[activeBoard].zones
const advanced = config[activeBoard].config

export const initialState = {
  boards: Object.keys(config),
  activeBoard,
  activeLayer,
  activeKeyType,
  layoutName,
  layers,
  keymap,
  zones,
  advanced
}
