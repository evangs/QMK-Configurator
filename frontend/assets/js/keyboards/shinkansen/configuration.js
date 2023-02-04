var KEYBOARDS = KEYBOARDS || [];
shinkansen = {};
KEYBOARDS.push(shinkansen);

shinkansen.id = 'shinkansen_rev1';

// config
shinkansen.config = {
    vendorId: '0xFEAE',
    productId: '0x8855',
    deviceVersion: '0x0001',
    manufacturer: 'Trashman',
    product: 'Shinkansen',
    description: 'Trust45',
    matrixRowPins: ['D3', 'D2', 'B1', 'D1'],
    matrixColumnPins: ['D7', 'B4', 'B5', 'B6', 'F6', 'F5', 'F4', 'F1', 'F0', 'B0', 'B2', 'B3', 'D0', 'D5', 'D4', 'D6'],
    diodeDirection: 'COL2ROW',
    matrixHasGhost: false,
    backlightLevels: 1,
    backlightPin: 'F7',
    usbMaxPowerConsumption: 100,
    debouncingDelay: 5,
    tappingTerm: 175,
    lockingSupportEnabled: true,
    lockingResyncEnabled: true,
    commandKeyCombination: 'keyboard_report->mods == (MOD_BIT(KC_LSHIFT) | MOD_BIT(KC_RSHIFT))',
    debugEnabled: false,
    printEnabled: false,
    actionLayerEnabled: true,
    actionTappingEnabled: true,
    actionOneShotEnabled: true,
    actionMacroEnabled: true,
    actionFunctionEnabled: true,
    permissiveHold: true,
    retroTapping: false
};

// rules
shinkansen.rules = {
    mcu: 'atmega32u4',
    processorFrequency: 16000000,
    architecture: 'AVR8',
    inputClockFrequency: 16000000,
    bootloaderSize: 4096,
    bootmagicEnabled: false,
    mousekeyEnabled: true,
    extrakeyEnabled: true,
    consoleEnabled: false,
    commandEnabled: true,
    sleepLedEnabled: false,
    nkroEnabled: true,
    backlightEnabled: false,
    rgbLightEnabled: true
};

// keymap
shinkansen.configKeymap = {};
shinkansen.configKeymap.keys = [
    "K00", "K01", "K02", "K03", "K04", "K05", "K06", "K07", "K08", "K09", "K0A", "K0B", "K0C", "K0D", "K0E", "K0F",
    "K10", "K11", "K12", "K13", "K14", "K15", "K16", "K17", "K18", "K19", "K1A", "K1B", "K1C",
    "K20", "K21", "K22", "K23", "K24", "K25", "K26", "K27", "K28", "K29", "K2A", "K2B", "K2C", "K2E",
    "K30", "K31", "K32", "K36", "K3B", "K3C", "K3D", "K3E", "K3F"
];

shinkansen.configKeymap.positions = [
    ["K00", "K01", "K02", "K03", "K04", "K05", "K06", "K07", "K08", "K09", "K0A", "K0B", "K0C", "K0D", "K0E", "K0F"],
    ["K10", "K11", "K12", "K13", "K14", "K15", "K16", "K17", "K18", "K19", "K1A", "K1B", "K1C", "KC_NO", "KC_NO", "KC_NO"],
    ["K20", "K21", "K22", "K23", "K24", "K25", "K26", "K27", "K28", "K29", "K2A", "K2B", "K2C", "KC_NO", "K2E", "KC_NO"],
    ["K30", "K31", "K32", "KC_NO", "KC_NO", "KC_NO", "KC_36", "KC_NO", "KC_NO", "KC_NO", "KC_NO", "K3B", "K3C", "K3D", "K3E", "K3F"]
];

