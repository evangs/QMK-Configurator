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
  deleteLayer,
  editLayout,
  editLayer,
  sortLayers
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
        <ToggleButton name={layers.find(l => l.id === activeLayer).name} onClick={toggleLayers} />
        <Layers
          activeBoard={activeBoard}
          activeLayer={activeLayer}
          activeLayout={activeLayout}
          zones={zones}
          layers={layers}
          selectLayer={selectLayer}
          cloneLayer={cloneLayer}
          deleteLayer={deleteLayer}
          editLayer={editLayer}
          sortLayers={sortLayers}/>
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
      <ToggleButton name={layers.find(l => l.id === activeLayer).name} onClick={toggleLayers} />
      <Info
        manufacturer={config[activeBoard].config.manufacturer}
        product={config[activeBoard].config.product}
        description={config[activeBoard].config.description}
        layout={layouts.find(l => l.id === activeLayout)}
        layer={layers.find(l => l.id === activeLayer)}
        editLayout={editLayout}
        editLayer={editLayer}
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

const ToggleButton = ({ onClick, name }) => (
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
        verticalAlign: 'middle',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        width: 150,
        display: 'inline-block'
      }}>{name}</span>
    </div>
  </div>
)
