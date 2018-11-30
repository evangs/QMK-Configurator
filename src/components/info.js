import React from 'react'
import { Container, Table, Icon } from 'semantic-ui-react'

export default ({
  manufacturer,
  product,
  description,
  layoutName,
  layerName
}) => {
  console.log(manufacturer, product, description, layoutName, layerName)
  return (
    <Table basic celled collapsing inverted style={{
      position: 'absolute',
      top: 0,
      right: 14,
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: 0
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
              <Icon name='edit' size="small" />
            </span>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>LAYER</Table.Cell>
          <Table.Cell>
            {layerName}
            <span style={{ float: 'right', marginLeft: 10 }}>
              <Icon name='edit' size="small" />
            </span>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  )
}
