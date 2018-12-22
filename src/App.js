import React, { Component } from 'react'
import { config, initialState, getLastSave, persistState } from './data/config'
import { v4 } from 'uuid'
import Alert from 'react-s-alert'
import {
  Container,
  Segment,
  Modal,
  Button,
  Icon,
  Header,
  Loader,
  Dimmer,
  Responsive
} from 'semantic-ui-react'

import Canvas from './components/canvas'
import Nav from './components/nav'
import KeyTypeMenu from './components/key-type-menu'
import Settings from './components/settings'
import { isElectron } from './utils/env'

import 'react-s-alert/dist/s-alert-default.css'
import 'react-s-alert/dist/s-alert-css-effects/jelly.css'
import './theme/semantic.less'
import './shake.scss'

let flashFirmware
let bindEvents
if (isElectron()) {
  const ipc = require('./utils/ipc')
  flashFirmware = ipc.flashFirmware
  bindEvents = ipc.bindEvents
} else {
  flashFirmware = () => {}
  bindEvents = () => {}
}

const API_URL = 'http://localhost:8000'

export default class extends Component {

  constructor (props) {
    super(props)
    this.state = Object.assign({}, {
      fixed: false,
      dirty: false,
      layersVisible: false,
      buildInProgress: false,
      buildMessage: '',
      nextAction: null,
      exportLink: '',
      exportFileName: ''
    }, initialState())

    // Bind event handlers
    this.updateZone = this._updateZone.bind(this)
    this.toggleLayers = this._toggleLayers.bind(this)
    this.setActiveKeyType = this._setActiveKeyType.bind(this)
    this.selectBoard = this._selectBoard.bind(this)
    this.selectLayer = this._selectLayer.bind(this)
    this.selectLayout = this._selectLayout.bind(this)
    this.setKey = this._setKey.bind(this)
    this.newLayout = this._newLayout.bind(this)
    this.newLayer = this._newLayer.bind(this)
    this.cloneLayout = this._cloneLayout.bind(this)
    this.cloneLayer = this._cloneLayer.bind(this)
    this.deleteLayer = this._deleteLayer.bind(this)
    this.sortLayers = this._sortLayers.bind(this)
    this.deleteLayout = this._deleteLayout.bind(this)
    this.updateSetting = this._updateSetting.bind(this)
    this.editLayer = this._editLayer.bind(this)
    this.editLayout = this._editLayout.bind(this)
    this.addIndicator = this._addIndicator.bind(this)
    this.updateIndicator = this._updateIndicator.bind(this)
    this.deleteIndicator = this._deleteIndicator.bind(this)
    this.exportLayout = this._exportLayout.bind(this)
    this.exportLayer = this._exportLayer.bind(this)
    this.importJson = this._importJson.bind(this)
    this.save = this._save.bind(this)
    this.reset = this._reset.bind(this)
    this.revert = this._revert.bind(this)
    this.download = this._download.bind(this)
    this.flash = this._flash.bind(this)

    // Bind electron event handlers
    bindEvents.call(this)
  }

