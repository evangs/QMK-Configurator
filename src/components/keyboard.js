import React from 'react'
import Key from './key'
import { config } from '../data/config'
import colors, { getColor } from '../utils/colors'

export default ({ layers, zones, activeBoard, activeLayer, activeKeyType, setKey }) => {

  const keymap = config[activeBoard].keymap
  const keys = keymap(layers.find(l => l.id === activeLayer).keys, zones)
  const trnsKeys = keymap(layers[0].keys, zones)

  return (
    <div style={{ maxWidth: 'fit-content' }}>
      {keys.map((r, i) => {
        return (
          <div key={`r${i}`} style={{
            textAlign: 'left',
            position: 'relative'
          }}>
            {keys[i].map(k => {
              const trnsValue = trnsKeys[i].find(l => l.id === k.id).value

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
  )
}
