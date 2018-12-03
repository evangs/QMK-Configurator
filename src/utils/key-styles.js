import chroma from 'chroma-js'
import colors, { getColor } from './colors'

const KEY_BORDER_SIZE = 3
const KEY_BORDER_COLOR = colors.dark
const KEY_BORDER_ACTIVE = colors.secondaryColor

export default function (shape, type, hover, unitSize = 75) {
  return Object.assign(
    {},
    key(),
    shapes[shape](unitSize),
    background(shape, type),
    keyHover(hover)
  )
}

const key = () => ({
  display: 'inline-block',
  borderRadius: 10,
  boxSizing: 'border-box',
  border: `${KEY_BORDER_SIZE}px solid ${KEY_BORDER_COLOR}`,
  verticalAlign: 'bottom',
  cursor: 'pointer',
  textAlign: 'center'
})

export const keyHover = (hover) => ({
  borderColor: hover ? KEY_BORDER_ACTIVE : KEY_BORDER_COLOR
})

const background = (shape, type) => ({
  backgroundColor: shape.indexOf('steppedAfter') > -1 ? chroma(getColor(type).hex).darken().hex() : getColor(type).hex
})

const k100 = unitSize => ({
  width: unitSize,
  height: unitSize,
  borderRight: `${KEY_BORDER_SIZE}px solid ${KEY_BORDER_COLOR}`
})

const k125 = unitSize => ({
  width: unitSize + (unitSize * 0.25),
  height: unitSize,
  borderRight: `${KEY_BORDER_SIZE}px solid ${KEY_BORDER_COLOR}`
})

const k150 = unitSize => ({
  width: unitSize + (unitSize * 0.50),
  height: unitSize,
  borderRight: `${KEY_BORDER_SIZE}px solid ${KEY_BORDER_COLOR}`
})

const k175 = unitSize => ({
  width: unitSize + (unitSize * 0.75),
  height: unitSize,
  borderRight: `${KEY_BORDER_SIZE}px solid ${KEY_BORDER_COLOR}`
})

const k200 = unitSize => ({
  width: unitSize * 2,
  height: unitSize,
  borderRight: `${KEY_BORDER_SIZE}px solid ${KEY_BORDER_COLOR}`
})

const k225 = unitSize => ({
  width: unitSize + (unitSize * 1.25),
  height: unitSize,
  borderRight: `${KEY_BORDER_SIZE}px solid ${KEY_BORDER_COLOR}`
})

const k275 = unitSize => ({
  width: unitSize + (unitSize * 1.75),
  height: unitSize,
  borderRight: `${KEY_BORDER_SIZE}px solid ${KEY_BORDER_COLOR}`
})

const k200v = unitSize => ({
  width: unitSize,
  height: unitSize * 2
  // margin-bottom: -56px
})

const k625 = unitSize => ({
  width: unitSize + (unitSize * 5.25),
  height: unitSize,
  borderRight: `${KEY_BORDER_SIZE}px solid ${KEY_BORDER_COLOR}`
})

const k700 = unitSize => ({
  width: unitSize * 7,
  height: unitSize,
  borderRight: `${KEY_BORDER_SIZE}px solid ${KEY_BORDER_COLOR}`
})

const kISO = unitSize => ({
  width: unitSize + (unitSize * 0.50),
  height: unitSize,
  borderRadius: '10px 10px 0 10px'
})

const kISOAfter = unitSize => ({
  width: unitSize + (unitSize * 0.25),
  height: unitSize + KEY_BORDER_SIZE,
  position: 'absolute',
  borderRadius: '0 0 10px 10px',
  bottom: unitSize * -1,
  borderTop: 'none',
  right: 0,
  zIndex: 1,
  cursor: 'pointer'
})

const kJIS = unitSize => ({
  width: unitSize + (unitSize * 0.50),
  height: unitSize,
  borderRadius: '10px 10px 0 10px'
})

const kJISAfter = unitSize => ({
  width: unitSize,
  height: unitSize + KEY_BORDER_SIZE,
  position: 'absolute',
  borderRadius: '0 0 10px 10px',
  borderTop: 'none',
  bottom: unitSize * -1,
  right: 0,
  zIndex: 1
})

const k175stepped = unitSize => ({
  width: unitSize + (unitSize * 0.75),
  height: unitSize,
  paddingRight: unitSize / 2,
  zIndex: 0
})

const k175steppedAfter = unitSize => ({
  width: (unitSize / 2) + KEY_BORDER_SIZE,
  height: unitSize,
  top: 0,
  left: unitSize + (unitSize * 0.25) - KEY_BORDER_SIZE,
  position: 'absolute',
  borderLeft: 0,
  borderRadius: '0 10px 10px 0',
  zIndex: 1
})

const shapes = {
  k100,
  k125,
  k150,
  k175,
  k200,
  k225,
  k275,
  k200v,
  k625,
  k700,
  kISO,
  kISOAfter,
  kJIS,
  kJISAfter,
  k175stepped,
  k175steppedAfter
}