// ui keymap
shinkansen.keySections = [
  { // DEFAULT LAYER ==========================================
    row1: [
      {
        id: 'k00',
        value: 'RGB_MODE_FORWARD',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k01',
        value: 'TAB',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
        spacer: 'ls050'
      },
      {
        id: 'k02',
        value: 'Q',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k03',
        value: 'W',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k04',
        value: 'E',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k05',
        value: 'R',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k06',
        value: 'T',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k07',
        value: 'Y',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k08',
        value: 'U',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k09',
        value: 'I',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k0A',
        value: 'O',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k0B',
        value: 'P',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k0C',
        value: 'BSPC',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k175'
      },
      {
        id: 'k0D',
        value: 'VOLD',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
        spacer: 'ls050'
      },
      {
        id: 'k0E',
        value: 'MUTE',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k0F',
        value: 'VOLU',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      }
    ],
    row2: [
      {
        id: 'k10',
        value: 'RGB_MODE_REVERSE',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k11',
        value: 'ESC',
        type: 'tapkey',
        secondary: 'L1',
        showMenu: false,
        shape: 'k125',
        spacer: 'ls050'
      },
      {
        id: 'k12',
        value: 'A',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k13',
        value: 'S',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k14',
        value: 'D',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k5',
        value: 'F',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k16',
        value: 'G',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k17',
        value: 'H',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k18',
        value: 'J',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k19',
        value: 'K',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k1A',
        value: 'L',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k1B',
        value: 'SCLN',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k1C',
        value: 'QUOT',
        type: 'tapkey',
        secondary: 'L1',
        showMenu: false,
        shape: 'k150'
      }
    ],
    row3: [
      {
        id: 'k20',
        value: 'RGB_VAI',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k21',
        value: 'LSFT',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k175',
        spacer: 'ls050'
      },
      {
        id: 'k22',
        value: 'Z',
        type: 'tapkey',
        secondary: 'L2',
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k23',
        value: 'X',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k24',
        value: 'C',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k25',
        value: 'V',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k26',
        value: 'B',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k27',
        value: 'N',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k28',
        value: 'M',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k29',
        value: 'COMM',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k2A',
        value: 'DOT',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k2B',
        value: 'SLSH',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k2C',
        value: 'ENT',
        type: 'tapkey',
        secondary: 'L2',
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k2E',
        value: 'UP',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      }
    ],
    row4: [
      {
        id: 'k30',
        value: 'RGB_VAD',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k31',
        value: 'LCTL',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k125',
        spacer: 'ls050'
      },
      {
        id: 'k32',
        value: 'LGUI',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k125'
      },
      {
        id: 'k36',
        value: 'SPC',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k625',
        spacer: 'ls075'
      },
      {
        id: 'k3B',
        value: 'RSFT',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k125',
        spacer: 'ls075'
      },
      {
        id: 'k3C',
        value: 'LALT',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k125'
      },
      {
        id: 'k3D',
        value: 'LEFT',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
        spacer: 'ls050'
      },
      {
        id: 'k3E',
        value: 'DOWN',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k3F',
        value: 'RIGHT',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      }
    ]
  },
  { // LAYER 1 ==========================================
    row1: [
      {
        id: 'k00',
        value: 'RGB_HUI',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k01',
        value: 'GRV',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
        spacer: 'ls050'
      },
      {
        id: 'k02',
        value: 'EXLM',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k03',
        value: 'AT',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k04',
        value: 'HASH',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k05',
        value: 'DLR',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k06',
        value: 'PERC',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k07',
        value: 'CIRC',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k08',
        value: 'AMPR',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k09',
        value: 'ASTR',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k0A',
        value: 'LPRN',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k0B',
        value: 'RPRN',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k0C',
        value: 'DEL',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k175'
      },
      {
        id: 'k0D',
        value: 'MPRV',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
        spacer: 'ls050'
      },
      {
        id: 'k0E',
        value: 'MPLY',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k0F',
        value: 'MNXT',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      }
    ],
    row2: [
      {
        id: 'k10',
        value: 'RGB_HUD',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k11',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k125',
        spacer: 'ls050'
      },
      {
        id: 'k12',
        value: 'BSLS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k13',
        value: 'QUOT',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k14',
        value: 'MINS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k5',
        value: 'EQL',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k16',
        value: 'LBRC',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k17',
        value: 'RBRC',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k18',
        value: 'DOWN',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k19',
        value: 'UP',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k1A',
        value: 'LEFT',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k1B',
        value: 'RIGHT',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k1C',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k150'
      }
    ],
    row3: [
      {
        id: 'k20',
        value: 'RGB_SAI',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k21',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k175',
        spacer: 'ls050'
      },
      {
        id: 'k22',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k23',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k24',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k25',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k26',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k27',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k28',
        value: 'MSTP',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k29',
        value: 'MPLY',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k2A',
        value: 'MPRV',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k2B',
        value: 'MNXT',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k2C',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k2E',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      }
    ],
    row4: [
      {
        id: 'k30',
        value: 'RGB_SAD',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k31',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k125',
        spacer: 'ls050'
      },
      {
        id: 'k32',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k125'
      },
      {
        id: 'k36',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k625',
        spacer: 'ls075'
      },
      {
        id: 'k3B',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k125',
        spacer: 'ls075'
      },
      {
        id: 'k3C',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k125'
      },
      {
        id: 'k3D',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
        spacer: 'ls050'
      },
      {
        id: 'k3E',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k3F',
        value: 'RESET',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      }
    ]
  },
  { // LAYER 2 ==========================================
    row1: [
      {
        id: 'k00',
        value: 'RGB_TOG',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k01',
        value: 'TILD',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
        spacer: 'ls050'
      },
      {
        id: 'k02',
        value: '1',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k03',
        value: '2',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k04',
        value: '3',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k05',
        value: '4',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k06',
        value: '5',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k07',
        value: '6',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k08',
        value: '7',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k09',
        value: '8',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k0A',
        value: '9',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k0B',
        value: '0',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k0C',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k175'
      },
      {
        id: 'k0D',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
        spacer: 'ls050'
      },
      {
        id: 'k0E',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k0F',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      }
    ],
    row2: [
      {
        id: 'k10',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k11',
        value: 'ESC',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k125',
        spacer: 'ls050'
      },
      {
        id: 'k12',
        value: 'PIPE',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k13',
        value: 'DQT',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k14',
        value: 'UNDS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k5',
        value: 'PLUS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k16',
        value: 'LCBR',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k17',
        value: 'RCBR',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k18',
        value: '4',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k19',
        value: '5',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k1A',
        value: '6',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k1B',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k1C',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k150'
      }
    ],
    row3: [
      {
        id: 'k20',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k21',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k175',
        spacer: 'ls050'
      },
      {
        id: 'k22',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k23',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k24',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k25',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k26',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k27',
        value: '0',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k28',
        value: '1',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k29',
        value: '2',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k2A',
        value: '3',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k2B',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k2C',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k2E',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      }
    ],
    row4: [
      {
        id: 'k30',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k31',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k125',
        spacer: 'ls050'
      },
      {
        id: 'k32',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k125'
      },
      {
        id: 'k36',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k625',
        spacer: 'ls075'
      },
      {
        id: 'k3B',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k125',
        spacer: 'ls075'
      },
      {
        id: 'k3C',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k125'
      },
      {
        id: 'k3D',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
        spacer: 'ls050'
      },
      {
        id: 'k3E',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k3F',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      }
    ]
  }
];

shinkansen.keymap = function() {
    var keymap = [];
    var layer = [];
    var ks;
    var i;

    for (i in shinkansen.keySections) {
        ks = shinkansen.keySections[i];
        layer = new Array();
        layer.push(ks.row1);
        layer.push(ks.row2);
        layer.push(ks.row3);
        layer.push(ks.row4);
        keymap.push(layer);
    }

    return keymap;
};
