import React, { Component } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { Container, Header, Divider, Icon } from 'semantic-ui-react'
import Layer from './layer'

// Reordering function
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)
  return result
}

// Get the layer style
const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the layers look a bit nicer
  userSelect: 'none',
  padding: '20px 10px 0 20px',
  margin: `0 0 10px 0`,

  // change background colour if dragging
  background: isDragging ? 'lightgreen' : 'transparent',

  // styles we need to apply on draggables
  ...draggableStyle,
});

// Get the list style
const getListStyle = isDraggingOver => ({
  background: 'transparent',
  width: '100%',
  paddingTop: 14
});

export default class Layers extends Component {

  constructor (props) {
    super(props)
    this.state = {
      layers: props.layers
    }
    this.onDragEnd = this._onDragEnd.bind(this)
  }

  render () {
    const { keymaps } = this.props
    console.log(this.state.layers)
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {this.state.layers.map((layer, i) => (
                <Draggable key={`layer-${i}`} draggableId={`dnd-${i}`} index={i}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      <Layer keymap={keymaps[i]} layerId={layer.layerNumber} scaleFactor={7} />
                      <Container fluid>
                        <div style={{ float: 'left' }}>
                          <Header
                            as='h4'
                            inverted
                            style={{
                              margin: 0,
                              textAlign: 'left'
                            }}>
                              {layer.layerName}
                            </Header>
                          </div>
                          <div style={{ float: 'right' }}>
                            <Icon name='clone' size="small" />
                            <Icon name='edit' size="small" />
                          </div>
                          <div style={{ clear: 'both' }} />
                        </Container>
                      <Divider />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    )
  }

  _onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return
    }

    const layers = reorder(
      this.state.layers,
      result.source.index,
      result.destination.index
    )

    this.setState({ layers })
  }

}
