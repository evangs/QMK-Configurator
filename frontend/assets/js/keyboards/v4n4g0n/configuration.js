var KEYBOARDS = KEYBOARDS || [];
v4n4g0n = {};
KEYBOARDS.push(v4n4g0n);

v4n4g0n.id = 'v4n4g0n_rev1';

// config
v4n4g0n.config = {
    vendorId: '0xFEAE',
    productId: '0x8847',
    deviceVersion: '0x0001',
    manufacturer: 'TheVan Keyboards',
    product: 'V4N4G0N',
    description: 'V4N4G0N',
    matrixRowPins: ['F0', 'F1', 'F4', 'F6', 'F7'],
    matrixColumnPins: ['F5', 'B0', 'B1', 'B2', 'B3', 'B7', 'D2', 'D3', 'D5', 'D4', 'D6', 'D7'],
    diodeDirection: 'COL2ROW',
    matrixHasGhost: false,
    backlightLevels: 1,
    backlightPin: 'B7',
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
    permissiveHold: true
};

// rules
v4n4g0n.rules = {
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

v4n4g0n.static_indicators = [
  {
    pin: 'B6',
    type: 'power',
    action: 'power'
  },
  {
    pin: 'B5',
    type: 'layer',
    action: 'L3'
  },
  {
    pin: 'B4',
    type: 'layer',
    action: 'L3'
  }
];

// keymap
v4n4g0n.configKeymap = {};
v4n4g0n.configKeymap.keys = [
    "K00", "K02", "K03", "K04", "K05", "K06",
    "K10", "K11", "K12", "K13", "K14", "K15", "K16", "K17", "K18", "K19", "K1A", "K1B",
    "K20", "K21", "K22", "K23", "K24", "K25", "K26", "K27", "K28", "K29", "K2A", "K2B",
    "K30", "K31", "K32", "K33", "K34", "K35", "K36", "K37", "K38", "K39", "K3A", "K3B",
    "K40", "K41", "K42", "K43", "K44", "K47", "K48", "K49", "K4A", "K4B"
];

v4n4g0n.configKeymap.positions = [
    ["K00", "KC_NO", "K02", "K03", "K04", "K05", "K06", "KC_NO", "KC_NO", "KC_NO", "KC_NO", "KC_NO"],
    ["K10", "K11", "K12", "K13", "K14", "K15", "K16", "K17", "K18", "K19", "K1A", "K1B"],
    ["K20", "K21", "K22", "K23", "K24", "K25", "K26", "K27", "K28", "K29", "K2A", "K2B"],
    ["K30", "K31", "K32", "K33", "K34", "K35", "K36", "K37", "K38", "K39", "K3A", "K3B"],
    ["K40", "K41", "K42", "K43", "K44", "KC_NO", "KC_NO", "K47", "K48", "K49", "K4A", "K4B"]
];

// zones
v4n4g0n.zones = [
    {
        label: 'Bottom Row',
        value: 0,
        choices: [
            {
                code: 0,
                name: '625 Space'
            },
            {
                code: 1,
                name: 'Split Space'
            }
        ]
    }
]

// ui keymap
v4n4g0n.keySections = [
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
          id: 'k02',
          value: '2',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100'
        },
        {
          id: 'k03',
          value: '3',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100'
        },
        {
          id: 'k04',
          value: '4',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100'
        },
        {
          id: 'k05',
          value: '5',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100'
        },
        {
          id: 'k06',
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
            shape: 'k100'
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
            id: 'k1A',
            value: 'P',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k1B',
            value: 'BSPC',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k175'
          }
        ],
        row3: [
            {
              id: 'k20',
              value: 'ESC',
              type: 'tapkey',
              secondary: 'L1',
              showMenu: false,
              shape: 'k125'
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
              shape: 'k100'
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
              id: 'k2A',
              value: 'SCLN',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k2B',
              value: 'QUOT',
              type: 'tapkey',
              secondary: 'L1',
              showMenu: false,
              shape: 'k150'
            }
        ],
        row4: [
            {
              id: 'k30',
              value: 'LSFT',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k175'
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
              shape: 'k100'
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
              id: 'k3A',
              value: 'SLSH',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k3B',
              value: 'ENT',
              type: 'tapkey',
              secondary: 'L2',
              showMenu: false,
              shape: 'k100'
            }
        ],
        bottom: [
            [
                {
                  id: 'k40',
                  value: 'LCTL',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k125',
                  zone: 'Bottom Row'
                },
                {
                  id: 'k41',
                  value: 'L2',
                  type: 'momentary',
                  secondary: null,
                  showMenu: false,
                  shape: 'k100',
                  zone: 'Bottom Row'
                },
                {
                  id: 'k42',
                  value: 'LGUI',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k125',
                  zone: 'Bottom Row'
                },
                {
                  id: 'k43',
                  value: 'NO',
                  type: 'nodisplay'
                },
                {
                  id: 'k44',
                  value: 'NO',
                  type: 'nodisplay'
                },
                {
                  id: 'k47',
                  value: 'SPC',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k625',
                  zone: 'Bottom Row'
                },
                {
                  id: 'k48',
                  value: 'NO',
                  type: 'nodisplay'
                },
                {
                  id: 'k49',
                  value: 'RSFT',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k100',
                  zone: 'Bottom Row'
                },
                {
                  id: 'k4A',
                  value: 'RALT',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k100',
                  zone: 'Bottom Row'
                },
                {
                  id: 'k4B',
                  value: 'L3',
                  type: 'toggle',
                  secondary: null,
                  showMenu: false,
                  shape: 'k100',
                  zone: 'Bottom Row'
                }
            ],
            [
              {
                id: 'k40',
                value: 'LCTL',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k125',
                zone: 'Bottom Row'
              },
              {
                id: 'k41',
                value: 'L2',
                type: 'momentary',
                secondary: null,
                showMenu: false,
                shape: 'k100',
                zone: 'Bottom Row'
              },
              {
                id: 'k42',
                value: 'LALT',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100',
                zone: 'Bottom Row'
              },
              {
                id: 'k43',
                value: 'LGUI',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k125',
                zone: 'Bottom Row'
              },
              {
                id: 'k44',
                value: 'ENT',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k200',
                zone: 'Bottom Row'
              },
              {
                id: 'k47',
                value: 'SPC',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k200',
                zone: 'Bottom Row'
              },
              {
                id: 'k48',
                value: 'RALT',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k125',
                zone: 'Bottom Row'
              },
              {
                id: 'k49',
                value: 'RSFT',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100',
                zone: 'Bottom Row'
              },
              {
                id: 'k4A',
                value: 'RCTL',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100',
                zone: 'Bottom Row'
              },
              {
                id: 'k4B',
                value: 'L3',
                type: 'toggle',
                secondary: null,
                showMenu: false,
                shape: 'k100',
                zone: 'Bottom Row'
              }
            ]
        ]
    },
    { //  LAYER 1 ==========================================
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
        },
        {
          id: 'k06',
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
            value: 'GRV',
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
            shape: 'k100'
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
            id: 'k1A',
            value: 'RPRN',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k1B',
            value: 'DEL',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k175'
          }
        ],
        row3: [
            {
              id: 'k20',
              value: 'TRNS',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k125'
            },
            {
              id: 'k21',
              value: 'BSLS',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k22',
              value: 'QUOT',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k23',
              value: 'MINS',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k24',
              value: 'EQL',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k25',
              value: 'LBRC',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k26',
              value: 'RBRC',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k27',
              value: 'DOWN',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k28',
              value: 'UP',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k29',
              value: 'LEFT',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k2A',
              value: 'RIGHT',
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
              shape: 'k150'
            }
        ],
        row4: [
            {
              id: 'k30',
              value: 'TRNS',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k175'
            },
            {
              id: 'k31',
              value: 'ESC',
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
              value: 'PSCR',
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
              shape: 'k100'
            },
            {
              id: 'k37',
              value: 'MSTP',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k38',
              value: 'MPLY',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k39',
              value: 'MPRV',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k3A',
              value: 'MNXT',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k3B',
              value: 'TRNS',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            }
        ],
        bottom: [
            [
                {
                  id: 'k40',
                  value: 'TRNS',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k125'
                },
                {
                  id: 'k41',
                  value: 'TRNS',
                  type: 'normal',
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
                  shape: 'k125'
                },
                {
                  id: 'k43',
                  value: 'NO',
                  type: 'nodisplay'
                },
                {
                  id: 'k44',
                  value: 'NO',
                  type: 'nodisplay'
                },
                {
                  id: 'k47',
                  value: 'TRNS',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k625'
                },
                {
                  id: 'k48',
                  value: 'NO',
                  type: 'nodisplay'
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
                  id: 'k4A',
                  value: 'TRNS',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k100'
                },
                {
                  id: 'k4B',
                  value: 'RESET',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k100'
                }
            ],
            [
              {
                id: 'k40',
                value: 'TRNS',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k125'
              },
              {
                id: 'k41',
                value: 'TRNS',
                type: 'normal',
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
                id: 'k43',
                value: 'TRNS',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k125'
              },
              {
                id: 'k44',
                value: 'TRNS',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k200'
              },
              {
                id: 'k47',
                value: 'TRNS',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k200'
              },
              {
                id: 'k48',
                value: 'TRNS',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k125'
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
                id: 'k4A',
                value: 'TRNS',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
              },
              {
                id: 'k4B',
                value: 'RESET',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
              }
            ]
        ]
    },
    { //  LAYER 2 ==========================================
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
        },
        {
          id: 'k06',
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
            value: 'TILD',
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
            shape: 'k100'
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
            id: 'k1A',
            value: '0',
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
            shape: 'k175'
          }
        ],
        row3: [
            {
              id: 'k20',
              value: 'ESC',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k125'
            },
            {
              id: 'k21',
              value: 'PIPE',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k22',
              value: 'DQT',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k23',
              value: 'UNDS',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k24',
              value: 'PLUS',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k25',
              value: 'LCBR',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k26',
              value: 'RCBR',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k27',
              value: '4',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k28',
              value: '5',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k29',
              value: '6',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k2A',
              value: 'VOLU',
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
              shape: 'k150'
            }
        ],
        row4: [
            {
              id: 'k30',
              value: 'TRNS',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k175'
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
              value: '0',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k37',
              value: '1',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k38',
              value: '2',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k39',
              value: '3',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k3A',
              value: 'VOLD',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k3B',
              value: 'TRNS',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            }
        ],
        bottom: [
            [
                {
                  id: 'k40',
                  value: 'TRNS',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k125'
                },
                {
                  id: 'k41',
                  value: 'TRNS',
                  type: 'normal',
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
                  shape: 'k125'
                },
                {
                  id: 'k43',
                  value: 'NO',
                  type: 'nodisplay'
                },
                {
                  id: 'k44',
                  value: 'NO',
                  type: 'nodisplay'
                },
                {
                  id: 'k47',
                  value: 'TRNS',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k625'
                },
                {
                  id: 'k48',
                  value: 'NO',
                  type: 'nodisplay'
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
                  id: 'k4A',
                  value: 'TRNS',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k100'
                },
                {
                  id: 'k4B',
                  value: 'TRNS',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k100'
                }
            ],
            [
              {
                id: 'k40',
                value: 'TRNS',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k125'
              },
              {
                id: 'k41',
                value: 'TRNS',
                type: 'normal',
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
                id: 'k43',
                value: 'TRNS',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k125'
              },
              {
                id: 'k44',
                value: 'TRNS',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k200'
              },
              {
                id: 'k47',
                value: 'TRNS',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k200'
              },
              {
                id: 'k48',
                value: 'TRNS',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k125'
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
                id: 'k4A',
                value: 'TRNS',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
              },
              {
                id: 'k4B',
                value: 'TRNS',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
              }
            ]
        ]
    },
    { //  LAYER LOCK ==========================================
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
        },
        {
          id: 'k06',
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
            value: 'TRNS',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k12',
            value: 'TRNS',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k13',
            value: 'TRNS',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k14',
            value: 'TRNS',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k15',
            value: 'TRNS',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k16',
            value: 'TRNS',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k17',
            value: 'F1',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k18',
            value: 'F2',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k19',
            value: 'F3',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k1A',
            value: 'F4',
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
            shape: 'k175'
          }
        ],
        row3: [
            {
              id: 'k20',
              value: 'ESC',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k125'
            },
            {
              id: 'k21',
              value: 'TRNS',
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
              shape: 'k100'
            },
            {
              id: 'k27',
              value: 'F5',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k28',
              value: 'F6',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k29',
              value: 'F7',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k2A',
              value: 'F8',
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
              shape: 'k150'
            }
        ],
        row4: [
            {
              id: 'k30',
              value: 'LSFT',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k175'
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
              shape: 'k100'
            },
            {
              id: 'k37',
              value: 'F9',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k38',
              value: 'F10',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k39',
              value: 'F11',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k3A',
              value: 'F12',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k3B',
              value: 'TRNS',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            }
        ],
        bottom: [
            [
                {
                  id: 'k40',
                  value: 'TRNS',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k125'
                },
                {
                  id: 'k41',
                  value: 'LALT',
                  type: 'normal',
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
                  shape: 'k125'
                },
                {
                  id: 'k43',
                  value: 'NO',
                  type: 'nodisplay'
                },
                {
                  id: 'k44',
                  value: 'NO',
                  type: 'nodisplay'
                },
                {
                  id: 'k47',
                  value: 'TRNS',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k625'
                },
                {
                  id: 'k48',
                  value: 'NO',
                  type: 'nodisplay'
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
                  id: 'k4A',
                  value: 'TRNS',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k100'
                },
                {
                  id: 'k4B',
                  value: 'TRNS',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k100'
                }
            ],
            [
              {
                id: 'k40',
                value: 'TRNS',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k125'
              },
              {
                id: 'k41',
                value: 'LALT',
                type: 'normal',
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
                id: 'k43',
                value: 'TRNS',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k125'
              },
              {
                id: 'k44',
                value: 'SPC',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k200'
              },
              {
                id: 'k47',
                value: 'C',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k200'
              },
              {
                id: 'k48',
                value: 'TRNS',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k125'
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
                id: 'k4A',
                value: 'TRNS',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
              },
              {
                id: 'k4B',
                value: 'TRNS',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100'
              }
            ]
        ]
    }
];

v4n4g0n.keymap = function() {
    var keymap = [];
    var layer = [];
    var ks;
    var zones = v4n4g0n.zones;
    var i;

    for (i in v4n4g0n.keySections) {
        ks = v4n4g0n.keySections[i];
        layer = new Array();
        layer.push(ks.row1);
        layer.push(ks.row2);
        layer.push(ks.row3);
        layer.push(ks.row4);
        layer.push(ks.bottom[zones[0].value]);
        keymap.push(layer);
    }

    return keymap;
};
