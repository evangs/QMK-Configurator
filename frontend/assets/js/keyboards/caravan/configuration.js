var KEYBOARDS = KEYBOARDS || [];
og_caravan = {};
KEYBOARDS.push(og_caravan);

og_caravan.id = 'caravan_rev1';

// config
og_caravan.config = {
    vendorId: '0xFEAE',
    productId: '0x8844',
    deviceVersion: '0x0001',
    manufacturer: 'TheVan Keyboards',
    product: 'CaraVan',
    description: 'CaraVan Split 40%',
    matrixRowPins: ['B0', 'B1', 'B2', 'B3'],
    matrixColumnPins: ['F1', 'F4', 'F5', 'B4', 'B5', 'B6', 'B7', 'D2', 'D3', 'D5', 'D4', 'D6'],
    diodeDirection: 'COL2ROW',
    matrixHasGhost: false,
    backlightLevels: 1,
    backlightPin: 'D7',
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
og_caravan.rules = {
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
    backlightEnabled: true
};

// keymap
og_caravan.configKeymap = {};
og_caravan.configKeymap.keys = [
    "K0",  "K1",  "K2",  "K3",  "K4",  "K5",  "K6",  "K7",  "K8",  "K9",  "K010", "K011",
    "K10", "K11", "K12", "K13", "K14", "K15", "K16", "K17", "K18", "K19", "K110", "K111",
    "K20", "K21", "K22", "K23", "K24", "K25", "K26", "K27", "K28", "K29", "K210", "K211",
    "K30", "K31", "K32", "K33",                      "K37", "K38", "K39", "K310", "K311"
];

og_caravan.configKeymap.positions = [
    ["K0",  "K1",  "K2",  "K3",  "K4",    "K5",    "K6",    "K7",  "K8",  "K9",  "K010", "K011"],
    ["K10", "K11", "K12", "K13", "K14",   "K15",   "K16",   "K17", "K18", "K19", "K110", "K111"],
    ["K20", "K21", "K22", "K23", "K24",   "K25",   "K26",   "K27", "K28", "K29", "K210", "K211"],
    ["K30", "K31", "K32", "K33", "KC_NO", "KC_NO", "KC_NO", "K37", "K38", "K39", "K310", "K311"]
];

// zones
og_caravan.zones = [
  {
      label: 'Right Hand',
      value: 0,
      choices: [
          {
              code: 0,
            name: 'Standard'
          },
          {
              code: 1,
              name: 'Arrow'
          }
      ]
  }
]

// ui keymap
og_caravan.keySections = [
  { // DEFAULT LAYER ==========================================
      row1: [
        {
          id: 'k00',
          value: 'ESC',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100'
        },
        {
          id: 'k01',
          value: 'Q',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100'
        },
        {
          id: 'k02',
          value: 'W',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100'
        },
        {
          id: 'k03',
          value: 'E',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100'
        },
        {
          id: 'k04',
          value: 'R',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100'
        },
        {
          id: 'k05',
          value: 'T',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          spacer: 's100'
        },
        {
          id: 'k06',
          value: 'Y',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100'
        },
        {
          id: 'k07',
          value: 'U',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100'
        },
        {
          id: 'k08',
          value: 'I',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100'
        },
        {
          id: 'k09',
          value: 'O',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100'
        },
        {
          id: 'k010',
          value: 'P',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100'
        },
        {
          id: 'k011',
          value: 'BSPC',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k175'
        }
      ],
      row2: [
          {
            id: 'k10',
            value: 'TAB',
            type: 'normal',
            secondary: 'null',
            showMenu: false,
            shape: 'k125'
          },
          {
            id: 'k11',
            value: 'A',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k12',
            value: 'S',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k13',
            value: 'D',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k14',
            value: 'F',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k15',
            value: 'G',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100',
            spacer: 's100'
          },
          {
            id: 'k16',
            value: 'H',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k17',
            value: 'J',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k18',
            value: 'K',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k19',
            value: 'L',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k110',
            value: 'QUOT',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k1B',
            value: 'ENT',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k150'
          }
      ],
      row3: [
          {
            id: 'k20',
            value: 'LSFT',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k175'
          },
          {
            id: 'k21',
            value: 'Z',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k22',
            value: 'X',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k23',
            value: 'C',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k24',
            value: 'V',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k25',
            value: 'B',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100',
            spacer: 's100'
          },
          {
            id: 'k26',
            value: 'N',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k27',
            value: 'M',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k28',
            value: 'COMM',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k29',
            value: 'DOT',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k2A',
            value: 'UP',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k2B',
            value: 'SLSH',
            type: 'tapkey',
            secondary: 'L2',
            showMenu: false,
            shape: 'k100'
          }
      ],
      row4: [
          {
            id: 'k30',
            value: 'LCTL',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k125'
          },
          {
            id: 'k31',
            value: 'LGUI',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k150'
          },
          {
            id: 'k32',
            value: 'LALT',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k125'
          },
          {
            id: 'k33',
            value: 'SPC',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k225',
            spacer: 's100'
          },
          {
            id: 'k37',
            value: 'SPC',
            type: 'tapkey',
            secondary: 'L1',
            showMenu: false,
            shape: 'k200'
          }
      ],
      rightHand: [
          [
              {
                id: 'k38',
                value: 'RALT',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k125',
                zone: 'Right Hand'
              },
              {
                id: 'k39',
                value: 'RCTL',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k150',
                zone: 'Right Hand'
              },
              {
                id: 'k310',
                value: 'NO',
                type: 'nodisplay'
              },
              {
                id: 'k311',
                value: 'L2',
                type: 'momentary',
                secondary: null,
                showMenu: false,
                shape: 'k175',
                zone: 'Right Hand'
              }
          ],
          [
              {
                id: 'k38',
                value: 'L2',
                type: 'momentary',
                secondary: null,
                showMenu: false,
                shape: 'k150',
                zone: 'Right Hand'
              },
              {
                id: 'k39',
                value: 'LEFT',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100',
                zone: 'Right Hand'
              },
              {
                id: 'k3A',
                value: 'DOWN',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100',
                zone: 'Right Hand'
              },
              {
                id: 'k3B',
                value: 'RIGHT',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100',
                zone: 'Right Hand'
              }
          ]
      ]
  },
  { // LAYER 1 ===============================================
      row1: [
        {
          id: 'k00',
          value: 'GRV',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100'
        },
        {
          id: 'k01',
          value: '1',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100'
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
          shape: 'k100',
          spacer: 's100'
        },
        {
          id: 'k06',
          value: '6',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100'
        },
        {
          id: 'k07',
          value: '7',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100'
        },
        {
          id: 'k08',
          value: '8',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100'
        },
        {
          id: 'k09',
          value: '9',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100'
        },
        {
          id: 'k010',
          value: '0',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100'
        },
        {
          id: 'k011',
          value: 'DEL',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k175'
        }
      ],
      row2: [
          {
            id: 'k10',
            value: 'CAPS',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k125'
          },
          {
            id: 'k11',
            value: 'NO',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k12',
            value: 'NO',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k13',
            value: 'NO',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k14',
            value: 'NO',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k15',
            value: 'NO',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100',
            spacer: 's100'
          },
          {
            id: 'k16',
            value: 'NO',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k17',
            value: 'NO',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k18',
            value: 'MINS',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k19',
            value: 'EQL',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k110',
            value: 'SCLN',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k111',
            value: 'NO',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k150'
          }
      ],
      row3: [
          {
            id: 'k20',
            value: 'NO',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k175'
          },
          {
            id: 'k21',
            value: 'PSCR',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k22',
            value: 'PAUS',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k23',
            value: 'INS',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k24',
            value: 'NO',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k25',
            value: 'NO',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100',
            spacer: 's100'
          },
          {
            id: 'k26',
            value: 'NO',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k27',
            value: 'NO',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k28',
            value: 'LBRC',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k29',
            value: 'RBRC',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k210',
            value: 'PGUP',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k211',
            value: 'BSLS',
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
          shape: 'k125'
        },
        {
          id: 'k31',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k150'
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
          id: 'k33',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k225',
          spacer: 's100'
        },
        {
          id: 'k37',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k200'
        }
      ],
      rightHand: [
        [
            {
              id: 'k38',
              value: 'TRNS',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k125',
              zone: 'Right Hand'
            },
            {
              id: 'k39',
              value: 'TRNS',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k150',
              zone: 'Right Hand'
            },
            {
              id: 'k310',
              value: 'NO',
              type: 'nodisplay'
            },
            {
              id: 'k311',
              value: 'TRNS',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k175',
              zone: 'Right Hand'
            }
        ],
        [
            {
              id: 'k38',
              value: 'TRNS',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k150',
              zone: 'Right Hand'
            },
            {
              id: 'k39',
              value: 'HOME',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100',
              zone: 'Right Hand'
            },
            {
              id: 'k3A',
              value: 'PGDN',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100',
              zone: 'Right Hand'
            },
            {
              id: 'k3B',
              value: 'END',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100',
              zone: 'Right Hand'
            }
        ]
     ]
  },
  {  // LAYER 2 ===============================================
      row1: [
        {
          id: 'k00',
          value: 'RESET',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100'
        },
        {
          id: 'k01',
          value: 'F1',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100'
        },
        {
          id: 'k02',
          value: 'F2',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100'
        },
        {
          id: 'k03',
          value: 'F3',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100'
        },
        {
          id: 'k04',
          value: 'F4',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100'
        },
        {
          id: 'k05',
          value: 'F5',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          spacer: 's100'
        },
        {
          id: 'k06',
          value: 'F6',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100'
        },
        {
          id: 'k07',
          value: 'F7',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100'
        },
        {
          id: 'k08',
          value: 'F8',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100'
        },
        {
          id: 'k09',
          value: 'F9',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100'
        },
        {
          id: 'k010',
          value: 'F10',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100'
        },
        {
          id: 'k011',
          value: 'BSPC',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k175'
        }
      ],
      row2: [
          {
            id: 'k10',
            value: 'NO',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k125'
          },
          {
            id: 'k11',
            value: 'NO',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k12',
            value: 'NO',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k13',
            value: 'NO',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k14',
            value: 'NO',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k15',
            value: 'NO',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100',
            spacer: 's100'
          },
          {
            id: 'k16',
            value: 'NO',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k17',
            value: 'NO',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k18',
            value: 'NO',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k19',
            value: 'F11',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k110',
            value: 'F12',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k111',
            value: 'NO',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k150'
          }
      ],
      row3: [
          {
            id: 'k20',
            value: 'RSFT',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k175'
          },
          {
            id: 'k21',
            value: 'NO',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k22',
            value: 'NO',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k23',
            value: 'NO',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k24',
            value: 'NO',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k25',
            value: 'NO',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100',
            spacer: 's100'
          },
          {
            id: 'k26',
            value: 'NO',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k27',
            value: 'NO',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k28',
            value: 'NO',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k29',
            value: 'NO',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k210',
            value: 'VOLU',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k211',
            value: 'MUTE',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          }
      ],
      row4: [
        {
          id: 'k30',
          value: 'RCTL',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k125'
        },
        {
          id: 'k31',
          value: 'RGUI',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k150'
        },
        {
          id: 'k32',
          value: 'RALT',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k125'
        },
        {
          id: 'k33',
          value: 'MPLY',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k225',
          spacer: 's100'
        },
        {
          id: 'k37',
          value: 'MPLY',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k200'
        }
      ],
      rightHand: [
        [
            {
              id: 'k38',
              value: 'TRNS',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k125',
              zone: 'Right Hand'
            },
            {
              id: 'k39',
              value: 'TRNS',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k150',
              zone: 'Right Hand'
            },
            {
              id: 'k310',
              value: 'NO',
              type: 'nodisplay'
            },
            {
              id: 'k311',
              value: 'TRNS',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k175',
              zone: 'Right Hand'
            }
        ],
        [
            {
              id: 'k38',
              value: 'TRNS',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k150',
              zone: 'Right Hand'
            },
            {
              id: 'k39',
              value: 'MPRV',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100',
              zone: 'Right Hand'
            },
            {
              id: 'k3A',
              value: 'VOLD',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100',
              zone: 'Right Hand'
            },
            {
              id: 'k3B',
              value: 'MNXT',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100',
              zone: 'Right Hand'
            }
        ]
    ]
  }
];

og_caravan.keymap = function() {
  var keymap = [];
  var layer = [];
  var ks;
  var zones = og_caravan.zones;
  var i;

  for (i in og_caravan.keySections) {
      ks = og_caravan.keySections[i];
      layer = new Array();
      layer.push(ks.row1);
      layer.push(ks.row2);
      layer.push(ks.row3);
      layer.push(ks.row4.concat(ks.rightHand[zones[0].value]));
      keymap.push(layer);
  }

  return keymap;
};
