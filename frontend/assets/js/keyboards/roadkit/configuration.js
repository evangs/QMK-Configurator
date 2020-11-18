var KEYBOARDS = KEYBOARDS || [];
roadkit = {};
KEYBOARDS.push(roadkit);

roadkit.id = 'roadkit_rev3';

// config
roadkit.config = {
    vendorId: '0xFEAE',
    productId: '0x8846',
    deviceVersion: '0x0003',
    manufacturer: 'TheVan Keyboards',
    product: 'Roadkit Micro',
    description: 'USB C Roadkit',
    matrixRowPins: ['F0', 'F5', 'D7', 'B4'],
    matrixColumnPins: ['F1', 'F4', 'D6', 'D4'],
    diodeDirection: 'COL2ROW',
    matrixHasGhost: false,
    backlightLevels: 1,
    backlightPin: 'B5',
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
    permissiveHold: true
};

// rules
roadkit.rules = {
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
roadkit.configKeymap = {};
roadkit.configKeymap.keys = [
    "K00", "K01", "K02", "K03",
    "K10", "K11", "K12", "K13",
    "K20", "K21", "K22", "K23",
    "K30", "K31", "K32", "K33"
];

roadkit.configKeymap.positions = [
    ["K00", "K01", "K02", "K03"],
    ["K10", "K11", "K12", "K13"],
    ["K20", "K21", "K22", "K23"],
    ["K30", "K31", "K32", "K33"]
]

// zones
roadkit.zones = [
    {
        label: 'Plus',
        value: 0,
        choices: [
            {
                code: 0,
                name: 'Numpad'
            },
            {
                code: 1,
                name: 'Macro'
            }
        ]
    },
    {
        label: 'Enter',
        value: 0,
        choices: [
            {
                code: 0,
                name: 'Numpad'
            },
            {
                code: 1,
                name: 'Macro'
            }
        ]
    },
    {
        label: 'Zero',
        value: 0,
        choices: [
            {
                code: 0,
                name: 'Numpad'
            },
            {
                code: 1,
                name: 'Macro'
            }
        ]
    }
]

// ui keymap
roadkit.keySections = [
    { // DEFAULT LAYER ==========================================
        row1: [
          {
            id: 'k00',
            value: 'P7',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k01',
            value: 'P8',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k02',
            value: 'P9',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          }
        ],
        plus: [
            [
                {
                  id: 'k03',
                  value: 'PPLS',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k200v',
                  zone: 'Plus'
                }
            ],
            [
                {
                  id: 'k03',
                  value: 'L0',
                  type: 'direct',
                  secondary: null,
                  showMenu: false,
                  shape: 'k100',
                  zone: 'Plus'
                }
            ]
        ],
        row2: [
            {
              id: 'k10',
              value: 'P4',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k11',
              value: 'P5',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k12',
              value: 'P6',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            }
        ],
        plus2: [
            [
                {
                  id: 'k13',
                  value: 'NO',
                  type: 'nodisplay'
                }
            ],
            [
                {
                  id: 'k13',
                  value: 'L1',
                  type: 'direct',
                  secondary: null,
                  showMenu: false,
                  shape: 'k100',
                  zone: 'Plus'
                }
            ]
        ],
        row3: [
            {
              id: 'k20',
              value: 'P1',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k21',
              value: 'P2',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k22',
              value: 'P3',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            }
        ],
        enter: [
            [
                {
                  id: 'k23',
                  value: 'PENT',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k200v',
                  zone: 'Enter'
                }
            ],
            [
                {
                  id: 'k23',
                  value: 'L2',
                  type: 'direct',
                  secondary: null,
                  showMenu: false,
                  shape: 'k100',
                  zone: 'Enter'
                }
            ]
        ],
        zero: [
            [
                {
                  id: 'k30',
                  value: 'P0',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k200',
                  zone: 'Zero'
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
                  value: 'P0',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k100',
                  zone: 'Zero'
                },
                {
                  id: 'k31',
                  value: 'L1',
                  type: 'toggle',
                  secondary: null,
                  showMenu: false,
                  shape: 'k100',
                  zone: 'Zero'
                }
            ]
        ],
        row4: [
            {
              id: 'k32',
              value: 'PDOT',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            }
        ],
        enter2: [
            [
                {
                  id: 'k33',
                  value: 'NO',
                  type: 'nodisplay'
                }
            ],
            [
                {
                  id: 'k33',
                  value: 'L3',
                  type: 'direct',
                  secondary: null,
                  showMenu: false,
                  shape: 'k100',
                  zone: 'Enter'
                }
            ]
        ]
    },
    { // LAYER ONE ==========================================
        row1: [
          {
            id: 'k00',
            value: 'HOME',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k01',
            value: 'INS',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k02',
            value: 'PGUP',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          }
        ],
        plus: [
            [
                {
                  id: 'k03',
                  value: 'TRNS',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k200v'
                }
            ],
            [
                {
                  id: 'k03',
                  value: 'L0',
                  type: 'direct',
                  secondary: null,
                  showMenu: false,
                  shape: 'k100'
                }
            ]
        ],
        row2: [
            {
              id: 'k10',
              value: 'END',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k11',
              value: 'UP',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k12',
              value: 'PGDN',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            }
        ],
        plus2: [
            [
                {
                  id: 'k13',
                  value: 'NO',
                  type: 'nodisplay'
                }
            ],
            [
                {
                  id: 'k13',
                  value: 'L1',
                  type: 'direct',
                  secondary: null,
                  showMenu: false,
                  shape: 'k100'
                }
            ]
        ],
        row3: [
            {
              id: 'k20',
              value: 'LEFT',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k21',
              value: 'DOWN',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k22',
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
                  id: 'k23',
                  value: 'TRNS',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k200v'
                }
            ],
            [
                {
                  id: 'k23',
                  value: 'L2',
                  type: 'direct',
                  secondary: null,
                  showMenu: false,
                  shape: 'k100'
                }
            ]
        ],
        zero: [
            [
                {
                  id: 'k30',
                  value: 'DEL',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k200'
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
                  value: 'DEL',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k100'
                },
                {
                  id: 'k31',
                  value: 'NO',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k100'
                }
            ]
        ],
        row4: [
            {
              id: 'k32',
              value: 'LSFT',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            }
        ],
        enter2: [
            [
                {
                  id: 'k33',
                  value: 'NO',
                  type: 'nodisplay'
                }
            ],
            [
                {
                  id: 'k33',
                  value: 'L3',
                  type: 'direct',
                  secondary: null,
                  showMenu: false,
                  shape: 'k100'
                }
            ]
        ]
    },
    { // LAYER two ==========================================
        row1: [
          {
            id: 'k00',
            value: 'MUTE',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k01',
            value: 'VOLD',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k02',
            value: 'VOLU',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          }
        ],
        plus: [
            [
                {
                  id: 'k03',
                  value: 'TRNS',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k200v'
                }
            ],
            [
                {
                  id: 'k03',
                  value: 'L0',
                  type: 'direct',
                  secondary: null,
                  showMenu: false,
                  shape: 'k100'
                }
            ]
        ],
        row2: [
            {
              id: 'k10',
              value: 'MSTP',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
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
              value: 'MPLY',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            }
        ],
        plus2: [
            [
                {
                  id: 'k13',
                  value: 'NO',
                  type: 'nodisplay'
                }
            ],
            [
                {
                  id: 'k13',
                  value: 'L1',
                  type: 'direct',
                  secondary: null,
                  showMenu: false,
                  shape: 'k100'
                }
            ]
        ],
        row3: [
            {
              id: 'k20',
              value: 'MPRV',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
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
              value: 'MNXT',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            }
        ],
        enter: [
            [
                {
                  id: 'k23',
                  value: 'TRNS',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k200v'
                }
            ],
            [
                {
                  id: 'k23',
                  value: 'L2',
                  type: 'direct',
                  secondary: null,
                  showMenu: false,
                  shape: 'k100'
                }
            ]
        ],
        zero: [
            [
                {
                  id: 'k30',
                  value: 'MPLY',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k200'
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
                  value: 'MPLY',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k100'
                },
                {
                  id: 'k31',
                  value: 'NO',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k100'
                }
            ]
        ],
        row4: [
            {
              id: 'k32',
              value: 'ESC',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            }
        ],
        enter2: [
            [
                {
                  id: 'k33',
                  value: 'NO',
                  type: 'nodisplay'
                }
            ],
            [
                {
                  id: 'k33',
                  value: 'L3',
                  type: 'direct',
                  secondary: null,
                  showMenu: false,
                  shape: 'k100'
                }
            ]
        ]
    },
    { // LAYER three ==========================================
        row1: [
          {
            id: 'k00',
            value: 'NO',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k01',
            value: 'NO',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k02',
            value: 'NO',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          }
        ],
        plus: [
            [
                {
                  id: 'k03',
                  value: 'TRNS',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k200v'
                }
            ],
            [
                {
                  id: 'k03',
                  value: 'L0',
                  type: 'direct',
                  secondary: null,
                  showMenu: false,
                  shape: 'k100'
                }
            ]
        ],
        row2: [
            {
              id: 'k10',
              value: 'NO',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k11',
              value: 'RESET',
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
            }
        ],
        plus2: [
            [
                {
                  id: 'k13',
                  value: 'NO',
                  type: 'nodisplay'
                }
            ],
            [
                {
                  id: 'k13',
                  value: 'L1',
                  type: 'direct',
                  secondary: null,
                  showMenu: false,
                  shape: 'k100'
                }
            ]
        ],
        row3: [
            {
              id: 'k20',
              value: 'NO',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
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
            }
        ],
        enter: [
            [
                {
                  id: 'k23',
                  value: 'TRNS',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k200v'
                }
            ],
            [
                {
                  id: 'k23',
                  value: 'L2',
                  type: 'direct',
                  secondary: null,
                  showMenu: false,
                  shape: 'k100'
                }
            ]
        ],
        zero: [
            [
                {
                  id: 'k30',
                  value: 'BL_STEP',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k200'
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
                  value: 'BL_STEP',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k100'
                },
                {
                  id: 'k31',
                  value: 'NO',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k100'
                }
            ]
        ],
        row4: [
            {
              id: 'k32',
              value: 'NO',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            }
        ],
        enter2: [
            [
                {
                  id: 'k33',
                  value: 'NO',
                  type: 'nodisplay'
                }
            ],
            [
                {
                  id: 'k33',
                  value: 'L3',
                  type: 'direct',
                  secondary: null,
                  showMenu: false,
                  shape: 'k100'
                }
            ]
        ]
    }
];

roadkit.keymap = function() {
    var keymap = [];
    var layer = [];
    var ks;
    var zones = roadkit.zones;
    var i;

    for (i in roadkit.keySections) {
        ks = roadkit.keySections[i];
        layer = new Array();
        layer.push(ks.row1.concat(ks.plus[zones[0].value]));
        layer.push(ks.row2.concat(ks.plus2[zones[0].value]));
        layer.push(ks.row3.concat(ks.enter[zones[1].value]));
        layer.push(ks.zero[zones[2].value].concat(ks.row4).concat(ks.enter2[zones[1].value]));
        keymap.push(layer);
    }

    return keymap;
};