  render () {
    const {
      fixed,
      layersVisible,
      boards,
      activeBoard,
      activeLayout,
      activeLayer,
      activeKeyType,
      nextAction,
      layouts,
      layers,
      zones,
      dirty,
      settings,
      rules,
      indicators,
      buildInProgress,
      buildMessage
    } = this.state

    return (
      <div>
        <Responsive maxWidth={768}>
          <Dimmer active>
            <div style={{ textAlign: 'center', marginBottom: 20 }}>
              <Icon.Group size='huge'>
                <Icon size='big' name='expand' />
                <Icon name='expand arrows alternate' />
              </Icon.Group>
            </div>
            <p style={{ marginBottom: 5 }}>This application requires a little more space.</p>
            <p>Please expand your window.</p>
          </Dimmer>
        </Responsive>
        <Responsive minWidth={769}>
          <Dimmer active={buildInProgress}>
            <Loader indeterminate>{buildMessage}</Loader>
          </Dimmer>
          <Segment
            inverted
            textAlign='center'
            style={{
              padding: 0,
              margin: 0
            }}
            vertical
          >
            <Alert
              effect='jelly'
              position='bottom-right'
              timeout={7000}
              stack={{ limit: 3 }}
            />
            <Nav
              fixed={fixed}
              boards={boards}
              activeBoard={activeBoard}
              activeLayout={activeLayout}
              layouts={layouts}
              layers={layers}
              dirty={dirty}
              newLayout={this.newLayout}
              newLayer={this.newLayer}
              selectBoard={this.selectBoard}
              deleteLayout={this.deleteLayout}
              selectLayout={this.selectLayout}
              exportLayout={this.exportLayout}
              importJson={this.importJson}
              cloneLayout={this.cloneLayout}
              save={this.save}
              download={this.download}
              flash={this.flash}
              buildInProgress={buildInProgress}
            />
            <div style={{ paddingTop: 60 }} />
            <Canvas
              layers={layers}
              layouts={layouts}
              zones={zones}
              indicators={indicators}
              activeBoard={activeBoard}
              activeLayout={activeLayout}
              activeLayer={activeLayer}
              activeKeyType={activeKeyType}
              layersVisible={layersVisible}
              toggleLayers={this.toggleLayers}
              setKey={this.setKey}
              selectLayer={this.selectLayer}
              cloneLayer={this.cloneLayer}
              deleteLayer={this.deleteLayer}
              editLayout={this.editLayout}
              editLayer={this.editLayer}
              exportLayer={this.exportLayer}
              sortLayers={this.sortLayers}
              addIndicator={this.addIndicator}
              updateIndicator={this.updateIndicator}
              deleteIndicator={this.deleteIndicator}
            />
          </Segment>

          <Container>
            <KeyTypeMenu
              setActiveKeyType={this.setActiveKeyType}
              activeKeyType={activeKeyType}
            />
            <Settings
              activeKeyType={activeKeyType}
              zones={zones}
              settings={settings}
              rules={rules}
              updateZone={this.updateZone}
              updateSetting={this.updateSetting}
              reset={this.reset}
              revert={this.revert}
            />

            <Modal open={Boolean(nextAction)} basic>
              <Header
                content='You have unsaved changes. Would you like to save or discard them?'
                style={{ marginTop: 50 }} />
              <div style={{ position: 'absolute', right: '1rem', top: 0 }}>
                <Button icon inverted basic color='red' onClick={() => this.setState({ nextAction: null })}>
                  <Icon name='close' />
                </Button>
              </div>
              <Modal.Actions>
                <Button
                  basic
                  inverted
                  color='red'
                  onClick={nextAction}>
                  <Icon name='cancel' /> Discard
                </Button>
                <Button
                  basic
                  inverted
                  color='green'
                  onClick={() => {
                    this.save()
                    this.setState({ nextAction: null })
                  }}>
                  <Icon name='save' /> Save
                </Button>
              </Modal.Actions>
            </Modal>
          </Container>
        </Responsive>
      </div>
    )
  }

  checkSaveState () {
    const { lastSave, dirty } = this.state
    const d = lastSave !== getLastSave(this.state)
    if(dirty !== d) {
      this.setState({ dirty: d })
    }
  }

  _toggleLayers () {
    this.setState({ layersVisible: !this.state.layersVisible })
  }

  _selectBoard (e, data) {
    const { lastSave } = this.state
    if (lastSave !== getLastSave(this.state)) {
      this.setState({ nextAction: () => {
        this.setState(Object.assign({}, initialState(data.value), {
          nextAction: null,
          dirty: false
        }))
      }})
    } else {
      this.setState(Object.assign({}, initialState(data.value), {
        nextAction: null,
        dirty: false
      }))
    }
  }

  _setActiveKeyType (activeKeyType) {
    this.setState({ activeKeyType })
  }

  _selectLayer (activeLayer) {
    this.setState({ activeLayer })
  }

  _selectLayout (activeLayout) {
    this.setState({ activeLayout })
  }

  _setKey (key) {
    const {
      layers,
      activeLayer
    } = this.state

    let clone = layers.slice(0)
    const keys = clone[activeLayer].keys
    const newKeys = {}

    Object.keys(keys).forEach(r => {
      const ks = keys[r]
      newKeys[r] = ks.map(k => {
        if(Array.isArray(k)) {
          return k.map(j => j.id === key.id ? key : j)
        }
        return k.id === key.id ? key : k
      })
    })

    clone[activeLayer].keys = newKeys

    this.setState({ layers: clone }, this.checkSaveState)
  }

