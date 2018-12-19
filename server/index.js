const http = require('http')
const { join } = require('path')
const express = require('express')
const corser = require('corser')
const shrinkRay = require('shrink-ray')
const bodyParser = require('body-parser')
const { setupFirmware, buildFirmware } = require('./firmware')

const HTTP_PORT = process.env.NODE_ENV === 'production' ? 80 : 8000
const FIRMWARE_BASE = join(__dirname, 'firmware', 'keyboards')

const app = express()

app.use(shrinkRay())
app.use(corser.create())
app.use(bodyParser.json())
app.use(express.static('build'))

app.get('/', (req, res, next) => {
  res.sendFile(path.join('build', 'index.html'))
})

app.post('/', async (req, res, next) => {
  const { config, rules, configKeymap, keymap, indicators } = req.body
  try {
    const dir = await setupFirmware(config, rules, configKeymap, keymap, indicators)
    await buildFirmware(dir)
    res.status(200).attachment(join(FIRMWARE_BASE, `${dir}_default.hex`))
  } catch (err) {
    console.error(err)
    res.status(500).send({ error: err.message })
  }
})

app.get('/downloads/:file', async (req, res, next) => {
  res.attachment()
})

const server = http.createServer(app)
server.listen(HTTP_PORT, () => {
  console.log('HTTP:// server listening on port', HTTP_PORT)
})
