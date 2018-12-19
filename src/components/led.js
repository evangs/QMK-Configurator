import React, { Component } from 'react'
import { PhotoshopPicker, CustomPicker } from 'react-color'
import { EditableInput } from 'react-color/lib/components/common'
import color from 'react-color/lib/helpers/color'
import {
  Modal,
  Button,
  Icon,
  Popup,
  Container,
  Header,
  Table,
  Dropdown
} from 'semantic-ui-react'
import colors from '../utils/colors'
import { indicatorActions, indicatorMap } from '../data/indicators'

export default class extends Component {

  constructor (props) {
    super (props)

    let availableActions = indicatorActions.slice(0)
    props.data.forEach(d => {
      if (availableActions.indexOf(d.action) > -1) {
        availableActions.splice(availableActions.indexOf(d.action), 1)
      }
    })

    this.state = {
      open: false,
      availableActions
    }
  }

  componentWillReceiveProps (nextProps) {
    const availableActions = this.state.availableActions.slice(0)
    nextProps.data.forEach(d => {
      if (availableActions.indexOf(d.action) > -1) {
        availableActions.splice(availableActions.indexOf(d.action), 1)
      }
    })
    this.setState({ availableActions })
  }

  render () {
    const {
      id,
      scaleFactor,
      data,
      activeLayerIndex,
      addIndicator,
      updateIndicator,
      deleteIndicator
    } = this.props
    const { open, availableActions } = this.state

    let color = 'grey'
    const layerIndicator = data.filter(d => d.type === 'layer').find(d => {
      const str = d.action.substring(1)
      return parseInt(str, 10) === activeLayerIndex + 1
    })
    const powerIndicator = data.find(d => d.type === 'power')

    if (layerIndicator) {
      color = rgbToHex(layerIndicator.red, layerIndicator.green, layerIndicator.blue)
    } else if (powerIndicator) {
      color = rgbToHex(powerIndicator.red, powerIndicator.green, powerIndicator.blue)
    }

    return (
      <Modal open={open} basic size='large' trigger={
        <Popup inverted content={`Indicator ${id + 1}`} trigger={
          <Button icon basic style={{
            marginLeft: scaleFactor - (id === 0 ? 19 : 19 * 2),
            marginRight: 0
          }}
          onClick={() => { this.setState({ open: true })}}>
          <Icon name='circle' style={{ color }} />
          </Button>
        }/>
      }>
        { /** Modal Content */}
        <Modal.Content style={{ justifyContent: 'flex-start' }}>
          <style dangerouslySetInnerHTML={{__html: `
            .ui.dimmer { background-color: ${colors.secondaryColor}!important }
          `}} />

          {/** Title **/}
          <div style={{ position: 'absolute', left: 20, top: 20, display: 'flex' }}>
            <h1>{`Indicator ${id + 1}`}</h1>
          </div>

          {/** Close Button **/}
          <div style={{ position: 'absolute', right: '1rem', top: 20 }}>
            <Button icon inverted basic color='red' onClick={() => {
              this.setState({ open: false })
            }}>
              <Icon name='close' />
            </Button>
          </div>

          {/** List **/}
          <Container textAlign="center" fluid style={{
            display: 'flex',
            flexWrap: 'wrap',
            marginTop: 50,
            marginBottom: 50
          }}>
            {data.map(d => (
              <Color
                id={id}
                key={d.action}
                action={d.action}
                color={{ r: d.red, g: d.green, b: d.blue }}
                availableActions={availableActions}
                deleteIndicator={deleteIndicator}
                onChange={c => {
                  updateIndicator(id, {
                    red: c.rgb.r,
                    green: c.rgb.g,
                    blue: c.rgb.b,
                    action: d.action,
                    type: indicatorMap[d.action].type
                  })
                }}
              />)
            )
          }
            {/** Add Select **/}
            { availableActions.length > 0 &&
              <div style={{
                width: 170,
                height: 152,
                display: 'flex',
                flexDirection: 'column'
              }}>
                <Button
                  icon
                  basic
                  inverted
                  fluid
                  style={{ height: '100%' }}
                  onClick={() => {
                    const num = Math.round(0xffffff * Math.random())
                    const red = num >> 16
                    const green = num >> 8 & 255
                    const blue = num & 255
                    const action = availableActions[0]
                    const type = indicatorMap[action].type
                    addIndicator(id, { red, blue, green, action, type })
                  }}>
                  <Icon name='plus' />
                </Button>
              </div>
            }
          </Container>
        </Modal.Content>
      </Modal>
    )
  }
}


