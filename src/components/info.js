import React, { Component } from 'react'
import {
  Table,
  Icon,
  Popup,
  Modal,
  Button,
  Header,
  Input
} from 'semantic-ui-react'
import colors from '../utils/colors'

export default ({
  manufacturer,
  product,
  description,
  editLayer,
  editLayout,
  layer,
  layout,
  overlay
}) => (
  <Table basic celled collapsing inverted style={{
    position: 'absolute',
    top: overlay ? 50 : 14,
    right: 14,
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: 0,
    maxWidth: 350,
    zIndex: 9,
    background: colors.dark
  }}>
    <Table.Body>
      <Table.Row>
        <Table.Cell>MANUFACTURER</Table.Cell>
        <Table.Cell>{manufacturer}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>PRODUCT</Table.Cell>
        <Table.Cell>{product}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>DESCRIPTION</Table.Cell>
        <Table.Cell>{description}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>LAYOUT</Table.Cell>
        <Table.Cell>
          {layout.name}
          <span style={{ float: 'right', marginLeft: 10 }}>
            <NameModal color='grey' icon='edit' action={editLayout} display='Rename Layout' data={layout} />
          </span>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>LAYER</Table.Cell>
        <Table.Cell>
          {layer.name}
          <span style={{ float: 'right', marginLeft: 10 }}>
            <NameModal color='grey' icon='edit' action={editLayer} display='Rename Layer' data={layer} />
          </span>
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

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
      data,
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
          content={disabled ? 'You can only have a maximum of 16 layers.' : display}
          position='left center' />
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
          content={`${display} "${data.name}"`}
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
              action(name, data)
              this.setState({ open: false, name: '' })
            }}>
            <Icon name={icon} /> {display}
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}