  _newLayout (name) {
    if (!name) {
      name = 'Layout (New)'
    }
    const { activeBoard, layouts, layers } = this.state

    const layoutId = v4()
    const layerId = v4()

    const layout = {
      id: layoutId,
      name
    }
    const clonedLayouts = layouts.slice(0)
    clonedLayouts.push(layout)

    const layer = {
      id: layerId,
      layoutId: layoutId,
      name: 'Default',
      keys: config[activeBoard].keySections[0]
    }

    const clonedLayers = layers.slice(0)
    clonedLayers.push(layer)

    this.setState({
      activeLayout: layoutId,
      activeLayer: layerId,
      layouts: clonedLayouts,
      layers: clonedLayers
    }, this.checkSaveState)

    Alert.success(`Layout ${layout.name} created successfully.`)
  }

  _updateZone (e, data) {
    const { zones } = this.state
    let clone = zones.slice(0)
    clone = clone.map(z => {
      if (z.label === data.placeholder) {
        z.value = data.value
      }
      return z
    })

    this.setState({ zones: clone }, this.checkSaveState)
  }

  _updateSetting (e, data) {
    switch (data.kind) {
      case 'config':{
        const settings = Object.assign({}, this.state.settings)
        if (data.type === 'checkbox') {
          settings[data.setting] = data.checked
        } else {
          settings[data.setting] = parseInt(data.value, 10)
        }
        this.setState({ settings }, this.checkSaveState)
        break
      }
      case 'rule': {
        const rules = Object.assign({}, this.state.rules)
        if (data.type === 'checkbox') {
          rules[data.setting] = data.checked
        } else {
          rules[data.setting] = parseInt(data.value, 10)
        }
        this.setState({ rules }, this.checkSaveState)
        break
      }
      default:
        // NO-OP
    }
  }

  _newLayer (name) {
    if (!name) {
      name = `Layer (New)`
    }

    const { activeLayout, activeBoard } = this.state
    const layers = this.state.layers.slice(0)
    const layerId = v4()
    const layer = {
      id: layerId,
      layoutId: activeLayout,
      name,
      keys: config[activeBoard].keySections[0]
    }
    layers.push(layer)
    this.setState({ layers, activeLayer: layerId }, this.checkSaveState)
    Alert.success(`Layer ${layer.name} created successfully.`)
  }

  _cloneLayout (id, name) {
    const layouts = this.state.layouts.slice(0)
    const layout = Object.assign({}, this.state.layouts.slice(0).find(l => l.id === id))
    const layoutId = v4()
    const layerId = v4()

    if (!name) {
      name = `${layout.name} (Clone)`
    }
    // Set new layout props
    layout.id = layoutId
    layout.immutable = false
    if (name) {
      layout.name = name
    }

    layouts.push(layout)

    let layers = this.state.layers.slice(0)
    const filtered = layers.filter(l => l.layoutId === id)
    const mapped = filtered.map((l, i) => {
      const layer = Object.assign({}, l)
      layer.layoutId = layoutId
      layer.id = layerId
      return layer
    })

    layers = layers.concat(mapped)

    this.setState({
      activeLayout: layoutId,
      activeLayer: layerId,
      layouts,
      layers
    }, this.checkSaveState)

    Alert.success(`Layout ${layout.name} cloned successfully.`)

  }

  _cloneLayer (name, data) {
    if (!name) {
      name = `${data.name} (Clone)`
    }
    const layers = this.state.layers.slice(0)
    const id = v4()
    const layer = Object.assign({}, data, { name, id })
    layers.push(layer)
    this.setState({ layers, activeLayer: id }, this.checkSaveState)
    Alert.success(`Layer ${layer.name} cloned successfully.`)
  }

  _deleteLayer (layer) {
    let activeLayer = this.state.activeLayer
    const layers = this.state.layers

    if (activeLayer === layer.id) {
      activeLayer = layers[0].id
    }

    if (this.state.layers.length > 1) {
      const layers = this.state.layers.slice(0).filter(l => l.id !== layer.id)
      this.setState({ layers, activeLayer }, this.checkSaveState)
      Alert.success(`Layer ${layer.name} deleted successfully.`)
    } else {
      Alert.error(`Can not delete last layer. Create a new one first.`)
    }
  }

