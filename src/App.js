import React, { Component } from 'react'
import { config, initialState } from './data/config'
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
    this.toggleLayers = this._toggleLayers.bind(this)
    this.setActiveKeyType = this._setActiveKeyType.bind(this)
  }

  render () {
    const {
      fixed,
      boards,
      activeBoard,
      activeLayer,
      activeKeyType,
      layoutName,
      layers,
      layersVisible,
      keymap,
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
              boards={boards}
              fixed={fixed}
              activeBoard={activeBoard}
            />
            <Canvas
              layers={layers}
              activeLayer={activeLayer}
              activeKeyType={activeKeyType}
              layersVisible={layersVisible}
              toggleLayers={this.toggleLayers}
              manufacturer={config[activeBoard].config.manufacturer}
              product={config[activeBoard].config.product}
              description={config[activeBoard].config.description}
              keymaps={keymap}
              layoutName={layoutName}
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
}
