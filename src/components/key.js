import React, { Component } from 'react'
import { Textfit } from 'react-textfit'
import { Container,
  Segment,
  Modal,
  Header,
  Button,
  Icon,
  Popup
} from 'semantic-ui-react'
import { KEYS, KEY_DISPLAY_MAP, KEY_ACTIONS, KEYBOARD_INPUT_MAP } from '../data/keys'
import colors, { getColor } from '../utils/colors'
import getKeyStyle from '../utils/key-styles'

const KEY_UNIT_SIZE = 75
const KEY_BORDER_SIZE = 3
const KEY_MARGIN_SIZE = 10

export default class extends Component {

  constructor (props) {
    super(props)
    const { activeKeyType } = props
    this.state = {
      hover: false,
      open: false,
      shake: false,
      primarySet: false,
      tmp: null
    }

    this.keys = KEYS.filter(k => k.visible.indexOf(activeKeyType) > -1)
    this.action = KEY_ACTIONS.find(a => a.value === activeKeyType)

    this.primaryKeys = filterByType('primary', this.keys, activeKeyType)
    this.secondaryKeys = filterByType('secondary', this.keys, activeKeyType)

    this.allPrimaryKeys = this.primaryKeys.reduce((a, k) => {
      return a = a.concat(k.keys.map(j => j.value))
    }, [])

    this.allSecondaryKeys = this.secondaryKeys.reduce((a, k) => {
      return a = a.concat(k.keys.map(j => j.value))
    }, [])

    this.onMouseEnter = this._onMouseEnter.bind(this)
    this.onMouseOut = this._onMouseOut.bind(this)
    this.openModal = this._openModal.bind(this)
    this.closeModal = this._closeModal.bind(this)
    this.onKeyUp = this._onKeyUp.bind(this)
    this.onKeyClick = this._onKeyClick.bind(this)
  }

  componentWillReceiveProps ({ activeKeyType }) {
    if (activeKeyType !== this.props.activeKeyType) {
      this.keys = KEYS.filter(k => k.visible.indexOf(activeKeyType) > -1)
      this.action = KEY_ACTIONS.find(a => a.value === activeKeyType)

      this.primaryKeys = filterByType('primary', this.keys, activeKeyType)
      this.secondaryKeys = filterByType('secondary', this.keys, activeKeyType)

      this.allPrimaryKeys = this.primaryKeys.reduce((a, k) => {
        return a = a.concat(k.keys.map(j => j.value))
      }, [])

      this.allSecondaryKeys = this.secondaryKeys.reduce((a, k) => {
        return a = a.concat(k.keys.map(j => j.value))
      }, [])
    }
  }

  render () {
    const { type, shape, value, secondary, activeKeyType, scaleFactor } = this.props
    const {
      hover,
      open,
      shake,
      primarySet,
      tmp
    } = this.state

    const background = getColor(type).hex
    const activeColor = getColor(activeKeyType)

    let activeKeyColor = activeColor.hex
    let selectedColor = activeColor.color
    let errorColor = activeColor.errorColor

    let primaryDisplay = KEY_DISPLAY_MAP[value] || value
    let secondaryDisplay = KEY_DISPLAY_MAP[secondary] || secondary || ''

    let afterElement
    switch (shape) {
      case 'kISO':
      case 'kJIS':
      case 'k175stepped':
        afterElement = <div style={getKeyStyle(`${shape}After`, type, hover, scaleFactor)} />
        break
      default:
        // NO-OP
    }

    return (
      <Modal
        basic
        size='fullscreen'
        open={open}
        trigger={
          <div
            style={getKeyStyle(shape, type, hover, scaleFactor)}
            onMouseEnter={() => this.onMouseEnter(shape)}
            onMouseMove={() => this.onMouseEnter(shape)}
            onMouseOut={() => this.onMouseOut(shape)}
            onClick={this.openModal}>
            <div style={{
              lineHeight: `${KEY_UNIT_SIZE - (KEY_BORDER_SIZE * 2) - (KEY_MARGIN_SIZE * 2)}px`,
              margin: KEY_MARGIN_SIZE,
              pointerEvents: 'none'
            }}>
              <Textfit
                mode='single'
                max={28}
                min={8}>
                {primaryDisplay[0] === '!' && primaryDisplay[1] === '!' ? <Icon name={primaryDisplay.replace('!!', '')} /> : primaryDisplay}
                {secondaryDisplay && ' + ' }
                {secondaryDisplay && (
                   secondaryDisplay[0] === '!' && secondaryDisplay[1] === '!' ? <Icon name={secondaryDisplay.replace('!!', '')} /> : secondaryDisplay
                )}
              </Textfit>
            </div>
            {afterElement && afterElement}
          </div>
        }
      >
        <Modal.Content className={shake ? 'shake' : ''} style={{ justifyContent: 'flex-start' }}>
          <style dangerouslySetInnerHTML={{__html: `
            .ui.dimmer { background-color: ${getColor(activeKeyType).hex}!important }
          `}} />
          <div style={{ position: 'absolute', left: 0, top: 0, display: 'flex' }}>
            <h1>{this.action.display}</h1>
            <p style={{ marginLeft: 10, lineHeight: '48px' }}>{this.action.tooltip}</p>
          </div>
          <div style={{ position: 'absolute', right: '1rem', top: 0 }}>
            <Button icon inverted basic color='red' onClick={this.closeModal}>
              <Icon name='close' />
            </Button>
          </div>
          <Container textAlign="center" style={{
            marginBottom: 50,
            marginTop: 50
          }}>
            <div style={{
              textAlign: 'center',
              opacity: shake ? 1 : 0.5
            }}>
              <Icon name={shake ? 'close' : 'keyboard outline'} size='massive' color={shake ? errorColor : undefined} />
              <Header inverted
                color={shake ? errorColor : undefined}
                style={{ marginTop: 0 }}
              >
                {shake ? 'Key not available' : 'Press a key or select one below'}
              </Header>
            </div>
          </Container>
          <div style={{ display: 'flex' }}>
            {this.primaryKeys.length > 0 && <Column
              type='primary'
              keys={this.primaryKeys}
              activeKeyType={activeKeyType}
              onClick={this.onKeyClick}
              color={selectedColor}
              disabled={primarySet}
              value={value}
              tmp={tmp}
            />}
            {this.secondaryKeys.length > 0 && <Column
              type='secondary'
              keys={this.secondaryKeys}
              activeKeyType={activeKeyType}
              onClick={this.onKeyClick}
              color={selectedColor}
              disabled={!primarySet}
              value={secondary}
              tmp={tmp}
            />}
          </div>
        </Modal.Content>
      </Modal>
    )
  }

