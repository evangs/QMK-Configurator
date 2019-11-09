const express = require('express');
const path = require('path');
const f = require('./firmware.js');
const app = express();
const port = process.env.PORT || 9000;

app.use(express.static(path.join(__dirname, '/../../frontend')));
app.use(express.static(path.join(__dirname, '/../../qmk_firmware')));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/../../frontend', 'index.html'));
});

app.get('/test', (req, res) => {
  res.send('Hello world!');
});

app.get('/hex/:fileName', (req, res) => {
  res.sendFile(path.join(__dirname, '/../../qmk_firmware', req.params.fileName));
});

app.get('/firmware/:firmwareDirectory/:fileName', (req, res) => {
  const fmd = req.params.firmwareDirectory;
  res.sendFile(path.join(__dirname, `/../../qmk_firmware/keyboards/${fmd}`, req.params.fileName));
});

app.get('/firmware/:firmwareDirectory/keymaps/:fileName', (req, res) => {
  const fmd = req.params.firmwareDirectory;
  res.sendFile(path.join(__dirname, `/../../qmk_firmware/keyboards/${fmd}/keymaps/default`, req.params.fileName));
});

app.post('/build', (req, res) => {
  const keyboard = req.body;
  f.setupFirmware(keyboard.config, keyboard.rules, keyboard.configKeymap, keyboard.keymap, keyboard.indicators, fd => {
    f.buildFirmware(fd, error => {
      if (error) {
        res.json({
          'error': error
        });
      } else {
        res.json({
          'hex_url': `/hex/${fd}_default.hex`,
          'config_url': `/firmware/${fd}/config.h`,
          'rules_url': `/firmware/${fd}/rules.mk`,
          'keyboard_c_url': `/firmware/${fd}/${fd}.c`,
          'keyboard_h_url': `/firmware/${fd}/${fd}.h`,
          'keymap_url': `/firmware/${fd}/keymaps/keymap.c`
        });
      }
    });
  });
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
