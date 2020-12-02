const layerTypeMap = {
  momentary: 'MO',
  toggle: 'TG',
  direct: 'TO',
  taptoggle: 'TT',
  setdefaultlayer: 'DF'
};

const exemptCodes = [
  'RESET',
  'BL_TOGG',
  'BL_STEP',
  'BL_INC',
  'BL_DEC',
  'RGB_VAI',
  'RGB_VAD',
  'RGB_TOG',
  'RGB_MODE_FORWARD',
  'RGB_MODE_REVERSE',
  'RGB_HUI',
  'RGB_HUD',
  'RGB_SAI',
  'RGB_SAD',
  'RGB_MODE_PLAIN',
  'RGB_MODE_BREATHE',
  'RGB_MODE_RAINBOW',
  'RGB_MODE_KNIGHT',
  'RGB_MODE_GRADIENT',
  'RGB_MODE_SWIRL',
  'RGB_MODE_RGBTEST'
];

const prepKeyForTemplate = (key) => {
  try {
    switch (key.type) {
      case 'normal':
        if (exemptCodes.includes(key.value)) {
          return key.value;
        }

        if (key.value === 'IME') {
          return 'M_IME'
        }

        return `KC_${key.value}`;
      case 'modkey':
      case 'combokey':
        return `${key.secondary}(KC_${key.value})`;
      case 'tapkey':
        if (isNaN(key.secondary.slice(1))) {
          return `${key.secondary}_T(KC_${key.value})`;
        }

        return `LT(${key.secondary.slice(1)}, KC_${key.value})`;
      case 'oneshotmod':
      case 'oneshotlayer':
        if (isNaN(key.secondary.slice(1))) {
          return `OSM(${key.value})`;
        }

        return `OSL(${key.value})`;
      case 'unicode':
        return `UC(${key.value})`;
      default:
        if (layerTypeMap[key.type]) {
          return `${layerTypeMap[key.type]}(${key.value.slice(1)})`;
        }
    }

    return 'KC_NO';
  } catch (e) {
    console.log(e);
    return 'KC_NO';
  }
};

const generateTriggerTemplate = (trigger, index) => {
  switch (trigger.type) {
    case 'layer':
      return (
`if (state & (1<<${trigger.action.slice(1)})) {
  setrgb(${trigger.red}, ${trigger.green}, ${trigger.blue}, (LED_TYPE *)&led[${index}]);
}
`);
    case 'keyboard':
      return (
`if (usb_led & (1<<${trigger.action})) {
  setrgb(${trigger.red}, ${trigger.green}, ${trigger.blue}, (LED_TYPE *)&led[${index}]);
}
`);
    case 'power':
      return `setrgb(${trigger.red}, ${trigger.green}, ${trigger.blue}, (LED_TYPE *)&led[${index}]);`;
    default: return '';
  }
};

const generateIndicatorTemplate = (indicators) => {
  if (!indicators || indicators.length === 0) {
    return '';
  }

  return (
`void process_indicator_update(layer_state_t state, uint8_t usb_led) {
  for (int i = 0; i < ${indicators.length}; i++) {
    setrgb(0, 0, 0, (LED_TYPE *)&led[i]);
  }
  ${indicators.map((led, ledIndex) => {
    return led.map((trigger) => generateTriggerTemplate(trigger, ledIndex)).join(`
    `);
  }).join(`
  `)}

  rgblight_set();
};

void keyboard_post_init_user(void) {
  process_indicator_update(layer_state, host_keyboard_leds());
};

void led_set_user(uint8_t usb_led) {
  process_indicator_update(layer_state, host_keyboard_leds());
};

layer_state_t layer_state_set_user(layer_state_t state) {
  process_indicator_update(state, host_keyboard_leds());
    return state;
};`);
};

