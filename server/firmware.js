const { join } = require('path')
const { mkdir, writeFile } = require('fs')
const { exec } = require('child_process')

/**
 * Base firmware directory
**/
const FIRMWARE_BASE = join(__dirname, 'qmk_firmware', 'keyboards')

/**
 * Builds the firmware hex file
**/
exports.buildFirmware = dir => {
  return new Promise((resolve, reject) => {
    exec(`make ${dir}`, {
      cwd: join(__dirname, 'qmk_firmware')
    }, (err, stdout, stderr) => {
      if (err) {
        return reject(err)
      }
      console.log(stdout)
      resolve()
    })
  })
}

/**
 * Setups up the firmware template files
**/
exports.setupFirmware = async (config, rules, configKeymap, keymap, indicators) => {
  const now = new Date().getTime()
  const dir = `${config.product.replace(' ', '')}${now}`

  try {
    // Create directory if it does not exist
    await createDir(join(FIRMWARE_BASE, dir, 'keymaps', 'default'))
    // Create config file
    await createFile(join(FIRMWARE_BASE, dir, 'config.h'), buildConfig(config))
    // Create makefile
    await createFile(join(FIRMWARE_BASE, dir, 'makefile'), 'ifndef MAKEFILE_INCLUDED\ninclude ../../Makefile\nendif')
    // Create rules file
    await createFile(join(FIRMWARE_BASE, dir, 'rules.mk'), buildRules(rules))
    // Build product c
    await createFile(join(FIRMWARE_BASE, dir, `${dir}.c`), buildProductC(dir))
    // Build product h
    await createFile(join(FIRMWARE_BASE, dir, `${dir}.h`), buildProductH(dir, configKeymap))
    // Build keymap
    await createFile(join(FIRMWARE_BASE, dir, 'keymaps', 'default', 'keymap.c'), buildKeymap(dir, keymap, indicators))
    // Return the directory
    return dir
  } catch (err) {
    return err
  }
}

/**
 * Builds the config file
**/
const buildConfig = config => {
  let template = '#ifndef CONFIG_H\n'
  template += '#define CONFIG_H\n'
  template += '#include "config_common.h"\n'

  template += `#define VENDOR_ID       ${config.vendorId}\n`
  template += `#define PRODUCT_ID      ${config.productId}\n`
  template += `#define DEVICE_VER      ${config.deviceVersion}\n`
  template += `#define MANUFACTURER    ${config.manufacturer}\n`
  template += `#define PRODUCT         ${config.product}\n`
  template += `#define DESCRIPTION     ${config.description}\n`

  template += `#define MATRIX_ROWS ${config.matrixRowPins.length}\n`
  template += `#define MATRIX_COLS ${config.matrixColumnPins.length}\n`

  template += `#define MATRIX_ROW_PINS { ${config.matrixRowPins.join(', ')} }\n`
  template += `#define MATRIX_COL_PINS { ${config.matrixColumnPins.join(', ')} }\n`
  template += '#define UNUSED_PINS\n'

  template += `#define DIODE_DIRECTION ${config.diodeDirection}\n`

  if (config.matrixHasGhost) {
    template += '#define MATRIX_HAS_GHOST\n'
  }

  template += `#define BACKLIGHT_LEVELS  ${config.backlightLevels}\n`
  template += `#define BACKLIGHT_PIN ${config.backlightPin}\n`

  if (config.usbMaxPowerConsumption) {
    template += `#define USB_MAX_POWER_CONSUMPTION ${config.usbMaxPowerConsumption}\n`
  }
  template += `#define DEBOUNCING_DELAY  ${config.debouncingDelay}\n`
  template += `#define TAPPING_TERM      ${config.tappingTerm}\n`

  if (config.lockingSupportEnabled) {
    template += '#define LOCKING_SUPPORT_ENABLE\n'
  }
  if (config.lockingResyncEnabled) {
    template += '#define LOCKING_RESYNC_ENABLE\n'
  }

  template += '#define IS_COMMAND() ( \\\n'
  template += `  ${config.commandKeyCombination} \\\n`
  template += ')\n'

  if (!config.debugEnabled) {
    template += '#define NO_DEBUG\n'
  }

  if (!config.printEnabled) {
    template += '#define NO_PRINT\n'
  }

  if (!config.actionLayerEnabled) {
    template += '#define NO_ACTION_LAYER\n'
  }

  if (!config.actionTappingEnabled) {
    template += '#define NO_ACTION_TAPPING\n'
  }

  if (!config.actionOneShotEnabled) {
    template += '#define NO_ACTION_ONESHOT\n'
  }

  if (!config.actionMacroEnabled) {
    template += '#define NO_ACTION_MACRO\n'
  }

  if (!config.actionFunctionEnabled) {
    template += '#define NO_ACTION_FUNCTION\n'
  }

  if (config.rgbDiPin) {
    template += `#define RGB_DI_PIN ${config.rgbDiPin}\n`
  }

  if (config.rgbLedNum) {
    template += `#define RGBLED_NUM ${config.rgbLedNum}\n`
    template += '#define RGBLIGHT_CUSTOM_LED_INIT\n'
    template += '#define RGBLIGHT_SLEEP\n'
  }

  template += '#endif'

  return template
}

