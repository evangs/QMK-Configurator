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
  }

  render () {
    const {
      fixed,
      boards,
      activeBoard,
      activeLayer,
      layoutName,
      layers,
      layersVisible,
      keymap
    } = this.state

    return (
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
          <KeyTypeMenu />
         </Container>
       </Visibility>
     </Responsive>
    )
  }

  _toggleLayers () {
    this.setState({ layersVisible: !this.state.layersVisible })
  }
}
