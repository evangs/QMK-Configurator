var KEYBOARDS = KEYBOARDS || [];
v4n4g0rth0n = {};
KEYBOARDS.push(v4n4g0rth0n);

v4n4g0rth0n.id = 'v4n4g0rth0n_rev1';

// config
v4n4g0rth0n.config = {
    vendorId: '0xFEED',
    productId: '0x0000',
    deviceVersion: '0x0001',
    manufacturer: 'jpuerto',
    product: 'V4N4G0RTH0N',
    description: 'V4N4G0RTH0N',
    matrixRowPins: ['C7', 'C6', 'B6', 'B5', 'B7'],
    matrixColumnPins: ['D3', 'D2', 'D1', 'D0', 'D5', 'F7', 'F6', 'E6', 'F5', 'F4', 'F1', 'F0'],
    diodeDirection: 'COL2ROW',
    matrixHasGhost: false,
    usbMaxPowerConsumption: 100,
    debouncingDelay: 5,
    tappingTerm: 175,
    lockingSupportEnabled: false,
    lockingResyncEnabled: false,
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
v4n4g0rth0n.rules = {
    mcu: 'atmega32u4',
    processorFrequency: 16000000,
    architecture: 'AVR8',
    inputClockFrequency: 16000000,
    bootloaderSize: 4096,
    bootmagicEnabled: false,
    mousekeyEnabled: true,
    extrakeyEnabled: true,
    consoleEnabled: false,
    commandEnabled: false,
    sleepLedEnabled: false,
    nkroEnabled: true,
    backlightEnabled: false,
    rgbLightEnabled: false
};

v4n4g0rth0n.static_indicators = [
  {
    pin: 'B4',
    type: 'power',
    action: 'power'
  },
  {
    pin: 'D7',
    type: 'layer',
    action: 'L1'
  },
  {
    pin: 'D6',
    type: 'layer',
    action: 'L2'
  }
];

// keymap
v4n4g0rth0n.configKeymap = {};
v4n4g0rth0n.configKeymap.keys = [
    "K00", "K01", "K02", "K03", "K04", "K05",
    "K10", "K11", "K12", "K13", "K14", "K15", "K16", "K17", "K18", "K19", "K110", "K111",
    "K20", "K21", "K22", "K23", "K24", "K25", "K26", "K27", "K28", "K29", "K210", "K211",
    "K30", "K31", "K32", "K33", "K34", "K35", "K36", "K37", "K38", "K39", "K310", "K311",
    "K40", "K41", "K42", "K44", "K47", "K49", "K410", "K411"
];

v4n4g0rth0n.configKeymap.positions = [
    ["K00", "K01", "K02", "K03", "K04", "K05", "KC_NO", "KC_NO", "KC_NO", "KC_NO", "KC_NO", "KC_NO"],
    ["K10", "K11", "K12", "K13", "K14", "K15", "K16", "K17", "K18", "K19", "K110", "K111"],
    ["K20", "K21", "K22", "K23", "K24", "K25", "K26", "K27", "K28", "K29", "K210", "K211"],
    ["K30", "K31", "K32", "K33", "K34", "K35", "K36", "K37", "K38", "K39", "K310", "K311"],
    ["K40", "K41", "K42", "KC_NO", "K44", "KC_NO", "KC_NO", "K47", "KC_NO", "K49", "K410", "K411"]
];

// zones
v4n4g0rth0n.zones = [];

// ui keymap
v4n4g0rth0n.keySections = [
    { // DEFAULT LAYER ==========================================
      row1: [
        {
          id: 'k00',
          value: '1',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          spacer: 'ls050'
        },
        {
          id: 'k01',
          value: '2',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100'
        },
        {
          id: 'k02',
          value: '3',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100'
        },
        {
          id: 'k03',
          value: '4',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100'
        },
        {
          id: 'k04',
          value: '5',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100'
        },
        {
          id: 'k05',
          value: '6',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100'
        }
      ],
        row2: [
          {
            id: 'k10',
            value: 'TAB',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k11',
            value: 'Q',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k12',
            value: 'W',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k13',
            value: 'E',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k14',
            value: 'R',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k15',
            value: 'T',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k16',
            value: 'Y',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100',
              spacer: 'ls300'
          },
          {
            id: 'k17',
            value: 'U',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k18',
            value: 'I',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k19',
            value: 'O',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k110',
            value: 'P',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k111',
            value: 'BSPC',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          }
        ],
        row3: [
            {
              id: 'k20',
              value: 'ESC',
              type: 'tapkey',
              secondary: 'L1',
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k21',
              value: 'A',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k22',
              value: 'S',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k23',
              value: 'D',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k24',
              value: 'F',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k25',
              value: 'G',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k26',
              value: 'H',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100',
                spacer: 'ls300'
            },
            {
              id: 'k27',
              value: 'J',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k28',
              value: 'K',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k29',
              value: 'L',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k210',
              value: 'SCLN',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k211',
              value: 'QUOT',
              type: 'tapkey',
              secondary: 'L1',
              showMenu: false,
                shape: 'k100'
            }
        ],
        row4: [
            {
              id: 'k30',
              value: 'LSFT',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k31',
              value: 'Z',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k32',
              value: 'X',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k33',
              value: 'C',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k34',
              value: 'V',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k35',
              value: 'B',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k36',
              value: 'N',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100',
                spacer: 'ls300'
            },
            {
              id: 'k37',
              value: 'M',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k38',
              value: 'COMM',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k39',
              value: 'DOT',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k310',
              value: 'SLSH',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k311',
              value: 'ENT',
              type: 'tapkey',
              secondary: 'L2',
              showMenu: false,
              shape: 'k100'
            }
        ],
        bottom: [
            {
                id: 'k40',
                value: 'LCTL',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            },
            {
                id: 'k41',
                value: 'L2',
                type: 'momentary',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            },
            {
                id: 'k42',
                value: 'LGUI',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            },
            {
                id: 'k44',
                value: 'SPC',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k300'
            },
            {
                id: 'k47',
                value: 'SPC',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k300'
            },
            {
                id: 'k49',
                value: 'RSFT',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            },
            {
                id: 'k410',
                value: 'RALT',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            },
            {
                id: 'k411',
                value: 'L2',
                type: 'toggle',
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
                value: 'TRNS',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100',
                spacer: 'ls050'
            },
            {
                id: 'k01',
                value: 'TRNS',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            },
            {
                id: 'k02',
                value: 'TRNS',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            },
            {
                id: 'k03',
                value: 'TRNS',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            },
            {
                id: 'k04',
                value: 'TRNS',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            },
            {
                id: 'k05',
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
                value: '1',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            },
            {
                id: 'k12',
                value: '2',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            },
            {
                id: 'k13',
                value: '3',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            },
            {
                id: 'k14',
                value: '4',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            },
            {
                id: 'k15',
                value: '5',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            },
            {
                id: 'k16',
                value: '6',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100',
                spacer: 'ls300'
            },
            {
                id: 'k17',
                value: '7',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            },
            {
                id: 'k18',
                value: '8',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            },
            {
                id: 'k19',
                value: '9',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            },
            {
                id: 'k110',
                value: '0',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            },
            {
                id: 'k111',
                value: 'TRNS',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
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
                value: 'RESET',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
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
                shape: 'k100',
                spacer: 'ls300'
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
                value: 'TRNS',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            },
            {
                id: 'k29',
                value: 'TRNS',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            },
            {
                id: 'k210',
                value: 'TRNS',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            },
            {
                id: 'k211',
                value: 'TRNS',
                type: 'normal',
                secondary: 'L1',
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
                shape: 'k100'
            },
            {
                id: 'k32',
                value: 'TRNS',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            },
            {
                id: 'k33',
                value: 'TRNS',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            },
            {
                id: 'k34',
                value: 'TRNS',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            },
            {
                id: 'k35',
                value: 'TRNS',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            },
            {
                id: 'k36',
                value: 'TRNS',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100',
                spacer: 'ls300'
            },
            {
                id: 'k37',
                value: 'TRNS',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            },
            {
                id: 'k38',
                value: 'TRNS',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            },
            {
                id: 'k39',
                value: 'TRNS',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            },
            {
                id: 'k310',
                value: 'TRNS',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            },
            {
                id: 'k311',
                value: 'TRNS',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            }
        ],
        bottom: [
            {
                id: 'k40',
                value: 'TRNS',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            },
            {
                id: 'k41',
                value: 'L2',
                type: 'momentary',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            },
            {
                id: 'k42',
                value: 'TRNS',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            },
            {
                id: 'k44',
                value: 'TRNS',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k300'
            },
            {
                id: 'k47',
                value: 'TRNS',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k300'
            },
            {
                id: 'k49',
                value: 'TRNS',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            },
            {
                id: 'k410',
                value: 'TRNS',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            },
            {
                id: 'k411',
                value: 'TRNS',
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
                value: 'TRNS',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100',
                spacer: 'ls050'
            },
            {
                id: 'k01',
                value: 'TRNS',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            },
            {
                id: 'k02',
                value: 'TRNS',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            },
            {
                id: 'k03',
                value: 'TRNS',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            },
            {
                id: 'k04',
                value: 'TRNS',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            },
            {
                id: 'k05',
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
                value: 'EXLM',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            },
            {
                id: 'k12',
                value: 'AT',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            },
            {
                id: 'k13',
                value: 'HASH',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            },
            {
                id: 'k14',
                value: 'DLR',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            },
            {
                id: 'k15',
                value: 'PERC',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            },
            {
                id: 'k16',
                value: 'CIRC',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100',
                spacer: 'ls300'
            },
            {
                id: 'k17',
                value: 'AMPR',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            },
            {
                id: 'k18',
                value: 'ASTR',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            },
            {
                id: 'k19',
                value: 'LPRN',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            },
            {
                id: 'k110',
                value: 'RPRN',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            },
            {
                id: 'k111',
                value: 'TRNS',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
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
                value: 'F1',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            },
            {
                id: 'k22',
                value: 'F2',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            },
            {
                id: 'k23',
                value: 'F3',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            },
            {
                id: 'k24',
                value: 'F4',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            },
            {
                id: 'k25',
                value: 'F5',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            },
            {
                id: 'k26',
                value: 'MINS',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100',
                spacer: 'ls300'
            },
            {
                id: 'k27',
                value: 'EQL',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            },
            {
                id: 'k28',
                value: 'LCBR',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            },
            {
                id: 'k29',
                value: 'RCBR',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            },
            {
                id: 'k210',
                value: 'PIPE',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            },
            {
                id: 'k211',
                value: 'GRV',
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
                value: 'F6',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            },
            {
                id: 'k32',
                value: 'F7',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            },
            {
                id: 'k33',
                value: 'F8',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            },
            {
                id: 'k34',
                value: 'F9',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            },
            {
                id: 'k35',
                value: 'F10',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            },
            {
                id: 'k36',
                value: 'UNDS',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100',
                spacer: 'ls300'
            },
            {
                id: 'k37',
                value: 'PLUS',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            },
            {
                id: 'k38',
                value: 'LBRC',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            },
            {
                id: 'k39',
                value: 'RBRC',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            },
            {
                id: 'k310',
                value: 'BSLS',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            },
            {
                id: 'k311',
                value: 'TILD',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            }
        ],
        bottom: [
            {
                id: 'k40',
                value: 'TRNS',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            },
            {
                id: 'k41',
                value: 'TRNS',
                type: 'momentary',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            },
            {
                id: 'k42',
                value: 'TRNS',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            },
            {
                id: 'k44',
                value: 'TRNS',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k300'
            },
            {
                id: 'k47',
                value: 'TRNS',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k300'
            },
            {
                id: 'k49',
                value: 'TRNS',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            },
            {
                id: 'k410',
                value: 'TRNS',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            },
            {
                id: 'k411',
                value: 'TRNS',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
            }
        ]
    }
];

v4n4g0rth0n.keymap = function() {
    var keymap = [];
    var layer = [];
    var ks;
    var i;

    for (i in v4n4g0rth0n.keySections) {
        ks = v4n4g0rth0n.keySections[i];
        layer = new Array();
        layer.push(ks.row1);
        layer.push(ks.row2);
        layer.push(ks.row3);
        layer.push(ks.row4);
        layer.push(ks.bottom);
        keymap.push(layer);
    }

    return keymap;
};
