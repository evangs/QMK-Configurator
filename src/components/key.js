import React, { Component } from 'react'
import './key.scss'
import { Container,
  Segment,
  Modal,
  Header,
  Button,
  Icon
} from 'semantic-ui-react'
import { KEYS, KEY_DISPLAY_MAP, KEY_ACTIONS, KEYBOARD_INPUT_MAP } from '../data/keys'
import colors from '../utils/colors'

export default class extends Component {

  constructor (props) {
    super(props)
    console.log(props)
    const { type, value, secondary, activeKeyType } = props
    this.state = {
      hover: false,
      open: false,
      shake: false,
      keyType: type,
      primaryDisplay: KEY_DISPLAY_MAP[value] || value,
      primaryValue: value,
      primarySet: false,
      secondaryDisplay: KEY_DISPLAY_MAP[secondary] || secondary || '',
      secondaryValue: secondary || ''
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

  componentWillReceiveProps (nextProps) {
    const { activeKeyType } = nextProps
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

  render () {
    const { shape, value, activeKeyType } = this.props
    const {
      hover,
      open,
      shake,
      keyType,
      primaryDisplay,
      secondaryDisplay,
      primarySet,
      primaryValue
    } = this.state

    let background
    switch (keyType) {
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

    let activeKeyColor
    let selectedColor
    switch (activeKeyType) {
      case 'momentary':
        activeKeyColor = colors.teal
        selectedColor = 'teal'
        break
      case 'toggle':
        activeKeyColor = colors.violet
        selectedColor = 'violet'
        break
      case 'tapkey':
        activeKeyColor = colors.green
        selectedColor = 'green'
        break
      case 'modkey':
        activeKeyColor = colors.yellow
        selectedColor = 'yellow'
        break
      case 'combokey':
        activeKeyColor = colors.orange
        selectedColor = 'orange'
        break
      case 'direct':
        activeKeyColor = colors.purple
        selectedColor = 'purple'
        break
      case 'taptoggle':
        activeKeyColor = colors.olive
        selectedColor = 'olive'
        break
      case 'setdefaultlayer':
        activeKeyColor = colors.red
        selectedColor = 'red'
        break
      case 'normal':
      default:
        activeKeyColor = colors.grey
        selectedColor = 'grey'
    }

    return (
      <Modal
        basic
        size='fullscreen'
        open={open}
        trigger={
          <div
            className={`key ${shape}`}
            style={{
              background,
              borderColor: hover ? colors.secondaryColor : colors.dark
            }}
            onMouseEnter={this.onMouseEnter}
            onMouseOut={this.onMouseOut}
            onClick={this.openModal}>
            <p>
              {primaryDisplay[0] === '!' && primaryDisplay[1] === '!' ? <Icon name={primaryDisplay.replace('!!', '')} /> : primaryDisplay}
            </p>
          </div>
        }
      >
        <style dangerouslySetInnerHTML={{__html: `
          .ui.dimmer { background-color: ${activeKeyColor}!important }
      `}} />
        <Modal.Content className={shake ? 'shake' : ''}>
          <Container textAlign="center" style={{ marginBottom: 50 }}>
            <div style={{
              textAlign: 'center',
              opacity: 0.5
            }}>
              <Icon name='keyboard outline' size='massive' />
              <p>Press a key or select one below</p>
            </div>
            <div style={{ position: 'absolute', left: 0, top: 0, display: 'flex' }}>
              <h1>{this.action.display}</h1>
              <p style={{ marginLeft: 10, lineHeight: '48px' }}>{this.action.tooltip}</p>
            </div>
            <div style={{ position: 'absolute', right: 0, top: 0 }}>
              <Button icon inverted basic color='red' onClick={this.closeModal}>
                <Icon name='close' />
              </Button>
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
              primaryValue={primaryValue}
            />}
            {this.secondaryKeys.length > 0 && <Column
              type='secondary'
              keys={this.secondaryKeys}
              activeKeyType={activeKeyType}
              onClick={this.onKeyClick}
              color={selectedColor}
            />}
          </div>
        </Modal.Content>
      </Modal>
    )
  }

  _onMouseEnter () {
    this.setState({ hover: true })
  }

  _onMouseOut () {
    this.setState({ hover: false })
  }

  _openModal () {
    this.setState({ open: true })
    window.addEventListener('keyup', this.onKeyUp)
  }

  _closeModal () {
    this.setState({ open: false })
    window.removeEventListener('keyup', this.onKeyUp)
  }

  _onKeyUp (e) {
    const value = KEYBOARD_INPUT_MAP[parseInt(`${e.keyCode}${e.location}${e.shiftKey ? 1 : 0}`, 10)]
    if (!value) {
      this.badKey()
      return
    }

    const display = KEY_DISPLAY_MAP[value] || value
    const { primarySet } = this.state
    const { activeKeyType } = this.props

    if (this.secondaryKeys.length === 0) {
      if (this.allPrimaryKeys.indexOf(value) > -1) {
        this.setState({
          primaryDisplay: display,
          primaryValue: value,
          keyType: activeKeyType
        })
        this.closeModal()
      } else {
        this.badKey()
      }
    } else {
      if (primarySet) {
        if (this.allSecondaryKeys.indexOf(value) > -1) {
          this.setState({
            secondaryDisplay: display,
            secondaryValue: value,
            primarySet: false,
            keyType: activeKeyType
          })
          this.closeModal()
        } else {
          this.badKey()
        }
      } else {
        if (this.allPrimaryKeys.indexOf(value) > -1) {
          this.setState({
            primaryDisplay: display,
            primaryValue: value,
            primarySet: true,
            keyType: activeKeyType
          })
        } else {
          this.badKey()
        }
      }
    }
  }

  _onKeyClick (e, key) {
    const { primarySet } = this.state
    const { activeKeyType } = this.props
    if (this.secondaryKeys.length === 0) {
      this.setState({
        primaryDisplay: key.display,
        primaryValue: key.value,
        keyType: activeKeyType
      })
      this.closeModal()
    } else {
      if (primarySet) {
        this.setState({
          secondaryDisplay: key.display,
          secondaryValue: key.value,
          primarySet: false,
          keyType: activeKeyType
        })
        this.closeModal()
      } else {
        this.setState({
          primaryDisplay: key.display,
          primaryValue: key.value,
          primarySet: true,
          keyType: activeKeyType
        })
      }
    }
  }

  badKey() {
    this.setState({ shake: true }, () => {
      setTimeout(() => {
        this.setState({ shake: false })
      }, 200)
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
  primaryValue,
  secondaryValue
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
              console.log(type, k.value, secondaryValue)
              let buttonColor = false
              switch (type) {
                case 'primary':
                  buttonColor = primaryValue === k.value ? color : false
                  break
                case 'secondary':
                  buttonColor = secondaryValue === k.value ? color : false
                  break
              }
              return (
                <Button icon
                  key={`key-${j}`}
                  disabled={disabled || primaryValue === k.value}
                  color={buttonColor}
                  style={{
                    minWidth: 50,
                    marginBottom: 5
                }} onClick={(e) => onClick(e, k)}>
                  {k.display[0] === '!' && k.display[1] === '!' ? <Icon name={k.display.replace('!!', '')} color='black' /> : k.display}
                </Button>
              )
            })}
          </div>
        ))}
    </div>
  )
}
