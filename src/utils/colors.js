const colors = {
  primaryColor   : '#00B5AD',
  secondaryColor : '#A0A0A0',
  red            : '#DB2828',
  orange         : '#F2711C',
  yellow         : '#FBBD08',
  olive          : '#B5CC18',
  green          : '#21BA45',
  teal           : '#00B5AD',
  blue           : '#2185D0',
  violet         : '#6435C9',
  purple         : '#A333C8',
  pink           : '#E03997',
  brown          : '#A5673F',
  grey           : '#767676',
  black          : '#1B1C1D',
  dark           : '#0f1010'
}

export const getColor = activeKeyType => {
  let hex
  let color
  let errorColor = 'red'
  switch (activeKeyType) {
    case 'momentary':
      hex = colors.teal
      color = 'teal'
      break
    case 'toggle':
      hex = colors.violet
      color = 'violet'
      break
    case 'tapkey':
      hex = colors.green
      color = 'green'
      break
    case 'modkey':
      hex = colors.yellow
      color = 'yellow'
      break
    case 'combokey':
      hex = colors.orange
      color = 'orange'
      errorColor = undefined
      break
    case 'direct':
      hex = colors.purple
      color = 'purple'
      break
    case 'taptoggle':
      hex = colors.olive
      color = 'olive'
      break
    case 'setdefaultlayer':
      hex = colors.red
      color = 'red'
      errorColor = undefined
      break
    case 'normal':
    default:
      hex = colors.grey
      color = 'grey'
  }
  return { hex, color, errorColor }
}

export default colors
