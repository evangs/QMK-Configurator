import React, { Component } from 'react'
import './key.scss'
import { KEY_DISPLAY_MAP, KEY_TYPES } from '../data/keys'
import colors from '../utils/colors'

export default class extends Component {

  constructor (props) {
    super(props)
    this.state = { hover: false }
    this.onMouseEnter = this._onMouseEnter.bind(this)
    this.onMouseOut = this._onMouseOut.bind(this)
  }

  render () {
    const { type, shape, value } = this.props
    const { hover } = this.state

    let background
    switch (type) {
      case 'momentary':
        background = colors.teal
        break
      case 'toggle':
        background = colors.violet
        break
      case 'tapkey':
        background = colors.green
        break
      case 'modkey':
        background = colors.yellow
        break
      case 'combokey':
        background = colors.orange
        break
      case 'direct':
        background = colors.purple
        break
      case 'taptoggle':
        background = colors.olive
        break
      case 'setdefaultlayer':
        background = colors.red
        break
      case 'normal':
      default:
        background = colors.grey
    }
    return (
      <div
        className={`key ${shape}`}
        style={{
          background,
          borderColor: hover ? colors.secondaryColor : colors.dark
        }}
        onMouseEnter={this.onMouseEnter}
        onMouseOut={this.onMouseOut}>
        {KEY_DISPLAY_MAP[value] || value}</div>
    )
  }

  _onMouseEnter () {
    this.setState({ hover: true })
  }

  _onMouseOut () {
    this.setState({ hover: false })
  }

}
