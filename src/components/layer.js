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

    // Filter unused keys
    data = data.map(d => {
      const clone = d.slice(0)
      return clone.filter(function(x){ return x.shape !== undefined })
    })

    const getShape = shape => {
      shape = shape.substr(1)
      return parseInt(shape, 10)
    }

    // Create svg
    let pxFromLeft = 0
    this.svg = svg.selectAll('rect')
      .data(data)
      .enter()
      .append('g')
      .each(function(d,i){
        // reset pixels from left counter
        pxFromLeft = 0
        d3.select(this)
          .selectAll('rect')
          .data(d)
          .enter()
          .append('rect')
          .attr('x', function(d,j) {
            const oldPxFromLeft = pxFromLeft
            // update pxFromLeft value
            pxFromLeft += (getShape(d.shape) + padding)
            return oldPxFromLeft / scaleFactor
          })
          .attr('y', function() { return i*100 / scaleFactor })
          .attr('width', function(d) {return getShape(d.shape) / scaleFactor })
          .attr('height', function() { return 90 / scaleFactor })
          .attr('stroke', 'black')
          .attr('rx', 2)
          .attr('ry', 2)
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
        height='75px'>
      </svg>
    )
  }

}
