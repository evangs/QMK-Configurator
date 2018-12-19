#ifndef CONFIG_H
#define CONFIG_H
#include "config_common.h"
#define VENDOR_ID       0xFEAE
#define PRODUCT_ID      0x8870
#define DEVICE_VER      0x0001
#define MANUFACTURER    TheVan Keyboards
#define PRODUCT         BananaSplit
#define DESCRIPTION     The original 60% with split spacebar and dedicated arrows
#define MATRIX_ROWS 5
#define MATRIX_COLS 14
#define MATRIX_ROW_PINS B0, B2, B4, B5, B6
#define MATRIX_COL_PINS F5, B1, F0, F1, F4, B3, D7, D6, D4, D5, D3, D2, D1, D0
#define UNUSED_PINS
#define DIODE_DIRECTION ROW2COL
#define BACKLIGHT_LEVELS  1
#define BACKLIGHT_PIN B7
#define USB_MAX_POWER_CONSUMPTION 100
#define DEBOUNCING_DELAY  5
#define TAPPING_TERM      175
#define LOCKING_SUPPORT_ENABLE
#define LOCKING_RESYNC_ENABLE
#define IS_COMMAND() ( \
  keyboard_report->mods == (MOD_BIT(KC_LSHIFT) | MOD_BIT(KC_RSHIFT)) \
)
#endif