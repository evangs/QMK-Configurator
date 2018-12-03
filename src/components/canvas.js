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
import { config } from '../data/config'

import colors from '../utils/colors'

export default ({
  mobile,
  layersVisible,
  layers,
  layouts,
  zones,
  activeBoard,
  activeLayout,
  activeLayer,
  activeKeyType,
  toggleLayers,
  setKey,
  selectLayer,
  cloneLayer,
  deleteLayer
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
        <Layers
          activeBoard={activeBoard}
          zones={zones}
          layers={layers}
          selectLayer={selectLayer}
          cloneLayer={cloneLayer}
          deleteLayer={deleteLayer} />
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
        manufacturer={config[activeBoard].config.manufacturer}
        product={config[activeBoard].config.product}
        description={config[activeBoard].config.description}
        layoutName={layouts[activeLayout].name}
        layerName={layers[activeLayer].name}
      />
      <Container fluid style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 490
      }}>
        <Keyboard
          layers={layers}
          zones={zones}
          activeBoard={activeBoard}
          activeLayer={activeLayer}
          activeKeyType={activeKeyType}
          setKey={setKey}
        />
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
