import React, { Component } from 'react'
import { initialState } from './data/config'
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
      layersVisible: false,
      buildInProgress: false,
      exportLink: '',
      exportFileName: ''
    }, initialState)

    // Bind event handlers
    this.toggleLayers = this._toggleLayers.bind(this)
    this.setActiveKeyType = this._setActiveKeyType.bind(this)
    this.selectLayer = this._selectLayer.bind(this)
    this.selectLayout = this._selectLayout.bind(this)
    this.setKey = this._setKey.bind(this)
    this.newLayout = this._newLayout.bind(this)
    this.newLayer = this._newLayer.bind(this)
    this.cloneLayout = this._cloneLayout.bind(this)
    this.cloneLayer = this._cloneLayer.bind(this)
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
      zones
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
              layouts={layouts}
            />
            <Canvas
              layers={layers}
              layouts={layouts}
              activeBoard={activeBoard}
              activeLayout={activeLayout}
              activeLayer={activeLayer}
              activeKeyType={activeKeyType}
              layersVisible={layersVisible}
              toggleLayers={this.toggleLayers}
              setKey={this.setKey}
            />
           </Segment>

           <Container>
            <KeyTypeMenu
              setActiveKeyType={this.setActiveKeyType}
              activeKeyType={activeKeyType}
            />
            <Settings activeKeyType={activeKeyType} zones={zones}/>
           </Container>
         </Visibility>
       </Responsive>
      </div>
    )
  }

  _toggleLayers () {
    this.setState({ layersVisible: !this.state.layersVisible })
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

    const clone = layers.slice(0)
    clone[activeLayer].keymap = clone[activeLayer].keymap.map(row => {
      return row.map(k => {
        return k.id === key.id ? key : k
      })
    })
    this.setState({ layers: clone })
  }

  _newLayout (layoutName, layers) {
    // const layout = {
    //   layoutName: layoutName
    // }
  }

  _newLayer (layer) {}

  _cloneLayout (layout) {}

  _cloneLayer (layer) {}

  _save () {}

  _reset () {}

  _download () {}

}