  _onMouseEnter (shape) {
    if (!this.state.hover) {
      this.setState({ hover: true })
    }
  }

  _onMouseOut (shape) {
    this.setState({ hover: false })
  }

  _openModal () {
    this.setState({ open: true })
    window.addEventListener('keyup', this.onKeyUp)
  }

  _closeModal () {
    this.setState({
      hover: false,
      open: false,
      shake: false,
      primarySet: false,
      tmp: null
    })
    window.removeEventListener('keyup', this.onKeyUp)
  }

  _onKeyUp (e) {
    const inputValue = KEYBOARD_INPUT_MAP[parseInt(`${e.keyCode}${e.location}${e.shiftKey ? 1 : 0}`, 10)]
    if (!inputValue) {
      this.badKey()
      return
    }

    const { primarySet } = this.state
    const {
      id,
      shape,
      value,
      activeKeyType,
      setKey
    } = this.props

    const key = {
      id,
      value: null,
      type: activeKeyType,
      secondary: null,
      shape
    }

    if (this.secondaryKeys.length === 0) {
      if (this.allPrimaryKeys.indexOf(inputValue) > -1) {
        key.value = inputValue
        setKey(key)
        this.closeModal()
      } else {
        this.badKey()
      }
    } else {
      if (primarySet) {
        if (this.allSecondaryKeys.indexOf(inputValue) > -1) {
          this.setState({ primarySet: false, tmp: null })
          key.value = value
          key.secondary = inputValue
          setKey(key)
          this.closeModal()
        } else {
          this.badKey()
        }
      } else {
        if (this.allPrimaryKeys.indexOf(inputValue) > -1) {
          this.setState({ primarySet: true, tmp: inputValue })
        } else {
          this.badKey()
        }
      }
    }
  }

  _onKeyClick (e, k) {
    const { primarySet, tmp } = this.state
    const {
      id,
      shape,
      value,
      activeKeyType,
      setKey
    } = this.props

    const key = {
      id,
      value: null,
      type: activeKeyType,
      secondary: null,
      shape
    }

    if (this.secondaryKeys.length === 0) {
      key.value = k.value
      setKey(key)
      this.closeModal()
    } else {
      if (primarySet) {
        key.value = tmp
        key.secondary = k.value
        setKey(key)
        this.setState({ primarySet: false, tmp: null })
        this.closeModal()
      } else {
        this.setState({ primarySet: true, tmp: k.value })
      }
    }
  }

  badKey() {
    this.setState({ shake: true }, () => {
      setTimeout(() => {
        this.setState({ shake: false })
      }, 400)
    })
  }
}

const filterByType = (type, keys, activeKeyType) => {
  return keys.filter(g => {
    let updateType = g.updateType
    if (typeof updateType === 'object') {
      updateType = updateType[activeKeyType]
    }
    return updateType === type
  })
}

const Column = ({
  type,
  keys,
  activeKeyType,
  onClick,
  disabled,
  color,
  value,
  tmp
}) => {
  return (
    <div style={{ padding: 20, flex: '1 1 0' }}>
      <Segment inverted>
        <Header content={type.toUpperCase()} />
      </Segment>
      {keys.map((g, i) => (
          <div key={`${g.label}-${i}`} style={{ marginBottom: 10 }}>
          <h3>{g.label}</h3>
            {g.keys.map((k, j) => {
              // Calculate button color
              let buttonColor = (value === k.value && !tmp) || tmp === k.value ? color : undefined
              const button = (
                <Button icon
                key={`key-${j}`}
                disabled={disabled || value === k.value}
                color={buttonColor}
                style={{
                  minWidth: 50,
                  marginBottom: 5
                }} onClick={(e) => onClick(e, k)}>
                  {k.display[0] === '!' && k.display[1] === '!' ? <Icon name={k.display.replace('!!', '')} color='black' /> : k.display}
                </Button>
              )
              if (k.tooltip) {
                return <Popup key={`key-${j}`} inverted trigger={button} content={k.tooltip}/>
              } else {
                return button
              }
            })}
          </div>
        ))}
    </div>
  )
}
