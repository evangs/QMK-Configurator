import React from 'react'
import {
  Container,
  Icon,
  Sidebar,
  Segment,
  Button
} from 'semantic-ui-react'

import Keyboard from './keyboard'
import Layers from './layers'
import Info from './info'

import colors from '../utils/colors'

export default ({
  mobile,
  layers,
  layersVisible,
  keymaps,
  manufacturer,
  product,
  description,
  layoutName,
  activeLayer,
  activeKeyType,
  toggleLayers
}) => (

  <Sidebar.Pushable
    as={Segment}
    inverted
    style={{
      margin: 0,
      borderRadius: 0,
      position: 'relative'
    }}>
    <Sidebar
      as={Segment}
      animation='overlay'
      inverted
      onHide={()=>{}}
      vertical
      visible={layersVisible}
      style={{
        background: 'black',
        height: '100%',
        padding: 0
      }}
    >
      <Container fluid style={{ padding: 14 }}>
        <ToggleButton onClick={toggleLayers} add />
        <Layers layers={layers} keymaps={keymaps} />
      </Container>
    </Sidebar>

    <Sidebar.Pusher
      as={Segment}
      inverted
      style={{
        margin: 0,
        minHeight: 600,
        background: colors.dark
      }}>
      <ToggleButton onClick={toggleLayers} />
      <Info
        manufacturer={manufacturer}
        product={product}
        description={description}
        layoutName={layoutName}
        layerName={layers[activeLayer].layerName}

      />
      <Container>
        <div style={{ marginTop: 100 }} />
        <Keyboard keymap={keymaps[activeLayer]} activeKeyType={activeKeyType}/>
      </Container>
    </Sidebar.Pusher>
  </Sidebar.Pushable>
)

const ToggleButton = ({ onClick, add }) => (
  <div>
    <div style={{
      textAlign: 'left'
    }}>
      <Button icon inverted basic onClick={onClick}>
        <Icon name='bars' />
      </Button>
      <span style={{
        fontSize: 20,
        marginLeft: 10,
        verticalAlign: 'text-bottom'
      }}>Layers</span>
      {add &&
        <div style={{ float: 'right' }}>
          <Button icon inverted basic color='green' onClick={onClick}>
            <Icon name='plus' />
          </Button>
        </div>
      }
    </div>
  </div>
)