  _editLayer (name, layer) {
    if (!name) {
      Alert.error(`Name required to update layer.`)
      return
    }
    const layers = this.state.layers.slice(0).map(l => {
      if (l.id === layer.id) {
        l.name = name
      }
      return l
    })
    this.setState({ layers }, this.checkSaveState)
    Alert.success(`Layer ${name} updated successfully.`)
  }

  _sortLayers (layers) {
    this.setState({ layers })
  }

  _editLayout (name, layout) {
    if (!name) {
      Alert.error(`Name required to update layout.`)
      return
    }
    const layouts = this.state.layouts.slice(0).map(l => {
      if (l.id === layout.id) {
        l.name = name
      }
      return l
    })
    this.setState({ layouts }, this.checkSaveState)
    Alert.success(`Layout ${name} updated successfully.`)
  }

  _deleteLayout (layout) {
    const layouts = this.state.layouts.slice(0).filter(l => l.id !== layout.id)

    const activeLayout = this.state.layouts.length - 2
    const activeLayer = this.state.layers[0].id

    const layers = this.state.layers.slice(0).filter(l => l.layoutId !== layout.id)

    this.setState({ layouts, layers, activeLayout, activeLayer }, this.checkSaveState)
    Alert.success(`Layer ${layout.name} deleted successfully.`)
  }

  _addIndicator (id, indicator) {
    const indicators = this.state.indicators.slice(0)
    indicators[id].push(indicator)
    this.setState({ indicators }, this.checkSaveState)
  }

  _updateIndicator (id, indicator) {
    let indicators = this.state.indicators.slice(0)

    console.log(indicators, id, indicator)

    indicators[id] = indicators[id].map(d => {
      if (d.action === indicator.action) {
        d = indicator
      }
      return d
    })
    this.setState({ indicators }, this.checkSaveState)
  }

  _deleteIndicator (id) {
    const indicators = this.state.indicators.slice(0)
    indicators[id].splice(id, 1)
    this.setState({ indicators }, this.checkSaveState)
  }

  _exportLayout (id) {
    const { activeBoard } = this.state

    const layout = this.state.layouts.find(l => l.id === id)
    layout.immutable = false
    delete layout.id

    let layers = this.state.layers.slice(0)
    const filtered = layers.filter(l => l.layoutId === id)
    const mapped = filtered.map((l, i) => {
      const layer = Object.assign({}, l)
      delete layer.layoutId
      delete layer.id
      return layer
    })

    const name = `${activeBoard}-${layout.name.toLowerCase()}-${new Date().getTime()}`
    const data = {
      type: 'layout',
      board: activeBoard,
      data: {
        layout: layout,
        layers: mapped
      }
    }
    downloadObjectAsJson(name, data)
    Alert.success(`Layout ${layout.name} exported as ${name}.`)
  }

  _exportLayer (id) {
    const { activeBoard } = this.state
    const layer = this.state.layers.find(l => l.id === id)
    // Remove ids, they will be recreated on input
    delete layer.layoutId
    delete layer.id
    // Create export
    const name = `${activeBoard}-${layer.name.toLowerCase().replace(' ', '_')}-${new Date().getTime()}`
    const data = {
      board: activeBoard,
      type: 'layer',
      data: layer
    }
    downloadObjectAsJson(name, data)
    Alert.success(`Layer ${layer.name} exported as ${name}.`)
  }

