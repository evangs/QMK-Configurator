import React, { Component } from 'react'
import { Table, Button, Header, Icon, Modal } from 'semantic-ui-react'
import { config } from '../data/config'

export default class extends Component {
  render () {
    const { layouts, activeBoard } = this.props
    return (
      <Modal trigger={<Button inverted>My Layouts</Button>} basic size='small'>
        <Header content={`Layouts for ${config[activeBoard].config.product}`} textAlign='center' />
        <Modal.Content>
          <Table inverted selectable>
            <Table.Body>
              {layouts.map((l, i) => (
                <Table.Row key={`layout-${i}`} style={{ cursor: 'pointer' }}>
                  <Table.Cell>{l.name}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color='red' inverted>
            <Icon name='remove' /> Delete
          </Button>
          <Button color='teal' inverted>
            <Icon name='edit' /> Edit
          </Button>
          <Button color='green' inverted>
            <Icon name='plus' /> New
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}
