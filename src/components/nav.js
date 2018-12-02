import React from 'react'
import {
  Menu,
  Container,
  Button,
  Dropdown,
  Image,
  Icon
} from 'semantic-ui-react'
import Layouts from './layouts'
import { config } from '../data/config'
import logo from '../logo.png'

export default ({ fixed, boards, activeBoard, layouts }) => {
  return (
    <Menu inverted style={{ margin: 0 }}>
      <Container>
        <Menu.Item as='div'>
          <Image size='mini' src={logo} style={{ marginRight: '1.5em', filter: 'brightness(10)' }} />
        </Menu.Item>

        <Menu.Menu position='right'>
          <Dropdown item simple text={config[activeBoard].config.product}>
            <Dropdown.Menu>
              {boards.map(b => {
                return <Dropdown.Item key={b}>{config[b].config.product}</Dropdown.Item>
              })}
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item>
            <Button inverted color='green'>Save</Button>
          </Menu.Item>
          <Menu.Item>
            <Layouts layouts={layouts} activeBoard={activeBoard} />
          </Menu.Item>
          <Menu.Item>
            <Button icon inverted basic color='green'>
              <Icon name='plus' />
            </Button>
          </Menu.Item>
        </Menu.Menu>

      </Container>
    </Menu>
  )
}
