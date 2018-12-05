import React, { Component } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import {
  Container,
  Popup,
  Header,
  Modal,
  Divider,
  Icon,
  Table,
  Input,
  Button
} from 'semantic-ui-react'
import Layer from './layer'
import colors from '../utils/colors'

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
  padding: '20px 10px 0 10px',
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
      layers: props.layers,
      openEdit: false,
      editName: '',
      openClone: false,
      cloneName: '',
      openDelete: false
    }
    this.onDragEnd = this._onDragEnd.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    if(JSON.stringify(this.props.layers) !== JSON.stringify(nextProps.layers)) {
      this.setState({ layers: nextProps.layers })
    }
  }

  render () {
    const {
      layers,
      openEdit,
      editName,
      openClone,
      cloneName,
      openDelete,
    } = this.state
    const {
      activeBoard,
      activeLayout,
      activeLayer,
      selectLayer,
      deleteLayer,
      cloneLayer,
      editLayer,
      zones
    } = this.props
    const filteredLayers = layers.filter(l => l.layoutId === activeLayout)

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {filteredLayers.map((layer, i) => (
                <Draggable key={layer.id} draggableId={`dnd-${layer.id}`} index={i}>
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
                      <Layer
                        activeBoard={activeBoard}
                        zones={zones}
                        keys={layer.keys}
                        layerId={layer.id}
                      />
                      <Container fluid>
                        <div style={{ float: 'left' }}>
                          <Header
                            as='h4'
                            inverted
                            onClick={() => selectLayer(layer.id) }
                            style={{
                              margin: 0,
                              textAlign: 'left',
                              cursor: 'pointer'
                            }}>

                              <p style={{
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                width: 125,
                                display: 'inline-block',
                                verticalAlign: 'bottom',
                                color: layer.id === activeLayer ? colors.white : colors.secondaryColor
                              }}>
                                <span style={{ color: colors.grey }}>({i})  </span>
                                {layer.name}
                              </p>
                            </Header>
                          </div>
                          <div style={{ float: 'right' }}>

                            { /* EDIT LAYER */ }
                            <NameModal color='grey' icon='edit' action={editLayer} display='Edit' layer={layer} />

                            { /* CLONE LAYER */ }
                            <NameModal color='teal' icon='clone' disabled={layers.length >= 16} action={cloneLayer} display='Clone' layer={layer} />

                            { /* DELETE LAYER */ }
                            <DeleteModal layer={layer} action={deleteLayer} disabled={filteredLayers.length <= 1} />

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

class NameModal extends Component {

  constructor (props) {
    super(props)
    this.state = {
      open: false,
      name: ''
    }
  }

  render () {
    const {
      color,
      action,
      display,
      layer,
      icon,
      disabled
    } = this.props
    const { open, name } = this.state
    return (
      <Modal trigger={
        <Popup
          inverted
          trigger={
            <Icon
              style={{ cursor: disabled ? 'no-drop' : 'pointer' }}
              name={icon}
              color={color}
              size='small'
              disabled={disabled}
              onClick={disabled ? () => {} : () => this.setState({ open: true })}
            />
          }
          content={disabled ? 'You can only have a maximum of 16 layers.' : `${display} Layer`}
          position='top center' />
      }
      basic
      size='small'
      open={open}>
        <div style={{ position: 'absolute', right: '1rem', top: 0 }}>
          <Button icon inverted basic color='red' onClick={() => this.setState({ open: false, name: '' })}>
            <Icon name='close' />
          </Button>
        </div>
        <Header
          inverted
          content={`${display} Layer "${layer.name}"`}
          style={{ marginTop: 50 }} />
        <Modal.Content>
          <Table inverted>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Input
                    transparent
                    fluid
                    inverted
                    onChange={(e, data) => {
                      this.setState({ name: data.value })
                    }}
                    placeholder='Enter a name' />
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Modal.Content>
        <Modal.Actions>
          <Button
            basic
            inverted
            color={color}
            onClick={() => {
              action(name, layer)
              this.setState({ open: false, name: '' })
            }}>
            <Icon name={icon} /> {`${display} Layer`}
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

class DeleteModal extends Component {

  constructor (props) {
    super(props)
    this.state = {
      open: false,
      name: ''
    }
  }

  render () {
    const { open, name } = this.state
    const { disabled, layer, action } = this.props
    return (
      <Modal trigger={
        <Popup
          inverted
          trigger={
            <Icon
              style={{ cursor: disabled ? 'no-drop' : 'pointer' }}
              name='close'
              size='small'
              color='red'
              disabled={disabled}
              onClick={() => {
                if(!disabled) {
                  this.setState({ open: true })
                }
              }}
            />
          }
          content={disabled ? 'You can not delete the last layer. Create a new one first.' : 'Delete Layer'}
          position='top center' />
      }
      open={open}
      size='small'
      basic>
        <Header
          content={`Are you sure you want to delete layer "${layer.name}"?`}
          style={{ marginTop: 50 }} />
        <div style={{ position: 'absolute', right: '1rem', top: 0 }}>
          <Button
            icon
            inverted
            basic
            color='red'
            onClick={() => this.setState({ open: false })}>
            <Icon name='close' />
          </Button>
        </div>
        <Modal.Actions>
          <Button
            basic
            color='red'
            inverted
            onClick={() => this.setState({ open: false })}>
            <Icon name='cancel' /> Cancel
          </Button>
          <Button
            basic
            inverted
            color='green'
            onClick={() => {
              action(layer)
              this.setState({ open: false })
            }}>
            <Icon name='check' /> Confirm
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}
