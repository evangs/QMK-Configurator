const populateDefines = (config) => {
  let defines = [];
  if (config.usbMaxPowerConsumption) { defines.push(`#define USB_MAX_POWER_CONSUMPTION ${config.usbMaxPowerConsumption}`); }
  if (config.matrixHasGhost) { defines.push('#define MATRIX_HAS_GHOST'); }
  if (config.lockingSupportEnabled) { defines.push('#define LOCKING_SUPPORT_ENABLE'); }
  if (config.lockingResyncEnabled) { defines.push('#define LOCKING_RESYNC_ENABLE'); }
  if (config.permissiveHold) { defines.push('#define PERMISSIVE_HOLD'); }
  // if (!config.debugEnabled) { defines.push('#define NO_DEBUG'); }
  // if (!config.printEnabled) { defines.push('#define NO_PRINT'); }
  if (!config.actionLayerEnabled) { defines.push('#define NO_ACTION_LAYER'); }
  if (!config.actionTappingEnabled) { defines.push('#define NO_ACTION_TAPPING'); }
  if (!config.actionOneShotEnabled) { defines.push('#define NO_ACTION_ONESHOT'); }
  if (!config.actionMacroEnabled) { defines.push('#define NO_ACTION_MACRO'); }
  if (!config.actionFunctionEnabled) { defines.push('#define NO_ACTION_FUNCTION'); }
  if (config.rgbDiPin) { defines.push(`#define RGB_DI_PIN ${config.rgbDiPin}`); }
  if (config.rgbLedNum) { defines.push( `#define RGBLED_NUM ${config.rgbLedNum}
#define RGBLIGHT_ANIMATIONS
#define RGBLIGHT_SLEEP`); }
  defines.push(`#define IS_COMMAND() ( \
${config.commandKeyCombination || 'keyboard_report->mods == (MOD_BIT(KC_LSHIFT) | MOD_BIT(KC_RSHIFT))'} \
)`);

  return `${defines.join(`
`)}`;
};

module.exports = (config) => {
  return (
`#ifndef CONFIG_H
#define CONFIG_H
#include "config_common.h"

#define VENDOR_ID     ${config.vendorId}
#define PRODUCT_ID    ${config.productId}
#define DEVICE_VER    ${config.deviceVersion}
#define MANUFACTURER  ${config.manufacturer}
#define PRODUCT       ${config.product}
#define DESCRIPTION   ${config.description}

#define MATRIX_ROWS ${config.matrixRowPins.length}
#define MATRIX_COLS ${config.matrixColumnPins.length}
#define MATRIX_ROW_PINS { ${config.matrixRowPins.join(', ')} }
#define MATRIX_COL_PINS { ${config.matrixColumnPins.join(', ')} }
#define UNUSED_PINS

#define DIODE_DIRECTION ${config.diodeDirection}

#define BACKLIGHT_LEVELS ${config.backlightLevels}
#define BACKLIGHT_PIN ${config.backlightPin}

#define DEBOUNCE ${config.debouncingDelay}
#define TAPPING_TERM ${config.tappingTerm}

${populateDefines(config)}
#endif`);
};
