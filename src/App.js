import React, { Component } from 'react'
import { config, initialState, getLastSave, persistState } from './data/config'
import { get } from './utils/localstorage'
import { v4 } from 'uuid'
import {
  Container,
  Responsive,
  Segment,
  Visibility,
  Modal,
  Button,
  Icon,
  Header
} from 'semantic-ui-react'


import Canvas from './components/canvas'
import Nav from './components/nav'
import KeyTypeMenu from './components/key-type-menu'
import Settings from './components/settings'
import { isElectron } from './utils/env'
import './theme/semantic.less'
import './shake.scss'

let flashFirmware
if (isElectron()) {
  const ipc = require('./utils/ipc')
  flashFirmware = ipc.flashFirmware
} else {
  flashFirmware = () => {}
}

const API_URL = 'http://qmk.thevankeyboards.com'

export default class extends Component {

  constructor (props) {
    super(props)
    this.state = Object.assign({}, {
      fixed: false,
      dirty: false,
      layersVisible: false,
      buildInProgress: false,
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
    this.save = this._save.bind(this)
    this.reset = this._reset.bind(this)
    this.revert = this._revert.bind(this)
    this.download = this._download.bind(this)
    this.flash = this._flash.bind(this)
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
      rules
    } = this.state

    return (
      <div>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
         <Visibility
           once={false}
           onBottomPassed={this.showFixedMenu}
           onBottomPassedReverse={this.hideFixedMenu}
         >
           <Segment
             inverted
             textAlign='center'
             style={{
               padding: 0,
               margin: 0
             }}
             vertical
           >
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
              cloneLayout={this.cloneLayout}
              save={this.save}
              download={this.download}
              flash={this.flash}
            />
            <div style={{ marginTop: 60 }} />
            <Canvas
              layers={layers}
              layouts={layouts}
              zones={zones}
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
              sortLayers={this.sortLayers}
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
              revert={this.revert}/>

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
         </Visibility>
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
    // TODO: Check save state and fire modal
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
    if (!name) return
    const { activeBoard, zones, layouts, layers } = this.state

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
  }

  _updateZone (e, data) {
    const { zones, activeBoard } = this.state
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
  }

  _cloneLayout (id, name) {
    const { activeBoard } = this.state
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
    })

    this.checkSaveState()

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
  }

  _deleteLayer (layer) {
    console.log(layer)
    let activeLayer = this.state.activeLayer
    const layers = this.state.layers

    if (activeLayer === layer.id) {
      activeLayer = layers[0].id
    }

    if (this.state.layers.length > 1) {
      const layers = this.state.layers.slice(0).filter(l => l.id !== layer.id)
      this.setState({ layers, activeLayer }, this.checkSaveState)
    }
  }

  _editLayer (name, layer) {
    if (!name) return
    const layers = this.state.layers.slice(0).map(l => {
      if (l.id === layer.id) {
        l.name = name
      }
      return l
    })
    this.setState({ layers }, this.checkSaveState)
  }

  _sortLayers (layers) {
    this.setState({ layers })
  }

  _editLayout (name, layout) {
    if (!name) return
    const layouts = this.state.layouts.slice(0).map(l => {
      if (l.id === layout.id) {
        l.name = name
        return l
      }
    })
    this.setState({ layout }, this.checkSaveState)
  }

  _deleteLayout (layout) {
    const { activeBoard } = this.state
    const layouts = this.state.layouts.slice(0).filter(l => l.id !== layout.id)

    const activeLayout = this.state.layouts.length - 2
    const activeLayer = this.state.layers[0].id

    const layers = this.state.layers.slice(0).filter(l => l.layoutId !== layout.id)

    this.setState({ layouts, layers, activeLayout, activeLayer }, this.checkSaveState)
  }

  _save () {
    persistState(this.state)
    const lastSave = getLastSave(this.state)
    this.setState({ lastSave }, this.checkSaveState)
  }

  _reset () {
    const { activeBoard } = this.state
    localStorage.removeItem('activeLayout')
    localStorage.removeItem('activeLayer')
    localStorage.removeItem(activeBoard)
    this.setState(initialState(activeBoard))
  }

  _revert () {
    const { dirty, lastSave, layouts, layers } = this.state
    if (dirty) {
      this.setState(Object.assign({}, {
        activeLayout: layouts[0].id,
        activeLayer: layers[0].id
      }, JSON.parse(lastSave)), this.checkSaveState)
    }
  }

  _download () {
    const { activeBoard, layers, zones, settings, rules } = this.state
    this.setState({ buildInProgress: true })

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
      this.setState({ buildInProgress: false })
      console.log(res)
    })
    .catch(err => {
      console.log(err)
      this.setState({
        buildInProgress: false,
        error: err
      })
    })
  }

  _flash () {
    console.log('here')
    flashFirmware({  hello: 'hi' })
  }

}
