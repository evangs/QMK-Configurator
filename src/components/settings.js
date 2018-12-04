import React from 'react'
import {
  Tab,
  Table,
  Input,
  Checkbox,
  Select,
  Button
} from 'semantic-ui-react'

import settings from '../data/settings'

export default ({
  activeKeyType,
  zones,
  updateZone,
  updateSetting,
  settings,
  rules,
  reset,
  revert
}) => {
  const panes = [
    { menuItem: 'Zones', render: () => (
      <Zones
        zones={zones}
        updateZone={updateZone}/>
    )},
    { menuItem: 'Advanced', render: () => (
      <Advanced
        settings={settings}
        rules={rules}
        updateSetting={updateSetting} />
    )},
    { menuItem: 'Reset', render: () => (
      <Reset
        reset={reset}
        revert={revert} />
    )}
  ]
  return (
    <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
  )
}

const Zones = ({ zones, updateZone }) => {
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
                  <Select
                    placeholder={z.label}
                    options={opts}
                    value={z.value}
                    onChange={updateZone}/>
                </Table.Cell>
              </Table.Row>
            )
          })}
      </Table.Body>
    </Table>
  )
}

const Advanced = props => {
  const { updateSetting } = props
  return (
    <Table>
      <Table.Body>
          {settings.map((s, i) => {
            let value
            console.log(s)
            switch (s.type) {
              case 'config':
                value = props.settings[s.value]
                break
              case 'rule':
                value = props.rules[s.value]
              default:
                return
            }
            switch (s.component) {
              case 'input':
                return (
                  <Table.Row key={`row-${i}`}>
                    <Table.Cell>{s.description}</Table.Cell>
                    <Table.Cell>
                      <Input
                        label={s.display}
                        placeholder={s.default}
                        default={s.default}
                        value={value}
                        setting={s.value}
                        kind={s.type}
                        type='number'
                        labelPosition='right'
                        onChange={updateSetting}
                        fluid />
                    </Table.Cell>
                  </Table.Row>
                )
              case 'checkbox':
                return (
                  <Table.Row key={`row-${i}`}>
                    <Table.Cell>{s.description}</Table.Cell>
                    <Table.Cell>
                      <Checkbox
                        label={s.display}
                        default={s.default}
                        checked={value}
                        setting={s.value}
                        kind={s.type}
                        onChange={updateSetting}/>
                    </Table.Cell>
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

const Reset = ({ reset, revert }) => {
  return (
    <Table>
      <Table.Body>
        <Table.Row>
          <Table.Cell>
            Revert to last save
          </Table.Cell>
          <Table.Cell textAlign='right'>
            <Button fluid color='grey' onClick={revert}>Revert</Button>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            Reset to factory defaults
          </Table.Cell>
          <Table.Cell textAlign='right'>
            <Button fluid inverted color='red' onClick={reset}>Reset</Button>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  )
}