  _importJson (data, name) {
    if (!data) return

    const { activeBoard, activeLayout } = this.state
    const fr = new FileReader()

    fr.onload = (e) => {
      const result = JSON.parse(e.target.result)
      if (!result.type) return
      if (activeBoard !== result.board) {
        Alert.error(`This configuration is for ${result.board}. Currently selected keyboard is ${activeBoard}.`)
        return
      }
      switch (result.type) {
        case 'layout': {
          let { layers, layout } = result.data
          layout.id = v4()
          layers = layers.map(l => {
            l.layoutId = layout.id
            l.id = v4()
            return l
          })

          if (name) {
            layout.name = name
          } else {
            const nameExists = this.state.layouts.find(l => l.name === layout.name)
            if (nameExists) {
              layout.name = `${layout.name} (Copy)`
            }
          }

          const layoutsClone = this.state.layouts.slice(0)
          let layersClone = this.state.layers.slice(0)

          layoutsClone.push(layout)
          layersClone = layersClone.concat(layers)

          this.setState({
            layers: layersClone,
            layouts: layoutsClone,
            activeLayout: layout.id,
            activeLayer: layers[0].id
          }, this.checkSaveState)

          Alert.success(`Layout ${layout.name} imported successfully.`)

          break
        }
        case 'layer': {
          const layer = result.data
          // Add IDs
          layer.layoutId = activeLayout
          layer.id = v4()

          if (name) {
            layer.name = name
          } else {
            const nameExists = this.state.layers.find(l => l.name === layer.name)
            if (nameExists) {
              layer.name = `${layer.name} (Copy)`
            }
          }

          // Push layer
          const layers = this.state.layers.slice(0)
          layers.push(layer)

          this.setState({ layers, activeLayer: layer.id }, this.checkSaveState)

          Alert.success(`Layer ${layer.name} imported successfully.`)

          break
        }
        default:
          // NO-OP
      }
    }

    fr.readAsText(data)
  }

  _save () {
    persistState(this.state)
    const { activeBoard } = this.state
    const lastSave = getLastSave(this.state)
    this.setState({ lastSave }, this.checkSaveState)
    Alert.success(`${config[activeBoard].config.product} configuration saved successfully.`)
  }

  _reset () {
    const { activeBoard } = this.state
    localStorage.removeItem('activeLayout')
    localStorage.removeItem('activeLayer')
    localStorage.removeItem(activeBoard)
    this.setState(initialState(activeBoard))
    Alert.success(`${config[activeBoard].config.product} reset to default factory configuration.`)
  }

  _revert () {
    const { dirty, lastSave, layouts, layers, activeBoard } = this.state
    if (dirty) {
      this.setState(Object.assign({}, {
        activeLayout: layouts[0].id,
        activeLayer: layers[0].id
      }, JSON.parse(lastSave)), this.checkSaveState)
      Alert.success(`${config[activeBoard].config.product} reset to last save.`)
    } else {
      Alert.info(`${config[activeBoard].config.product} is already at last save.`)
    }
  }

  _download () {
    const { activeBoard, layers, zones, settings, rules } = this.state
    this.setState({ buildInProgress: true, buildMessage: 'Downloading Firmware' })

    const fullMap = []
    layers.forEach(l => {
      fullMap.push(config[activeBoard].keymap(l.keys, zones))
    })
    fetch(API_URL, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      redirect: 'follow',
      referrer: 'no-referrer',
      body: JSON.stringify({
        config: settings,
        rules,
        configKeymap: config[activeBoard].configKeymap,
        keymap: fullMap
      })
    })
    .then(res => res.json())
    .then(res => {
      this.setState({ buildInProgress: false, buildMessage: '' })
      document.location.href = res.hex
      Alert.success(`${config[activeBoard].config.product} downloaded as ${res.hex.split('/')[2]}.`)
    })
    .catch(err => {
      this.setState({ buildInProgress: false, buildMessage: '' })
      Alert.error(`Error downloading firmware. Check your internet connection and try again.`)
    })
  }

  _flash () {
    const { activeBoard, layers, zones, settings, rules } = this.state

    this.setState({ buildInProgress: true, buildMessage: 'Flashing Firmware' })

    const fullMap = []
    layers.forEach(l => {
      fullMap.push(config[activeBoard].keymap(l.keys, zones))
    })

    flashFirmware(JSON.stringify({
      config: settings,
      rules,
      configKeymap: config[activeBoard].configKeymap,
      keymap: fullMap
    }))
  }

}

function downloadObjectAsJson (exportName, exportObj) {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj))
  const downloadAnchorNode = document.createElement('a')
  downloadAnchorNode.setAttribute("href",     dataStr)
  downloadAnchorNode.setAttribute("download", exportName + ".json")
  document.body.appendChild(downloadAnchorNode) // required for firefox
  downloadAnchorNode.click()
  downloadAnchorNode.remove()
}
