import React from 'react'
import { Responsive } from 'semantic-ui-react'

export default ({ children }) => {
  return (
    <div>
      <Responsive maxWidth={1200}>
        {React.Children.map(children, child =>
          React.cloneElement(child, { scaleFactor: 0.9 })
        )}
      </Responsive>
      <Responsive minWidth={1201}>
        {React.Children.map(children, child =>
          React.cloneElement(child, { scaleFactor: 1 })
        )}
      </Responsive>
    </div>
  )
}