/**
 * Builds the rules config file
**/
const buildRules = rules => {
   let template = `MCU = ${rules.mcu}\n`
   template += `F_CPU = ${rules.processorFrequency}\n`
   template += `ARCH = ${rules.architecture}\n`
   template += `F_USB = ${rules.inputClockFrequency}\n`

   template += 'OPT_DEFS += -DINTERRUPT_CONTROL_ENDPOINT\n'
   template += `OPT_DEFS += -DBOOTLOADER_SIZE=${rules.bootloaderSize}\n`

   if (rules.bootmagicEnabled) {
     template += 'BOOTMAGIC_ENABLE = yes\n'
   }

   if (rules.mousekeyEnabled) {
     template += 'MOUSEKEY_ENABLE = yes\n'
   }

   if (rules.extrakeyEnabled) {
     template += 'EXTRAKEY_ENABLE = yes\n'
   }

   if (rules.consoleEnabled) {
     template += 'CONSOLE_ENABLE = yes\n'
   }

   if (rules.commandEnabled) {
     template += 'COMMAND_ENABLE = yes\n'
   }

   if (rules.sleepLedEnabled) {
     template += 'SLEEP_LED_ENABLE = yes\n'
   }

   if (rules.nkroEnabled) {
     template += 'NKRO_ENABLE = yes\n'
   }

   if (rules.backlightEnabled) {
     template += 'BACKLIGHT_ENABLE = yes\n'
   }

   if (rules.rgbLightEnabled) {
     template += 'RGBLIGHT_ENABLE = yes\n'
   }

   return template
 }

/**
 * Builds product .h file
**/
const buildProductH = (dir, configKeymap) => {
  const keys = configKeymap.keys.join(', ')

  let template = `#ifndef ${dir.toUpperCase()}_H\n`
  template += `#define ${dir.toUpperCase()}_H\n`
  template += '#include "quantum.h"\n'

  template += `#define KEYMAP(${keys}) { \\\n`

  for (const row of configKeymap.positions) {
    template += `{ ${row.join(', ')} }, \\\n`
  }

  template += '}\n#endif\n'
  template += 'void process_indicator_update(uint32_t, uint8_t);'

  return template
}

/**
 * Builds product .c file
**/
const buildProductC = dir => {
  let template = `#include "${dir}.h"\n`
  template += 'void matrix_init_kb(void) {\n'
  template += '  matrix_init_user();\n'
  template += '}\n'
  template += 'void matrix_scan_kb(void) {\n'
  template += '  matrix_scan_user();\n'
  template += '}\n'

  template += 'bool process_record_kb(uint16_t keycode, keyrecord_t *record) {\n'
  template += '  return process_record_user(keycode, record);\n'
  template += '}\n'

  template += 'void led_set_kb(uint8_t usb_led) {\n'
  template += '  led_set_user(usb_led);\n'
  template += '}'

  return template
}

/**
 * Map of layer types
**/
const LAYER_TYPE_MAP = {
  'momentary': 'MO',
  'toggle': 'TG',
  'direct': 'TO',
  'taptoggle': 'TT',
  'setdefaultlayer': 'DF'
}

/**
 * Map of exempt codes
**/
const EXEMPT_CODES = {
  'RESET': true,
  'BL_TOGG': true,
  'BL_STEP': true,
  'BL_INC': true,
  'BL_DEC': true,
  'RGB_VAI': true,
  'RGB_VAD': true
}

/**
 * Preps a key to be templated
**/
const prepKeyForTemplate = key => {

  const { type, value, secondary } = key

  if (type in LAYER_TYPE_MAP) {
    return `${LAYER_TYPE_MAP[type]}(${value.slice(1)})`
  }

  switch (type) {
    case 'normal': {
      if (value in EXEMPT_CODES) {
        return value
      }
      if (value === 'IME') {
        return 'M_IME'
      }
      return `KC_${value}`
    }
    case 'modkey':
    case 'combokey':
      return `${secondary}(KC_${value})`
    case 'tapkey': {
      if (isDigit(secondary.slice(1))) {
        return `LT(${secondary.slice(1)}, KC_${value})`
      }
      return `{secondary}_T(KC_{value})`
    }
    case 'oneshotmod':
    case 'oneshotlayer': {
      if (isDigit(value.slice(1))) {
        return `OSL(${value.slice(1)})`
      }
      return `OSM(${value})`
    }
    case 'unicode':
      return `UC(${value})`
    default:
      return 'KC_NO'
  }
}

