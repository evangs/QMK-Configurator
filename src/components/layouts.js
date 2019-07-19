import React, { Component } from 'react'
import { Table, Button, Header, Icon, Modal, Input } from 'semantic-ui-react'
import colors from '../utils/colors'
import { config } from '../data/config'

const initialState = {
  name: '',
  createMode: '',
  confirmDelete: false,
  open: false,
  selected: {}
}

export default class extends Component {

  constructor (props) {
    super(props)
    const { layouts, activeLayout } = props
    this.state = initialState
    this.state.selected = layouts.find(l => l.id === activeLayout)

    this.onRowSelect = this._onRowSelect.bind(this)
    this.newLayout = this._newLayout.bind(this)
    this.editLayout = this._editLayout.bind(this)
    this.cloneLayout = this._cloneLayout.bind(this)
    this.removeLayout = this._removeLayout.bind(this)
    this.exportLayout = this._exportLayout.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    const { layouts, activeLayout } = nextProps
    this.setState({ selected: layouts.find(l => l.id === activeLayout)})
  }

  render () {
    const {
      layouts,
      activeBoard,
      activeLayout
    } = this.props

    const { createMode, open, selected, confirmDelete } = this.state
    const createModeComponent = createMode ? (
      <Table.Row>
        <Table.Cell>
          <Input
            fluid
            inverted
            transparent
            placeholder='Enter a layout name'
            onChange={(e, data) => this.setState({ name: data.value })}/>
          </Table.Cell>
      </Table.Row>
    ) : null
    return (
      <Modal open={open} trigger={<Button inverted onClick={() => this.setState({ open: true })}>My Layouts</Button>} basic size='small'>
        <Header content={`Layouts for ${config[activeBoard].config.product}`} textAlign='center' style={{ marginTop: 50 }} />
        <Modal.Content>
          <div style={{ position: 'absolute', right: '1rem', top: 0 }}>
            <Button icon inverted basic color='red' onClick={() => this.setState(initialState)}>
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
                  disabled={(selected.id === l.id || activeLayout === l.id) && !Object.keys(selected).length}>
                  <Table.Cell style={{
                    color: selected.id === l.id ? colors.primaryColor : 'inherit'
                  }}>{l.name}</Table.Cell>
                </Table.Row>
              ))}
              {createModeComponent}
            </Table.Body>
          </Table>
        </Modal.Content>
        <Modal.Actions>
          <Button
            basic={!confirmDelete}
            color='red'
            inverted={!confirmDelete}
            disabled={!Object.keys(selected).length || selected.immutable}
            onClick={this.removeLayout}>
            <Icon name={ confirmDelete ? 'check' : 'remove' } /> { confirmDelete ? 'Confirm' : 'Delete' }
          </Button>
          <Button
            basic
            inverted
            color='teal'
            disabled={!Object.keys(selected).length || selected.id === activeLayout}
            onClick={this.editLayout}>
            <Icon name='keyboard outline' /> Layout
          </Button>
          <Button
            basic
            inverted
            color='yellow'
            onClick={this.exportLayout}>
            <Icon name='share square' /> Export
          </Button>
          <Button
            color='blue'
            basic={createMode !== 'clone'}
            inverted={createMode !== 'clone'}
            disabled={createMode === 'new'}
            onClick={this.cloneLayout}>
            <Icon name={ createMode === 'clone' ? 'check' : 'clone' } /> { createMode === 'clone' ? 'Create' : 'Clone' }
          </Button>
          <Button
            color='green'
            disabled={createMode === 'clone'}
            basic={createMode !== 'new'}
            inverted={createMode !== 'new'}
            onClick={this.newLayout}>
            <Icon name={ createMode === 'new' ? 'check' : 'plus' } /> { createMode === 'new' ? 'Create' : 'New' }
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }

  _newLayout () {
    const { name, createMode } = this.state
    const { newLayout } = this.props
    if (createMode) {
      newLayout(name)
      this.setState(initialState)
    } else {
      this.setState({ createMode: 'new' })
    }
  }

  _cloneLayout () {
    const { name, createMode, selected } = this.state
    const { cloneLayout } = this.props
    if (createMode) {
      cloneLayout(selected.id, name)
      this.setState(initialState)
    } else {
      this.setState({ createMode: 'clone' })
    }
  }

  _editLayout () {
    const { selectLayout } = this.props
    const { selected } = this.state
    selectLayout(selected.id)
    this.setState(initialState)
  }

  _removeLayout () {
    const { confirmDelete, selected } = this.state
    const { deleteLayout } = this.props
    if (confirmDelete) {
      deleteLayout(selected)
      this.setState(initialState)
    } else {
      this.setState({ confirmDelete: true })
    }
  }

  _exportLayout () {
    const { selected } = this.state
    const { exportLayout } = this.props
    exportLayout(selected.id)
    this.setState(initialState)
  }

  _onRowSelect (layout) {
    this.setState({ selected: layout })
  }

}
