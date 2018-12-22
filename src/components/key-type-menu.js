import React, { Component } from 'react'
import { Menu, Popup } from 'semantic-ui-react'
import { KEY_ACTIONS } from '../data/keys'
import { getColor } from '../utils/colors'

export default class extends Component {

  render() {
    const { activeKeyType, setActiveKeyType } = this.props
    return (
      <Menu icon fluid inverted widths={KEY_ACTIONS.length} style={{
        position: 'relative',
        top: -20
      }}>

        {KEY_ACTIONS.map(k => {
          let color = getColor(k.value).color
          const item = (
            <Menu.Item
            key={k.value}
            color={color}
            name={k.value}
            active={activeKeyType === k.value}
            onClick={setActiveKeyType.bind(this, k.value)}>
              <span style={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                padding: '0 4px'
              }}>
                {k.display}
              </span>
            </Menu.Item>
          )
          if (k.tooltip) {
            return (
              <Popup
                inverted
                key={k.value}
                position='bottom center'
                trigger={item}
                content={k.tooltip}
              />
            )
          }
          return item
        })}

      </Menu>
    )
  }
}
