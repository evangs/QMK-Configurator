import React, { Component } from 'react'
import {
  Menu,
  Container,
  Button,
  Dropdown,
  Image,
  Icon,
  Modal,
  Input,
  Table
} from 'semantic-ui-react'
import Layouts from './layouts'
import { config } from '../data/config'
import logo from '../logo.png'

export default class extends Component {

  constructor (props) {
    super(props)
    this.state = {
      open: false,
      name: ''
    }
  }

  render() {
    const {
      fixed,
      boards,
      activeBoard,
      activeLayout,
      layouts,
      layers,
      dirty,
      selectBoard,
      newLayout,
      selectLayout,
      deleteLayout,
      cloneLayout,
      newLayer,
      save,
      download,
      flash
    } = this.props
    const { name, open } = this.state

    return (
    <Menu inverted fixed='top' style={{
      margin: 0,
      WebkitAppRegion: 'drag'
    }}>
      <Container>

        <Menu.Item as='div'>
          <Image size='mini' src={logo} style={{ marginRight: '1.5em', filter: 'brightness(10)' }} />
        </Menu.Item>

        <Menu.Menu position='right'>
          <Dropdown
            item
            closeOnBlur
            text={config[activeBoard].config.product}>
            <Dropdown.Menu>
              {boards.map(b => {
                return (
                  <Dropdown.Item
                    key={b}
                    value={b}
                    onClick={selectBoard}>
                    {config[b].config.product}
                  </Dropdown.Item>
                )
              })}
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item>
            <Button
              inverted
              color={dirty ? 'green' : 'teal'}
              onClick={dirty ? save : download}>
                {dirty ? 'Save' : 'Download'}
              </Button>
          </Menu.Item>
          <Menu.Item>
            <Layouts
              layouts={layouts}
              activeLayout={activeLayout}
              newLayout={newLayout}
              activeBoard={activeBoard}
              selectLayout={selectLayout}
              cloneLayout={cloneLayout}
              deleteLayout={deleteLayout} />
          </Menu.Item>
          <Menu.Item>
            <Modal basic open={open} size='small' trigger={
              <Button
                icon
                inverted
                basic
                color='green'
                onClick={() => this.setState({ open: true })}>
                <Icon name='plus' />
              </Button>
            }>
              <Modal.Content>
                <div style={{ position: 'absolute', right: '1rem', top: 0 }}>
                  <Button
                    icon
                    inverted
                    basic
                    color='red'
                    onClick={() => this.setState({ open: false, name: '' })}>
                    <Icon name='close' />
                  </Button>
                </div>
                <Table inverted style={{ marginTop: 50 }}>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>
                        <Input
                          fluid
                          inverted
                          transparent
                          onChange={(e, data) => { this.setState({ name: data.value }) }}
                          placeholder='Enter a name'
                        />
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Modal.Content>
              <Modal.Actions>
                <Button color='grey' inverted onClick={() => {
                  newLayout(name)
                  this.setState({ name: '', open: false })
                }}>
                  <Icon name='keyboard outline' /> Create Layout
                </Button>
                <Button disabled={layers.length >= 16} color='teal' inverted onClick={() => {
                  newLayer(name)
                  this.setState({ name: '', open: false })
                }}>
                  <Icon name='sticky note outline' /> Create Layer
                </Button>
              </Modal.Actions>
            </Modal>
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  )
  }
}
