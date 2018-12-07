import React from 'react'
import Key from './key'
import Led from './led'
import { config } from '../data/config'
import colors, { getColor } from '../utils/colors'

export default ({
  layers,
  zones,
  indicators,
  activeBoard,
  activeLayer,
  activeKeyType,
  addIndicator,
  updateIndicator,
  deleteIndicator,
  setKey
}) => {

  let activeLayerIndex = 0
  const keymap = config[activeBoard].keymap
  const scaleFactor = config[activeBoard].ui.scale
  const activeLayerData = layers.find((l, i) => {
    if (l.id === activeLayer) {
      activeLayerIndex = i
      return true
    }
    return false
  })
  const keys = keymap(activeLayerData.keys, zones)
  const trnsKeys = layers.map(l => keymap(l.keys, zones))

  return (
    <div>
      <div style={{ textAlign: 'left' }}>
        {indicators.map((d, i) => {
          return (
            <Led
              key={`led-${i}`}
              id={i}
              data={d}
              scaleFactor={scaleFactor}
              activeLayerIndex={activeLayerIndex}
              addIndicator={addIndicator}
              updateIndicator={updateIndicator}
              deleteIndicator={deleteIndicator}
            />
          )
        })}
      </div>
      <div style={{ maxWidth: 'fit-content' }}>
        {keys.map((r, i) => {
          return (
            <div key={`r${i}`} style={{
              textAlign: 'left',
              position: 'relative'
            }}>
              {keys[i].map(k => {
                const trnsValue = k.value === 'TRNS' ? getTransparentKey(k.id, trnsKeys, activeLayerIndex) : ''
                return k.type !== 'nodisplay' && (
                  <Key
                    key={k.id}
                    activeKeyType={activeKeyType}
                    setKey={setKey}
                    scaleFactor={config[activeBoard].ui.scale}
                    trnsValue={trnsValue}
                    {...k} />
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}

const getTransparentKey = (id, keys, activeLayerIndex) => {
  const layers = []
  keys.forEach(l => {
    l.forEach(r => {
      const key = r.find(k => k.id === id)
      if (key) {
        console.log(key)
        layers.push(key.value)
      }
    })
  })

  let i = 0
  const recurse = () => {
    console.log(i)
    const trnsValue = layers[activeLayerIndex - i]
    if (trnsValue === 'TRNS') {
      i++
      return recurse()
    } else {
      return trnsValue
    }
  }
  return recurse()
}
