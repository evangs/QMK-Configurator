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

  const layouts = get(activeBoard, 'layouts') || config[activeBoard].layouts
  const layers = get(activeBoard, 'layers') || config[activeBoard].layers

  const activeLayout = localStorage.getItem('activeLayout') || layouts[0].id
  const activeLayer = localStorage.getItem('activeLayer') || layers[0].id
  const activeKeyType = localStorage.getItem('activeKeyType') || 'normal'

  const zones = get(activeBoard, 'zones') || config[activeBoard].zones
  const settings = get(activeBoard, 'advanced') || config[activeBoard].config
  const rules = get(activeBoard, 'rules') || config[activeBoard].rules
  const indicators = get(activeBoard, 'indicators') || config[activeBoard].indicators || []

  return {
    lastSave: getLastSave({
      layouts,
      layers,
      zones,
      settings,
      rules,
      indicators
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
    rules,
    indicators
  }
}


export const getLastSave = (state) => {
  const {
    layouts,
    layers,
    zones,
    settings,
    rules,
    indicators
  } = state
  return JSON.stringify({
    layouts,
    layers,
    zones,
    settings,
    rules,
    indicators
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
