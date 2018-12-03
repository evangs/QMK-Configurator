import { get, set } from '../utils/localstorage'

function mapFiles(context) {
  const keys = context.keys()
  const values = keys.map(context);
  return keys.reduce((accumulator, key, index) => ({
    ...accumulator,
    [key.replace('./', '').replace('.js', '')]: values[index].default,
  }), {});
}

export const config = mapFiles(require.context('./boards', true, /\.js$/))


export const initialState = (activeBoard) => {

  activeBoard = activeBoard || localStorage.getItem('activeBoard') || Object.keys(config)[0]
  const activeLayer = localStorage.getItem('activeLayer') || 0
  const activeKeyType = localStorage.getItem('activeKeyType') || 'normal'
  const activeLayout = localStorage.getItem('activeLayout') || 0

  const layouts = get(activeBoard, 'layouts') || config[activeBoard].layouts
  const layers = get(activeBoard, 'layers') || config[activeBoard].layers

  const zones = get(activeBoard, 'zones') || config[activeBoard].zones
  const settings = get(activeBoard, 'advanced') || config[activeBoard].config
  const rules = get(activeBoard, 'rules') || config[activeBoard].rules

  return {
    lastSave: JSON.stringify(layers),
    boards: Object.keys(config),
    activeBoard,
    activeLayer,
    activeKeyType,
    activeLayout,
    layouts,
    layers,
    zones,
    settings,
    rules
  }
}
