import React from 'react'
import { Tab, Table, Input, Checkbox, Select } from 'semantic-ui-react'

import settings from '../data/settings'

export default ({ activeKeyType, zones }) => {
  const panes = [
    { menuItem: 'Zones', render: () => <Zones zones={zones}/> },
    { menuItem: 'Advanced', render: () => <Advanced /> },
  ]
  return (
    <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
  )
}

const Zones = ({ zones }) => {
  return (
    <Table>
      <Table.Body>
          {zones.map((z, i) => {
            const opts = z.choices.map(c => ({ text: c.name, value: c.code }))
            return (
              <Table.Row key={`row-${i}`}>
                <Table.Cell>
                  {z.label}
                </Table.Cell>
                <Table.Cell textAlign='right'>
                  <Select placeholder={z.label} options={opts} value={z.value} />
                </Table.Cell>
              </Table.Row>
            )
          })}
      </Table.Body>
    </Table>
  )
}

const Advanced = () => {
  return (
    <Table>
      <Table.Body>
          {settings.map((s, i) => {
            switch (s.component) {
              case 'input':
                return (
                  <Table.Row key={`row-${i}`}>
                    <Table.Cell>{s.description}</Table.Cell>
                    <Table.Cell><Input label={s.display} placeholder={s.default} value={s.default} labelPosition='right' fluid/></Table.Cell>
                  </Table.Row>
                )
              case 'checkbox':
                return (
                  <Table.Row key={`row-${i}`}>
                    <Table.Cell>{s.description}</Table.Cell>
                    <Table.Cell><Checkbox label={s.display} checked={s.default} /></Table.Cell>
                  </Table.Row>
                )
              default:
                return
            }
          })}
      </Table.Body>
    </Table>
  )
}
