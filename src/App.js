import React, { Component } from 'react'
import { config, initialState } from './data/config'
import { get } from './utils/localstorage'
import {
  Container,
  Responsive,
  Segment,
  Visibility,
} from 'semantic-ui-react'

import './theme/semantic.less'

import Canvas from './components/canvas'
import Nav from './components/nav'
import KeyTypeMenu from './components/key-type-menu'
import Settings from './components/settings'
import './shake.scss'

export default class extends Component {

  constructor (props) {
    super(props)
    this.state = Object.assign({}, {
      fixed: false,
      dirty: false,
      layersVisible: false,
      buildInProgress: false,
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
    this.deleteLayout = this._deleteLayout.bind(this)
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
      layouts,
      layers,
      zones,
      dirty
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
              dirty={dirty}
              newLayout={this.newLayout}
              newLayer={this.newLayer}
              selectBoard={this.selectBoard}
              deleteLayout={this.deleteLayout}
              selectLayout={this.selectLayout}
              cloneLayout={this.cloneLayout}
            />
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
              updateZone={this.updateZone}/>
           </Container>
         </Visibility>
       </Responsive>
      </div>
    )
  }

  checkSaveState () {

  }

  _toggleLayers () {
    this.setState({ layersVisible: !this.state.layersVisible })
  }

  _selectBoard (e, data) {
    this.setState(initialState(data.value))
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
      activeLayer,
      lastSave
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

    this.setState({
      layers: clone,
      dirty: lastSave !== JSON.stringify(clone)
    })
  }

  _newLayout (name) {
    const { activeBoard, zones, layouts, layers } = this.state

    const layoutId = layouts.length
    const layerId = layers.length

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
    })
  }

  _updateZone (e, data) {
    const { zones, lastSave, activeBoard } = this.state
    let clone = zones.slice(0)
    clone = clone.map(z => {
      if (z.label === data.placeholder) {
        z.value = data.value
      }
      return z
    })

    this.setState({
      zones: clone,
      dirty: lastSave !== JSON.stringify(clone)
    })
  }

  _newLayer (layer) {}

  _cloneLayout (id, name) {

    const { activeBoard } = this.state
    const layouts = this.state.layouts.slice(0)
    const layout = Object.assign({}, this.state.layouts.slice(0).find(l => l.id === id))
    const layoutId = layouts.length

    // Set new layout props
    layout.id = layoutId
    layout.immutable = false
    if (name) {
      layout.name = name
    }

    layouts.push(layout)

    let layers = this.state.layers.slice(0)
    const layerId = layers.length
    const filtered = layers.filter(l => l.layoutId === id)
    const mapped = filtered.map((l, i) => {
      const layer = Object.assign({}, l)
      layer.layoutId = layoutId
      layer.id = layerId + i
      return layer
    })

    layers = layers.concat(mapped)

    this.setState({
      activeLayout: layoutId,
      activeLayer: layerId,
      layouts,
      layers
    })

  }

  _cloneLayer (layer) {}

  _deleteLayer (layer) {}

  _deleteLayout (layout) {
    const { activeBoard } = this.state
    const layouts = this.state.layouts.slice(0).filter(l => l.id !== layout.id)

    const activeLayout = this.state.layouts.length - 2
    const activeLayer = 0

    const layers = this.state.layers.slice(0).filter(l => l.layoutId !== layout.id)

    this.setState({ layouts, layers, activeLayout, activeLayer })
  }

  _save () {}

  _reset () {}

  _download () {}

}
