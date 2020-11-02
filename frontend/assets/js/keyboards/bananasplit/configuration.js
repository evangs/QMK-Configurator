var KEYBOARDS = KEYBOARDS || [];
bananasplit = {};
KEYBOARDS.push(bananasplit);

bananasplit.id = 'bananasplit_rev2';

// config
bananasplit.config = {
    vendorId: '0xFEAE',
    productId: '0x8870',
    deviceVersion: '0x0001',
    manufacturer: 'TheVan Keyboards',
    product: 'BananaSplit 60',
    description: 'The original 60% with split spacebar and dedicated arrows',
    matrixRowPins: ['B0', 'B2', 'B4', 'B5', 'B6'],
    matrixColumnPins: ['F5', 'B1', 'F0', 'F1', 'F4', 'B3', 'D7', 'D6', 'D4', 'D5', 'D3', 'D2', 'D1', 'D0'],
    diodeDirection: 'ROW2COL',
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
bananasplit.rules = {
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
bananasplit.configKeymap = {};
bananasplit.configKeymap.keys = [
    "K00", "K01", "K02", "K03", "K04", "K05", "K06", "K07", "K08", "K09", "K0A", "K0B", "K0C", "K0D", "K2D",
    "K10", "K11", "K12", "K13", "K14", "K15", "K16", "K17", "K18", "K19", "K1A", "K1B", "K1C", "K1D",
    "K20", "K21", "K22", "K23", "K24", "K25", "K26", "K27", "K28", "K29", "K2A", "K2B", "K2C",
    "K30", "K31", "K32", "K33", "K34", "K35", "K36", "K37", "K38", "K39", "K3A", "K3B", "K3C", "K3D",
    "K40", "K41", "K42",      "K44", "K45", "K46",      "K48", "K49", "K4A", "K4B", "K4C"
];

bananasplit.configKeymap.positions = [
    ["K00", "K01", "K02", "K03", "K04", "K05", "K06", "K07", "K08", "K09", "K0A", "K0B", "K0C", "K0D"],
    ["K10", "K11", "K12", "K13", "K14", "K15", "K16", "K17", "K18", "K19", "K1A", "K1B", "K1C", "K1D"],
    ["K20", "K21", "K22", "K23", "K24", "K25", "K26", "K27", "K28", "K29", "K2A", "K2B", "K2C", "K2D"],
    ["K30", "K31", "K32", "K33", "K34", "K35", "K36", "K37", "K38", "K39", "K3A", "K3B", "K3C", "K3D"],
    ["K40", "K41", "K42", "KC_NO", "K44", "K45", "K46", "KC_NO", "K48", "K49", "K4A", "K4B", "K4C", "KC_NO"]
]

// zones
bananasplit.zones = [
    {
        label: 'Backspace',
        value: 0,
        choices: [
            {
                code: 0,
                name: 'Standard'
            },
            {
                code: 1,
                name: 'HHKB'
            }
        ]
    },
    {
        label: 'Enter',
        value: 0,
        choices: [
            {
                code: 0,
                name: 'ANSI'
            },
            {
                code: 1,
                name: 'ISO'
            }
        ]
    },
    {
        label: 'Caps Lock',
        value: 0,
        choices: [
            {
                code: 0,
                name: 'Standard'
            },
            {
                code: 1,
                name: 'Stepped'
            }
        ]
    },
    {
        label: 'Left Shift',
        value: 0,
        choices: [
            {
                code: 0,
                name: 'ANSI'
            },
            {
                code: 1,
                name: 'ISO'
            }
        ]
    },{
        label: 'Right Shift',
        value: 0,
        choices: [
            {
                code: 0,
                name: 'ANSI'
            },
            {
                code: 1,
                name: 'Split'
            },
            {
                code: 2,
                name: 'Arrow'
            }
        ]
    },
    {
        label: 'Bottom Row',
        value: 0,
        choices: [
            {
                code: 0,
                name: '6U'
            },
            {
                code: 1,
                name: '7U'
            }
        ],
        subZones: [
            [
                {
                    label: 'Space',
                    value: 0,
                    choices: [
                        {
                            code: 0,
                            name: 'Standard'
                        },
                        {
                            code: 1,
                            name: '275 125 225'
                        },
                        {
                            code: 2,
                            name: '225 125 275'
                        }
                    ]
                },
                {
                    label: 'Space',
                    value: 0,
                    choices: [
                        {
                            code: 0,
                            name: 'WKL'
                        },
                        {
                            code: 1,
                            name: 'Split'
                        }
                    ]
                }
            ],
            [
                {
                    label: 'Bottom Right',
                    value: 0,
                    choices: [
                        {
                            code: 0,
                            name: 'Standard'
                        },
                        {
                            code: 1,
                            name: 'Singles'
                        }
                    ]
                },
                {
                    label: 'Bottom Right',
                    value: 0,
                    choices: [
                        {
                            code: 0,
                            name: 'WKL'
                        },
                        {
                            code: 1,
                            name: 'Singles'
                        }
                    ]
                }
            ]
        ]
    }
]

// ui keymap
bananasplit.keySections = [{
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
        value: 'MINS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k0C',
        value: 'EQL',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      }
    ],
    backspace: [
        [
            {
              id: 'k0D',
              value: 'BSPC',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k200',
              zone: 'Backspace'
            },
            {
              id: 'k2D',
              value: 'NO',
              type: 'nodisplay'
            }
        ],
        [
            {
              id: 'k0D',
              value: 'PSCR',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100',
              zone: 'Backspace'
          },
          {
            id: 'k2D',
            value: 'PAUS',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100',
            zone: 'Backspace'
          }
        ]
    ],
    row2: [
        {
          id: 'k10',
          value: 'TAB',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k150'
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
          value: 'LBRC',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100'
        },
        {
          id: 'k1C',
          value: 'RBRC',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100'
        }
    ],
    row2pipe: [
        [
            {
              id: 'k1D',
              value: 'BSLS',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k150',
              zone: 'Enter'
            }
        ],
        [
            {
              id: 'k1D',
              value: 'ENT',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'kISO',
              zone: 'Enter'
            }
        ]
    ],
    caps: [
        [
            {
              id: 'k20',
              value: 'CAPS',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k175',
              zone: 'Caps Lock'
            }
        ],
        [
            {
              id: 'k20',
              value: 'CAPS',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k175stepped',
              zone: 'Caps Lock'
            },
        ]
    ],
    row3: [
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
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100'
        }
    ],
    enter: [
        [
            {
              id: 'k2C',
              value: 'ENT',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k225',
              zone: 'Enter'
            }
        ],
        [
            {
              id: 'k2C',
              value: 'NUHS',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100',
              zone: 'Enter'
            }
        ]
    ],
    leftShift: [
        [
            {
              id: 'k30',
              value: 'LSFT',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k225',
              zone: 'Left Shift'
            },
            {
              id: 'k31',
              value: 'NO',
              type: 'nodisplay'
            }
        ],
        [
            {
              id: 'k30',
              value: 'LSFT',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k125',
              zone: 'Left Shift'
            },
            {
              id: 'k31',
              value: 'NUBS',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100',
              zone: 'Left Shift'
            }
        ]
    ],
    row4: [
        {
          id: 'k32',
          value: 'Z',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100'
        },
        {
          id: 'k33',
          value: 'X',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100'
        },
        {
          id: 'k34',
          value: 'C',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100'
        },
        {
          id: 'k35',
          value: 'V',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100'
        },
        {
          id: 'k36',
          value: 'B',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100'
        },
        {
          id: 'k37',
          value: 'N',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100'
        },
        {
          id: 'k38',
          value: 'M',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100'
        },
        {
          id: 'k39',
          value: 'COMM',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100'
        },
        {
          id: 'k3A',
          value: 'DOT',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100'
        }
    ],
    rightShift: [
        [
            {
              id: 'k3B',
              value: 'SLSH',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100',
              zone: 'Right Shift'
            },
            {
              id: 'k3C',
              value: 'RSFT',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k275',
              zone: 'Right Shift'
            },
            {
              id: 'k3D',
              value: 'NO',
              type: 'nodisplay'
            }
        ],
        [
            {
              id: 'k3B',
              value: 'SLSH',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100',
              zone: 'Right Shift'
            },
            {
              id: 'k3C',
              value: 'RSFT',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k175',
              zone: 'Right Shift'
            },
            {
              id: 'k3D',
              value: 'L1',
              type: 'momentary',
              secondary: null,
              showMenu: false,
              shape: 'k100',
              zone: 'Right Shift'
            }
        ],
        [
            {
              id: 'k3B',
              value: 'SLSH',
              type: 'tapkey',
              secondary: 'RSFT',
              showMenu: false,
              shape: 'k175',
              zone: 'Right Shift'
            },
            {
              id: 'k3C',
              value: 'UP',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100',
              zone: 'Right Shift'
            },
            {
              id: 'k3D',
              value: 'L1',
              type: 'momentary',
              secondary: null,
              showMenu: false,
              shape: 'k100',
              zone: 'Right Shift'
            }
        ]
    ],
    row5: [
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
              value: 'LGUI',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k125',
              zone: 'Bottom Row'
            },
            {
              id: 'k42',
              value: 'LALT',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k125',
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
              shape: 'k150',
              zone: 'Bottom Row'
            },
            {
              id: 'k41',
              value: 'LGUI',
              type: 'normal',
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
              shape: 'k150',
              zone: 'Bottom Row'
            }
        ]
    ],
    space: [
        [
            [
                {
                  id: 'k44',
                  value: 'NO',
                  type: 'nodisplay'
                },
                {
                  id: 'k45',
                  value: 'SPC',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k625',
                  zone: 'Space'
              },
              {
                id: 'k46',
                value: 'NO',
                type: 'nodisplay'
              }
            ],
            [
                {
                  id: 'k44',
                  value: 'ENT',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k275',
                  zone: 'Space'
                },
                {
                  id: 'k45',
                  value: 'BL_STEP',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k125',
                  zone: 'Space'
                },
                {
                  id: 'k46',
                  value: 'SPC',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k225',
                  zone: 'Space'
                }
            ],
            [
                {
                  id: 'k44',
                  value: 'ENT',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k225',
                  zone: 'Space'
                },
                {
                  id: 'k45',
                  value: 'BL_STEP',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k125',
                  zone: 'Space'
                },
                {
                  id: 'k46',
                  value: 'SPC',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k275',
                  zone: 'Space'
                }
            ]
        ],
        [
            [
                {
                  id: 'k44',
                  value: 'NO',
                  type: 'nodisplay'
                },
                {
                  id: 'k45',
                  value: 'SPC',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k700',
                  zone: 'Space'
              },
              {
                id: 'k46',
                value: 'NO',
                type: 'nodisplay'
              }
            ],
            [
                {
                  id: 'k44',
                  value: 'ENT',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k275',
                  zone: 'Space'
                },
                {
                  id: 'k45',
                  value: 'BL_STEP',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k150',
                  zone: 'Space'
                },
                {
                  id: 'k46',
                  value: 'SPC',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k275',
                  zone: 'Space'
                }
            ]
        ]
    ],
    bottomRight: [
        [
            [
                {
                  id: 'k48',
                  value: 'RGUI',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k125',
                  zone: 'Bottom Right'
                },
                {
                  id: 'k49',
                  value: 'RALT',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k125',
                  zone: 'Bottom Right'
                },
                {
                  id: 'k4A',
                  value: 'NO',
                  type: 'nodisplay'
                },
                {
                  id: 'k4B',
                  value: 'APP',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k125',
                  zone: 'Bottom Right'
                },
                {
                  id: 'k4C',
                  value: 'RCTL',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k125',
                  zone: 'Bottom Right'
                }
            ],
            [
                {
                  id: 'k48',
                  value: 'RGUI',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k100',
                  zone: 'Bottom Right'
                },
                {
                  id: 'k49',
                  value: 'RALT',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k100',
                  zone: 'Bottom Right'
                },
                {
                  id: 'k4A',
                  value: 'LEFT',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k100',
                  zone: 'Bottom Right'
                },
                {
                  id: 'k4B',
                  value: 'DOWN',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k100',
                  zone: 'Bottom Right'
                },
                {
                  id: 'k4C',
                  value: 'RIGHT',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k100',
                  zone: 'Bottom Right'
                }
            ]
        ],
        [
            [
                {
                  id: 'k48',
                  value: 'NO',
                  type: 'nodisplay'
                },
                {
                  id: 'k49',
                  value: 'RALT',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k150',
                  zone: 'Bottom Right'
                },
                {
                  id: 'k4A',
                  value: 'NO',
                  type: 'nodisplay'
                },
                {
                  id: 'k4B',
                  value: 'APP',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k100',
                  zone: 'Bottom Right'
                },
                {
                  id: 'k4C',
                  value: 'RCTL',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k150',
                  zone: 'Bottom Right'
                }
            ],
            [
                {
                  id: 'k48',
                  value: 'NO',
                  type: 'nodisplay'
                },
                {
                  id: 'k49',
                  value: 'RALT',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k100',
                  zone: 'Bottom Right'
                },
                {
                  id: 'k4A',
                  value: 'LEFT',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k100',
                  zone: 'Bottom Right'
                },
                {
                  id: 'k4B',
                  value: 'DOWN',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k100',
                  zone: 'Bottom Right'
                },
                {
                  id: 'k4C',
                  value: 'RIGHT',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k100',
                  zone: 'Bottom Right'
                }
            ]
        ]
    ]
}];

bananasplit.keymap = function() {
    var keymap = [];
    var layer = [];
    var ks;
    var zones = bananasplit.zones;
    var bottomRow = zones[5].value;
    var i;

    for (i in bananasplit.keySections) {
        ks = bananasplit.keySections[i];
        layer = new Array();
        layer.push(ks.row1.concat(ks.backspace[zones[0].value]));
        layer.push(ks.row2.concat(ks.row2pipe[zones[1].value]));
        layer.push(ks.caps[zones[2].value].concat(ks.row3).concat(ks.enter[zones[1].value]));
        layer.push(ks.leftShift[zones[3].value].concat(ks.row4).concat(ks.rightShift[zones[4].value]));
        layer.push(ks.row5[bottomRow].concat(ks.space[bottomRow][zones[5].subZones[0][bottomRow].value]).concat(ks.bottomRight[bottomRow][zones[5].subZones[1][bottomRow].value]));
        keymap.push(layer);
    }

    return keymap;
};
