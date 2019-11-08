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
  'RGB_MODE_RAINBOW',
  'RGB_MODE_RAINBOW',
  'RGB_MODE_KNIGHT',
  'RGB_MODE_GRADIENT',
  'RGB_MODE_SWIRL'
];

const prepKeyForTemplate = (key) => {
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
};

const generateTriggerTemplate = (trigger, index) => {
  switch (trigger.type) {
    case 'layer':
      return (
`if (state & (1<<${trigger.action.slice(1)})) {
  indicators[${index}].r = ${trigger.red};
  indicators[${index}].g = ${trigger.green};
  indicators[${index}].b = ${trigger.blue};
}
`);
    case 'keyboard':
      return (
`if (usb_led & (1<<${trigger.action})) {
  if (indicators[${index}].r > 0) {
    indicators[${index}].r = (indicators[${index}].r + ${trigger.red}) / 2;
  }
  else {
    indicators[${index}].r = ${trigger.red};
  }
  if (indicators[${index}].g > 0) {
    indicators[${index}].g = (indicators[${index}].g + ${trigger.green}) / 2;
  }
  else {
    indicators[${index}].g = ${trigger.green};
  }
  if (indicators[${index}].b > 0) {
    indicators[${index}].b = (indicators[${index}].b + ${trigger.blue}) / 2;
  }
  else {
    indicators[${index}].b = ${trigger.blue};
  }
}
`);
    case 'power':
      return (
`indicators[${index}].r = ${trigger.red}
indicators[${index}].g = ${trigger.green}
indicators[${index}].b = ${trigger.blue}
`);
    default: return '';
  }
};

const generateIndicatorTemplate = (indicators) => {
  if (!indicators || indicators.length === 0) {
    return '';
  }

  return (
`void matrix_init_user(void) {
  rgblight_init();
};

void rgblight_init_leds(void) {
  process_indicator_update(layer_state, host_keyboard_leds());
};

void led_set_user(uint8_t usb_led) {
  process_indicator_update(state, host_keyboard_leds());
  return state;
};

void process_indicator_update(uint32_t state, uint8_t usb_led) {
  LED_TYPE indicators[${indicators.length}] = {
    ${indicators.map(() => '{.r = 0, .g = 0, .b = 0}').join(`,
    `)}
  };

  uint8_t indexes[${indicators.length}] = {
    ${indicators.map((indicator, indicatorIndex) => `${indicatorIndex}`).join(`,
    `)}
  };

  ${indicators.map((led, ledIndex) => {
    return led.map((trigger) => generateTriggerTemplate(trigger, ledIndex)).join(`
    `);
  }).join(`
  `)}

  rgblight_setrgb_many(indicators, indexes, ${indicators.length});
};`);
};

module.exports = (keyData, indicators, firmwareDirectory) => {
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

${generateIndicatorTemplate(indicators)}`);
};
