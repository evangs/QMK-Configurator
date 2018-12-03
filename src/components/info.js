import React, { Component } from 'react'
import { Table, Icon, Popup, Modal, Button } from 'semantic-ui-react'

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      layoutModalOpen: false,
      layerModalOpen: false
    }
  }
  render () {
    const {
      manufacturer,
      product,
      description,
      layoutName,
      layerName
    } = this.props

    const {
      layoutModalOpen,
      layerModalOpen
    } = this.state

    return (
      <Table basic celled collapsing inverted style={{
        position: 'absolute',
        top: 0,
        right: 14,
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: 0,
        maxWidth: 350
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
              {layoutName}
              <span style={{ float: 'right', marginLeft: 10 }}>
                <Modal
                  basic
                  open={layoutModalOpen}
                  trigger={
                    <Popup
                      trigger={<Icon
                        name='edit'
                        size="small"
                        onClick={() => this.setState({ layoutModalOpen: true })}
                        style={{ cursor: 'pointer' }}
                      />}
                      content='Edit layout name'
                      position='left center' />
                  }
                >
                <Modal.Header>Delete Your Account</Modal.Header>
                  <Modal.Content>
                    <p>Are you sure you want to delete your account</p>
                  </Modal.Content>
                  <Modal.Actions>
                    <Button negative>No</Button>
                    <Button positive icon='checkmark' labelPosition='right' content='Yes' />
                  </Modal.Actions>
                </Modal>
              </span>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>LAYER</Table.Cell>
            <Table.Cell>
              {layerName}
              <span style={{ float: 'right', marginLeft: 10 }}>
                <Modal
                  basic
                  open={layerModalOpen}
                  trigger={
                    <Popup
                      trigger={<Icon
                        name='edit'
                        size="small"
                        onClick={() => this.setState({ layerModalOpen: true })}
                        style={{ cursor: 'pointer' }}
                      />}
                      content='Edit layer name'
                      position='left center' />
                  }
                >
                <Modal.Header>Delete Your Account</Modal.Header>
                  <Modal.Content>
                    <p>Are you sure you want to delete your account</p>
                  </Modal.Content>
                  <Modal.Actions>
                    <Button negative>No</Button>
                    <Button positive icon='checkmark' labelPosition='right' content='Yes' />
                  </Modal.Actions>
                </Modal>
              </span>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    )
  }
}