/**
 * Build the keymap config
**/
const buildKeymap = (dir, keyData, indicators) => {
  const layers = []

  for (const layer of keyData) {
    const keys = []
    for (const row of layer) {
      for (const key of row) {
        keys.push(prepKeyForTemplate(key))
      }
    }
    layers.push(keys)
  }

  let template = `#include "${dir}.h"\n`
  template += 'enum custom_keycodes {\n'
  template += 'M_IME = SAFE_RANGE\n'
  template += '};\n'
  template += 'bool process_record_user(uint16_t keycode, keyrecord_t *record) {\n'
  template += 'if (record->event.pressed) {\n'
  template += 'switch(keycode) {\n'
  template += 'case M_IME:\n'
  template += 'SEND_STRING(SS_DOWN(X_LSHIFT)SS_DOWN(X_LALT));\n'
  template += 'return false;\n'
  template += '}\n'
  template += '}\n'
  template += 'else {\n'
  template += 'switch(keycode) {\n'
  template += 'case M_IME:\n'
  template += 'SEND_STRING(SS_UP(X_LSHIFT)SS_UP(X_LALT));\n'
  template += 'return false;\n'
  template += '}\n'
  template += '}\n'
  template += 'return true;\n'
  template += '};\n'
  template += 'const uint16_t PROGMEM keymaps[][MATRIX_ROWS][MATRIX_COLS] = {\n'

  for (let i = 0; i < layers.length; i++) {
    template += `[${i}] = KEYMAP(${layers[i].join(', ')}),\n`
  }

  template += '};\n'

  if (indicators) {
    // init
    template += 'void matrix_init_user(void) {\n'
    template += 'rgblight_init();\n'
    template += '};\n'
    template += 'void rgblight_init_leds(void) {\n'
    template += 'process_indicator_update(layer_state, host_keyboard_leds());\n'
    template += '};\n'

    // keyboard indicators trigger
    template += 'void led_set_user(uint8_t usb_led) {\n'
    template += 'process_indicator_update(layer_state, usb_led);\n'
    template += '};\n'

    // layer indicators trigger
    template += 'uint32_t layer_state_set_user(uint32_t state) {\n'
    template += 'process_indicator_update(state, host_keyboard_leds());\n'
    template += 'return state;\n'
    template += '};\n'

    // process indicator update
    template += 'void process_indicator_update(uint32_t state, uint8_t usb_led) {\n'
    template += `LED_TYPE indicators[${indicators.length}] = {{\n`
    for (let i = 0; i < indicators.length; i++) {
      template += '{.r = 0, .g = 0, .b = 0},\n'
      template = template.slice(0, -2)
      template += '\n};\n'
    }
    template += `uint8_t ies[${indicators}] = {{\n`

    for (let i = 0; i < indicators.length; i++) {
      template += `${i},\n`
    }

    template = template.slice(0, -2)
    template += '\n};\n'

    for (let i = 0; i < indicators.length; i++) {
      for (trigger in indicators[i]) {
        switch(trigger.type) {
          case 'layer':
            template += `if (state & (1<<${trigger.action.slice(1)})){{\n`
            template += `indicators[{}].r = ${trigger.red};\n`
            template += `indicators[{}].g = ${trigger.green};\n`
            template += `indicators[{}].b = ${trigger.blue};\n`
            template += '}\n'
            break
          case 'keyboard':
            template += `if (usb_led & (1<<${trigger.action})){{\n`
            template += `if (indicators[${i}].r > 0) {{indicators[${i}].r = (indicators[${i}].r + ${trigger.red}) / 2;}}\n`
            template += `else {{indicators[${i}].r = ${trigger.red};}}\n`
            template += `if (indicators[${i}].g > 0) {{indicators[${i}].g = (indicators[${i}].g + ${trigger.green}) / 2;}}\n`
            template += `else {{indicators[${i}].g = ${trigger.green};}}\n`
            template += `if (indicators[${i}].b > 0) {{indicators[${i}].b = (indicators[${i}].b + ${trigger.blue}) / 2;}}\n`
            template += `else {{indicators[${i}].b = ${trigger.blue};}}\n`
            template += '}\n'
            break
          case 'power':
            template += 'indicators[{}].r = {};\n'.format(i, trigger.get('red'))
            template += 'indicators[{}].g = {};\n'.format(i, trigger.get('green'))
            template += 'indicators[{}].b = {};\n'.format(i, trigger.get('blue'))
            break
          default:
            // NO-OP
        }
      }
    }

    template += 'rgblight_setrgb_many(indicators, ies, ${indicators.length});\n'
    template += '};'
  }

  return template
}

/**
 * Promise wrapper for fs.mkdir
 */
const createDir = dir => {
  return new Promise((resolve, reject) => {
    mkdir(dir, { recursive: true }, err => {
      if (err) {
        if (err.code == 'EEXIST') {
          return resolve()
        }
        return reject(err)
      }
      return resolve()
    })
  })
}

/**
 * Promise wrapper for fs.writeFile
**/
const createFile = (file, content) => {
  return new Promise((resolve, reject) => {
    writeFile(file, content, err => {
      if (err) {
        return reject(err)
      }
      return resolve()
    })
  })
}

/**
 * Determine if a string contains only digits
**/
const isDigit = str => {
  return /^\d+$/.test(str)
}
