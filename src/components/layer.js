import React, { Component } from 'react'
import * as d3 from 'd3'
import colors from '../utils/colors'
import { config } from '../data/config'

export default class extends Component {

  componentWillReceiveProps (nextProps) {
    this.svg.remove()
    this.update(nextProps)
  }

  componentDidMount() {
    this.update(this.props)
  }

  update (props) {
    const { layerId, keys, activeBoard, zones } = props
    const scaleFactor = config[activeBoard].ui.thumbScale
    const padding = 0
    const svg = d3.select(`#layer-${layerId}`)

    const keymap = config[activeBoard].keymap
    let data = keymap(keys, zones)

    console.log(data)

    // Filter unused keys
    data = data.map(d => {
      const clone = d.slice(0).filter(function(x){ return x.shape !== undefined })
      const afters = []
      clone.forEach(x => {
        switch (x.shape) {
          case 'kJIS':
          case 'kISO':
            afters.push(Object.assign({}, x, { shape: `${x.shape}After` }))
        }
      })
      return clone.concat(afters)
    })

    const getShape = shape => {
      switch (shape) {
        case 'kISO':
          return 150
        case 'kJIS':
          return 150
        case 'k175stepped':
          return 175
        case 'kISOAfter':
          return 125
        case 'kJISAfter':
          return 100
        case 'k200v':
          return 100
        default:
          return parseInt(shape.substr(1), 10)
      }
    }

    // Create svg
    let pxFromLeft = 0
    this.svg = svg.selectAll('rect')
      .data(data)
      .enter()
      .append('g')
      .each(function(d, i){
        // Reset pixels from left counter
        pxFromLeft = 0

        d3.select(this)
          .selectAll('rect')
          .data(d)
          .enter()
          .append('path')
          .attr('d', function(d) {

            switch (d.shape) {
              case 'kISOAfter':
              case 'kJISAfter': {
                const oldPxFromLeft = pxFromLeft - getShape(d.shape)
                pxFromLeft += getShape(d.shape)
                const width = getShape(d.shape) / scaleFactor
                const height = (100 / scaleFactor) + 2
                const radius = 2
                const x =  (oldPxFromLeft / scaleFactor)
                const y = (((i + 1) * 100) / scaleFactor) + (height - 4)
                return bottomRoundedRect(x, y, width, height, radius)
              }
              default: {
                const oldPxFromLeft = pxFromLeft
                pxFromLeft += getShape(d.shape)
                const x =  oldPxFromLeft / scaleFactor
                const y = (((i + 1) * 100) / scaleFactor)
                const width = getShape(d.shape) / scaleFactor
                const height = d.shape === 'k200v' ? 200 / scaleFactor : 100 / scaleFactor
                const radius = 2
                return roundedRect(x, y, width, height, radius)
              }
            }
          })
          .attr('stroke', 'black')
          .attr('stroke-dasharray', function (d) {
            switch (d.shape) {
              case 'kISOAfter':
                return `0,${125 / scaleFactor}, ${((200 + 4) / scaleFactor)}`
              case 'kJISAfter':
                return `0,${100 / scaleFactor},${((200 + 4) / scaleFactor)}`
              default:
                return ''
            }
          })
          .attr('fill', function (d) {
            switch (d.type) {
              case 'momentary':
                return colors.teal
              case 'toggle':
                return colors.violet
              case 'tapkey':
                return colors.green
              case 'modkey':
                return colors.yellow
              case 'combokey':
                return colors.orange
              case 'direct':
                return colors.purple
              case 'taptoggle':
                return colors.olive
              case 'setdefaultlayer':
                return colors.red
              case 'normal':
              default:
                return colors.grey
            }
          })
      })
  }

  render () {
    const { layerId } = this.props
    return (
      <svg
        id={`layer-${layerId}`}
        width='200px'
        height='100px'>
      </svg>
    )
  }

}

const bottomRoundedRect = (x, y, width, height, radius) => {
  return "M" + x + "," + y
   + "h" + width
   + "v" + (height - radius)
   + "a" + radius + "," + radius + " 0 0 1 " + -radius + "," + radius
   + "h" + (radius * 2 - width)
   + "a" + radius + "," + radius + " 0 0 1 " + -radius + "," + -radius
   + "v" + (radius - height)
   + "z"
}

const roundedRect = (x, y, width, height, radius) => {
  return "M" + (x + radius) + "," + y
  + "h" + (width - 2 * radius)
  + "a" + radius + "," + radius + " 0 0 1 " + radius + "," + radius
  + "v" + (height - 2 * radius)
  + "a" + radius + "," + radius + " 0 0 1 " + -radius + "," + radius
  + "h" + (radius * 2 - width)
  + "a" + radius + "," + radius + " 0 0 1 " + -radius + "," + -radius
  + "v" + (radius * 2 - height)
  + "a" + radius + "," + radius + " 0 0 1 " + radius + "," + -radius
  + "z"
}
