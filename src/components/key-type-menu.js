import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { KEY_ACTIONS } from '../data/keys'

export default class extends Component {

  render() {
    const { activeKeyType, setActiveKeyType } = this.props
    return (
      <Menu icon fluid inverted widths={KEY_ACTIONS.length} style={{
        position: 'relative',
        top: -20
      }}>

        {KEY_ACTIONS.map(k => {
          let color = 'grey'
          switch (k.value) {
            case 'momentary':
              color = 'teal'
              break
            case 'toggle':
              color = 'violet'
              break
            case 'tapkey':
              color = 'green'
              break
            case 'modkey':
              color = 'yellow'
              break
            case 'combokey':
              color = 'orange'
              break
            case 'direct':
              color = 'purple'
              break
            case 'taptoggle':
              color = 'olive'
              break
            case 'setdefaultlayer':
              color = 'red'
              break
            case 'normal':
            default:
              color = 'grey'
          }
          return (
            <Menu.Item key={k.value} color={color} name={k.value} active={activeKeyType === k.value} onClick={setActiveKeyType.bind(this, k.value)}>
              {k.display}
            </Menu.Item>
          )
        })}

      </Menu>
    )
  }
}
