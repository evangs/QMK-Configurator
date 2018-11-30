import React, { Component } from 'react'
import { Icon, Menu } from 'semantic-ui-react'
import { KEY_TYPES } from '../data/keys'

export default class extends Component {

  state = { activeItem: 'normal' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu icon fluid inverted widths={KEY_TYPES.length} style={{
        position: 'relative',
        top: -20
      }}>

        {KEY_TYPES.map(k => {
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
            <Menu.Item key={k.value} color={color} name={k.value} active={activeItem === k.value} onClick={this.handleItemClick}>
              {k.display}
            </Menu.Item>
          )
        })}

      </Menu>
    )
  }
}
