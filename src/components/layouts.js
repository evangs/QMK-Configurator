import React, { Component } from 'react'
import { Table, Button, Header, Icon, Modal, Input } from 'semantic-ui-react'
import colors from '../utils/colors'
import { config } from '../data/config'

const initialState = {
  createMode: false,
  confirmDelete: false,
  open: false,
  name: '',
  selected: {}
}

export default class extends Component {

  constructor (props) {
    super(props)
    const { layouts, activeLayout } = props
    this.state = initialState
    this.state.selected = layouts[activeLayout]

    this.createLayout = this._createLayout.bind(this)
    this.onRowSelect = this._onRowSelect.bind(this)
    this.editLayout = this._editLayout.bind(this)
    this.removeLayer = this._removeLayer.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    const { layouts, activeLayout } = nextProps
    this.setState({ selected: layouts[activeLayout]})
  }

  render () {
    const {
      layouts,
      activeBoard,
      activeLayout,
      newLayout,
      selectedLayout,
      selectLayout,
      deleteLayout
    } = this.props

    const { createMode, name, open, selected, confirmDelete } = this.state
    return (
      <Modal open={open} trigger={<Button inverted onClick={() => this.setState({ open: true })}>My Layouts</Button>} basic size='small'>
        <Header content={`Layouts for ${config[activeBoard].config.product}`} textAlign='center' style={{ marginTop: 50 }} />
        <Modal.Content>
          <div style={{ position: 'absolute', right: 0, top: 0 }}>
            <Button icon inverted basic color='red' onClick={() => this.setState({ open: false })}>
              <Icon name='close' />
            </Button>
          </div>
          <Table inverted selectable>
            <Table.Body>
              {layouts.map((l, i) => (
                <Table.Row
                  key={`layout-${i}`}
                  onClick={() => this.onRowSelect(l)}
                  style={{ cursor: 'pointer' }}
                  disabled={selected.id === l.id || activeLayout === l.id && !Object.keys(selected).length}>
                  <Table.Cell style={{
                    color: selected.id === l.id ? colors.primaryColor : 'inherit'
                  }}>{l.name}</Table.Cell>
                </Table.Row>
              ))}
              {createMode && (
                <Table.Row>
                  <Table.Cell>
                    <Input
                      fluid
                      inverted
                      transparent
                      size='small'
                      placeholder='Enter a layout name'
                      onChange={(e, data) => this.setState({ name: data.value })}/>
                    </Table.Cell>
                </Table.Row>
              )}
            </Table.Body>
          </Table>
        </Modal.Content>
        <Modal.Actions>
          <Button
            basic={!confirmDelete}
            color='red'
            inverted={!confirmDelete}
            disabled={!Object.keys(selected).length || selected.immutable}
            onClick={this.removeLayer}>
            <Icon name={ confirmDelete ? 'check' : 'remove' } /> { confirmDelete ? 'Confirm' : 'Delete' }
          </Button>
          <Button
            color='teal'
            inverted
            disabled={!Object.keys(selected).length || selected.id === activeLayout}
            onClick={this.editLayout}>
            <Icon name='edit' /> Edit
          </Button>
            <Button
              basic={!createMode}
              color='green'
              inverted={!createMode}
              onClick={ createMode ? () => {
                newLayout(name)
                this.setState(initialState)
              } : this.createLayout }>
              <Icon name={ createMode ? 'check' : 'plus' } /> { createMode ? 'Create' : 'New' }
            </Button>
        </Modal.Actions>
      </Modal>
    )
  }

  _editLayout () {
    const { selectLayout } = this.props
    const { selected } = this.state
    selectLayout(selected.id)
    this.setState(initialState)
  }

  _removeLayer () {
    const { confirmDelete, selected } = this.state
    const { deleteLayout } = this.props
    if (confirmDelete) {
      deleteLayout(selected)
      this.setState(initialState)
    } else {
      this.setState({ confirmDelete: true })
    }
  }

  _onRowSelect (layout) {
    this.setState({ selected: layout })
  }

  _createLayout () {
    this.setState({ createMode: true })
  }
}
