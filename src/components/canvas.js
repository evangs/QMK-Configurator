import React, { Component } from 'react'
import {
  Container,
  Icon,
  Sidebar,
  Segment,
  Button,
  Responsive
} from 'semantic-ui-react'

import Keyboard from './keyboard'
import Layers from './layers'
import Scale from './scale'
import Info from './info'
import { config } from '../data/config'

import colors from '../utils/colors'

export default class extends Component {

  render () {
    const {
      layersVisible,
      layers,
      layouts,
      zones,
      indicators,
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
      exportLayer,
      sortLayers,
      addIndicator,
      updateIndicator,
      deleteIndicator
    } = this.props

    return (
      <Sidebar.Pushable
        as={Segment}
        inverted
        style={{
          margin: 0,
          borderRadius: 0,
          position: 'relative',
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
              exportLayer={exportLayer}
              sortLayers={sortLayers}
            />
          </Container>
        </Sidebar>

        <Sidebar.Pusher
          as={Segment}
          inverted
          style={{
            margin: 0,
            minHeight: 600,
            background: colors.dark,
            borderRadius: 0
          }}>
            <ToggleButton
              onCanvas
              name={layersVisible ? '' : layers.find(l => l.id === activeLayer).name}
              onClick={toggleLayers}
            />
            <Responsive {...Responsive.onlyWidescreen}>
              <Info
                manufacturer={config[activeBoard].config.manufacturer}
                product={config[activeBoard].config.product}
                description={config[activeBoard].config.description}
                layout={layouts.find(l => l.id === activeLayout)}
                layer={layers.find(l => l.id === activeLayer)}
                editLayout={editLayout}
                editLayer={editLayer}
              />
            </Responsive>
            <Container id='scrollbar' fluid style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: 490,
              overflowX: 'auto'
            }}>
            <Scale>
              <Keyboard
                zones={zones}
                layers={layers}
                setKey={setKey}
                indicators={indicators}
                activeBoard={activeBoard}
                activeLayer={activeLayer}
                addIndicator={addIndicator}
                activeKeyType={activeKeyType}
                updateIndicator={updateIndicator}
                deleteIndicator={deleteIndicator}
              />
            </Scale>
          </Container>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    )
  }

  _handleContextRef (contextRef) {
    this.setState({ contextRef })
  }

}

const ToggleButton = ({ onClick, name, onCanvas }) => (
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
        textOverflow: onCanvas ? 'none' : 'ellipsis',
        width: onCanvas ? 'auto' : 150,
        display: 'inline-block'
      }}>{name}</span>
    </div>
  </div>
)
