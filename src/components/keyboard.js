import React from 'react'
import Key from './key'
import './keyboard.scss'

export default ({ keymap }) => {
  console.log(keymap)
  return (
    <div className='keyboard'>
      {keymap.map((r, i) => {
        return (
          <div className='row' key={`r${i}`}>
            {keymap[i].map(k => {
              return k.type !== 'nodisplay' && <Key key={k.id} {...k}/>
            })}
          </div>
        )
      })}
    </div>
  )
}
