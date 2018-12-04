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
  const activeLayer = localStorage.getItem('activeLayer') || '0'
  const activeLayout = localStorage.getItem('activeLayout') || '0'
  const activeKeyType = localStorage.getItem('activeKeyType') || 'normal'

  const layouts = get(activeBoard, 'layouts') || config[activeBoard].layouts
  const layers = get(activeBoard, 'layers') || config[activeBoard].layers

  const zones = get(activeBoard, 'zones') || config[activeBoard].zones
  const settings = get(activeBoard, 'advanced') || config[activeBoard].config
  const rules = get(activeBoard, 'rules') || config[activeBoard].rules

  return {
    lastSave: getLastSave({
      layouts,
      layers,
      zones,
      settings,
      rules
    }),
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


export const getLastSave = (state) => {
  const {
    layouts,
    layers,
    zones,
    settings,
    rules
  } = state
  return JSON.stringify({
    layouts,
    layers,
    zones,
    settings,
    rules
  })
}

export const persistState = state => {
  const {
    activeBoard,
    activeLayout,
    activeLayer,
    layouts,
    layers,
    zones,
    settings,
    rules
  } = state


  localStorage.setItem('activeBoard', activeBoard)
  localStorage.setItem('activeLayout', activeLayout)
  localStorage.setItem('activeLayer', activeLayer)

  set(activeBoard, 'layouts', layouts)
  set(activeBoard, 'layers', layers)

  set(activeBoard, 'zones', zones)
  set(activeBoard, 'advanced', settings)
  set(activeBoard, 'rules', rules)
}
