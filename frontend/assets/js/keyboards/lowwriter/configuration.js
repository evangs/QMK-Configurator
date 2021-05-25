var KEYBOARDS = KEYBOARDS || [];
lowwriter = {};
KEYBOARDS.push(lowwriter);

lowwriter.id = 'lowwriter_rev2';

// config
lowwriter.config = {
    vendorId: '0xFEAE',
    productId: '0x8847',
    deviceVersion: '0x0001',
    manufacturer: 'TheVan Keyboards',
    product: 'LowWriter',
    description: 'LowWriter MiniVan 40%',
    matrixRowPins: ['D7', 'B5', 'F7', 'D4'],
    matrixColumnPins: ['D2', 'D3', 'D5', 'D6', 'B4', 'B6', 'F6', 'F5', 'F4', 'F1', 'F0', 'B3'],
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
lowwriter.rules = {
    mcu: 'atmega32u4',
    processorFrequency: 16000000,
    architecture: 'AVR8',
    inputClockFrequency: 16000000,
    bootloaderSize: 4096,
    bootmagicEnabled: true,
    mousekeyEnabled: true,
    extrakeyEnabled: true,
    consoleEnabled: false,
    commandEnabled: false,
    sleepLedEnabled: false,
    nkroEnabled: true,
    backlightEnabled: true
};

// keymap
lowwriter.configKeymap = {};
lowwriter.configKeymap.keys = [
    "K00", "K01", "K02", "K03", "K04", "K05", "K06", "K07", "K08", "K09", "K0A", "K0B",
    "K10", "K11", "K12", "K13", "K14", "K15", "K16", "K17", "K18", "K19", "K1A", "K1B",
    "K20", "K21", "K22", "K23", "K24", "K25", "K26", "K27", "K28", "K29", "K2A", "K2B",
    "K30", "K31", "K34", "K32", "K33", "K37", "K38", "K39", "K3A", "K3B"
];

lowwriter.configKeymap.positions = [
    ["K00", "K01", "K02", "K03", "K04", "K05", "K06", "K07", "K08", "K09", "K0A", "K0B"],
    ["K10", "K11", "K12", "K13", "K14", "K15", "K16", "K17", "K18", "K19", "K1A", "K1B"],
    ["K20", "K21", "K22", "K23", "K24", "K25", "K26", "K27", "K28", "K29", "K2A", "K2B"],
    ["K30", "K31", "K32", "K33", "K34", "KC_NO", "KC_NO", "K37", "K38", "K39", "K3A", "K3B"]
];

// zones
lowwriter.zones = [
    {
        label: 'Enter',
        value: 0,
        choices: [
            {
                code: 0,
                name: 'Standard'
            },
            {
                code: 1,
                name: 'JIS'
            }
        ]
    },
    {
        label: 'Left Hand',
        value: 0,
        choices: [
            {
                code: 0,
                name: 'Standard'
            },
            {
                code: 1,
                name: 'South Paw'
            }
        ]
    },
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
lowwriter.keySections = [
    { // DEFAULT LAYER ==========================================
        row1: [
          {
            id: 'k00',
            value: 'TAB',
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
            shape: 'k100'
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
            id: 'k0A',
            value: 'P',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k0B',
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
              value: 'ESC',
              type: 'tapkey',
              secondary: 'L1',
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
              shape: 'k100'
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
              id: 'k1A',
              value: 'SCLN',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            }
        ],
        enter: [
            [
                {
                  id: 'k1B',
                  value: 'QUOT',
                  type: 'tapkey',
                  secondary: 'L1',
                  showMenu: false,
                  shape: 'k150',
                  zone: 'Enter'
                }
            ],
            [
                {
                  id: 'k1B',
                  value: 'QUOT',
                  type: 'tapkey',
                  secondary: 'L1',
                  showMenu: false,
                  shape: 'kJIS',
                  zone: 'Enter'
                }
            ]
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
              shape: 'k100'
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
              value: 'SLSH',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            }
        ],
        fn2: [
            [
                {
                  id: 'k2B',
                  value: 'L2',
                  type: 'momentary',
                  secondary: null,
                  showMenu: false,
                  shape: 'k100',
                  zone: 'Enter'
                }
            ],
            [
                {
                  id: 'k2B',
                  value: 'NO',
                  type: 'nodisplay',
                }
            ]
        ],
        leftHand: [
            [
                {
                  id: 'k30',
                  value: 'LCTL',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k125',
                  zone: 'Left Hand'
                },
                {
                  id: 'k31',
                  value: 'L2',
                  type: 'momentary',
                  secondary: null,
                  showMenu: false,
                  shape: 'k150',
                  zone: 'Left Hand'
                },
                {
                  id: 'k34',
                  value: 'NO',
                  type: 'nodisplay'
                },
                {
                  id: 'k32',
                  value: 'LGUI',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k125',
                  zone: 'Left Hand'
                }
            ],
            [
                {
                  id: 'k30',
                  value: 'LCTL',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k100',
                  zone: 'Left Hand'
                },
                {
                  id: 'k31',
                  value: 'L2',
                  type: 'momentary',
                  secondary: null,
                  showMenu: false,
                  shape: 'k100',
                  zone: 'Left Hand'
                },
                {
                  id: 'k34',
                  value: 'LALT',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k100',
                  zone: 'Left Hand'
                },
                {
                  id: 'k32',
                  value: 'LGUI',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k100',
                  zone: 'Left Hand'
                }
            ]
        ],
        row4: [
            {
              id: 'k33',
              value: 'ENT',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k225'
            },
            {
              id: 'k37',
              value: 'SPC',
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
                  value: 'RALT',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k125',
                  zone: 'Right Hand'
                },
                {
                  id: 'k39',
                  value: 'RSFT',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k150',
                  zone: 'Right Hand'
                },
                {
                  id: 'k3A',
                  value: 'NO',
                  type: 'nodisplay'
                },
                {
                  id: 'k3B',
                  value: 'L3',
                  type: 'toggle',
                  secondary: null,
                  showMenu: false,
                  shape: 'k175',
                  zone: 'Right Hand'
                }
            ],
            [
                {
                  id: 'k38',
                  value: 'RALT',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k150',
                  zone: 'Right Hand'
                },
                {
                  id: 'k39',
                  value: 'RSFT',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k100',
                  zone: 'Right Hand'
                },
                {
                  id: 'k3A',
                  value: 'RCTL',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k100',
                  zone: 'Right Hand'
                },
                {
                  id: 'k3B',
                  value: 'L3',
                  type: 'toggle',
                  secondary: null,
                  showMenu: false,
                  shape: 'k100',
                  zone: 'Right Hand'
                }
            ],
        ]
    },
    {  // LAYER 1 ===============================================
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
            value: 'EXLM',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k02',
            value: 'AT',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k03',
            value: 'HASH',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k04',
            value: 'DLR',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k05',
            value: 'PERC',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k06',
            value: 'CIRC',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k07',
            value: 'AMPR',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k08',
            value: 'ASTR',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k09',
            value: 'LPRN',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k0A',
            value: 'RPRN',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k0B',
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
              value: 'TRNS',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k125'
            },
            {
              id: 'k11',
              value: 'BSLS',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k12',
              value: 'QUOT',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k13',
              value: 'MINS',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k14',
              value: 'EQL',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k15',
              value: 'LBRC',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k16',
              value: 'RBRC',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k17',
              value: 'DOWN',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k18',
              value: 'UP',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k19',
              value: 'LEFT',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k1A',
              value: 'RIGHT',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            }
        ],
        enter: [
            [
                {
                  id: 'k1B',
                  value: 'TRNS',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k150'
                }
            ],
            [
                {
                  id: 'k1B',
                  value: 'TRNS',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'kJIS'
                }
            ]
        ],
        row3: [
            {
              id: 'k20',
              value: 'TRNS',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k175'
            },
            {
              id: 'k21',
              value: 'ESC',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k22',
              value: 'BL_STEP',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k23',
              value: 'PSCR',
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
              value: 'MSTP',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k28',
              value: 'MPLY',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k29',
              value: 'MPRV',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k2A',
              value: 'MNXT',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            }
        ],
        fn2: [
            [
                {
                  id: 'k2B',
                  value: 'TRNS',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k100'
                }
            ],
            [
                {
                  id: 'k2B',
                  value: 'NO',
                  type: 'nodisplay',
                }
            ]
        ],
        leftHand: [
            [
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
                  id: 'k34',
                  value: 'NO',
                  type: 'nodisplay'
                },
                {
                  id: 'k32',
                  value: 'TRNS',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k125'
                }
            ],
            [
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
                  id: 'k34',
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
                }
            ]
        ],
        row4: [
            {
              id: 'k33',
              value: 'TRNS',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k225'
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
                  shape: 'k125'
                },
                {
                  id: 'k39',
                  value: 'TRNS',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k150'
                },
                {
                  id: 'k3A',
                  value: 'NO',
                  type: 'nodisplay'
                },
                {
                  id: 'k3B',
                  value: 'RESET',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k175'
                }
            ],
            [
                {
                  id: 'k38',
                  value: 'TRNS',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k150'
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
                  id: 'k3A',
                  value: 'TRNS',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k100'
                },
                {
                  id: 'k3B',
                  value: 'RESET',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k100'
                }
            ],
        ]
    },
    {  // LAYER 2 ===============================================
        row1: [
          {
            id: 'k00',
            value: 'TILD',
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
            shape: 'k100'
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
            id: 'k0A',
            value: '0',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k0B',
            value: 'TRNS',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k175'
          }
        ],
        row2: [
            {
              id: 'k10',
              value: 'ESC',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k125'
            },
            {
              id: 'k11',
              value: 'PIPE',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k12',
              value: 'DQT',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k13',
              value: 'UNDS',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k14',
              value: 'PLUS',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k15',
              value: 'LCBR',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k16',
              value: 'RCBR',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k17',
              value: '4',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k18',
              value: '5',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k19',
              value: '6',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k1A',
              value: 'VOLU',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            }
        ],
        enter: [
            [
                {
                  id: 'k1B',
                  value: 'TRNS',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k150'
                }
            ],
            [
                {
                  id: 'k1B',
                  value: 'TRNS',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'kJIS'
                }
            ]
        ],
        row3: [
            {
              id: 'k20',
              value: 'TRNS',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k175'
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
              value: '0',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k27',
              value: '1',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k28',
              value: '2',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k29',
              value: '3',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k2A',
              value: 'VOLD',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            }
        ],
        fn2: [
            [
                {
                  id: 'k2B',
                  value: 'TRNS',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k100'
                }
            ],
            [
                {
                  id: 'k2B',
                  value: 'NO',
                  type: 'nodisplay',
                }
            ]
        ],
        leftHand: [
            [
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
                  id: 'k34',
                  value: 'NO',
                  type: 'nodisplay'
                },
                {
                  id: 'k32',
                  value: 'TRNS',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k125'
                }
            ],
            [
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
                  id: 'k34',
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
                }
            ]
        ],
        row4: [
            {
              id: 'k33',
              value: 'TRNS',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k225'
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
                  shape: 'k125'
                },
                {
                  id: 'k39',
                  value: 'TRNS',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k150'
                },
                {
                  id: 'k3A',
                  value: 'NO',
                  type: 'nodisplay'
                },
                {
                  id: 'k3B',
                  value: 'TRNS',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k175'
                }
            ],
            [
                {
                  id: 'k38',
                  value: 'TRNS',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k150'
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
                  id: 'k3A',
                  value: 'TRNS',
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
        ]
    },
    {  // LAYER 3 LOCK ===============================================
        row1: [
          {
            id: 'k00',
            value: 'TRNS',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
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
          },
          {
            id: 'k06',
            value: 'TRNS',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k07',
            value: 'F1',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k08',
            value: 'F2',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k09',
            value: 'F3',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k0A',
            value: 'F4',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k0B',
            value: 'TRNS',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k175'
          }
        ],
        row2: [
            {
              id: 'k10',
              value: 'ESC',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k125'
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
              value: 'F5',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k18',
              value: 'F6',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k19',
              value: 'F7',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k1A',
              value: 'F8',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            }
        ],
        enter: [
            [
                {
                  id: 'k1B',
                  value: 'TRNS',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k150'
                }
            ],
            [
                {
                  id: 'k1B',
                  value: 'TRNS',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'kJIS'
                }
            ]
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
              value: '1',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k22',
              value: '2',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k23',
              value: '3',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k24',
              value: '4',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k25',
              value: '5',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k26',
              value: '6',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k27',
              value: 'F9',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k28',
              value: 'F10',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k29',
              value: 'F11',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k2A',
              value: 'F12',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            }
        ],
        fn2: [
            [
                {
                  id: 'k2B',
                  value: 'TRNS',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k100'
                }
            ],
            [
                {
                  id: 'k2B',
                  value: 'NO',
                  type: 'nodisplay',
                }
            ]
        ],
        leftHand: [
            [
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
                  value: 'LALT',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k150'
                },
                {
                  id: 'k34',
                  value: 'NO',
                  type: 'nodisplay'
                },
                {
                  id: 'k32',
                  value: 'B',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k125'
                }
            ],
            [
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
                  value: 'LSFT',
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
                  id: 'k32',
                  value: 'TRNS',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k100'
                }
            ]
        ],
        row4: [
            {
              id: 'k33',
              value: 'SPC',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k225'
            },
            {
              id: 'k37',
              value: 'C',
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
                  shape: 'k125'
                },
                {
                  id: 'k39',
                  value: 'TRNS',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k150'
                },
                {
                  id: 'k3A',
                  value: 'NO',
                  type: 'nodisplay'
                },
                {
                  id: 'k3B',
                  value: 'TRNS',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k175'
                }
            ],
            [
                {
                  id: 'k38',
                  value: 'TRNS',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k150'
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
                  id: 'k3A',
                  value: 'TRNS',
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
        ]
    }
];

lowwriter.keymap = function() {
    var keymap = [];
    var layer = [];
    var ks;
    var zones = lowwriter.zones;
    var i;

    for (i in lowwriter.keySections) {
        ks = lowwriter.keySections[i];
        layer = new Array();
        layer.push(ks.row1);
        layer.push(ks.row2.concat(ks.enter[zones[0].value]));
        layer.push(ks.row3.concat(ks.fn2[zones[0].value]));
        layer.push(ks.leftHand[zones[1].value].concat(ks.row4).concat(ks.rightHand[zones[2].value]));
        keymap.push(layer);
    }

    return keymap;
};