const generateStaticIndicatorTemplate = (indicators) => {
  if (!indicators || indicators.length === 0) {
    return '';
  }

  return (
`void process_indicator_update(layer_state_t state, uint8_t usb_led) {
  ${indicators.map((led, ledIndex) => {
    switch (led.type) {
      case 'layer':
        return (
`if (state & (1<<${led.action.slice(1)})) {
  writePinHigh(${led.pin});
} else {
  writePinLow(${led.pin});
}
`);
      case 'keyboard':
        return (
`if (usb_led & (1<<${led.action})) {
  writePinHigh(${led.pin});
} else {
  writePinLow(${led.pin});
}
`);
      default: return '';
    }
  }).join(`
  `)}
};

void keyboard_post_init_user(void) {
  ${indicators.map((led, ledIndex) => {
    return `
  setPinOutput(${led.pin});
  ${led.action === 'power' ? `writePinHigh(${led.pin});` : ''}
  ${led.action === 'off' ? `writePinLow(${led.pin});` : ''}`
  }).join(`
`)}

  process_indicator_update(layer_state, host_keyboard_leds());
};

void led_set_user(uint8_t usb_led) {
  process_indicator_update(layer_state, host_keyboard_leds());
};

layer_state_t layer_state_set_user(layer_state_t state) {
  process_indicator_update(state, host_keyboard_leds());
  return state;
};`);
};

const processEncoderActions = actions => {
  if (actions.length < 1) {
    return '';
  }
  if (actions.length === 1) {
    return `    if (clockwise) {
        tap_code(${actions[0].right});
      } else {
        tap_code(${actions[0].left});
      }`;
  }
  let defaultAction = actions.splice(0, 1);
  let start = true;
  let convertedActions = actions.map((action, index) => {
    if (action.right === 'TRNS' || action.left === 'TRNS') {
      return '';
    }

    let retVal = `    ${start ? 'if' : 'else if'} (layer_state & (1<<${index + 1})) {
      if (clockwise) {
        tap_code(${action.right});
      } else {
        tap_code(${action.left});
      }
    }`;
    start = false;
    return retVal;
  });
  convertedActions.push(`    else {
      if (clockwise) {
        tap_code(${defaultAction[0].right});
      } else {
        tap_code(${defaultAction[0].left});
      }
    }`);

  return convertedActions.join('\n');
};

const processEncoder = (encoder, index) => {
    return `if (index == ${index}) {
  ${processEncoderActions(encoder.actions)}
}`;
};

const generateRotaryEncoderTemplate = rotaryEncoders => {
  if (!rotaryEncoders || rotaryEncoders.length === 0) {
    return '';
  }

  return `void encoder_update_user(uint8_t index, bool clockwise) {
  ${rotaryEncoders.map(processEncoder).join('\n')}
}`;
};

module.exports = (keyData, indicators, staticIndicators, rotaryEncoders, firmwareDirectory) => {
  const layers = keyData.map((layer) => {
    return layer.map((row) => {
      return row.map((key) => {
        return prepKeyForTemplate(key);
      });
    }).reduce((a, b) => [...a, ...b]);
  });

  return (
`#include "${firmwareDirectory}.h"
enum custom_keycodes {
  M_IME = SAFE_RANGE
};

bool process_record_user(uint16_t keycode, keyrecord_t *record) {
  if (record->event.pressed) {
    switch(keycode) {
      case M_IME:
        SEND_STRING(SS_DOWN(X_LSHIFT)SS_DOWN(X_LALT));
        return false;
    }
  }
  else {
    switch(keycode) {
      case M_IME:
        SEND_STRING(SS_UP(X_LSHIFT)SS_UP(X_LALT));
        return false;
    }
  }
  return true;
};
const uint16_t PROGMEM keymaps[][MATRIX_ROWS][MATRIX_COLS] = {
  ${layers.map((layer, index) => `[${index}] = LAYOUT(${layer.join(', ')})`).join(`,
  `)}
};

${generateIndicatorTemplate(indicators)}
${generateStaticIndicatorTemplate(staticIndicators)}
${generateRotaryEncoderTemplate(rotaryEncoders)}`);
};
