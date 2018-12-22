import React from 'react'
import Key from './key'
import Led from './led'
import { config } from '../data/config'

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
  scaleFactor,
  setKey
}) => {

  let activeLayerIndex = 0
  const keymap = config[activeBoard].keymap
  const scale = config[activeBoard].ui.scale * scaleFactor
  const activeLayerData = layers.find((l, i) => {
    if (l.id === activeLayer) {
      activeLayerIndex = i
      return true
    }
    return false
  })
  const keys = keymap(activeLayerData.keys, zones)

  return (
    <div>
      <div style={{ textAlign: 'left' }}>
        {indicators.map((d, i) => {
          return (
            <Led
              key={`led-${i}`}
              id={i}
              data={d}
              scale={scale}
              activeLayerIndex={activeLayerIndex}
              addIndicator={addIndicator}
              updateIndicator={updateIndicator}
              deleteIndicator={deleteIndicator}
            />
          )
        })}
      </div>
      <div style={{
        maxWidth: 'fit-content',
        minWidth: 'max-content'
      }}>
        {keys.map((r, i) => {
          return (
            <div key={`r${i}`} style={{
              textAlign: 'left',
              position: 'relative'
            }}>
              {keys[i].map(k => {
                return k.type !== 'nodisplay' && (
                  <Key
                    key={k.id}
                    activeKeyType={activeKeyType}
                    setKey={setKey}
                    scale={scale}
                    {...k}
                  />
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}
