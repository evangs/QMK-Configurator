var KEYBOARDS = KEYBOARDS || [];
m3n3van = {};
KEYBOARDS.push(m3n3van);

m3n3van.id = 'm3n3van_rev1';

// config
m3n3van.config = {
    vendorId: '0xFEED',
    productId: '0x0033',
    deviceVersion: '0x0001',
    manufacturer: 'matthewdias',
    product: 'm3n3van',
    description: '2x3u (and community layouts) Minivan PCB',
    matrixRowPins: ['C6', 'B7', 'B6', 'B5'],
    matrixColumnPins: ['C7', 'F0', 'F1', 'F4', 'F5', 'F6', 'F7', 'B4', 'D7', 'D6', 'D4', 'B0', 'B1'],
    diodeDirection: 'COL2ROW',
    matrixHasGhost: false,
    // backlightLevels: 1,
    // backlightPin: 'B7',
    // usbMaxPowerConsumption: 100,
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
m3n3van.rules = {
    mcu: 'atmega32u4',
    processorFrequency: 16000000,
    architecture: 'AVR8',
    inputClockFrequency: 16000000,
    bootloaderSize: 4096,
    bootmagicEnabled: false,
    mousekeyEnabled: true,
    extrakeyEnabled: true,
    consoleEnabled: true,
    commandEnabled: true,
    sleepLedEnabled: false,
    nkroEnabled: true,
    backlightEnabled: false,
    rgbLightEnabled: false
};

// encoders
m3n3van.rotary_encoders = [
  {
    pinA: 'D1',
    pinB: 'D0',
    actions: [
      {
        right: 'KC_MNXT',
        left: 'KC_MPRV'
      }
    ]
  },
  {
    pinA: 'B2',
    pinB: 'B3',
    actions: [
      {
        right: 'KC_VOLU',
        left: 'KC_VOLD'
      }
    ]
  },
  {
    pinA: 'D3',
    pinB: 'D2',
    actions: [
      {
        right: 'KC_WH_U',
        left: 'KC_WH_D'
      }
    ]
  }
];

// keymap
m3n3van.configKeymap = {};
m3n3van.configKeymap.keys = [
  "K00",   "K01",   "K02",   "K03",   "K04",    "K05",   "K06",   "K07",   "K08",   "K09",   "K0A",   "K0B",   "K0C",
  "K10",   "K11",   "K12",   "K13",   "K14",    "K15",   "K16",   "K17",   "K18",   "K19",   "K1A",            "K1C",
  "K20",   "K21",   "K22",   "K23",   "K24",    "K25",   "K26",   "K27",   "K28",   "K29",   "K2A",   "K2B",   "K2C",
  "K30",   "K31",   "K32",   "K33",   "K34",    "K35",            "K37",            "K39",   "K3A",   "K3B",   "K3C"
];

m3n3van.configKeymap.positions = [
  ["K00",   "K01",   "K02",   "K03",   "K04",   "K05",   "K06",   "K07",   "K08",   "K09",   "K0A",   "K0B",   "K0C"],
  ["K10",   "K11",   "K12",   "K13",   "K14",   "K15",   "K16",   "K17",   "K18",   "K19",   "K1A",   "KC_NO", "K1C"],
  ["K20",   "K21",   "K22",   "K23",   "K24",   "K25",   "K26",   "K27",   "K28",   "K29",   "K2A",   "K2B",   "K2C"],
  ["K30",   "K31",   "K32",   "K33",   "K34",   "K35",   "KC_NO", "K37",   "KC_NO", "K39",   "K3A",   "K3B",   "K3C"]
];

// zones
m3n3van.zones = [
  {
    label: 'Backspace',
    value: 0,
    choices: [
      {
        code: 0,
        name: 'Full'
      },
      {
        code: 1,
        name: 'Encoder'
      }
    ]
  },
  {
    label: 'Tab',
    value: 0,
    choices: [
      {
        code: 0,
        name: 'Full'
      },
      {
        code: 1,
        name: 'Ortho Compat'
      }
    ]
  },
  {
    label: 'Enter',
    value: 0,
    choices: [
      {
        code: 0,
        name: 'Full'
      },
      {
        code: 1,
        name: 'Ortho Compat'
      }
    ]
  },
  {
    label: 'Shift',
    value: 0,
    choices: [
      {
        code: 0,
        name: 'Full',
      },
      {
        code: 1,
        name: 'Encoder'
      }
    ]
  },
  {
    label: 'Bottom Row',
    value: 0,
    choices: [
      {
          code: 0,
          name: '2x3u'
      },
      {
          code: 1,
          name: '6u'
      },
      {
          code: 2,
          name: '2x2u'
      },
      {
          code: 3,
          name: '3u'
      },
      {
          code: 4,
          name: '5u'
      },
      {
          code: 5,
          name: '2.75u'
      },
      {
          code: 6,
          name: 'Ortho Compat'
      }
    ]
  },
]

// ui keymap
m3n3van.keySections = [
  {
    // DEFAULT LAYER ==========================================
    row1: [
      {
        id: 'k00',
        value: 'ESC',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
        spacer: 'encoder',
      },
      {
        id: 'k01',
        value: 'Q',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k02',
        value: 'W',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k03',
        value: 'E',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k04',
        value: 'R',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k05',
        value: 'T',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k06',
        value: 'Y',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k07',
        value: 'U',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k08',
        value: 'I',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k09',
        value: 'O',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k0A',
        value: 'P',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
    ],
    backspace: [
      [
        {
          id: 'k0B',
          value: 'BSPC',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k175',
          zone: 'Backspace'
        },
        {
          id: 'k0C',
          value: 'NO',
          type: 'nodisplay'
        }
      ],
      [
        {
          id: 'k0B',
          value: 'BSPC',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Backspace'
        },
        {
          id: 'k0C',
          value: 'MUTE',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k75',
          spacer: 'encoder',
          zone: 'Backspace'
        },
      ]
    ],
    tab: [
      [
        {
          id: 'k10',
          value: 'TAB',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k125',
          zone: 'Tab'
        },
      ],
      [
        {
          id: 'k10',
          value: 'TAB',
          type: 'normal',
          secondary: null,
          showMenu: false,
          spacer: 'ls025',
          shape: 'k100',
          zone: 'Tab'
        },
      ]
    ],
    row2: [
      {
        id: 'k11',
        value: 'A',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k12',
        value: 'S',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k13',
        value: 'D',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k14',
        value: 'F',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k15',
        value: 'G',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k16',
        value: 'H',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k17',
        value: 'J',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k18',
        value: 'K',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k19',
        value: 'L',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k1A',
        value: 'SCLN',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      }
    ],
    enter: [
      [
        {
          id: 'k1C',
          value: 'ENT',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k150',
          zone: 'Enter'
        },
      ],
      [
        {
          id: 'k1C',
          value: 'ENT',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Enter'
        },
      ]
    ],
    shift: [
      [
        {
          id: 'k20',
          value: 'LSFT',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k175',
          zone: 'Shift'
        },
        {
          id: 'k21',
          value: 'NO',
          type: 'nodisplay'
        }
      ],
      [
        {
          id: 'k20',
          value: 'MPLY',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k75',
          spacer: 'encoder',
          zone: 'Shift'
        },
        {
          id: 'k21',
          value: 'LSFT',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Shift'
        },
      ]
    ],
    row3: [
      {
        id: 'k22',
        value: 'Z',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k23',
        value: 'X',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k24',
        value: 'C',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k25',
        value: 'V',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k26',
        value: 'B',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k27',
        value: 'N',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k28',
        value: 'M',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k29',
        value: 'COMM',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k2A',
        value: 'DOT',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k2B',
        value: 'SLSH',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k2C',
        value: 'RSFT',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
        spacer: 'encoder'
      }
    ],
    bottomRow: [
      // 2x3u
      [
        {
          id: 'k30',
          value: 'LCTL',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k31',
          value: 'LALT',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k125',
          zone: 'Bottom Row'
        },
        {
          id: 'k32',
          value: 'LGUI',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k33',
          value: 'NO',
          type: 'nodisplay'
        },
        {
          id: 'k34',
          value: 'SPC',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k300',
          zone: 'Bottom Row'
        },
        {
          id: 'k35',
          value: 'NO',
          type: 'nodisplay'
        },
        {
          id: 'k37',
          value: 'SPC',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k300',
          zone: 'Bottom Row'
        },
        {
          id: 'k39',
          value: 'NO',
          type: 'nodisplay'
        },
        {
          id: 'k3A',
          value: 'RGUI',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k125',
          zone: 'Bottom Row'
        },
        {
          id: 'k3B',
          value: 'RALT',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k3C',
          value: 'RCTL',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k125',
          zone: 'Bottom Row'
        },
      ],
      // 6u
      [
        {
          id: 'k30',
          value: 'LCTL',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k31',
          value: 'LALT',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k125',
          zone: 'Bottom Row'
        },
        {
          id: 'k32',
          value: 'LGUI',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k33',
          value: 'NO',
          type: 'nodisplay'
        },
        {
          id: 'k34',
          value: 'NO',
          type: 'nodisplay'
        },
        {
          id: 'k35',
          value: 'SPC',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k600',
          zone: 'Bottom Row'
        },
        {
          id: 'k37',
          value: 'NO',
          type: 'nodisplay'
        },
        {
          id: 'k39',
          value: 'NO',
          type: 'nodisplay'
        },
        {
          id: 'k3A',
          value: 'RGUI',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k125',
          zone: 'Bottom Row'
        },
        {
          id: 'k3B',
          value: 'RALT',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k3C',
          value: 'RCTL',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k125',
          zone: 'Bottom Row'
        },
      ],
      // 2x2u
      [
        {
          id: 'k30',
          value: 'LCTL',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k125',
          zone: 'Bottom Row'
        },
        {
          id: 'k31',
          value: 'LALT',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k32',
          value: 'LGUI',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k33',
          value: 'NO',
          type: 'nodisplay'
        },
        {
          id: 'k34',
          value: 'L2',
          type: 'momentary',
          secondary: null,
          showMenu: false,
          shape: 'k125',
          zone: 'Bottom Row'
        },
        {
          id: 'k35',
          value: 'SPC',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k200',
          zone: 'Bottom Row'
        },
        {
          id: 'k37',
          value: 'SPC',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k200',
          zone: 'Bottom Row'
        },
        {
          id: 'k39',
          value: 'L1',
          type: 'momentary',
          secondary: null,
          showMenu: false,
          shape: 'k125',
          zone: 'Bottom Row'
        },
        {
          id: 'k3A',
          value: 'RGUI',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k3B',
          value: 'RALT',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k3C',
          value: 'RCTL',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
      ],
      // 3u
      [
        {
          id: 'k30',
          value: 'LCTL',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k125',
          zone: 'Bottom Row'
        },
        {
          id: 'k31',
          value: 'LALT',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k125',
          zone: 'Bottom Row'
        },
        {
          id: 'k32',
          value: 'LGUI',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k125',
          zone: 'Bottom Row'
        },
        {
          id: 'k33',
          value: 'L2',
          type: 'momentary',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k34',
          value: 'NO',
          type: 'nodisplay'
        },
        {
          id: 'k35',
          value: 'SPC',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k300',
          zone: 'Bottom Row'
        },
        {
          id: 'k37',
          value: 'NO',
          type: 'nodisplay'
        },
        {
          id: 'k38',
          value: 'Missing Switch',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k39',
          value: 'L1',
          type: 'momentary',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k3A',
          value: 'RGUI',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k3B',
          value: 'RALT',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k3C',
          value: 'RCTL',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
      ],
      // 5u
      [
        {
          id: 'k30',
          value: 'LCTL',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k125',
          zone: 'Bottom Row'
        },
        {
          id: 'k31',
          value: 'LALT',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k32',
          value: 'LGUI',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k125',
          zone: 'Bottom Row'
        },
        {
          id: 'k33',
          value: 'NO',
          type: 'nodisplay'
        },
        {
          id: 'k34',
          value: 'NO',
          type: 'nodisplay'
        },
        {
          id: 'k35',
          value: 'SPC',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k500',
          zone: 'Bottom Row'
        }, 
        {
          id: 'k37',
          value: 'NO',
          type: 'nodisplay'
        },
        {
          id: 'k39',
          value: 'L1',
          type: 'momentary',
          secondary: null,
          showMenu: false,
          shape: 'k125',
          zone: 'Bottom Row'
        },
        {
          id: 'k3A',
          value: 'RGUI',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k3B',
          value: 'RALT',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k3C',
          value: 'RCTL',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
      ],
      // 2.75u
      [
        {
          id: 'k30',
          value: 'LCTL',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k31',
          value: 'LALT',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k32',
          value: 'LGUI',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k33',
          value: 'L2',
          type: 'momentary',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k34',
          value: 'NO',
          type: 'nodisplay'
        },
        {
          id: 'k35',
          value: 'SPC',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k275',
          zone: 'Bottom Row'
        },
        {
          id: 'k37',
          value: 'SPC',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k200',
          zone: 'Bottom Row'
        },
        {
          id: 'k39',
          value: 'L1',
          type: 'momentary',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k3A',
          value: 'RGUI',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k3B',
          value: 'RALT',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k3C',
          value: 'RCTL',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
      ],
      // Ortho Compat
      [
        {
          id: 'k30',
          value: 'LCTL',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k31',
          value: 'LALT',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k32',
          value: 'LGUI',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k33',
          value: 'L2',
          type: 'momentary',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k34',
          value: 'SPC',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k200',
          zone: 'Bottom Row'
        },
        {
          id: 'k35',
          value: 'L1',
          type: 'momentary',
          secondary: null,
          showMenu: false,
          shape: 'k75',
          spacer: 'encoder',
          zone: 'Bottom Row'
        },
        {
          id: 'k37',
          value: 'SPC',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k200',
          zone: 'Bottom Row'
        },
        {
          id: 'k39',
          value: 'L1',
          type: 'momentary',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k3A',
          value: 'RGUI',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k3B',
          value: 'RALT',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k3C',
          value: 'RCTL',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
      ],
    ]
  },
  {
    // LAYER 1 ==========================================
    row1: [
      {
        id: 'k00',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
        spacer: 'encoder',
      },
      {
        id: 'k01',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k02',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k03',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k04',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k05',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k06',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k07',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k08',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k09',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k0A',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
    ],
    backspace: [
      [
        {
          id: 'k0B',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k175',
          zone: 'Backspace'
        },
        {
          id: 'k0C',
          value: 'NO',
          type: 'nodisplay'
        },
      ],
      [
        {
          id: 'k0B',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Backspace'
        },
        {
          id: 'k0C',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k75',
          spacer: 'encoder',
          zone: 'Backspace'
        },
      ]
    ],
    tab: [
      [
        {
          id: 'k10',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k125',
          zone: 'Tab'
        },
      ],
      [
        {
          id: 'k10',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          spacer: 'ls025',
          shape: 'k100',
          zone: 'Tab'
        },
      ]
    ],
    row2: [
      {
        id: 'k11',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k12',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k13',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k14',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k15',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k16',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k17',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k18',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k19',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k1A',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      }
    ],
    enter: [
      [
        {
          id: 'k1C',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k150',
          zone: 'Enter'
        },
      ],
      [
        {
          id: 'k1C',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Enter'
        },
      ]
    ],
    shift: [
      [
        {
          id: 'k20',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k175',
          zone: 'Shift'
        },
        {
          id: 'k21',
          value: 'NO',
          type: 'nodisplay'
        },
      ],
      [
        {
          id: 'k20',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k75',
          spacer: 'encoder',
          zone: 'Shift'
        },
        {
          id: 'k21',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Shift'
        },
      ]
    ],
    row3: [
      {
        id: 'k22',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k23',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k24',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k25',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k26',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k27',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k28',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k29',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k2A',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k2B',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k2C',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
        spacer: 'encoder'
      }
    ],
    bottomRow: [
      // 2x3u
      [
        {
          id: 'k30',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k31',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k125',
          zone: 'Bottom Row'
        },
        {
          id: 'k32',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k33',
          value: 'NO',
          type: 'nodisplay'
        },
        {
          id: 'k34',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k300',
          zone: 'Bottom Row'
        },
        {
          id: 'k35',
          value: 'NO',
          type: 'nodisplay'
        },
        {
          id: 'k37',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k300',
          zone: 'Bottom Row'
        },
        {
          id: 'k39',
          value: 'NO',
          type: 'nodisplay'
        },
        {
          id: 'k3A',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k125',
          zone: 'Bottom Row'
        },
        {
          id: 'k3B',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k3C',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k125',
          zone: 'Bottom Row'
        },
      ],
      // 6u
      [
        {
          id: 'k30',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k31',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k125',
          zone: 'Bottom Row'
        },
        {
          id: 'k32',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k33',
          value: 'NO',
          type: 'nodisplay'
        },
        {
          id: 'k34',
          value: 'NO',
          type: 'nodisplay'
        },
        {
          id: 'k35',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k600',
          zone: 'Bottom Row'
        },
        {
          id: 'k37',
          value: 'NO',
          type: 'nodisplay'
        },
        {
          id: 'k39',
          value: 'NO',
          type: 'nodisplay'
        },
        {
          id: 'k3A',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k125',
          zone: 'Bottom Row'
        },
        {
          id: 'k3B',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k3C',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k125',
          zone: 'Bottom Row'
        },
      ],
      // 2x2u
      [
        {
          id: 'k30',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k125',
          zone: 'Bottom Row'
        },
        {
          id: 'k31',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k32',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k33',
          value: 'NO',
          type: 'nodisplay'
        },
        {
          id: 'k34',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k125',
          zone: 'Bottom Row'
        },
        {
          id: 'k35',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k200',
          zone: 'Bottom Row'
        },
        {
          id: 'k37',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k200',
          zone: 'Bottom Row'
        },
        {
          id: 'k39',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k125',
          zone: 'Bottom Row'
        },
        {
          id: 'k3A',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k3B',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k3C',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
      ],
      // 3u
      [
        {
          id: 'k30',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k125',
          zone: 'Bottom Row'
        },
        {
          id: 'k31',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k125',
          zone: 'Bottom Row'
        },
        {
          id: 'k32',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k125',
          zone: 'Bottom Row'
        },
        {
          id: 'k33',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k34',
          value: 'NO',
          type: 'nodisplay'
        },
        {
          id: 'k35',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k300',
          zone: 'Bottom Row'
        },
        {
          id: 'k37',
          value: 'NO',
          type: 'nodisplay'
        },
        {
          id: 'k38',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k39',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k3A',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k3B',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k3C',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
      ],
      // 5u
      [
        {
          id: 'k30',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k125',
          zone: 'Bottom Row'
        },
        {
          id: 'k31',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k32',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k125',
          zone: 'Bottom Row'
        },
        {
          id: 'k33',
          value: 'NO',
          type: 'nodisplay'
        },
        {
          id: 'k34',
          value: 'NO',
          type: 'nodisplay'
        },
        {
          id: 'k35',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k500',
          zone: 'Bottom Row'
        },
        {
          id: 'k37',
          value: 'NO',
          type: 'nodisplay'
        },
        {
          id: 'k39',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k125',
          zone: 'Bottom Row'
        },
        {
          id: 'k3A',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k3B',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k3C',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
      ],
      // 2.75u
      [
        {
          id: 'k30',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k31',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k32',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k33',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k34',
          value: 'NO',
          type: 'nodisplay'
        },
        {
          id: 'k35',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k275',
          zone: 'Bottom Row'
        },
        {
          id: 'k37',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k200',
          zone: 'Bottom Row'
        },
        {
          id: 'k39',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k3A',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k3B',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k3C',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
      ],
      // Ortho Compat
      [
        {
          id: 'k30',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k31',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k32',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k33',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k34',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k200',
          zone: 'Bottom Row'
        },
        {
          id: 'k35',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k75',
          spacer: 'encoder',
          zone: 'Bottom Row'
        },
        {
          id: 'k37',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k200',
          zone: 'Bottom Row'
        },
        {
          id: 'k39',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k3A',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k3B',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k3C',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
      ],
    ]
  },
  {
    // LAYER 2 ==========================================
    row1: [
      {
        id: 'k00',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
        spacer: 'encoder',
      },
      {
        id: 'k01',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k02',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k03',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k04',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k05',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k06',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k07',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k08',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k09',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k0A',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
    ],
    backspace: [
      [
        {
          id: 'k0B',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k175',
          zone: 'Backspace'
        },
        {
          id: 'k0C',
          value: 'NO',
          type: 'nodisplay'
        },
      ],
      [
        {
          id: 'k0B',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Backspace'
        },
        {
          id: 'k0C',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k75',
          spacer: 'encoder',
          zone: 'Backspace'
        },
      ]
    ],
    tab: [
      [
        {
          id: 'k10',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k125',
          zone: 'Tab'
        },
      ],
      [
        {
          id: 'k10',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          spacer: 'ls025',
          shape: 'k100',
          zone: 'Tab'
        },
      ]
    ],
    row2: [
      {
        id: 'k11',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k12',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k13',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k14',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k15',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k16',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k17',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k18',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k19',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k1A',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      }
    ],
    enter: [
      [
        {
          id: 'k1C',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k150',
          zone: 'Enter'
        },
      ],
      [
        {
          id: 'k1C',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Enter'
        },
      ]
    ],
    shift: [
      [
        {
          id: 'k20',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k175',
          zone: 'Shift'
        },
        {
          id: 'k21',
          value: 'NO',
          type: 'nodisplay'
        },
      ],
      [
        {
          id: 'k20',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k75',
          spacer: 'encoder',
          zone: 'Shift'
        },
        {
          id: 'k21',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Shift'
        },
      ]
    ],
    row3: [
      {
        id: 'k22',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k23',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k24',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k25',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k26',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k27',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k28',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k29',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k2A',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k2B',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      },
      {
        id: 'k2C',
        value: 'TRNS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
        spacer: 'encoder'
      }
    ],
    bottomRow: [
      // 2x3u
      [
        {
          id: 'k30',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k31',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k125',
          zone: 'Bottom Row'
        },
        {
          id: 'k32',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k33',
          value: 'NO',
          type: 'nodisplay'
        },
        {
          id: 'k34',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k300',
          zone: 'Bottom Row'
        },
        {
          id: 'k35',
          value: 'NO',
          type: 'nodisplay'
        },
        {
          id: 'k37',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k300',
          zone: 'Bottom Row'
        },
        {
          id: 'k39',
          value: 'NO',
          type: 'nodisplay'
        },
        {
          id: 'k3A',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k125',
          zone: 'Bottom Row'
        },
        {
          id: 'k3B',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k3C',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k125',
          zone: 'Bottom Row'
        },
      ],
      // 6u
      [
        {
          id: 'k30',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k31',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k125',
          zone: 'Bottom Row'
        },
        {
          id: 'k32',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k33',
          value: 'NO',
          type: 'nodisplay'
        },
        {
          id: 'k34',
          value: 'NO',
          type: 'nodisplay'
        },
        {
          id: 'k35',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k600',
          zone: 'Bottom Row'
        },
        {
          id: 'k37',
          value: 'NO',
          type: 'nodisplay'
        },
        {
          id: 'k39',
          value: 'NO',
          type: 'nodisplay'
        },
        {
          id: 'k3A',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k125',
          zone: 'Bottom Row'
        },
        {
          id: 'k3B',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k3C',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k125',
          zone: 'Bottom Row'
        },
      ],
      // 2x2u
      [
        {
          id: 'k30',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k125',
          zone: 'Bottom Row'
        },
        {
          id: 'k31',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k32',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k33',
          value: 'NO',
          type: 'nodisplay'
        },
        {
          id: 'k34',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k125',
          zone: 'Bottom Row'
        },
        {
          id: 'k35',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k200',
          zone: 'Bottom Row'
        },
        {
          id: 'k37',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k200',
          zone: 'Bottom Row'
        },
        {
          id: 'k39',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k125',
          zone: 'Bottom Row'
        },
        {
          id: 'k3A',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k3B',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k3C',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
      ],
      // 3u
      [
        {
          id: 'k30',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k125',
          zone: 'Bottom Row'
        },
        {
          id: 'k31',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k125',
          zone: 'Bottom Row'
        },
        {
          id: 'k32',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k125',
          zone: 'Bottom Row'
        },
        {
          id: 'k33',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k34',
          value: 'NO',
          type: 'nodisplay'
        },
        {
          id: 'k35',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k300',
          zone: 'Bottom Row'
        },
        {
          id: 'k37',
          value: 'NO',
          type: 'nodisplay'
        },
        {
          id: 'k38',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k39',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k3A',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k3B',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k3C',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
      ],
      // 5u
      [
        {
          id: 'k30',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k125',
          zone: 'Bottom Row'
        },
        {
          id: 'k31',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k32',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k125',
          zone: 'Bottom Row'
        },
        {
          id: 'k33',
          value: 'NO',
          type: 'nodisplay'
        },
        {
          id: 'k34',
          value: 'NO',
          type: 'nodisplay'
        },
        {
          id: 'k35',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k500',
          zone: 'Bottom Row'
        },
        {
          id: 'k37',
          value: 'NO',
          type: 'nodisplay'
        },
        {
          id: 'k39',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k125',
          zone: 'Bottom Row'
        },
        {
          id: 'k3A',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k3B',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k3C',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
      ],
      // 2.75u
      [
        {
          id: 'k30',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k31',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k32',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k33',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k34',
          value: 'NO',
          type: 'nodisplay'
        },
        {
          id: 'k35',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k275',
          zone: 'Bottom Row'
        },
        {
          id: 'k37',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k200',
          zone: 'Bottom Row'
        },
        {
          id: 'k39',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k3A',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k3B',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k3C',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
      ],
      // Ortho Compat
      [
        {
          id: 'k30',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k31',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k32',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k33',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k34',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k200',
          zone: 'Bottom Row'
        },
        {
          id: 'k35',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k75',
          spacer: 'encoder',
          zone: 'Bottom Row'
        },
        {
          id: 'k37',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k200',
          zone: 'Bottom Row'
        },
        {
          id: 'k39',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k3A',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k3B',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
        {
          id: 'k3C',
          value: 'TRNS',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Bottom Row'
        },
      ],
    ]
  },
];

m3n3van.keymap = function() {
    var keymap = [];
    var layer = [];
    var ks;
    var zones = m3n3van.zones;
    var i;

    for (i in m3n3van.keySections) {
        ks = m3n3van.keySections[i];
        layer = new Array();
        layer.push([...ks.row1, ...ks.backspace[zones[0].value]]);
        layer.push([...ks.tab[zones[1].value], ...ks.row2, ...ks.enter[zones[2].value]]);
        layer.push([...ks.shift[zones[3].value], ...ks.row3]);
        layer.push(ks.bottomRow[zones[4].value])
        keymap.push(layer);
    }

    return keymap;
};
