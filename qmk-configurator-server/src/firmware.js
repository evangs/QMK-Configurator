const fs = require('fs');
const child_process = require('child_process');
const buildConfig = require('./buildConfig.js');
const buildRules = require('./buildRules.js');
const buildProductC = require('./buildProductC.js');
const buildKeyboardHeader = require('./buildKeyboardHeader');
const buildKeymap = require('./buildKeymap');
const customMatrix = require('./customMatrix');

const makefileContent = (
`ifndef MAKEFILE_INCLUDED
include ../../Makefile
endif`);

module.exports.setupFirmware = ({config, rules, configKeymap, keymap, indicators, staticIndicators, rotaryEncoders}, callback) => {
  const now = new Date().toISOString().replace(/[-T:]*/g, '').split('.')[0];
  const fd = `${config.product.replace(/ /, '')}${now}`;
  const firmwareLocation = '/app/qmk_firmware/keyboards';
  let filesToWrite = 7;

  const done = () => {
    filesToWrite--;
    if (!filesToWrite) {
      console.log('done writing files');
      callback(fd);
    }
  };
  console.log(`/app/qmk_firmware/keyboards/${fd}/keymaps/default`);
  fs.mkdir(`/app/qmk_firmware/keyboards/${fd}/keymaps/default`, {recursive: true}, (err) => {
    if (err) throw err;
    fs.writeFile(`${firmwareLocation}/${fd}/config.h`, buildConfig(config, rotaryEncoders), done);
    fs.writeFile(`${firmwareLocation}/${fd}/makefile`, makefileContent, done);
    fs.writeFile(`${firmwareLocation}/${fd}/rules.mk`, buildRules(rules, rotaryEncoders), done);
    fs.writeFile(`${firmwareLocation}/${fd}/matrix.c`, customMatrix(), done);
    fs.writeFile(`${firmwareLocation}/${fd}/${fd}.c`, buildProductC(fd), done);
    fs.writeFile(`${firmwareLocation}/${fd}/${fd}.h`, buildKeyboardHeader(configKeymap, fd), done);
    fs.writeFile(`${firmwareLocation}/${fd}/keymaps/default/keymap.c`, buildKeymap(keymap, indicators, staticIndicators, rotaryEncoders, fd), done);
  });
};

module.exports.buildFirmware = (firmwareDirectory, callback) => {
  child_process.exec(`make ${firmwareDirectory}`, {cwd: '/app/qmk_firmware/'}, (error, stdout, stderr) => {
    if (error) {
      console.log('stdout', stdout);
      callback(error);
    }
    callback();
  });
};