const Color = CustomPicker(class extends Component {

  constructor (props) {
    super(props)
    this.state = {
      open: false
    }
    this.selectedColor = null
  }

  render () {
    const {
      id,
      action,
      availableActions,
      hex,
      hsl,
      onChange,
      deleteIndicator
    } = this.props

    const { open } = this.state

    const handleChange = (hexCode, e) => {
      color.isValidHex(hexCode) && onChange({
        hex: hexCode,
        source: 'hex',
      }, e)
    }

    const styles = {
      card: {
        maxWidth: '170px',
        flex: '1 0 0',
        background: colors.white,
        boxShadow: '0 1px rgba(0,0,0,.1)',
        borderRadius: '4px',
        position: 'relative',
        marginRight: 20,
        marginBottom: 20
      },
      head: {
        height: '110px',
        background: hex,
        borderRadius: '4px 4px 0 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      },
      body: {
        padding: '10px',
      },
      label: {
        fontSize: '18px',
        color: color.getContrastingColor(hex),
        position: 'relative',
      },
      input: {
        width: '100%',
        fontSize: '12px',
        color: '#666',
        border: '0px',
        outline: 'none',
        height: '22px',
        boxShadow: `inset 0 0 0 1px ${colors.grey}`,
        borderRadius: '4px',
        padding: '0 7px',
        boxSizing: 'border-box',
      },
      edit: {
        position: 'absolute',
        top: 5,
        left: 5
      }
    }

    const actions = availableActions.slice(0).map(a => ({
      value: a,
      text: indicatorMap[a].description
    }))

    actions.unshift({ value: action, text: indicatorMap[action].description })

    return (
      <div style={styles.card}>

        <Modal
          open={open}
          style={{
            background: 'none',
            border: 'none',
            boxShadow: 'none'
          }}
          trigger={
          <div style={styles.head}>
            <div style={styles.edit}>
              <Icon
                name='edit'
                style={{
                  cursor: 'pointer',
                  position: 'absolute',
                  left: 2
                }}
                onClick={() => this.setState({ open: true })} />
              <Icon
                name='close'
                style={{
                  cursor: 'pointer',
                  position: 'absolute',
                  top: 2,
                  left: 142
                }}
                onClick={() => deleteIndicator(id)} />
            </div>
            <div style={styles.label}>
              <Dropdown
                inline
                scrolling
                options={actions}
                defaultValue={action}
                placeholder={indicatorMap[action].description} />
            </div>
          </div>
        }>
          <Modal.Content style={{
            margin: '0 auto',
            background: 'transparent',
            width: 'fit-content'
          }}>
            <PhotoshopPicker
              color={hsl}
              onChange={(selectedColor, e) =>  {
                this.selectedColor = selectedColor
              }}
              header={`Select color for ${indicatorMap[action].description} on Indicator LED ${id + 1}`}
              onAccept={e => {
                onChange(this.selectedColor)
                this.selectedColor = null
                this.setState({ open: false })
              }}
              onCancel={() => {
                this.selectedColor = null
                this.setState({ open: false })
              }}
              />
          </Modal.Content>
        </Modal>

        <div style={styles.body}>
          <EditableInput
            style={styles.input}
            value={hex}
            onChange={handleChange}
          />
        </div>
      </div>
    )
  }
})

function rgbToHex (r, g, b) {
  const componentToHex = (c) => {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b)
}
