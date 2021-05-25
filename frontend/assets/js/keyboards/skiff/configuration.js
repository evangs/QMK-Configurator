var KEYBOARDS = KEYBOARDS || [];
skiff = {};
KEYBOARDS.push(skiff);

skiff.id = 'skiff_rev1';

// config
skiff.config = {
    vendorId: '0xFEAE',
    productId: '0x8846',
    deviceVersion: '0x0003',
    manufacturer: 'TheVan Keyboards',
    product: 'Skiff',
    description: 'Skiff Macropad',
    matrixColumnPins: ['D0', 'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7'],
    portscan: 'D0',
    portscanPins: 255,
    matrixRowPins: ['F1', 'F0'],
    diodeDirection: 'COL2ROW',
    matrixHasGhost: false,
    backlightLevels: 1,
    backlightPin: 'B5',
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
    rgbDiPin: 'B0',
    rgbLedNum: 4,
    permissiveHold: true
};

// rules
skiff.rules = {
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
    rgbLightEnabled: true
};

skiff.indicators = [
  [
    {red: 200, green: 23, blue: 23, action: 'power', type: 'power'}
  ],
  [
    {red: 200, green: 23, blue: 23, action: 'power', type: 'power'}
  ],
  [
    {red: 200, green: 23, blue: 23, action: 'power', type: 'power'}
  ],
  [
    {red: 200, green: 23, blue: 23, action: 'power', type: 'power'}
  ]
];

// keymap
skiff.configKeymap = {};
skiff.configKeymap.keys = [
  "K7", "K15", "K8", "K0",
  "K6", "K14", "K9", "K1",
  "K5", "K13", "K10", "K2",
  "K4", "K12", "K11", "K3"
];

skiff.configKeymap.positions = [
  ["K0", "K1", "K2", "K3", "K4", "K5", "K6", "K7"],
  ["K8", "K9", "K10", "K11", "K12", "K13", "K14", "K15"]
]

// zones
skiff.zones = [
  {
    label: 'Zero',
    value: 0,
    choices: [
      {
        code: 0,
        name: '200'
      },
      {
        code: 1,
        name: 'Split'
      }
    ]
  }
]

// ui keymap
skiff.keySections = [
  { // DEFAULT LAYER ==========================================
    row1: [
      {
        id: 'k00',
        value: '7',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k01',
        value: '8',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k02',
        value: '9',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k03',
        value: 'SLSH',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      }
    ],
    row2: [
      {
        id: 'k10',
        value: '4',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k11',
        value: '5',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k12',
        value: '6',
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
      }
    ],
    row3: [
      {
        id: 'k20',
        value: '1',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k21',
        value: '2',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k22',
        value: '3',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k23',
        value: 'PLUS',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100',
      }
    ],
    zero: [
      [
        {
          id: 'k30',
          value: '0',
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
          value: '0',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100',
          zone: 'Zero'
        },
        {
          id: 'k31',
          value: '0',
          type: 'normal',
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
        value: 'DOT',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k33',
        value: 'ENT',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      }
    ]
  }
];

skiff.keymap = function() {
    var keymap = [];
    var layer = [];
    var ks;
    var zones = skiff.zones;
    var i;

    for (i in skiff.keySections) {
        ks = skiff.keySections[i];
        layer = new Array();
        layer.push(ks.row1);
        layer.push(ks.row2);
        layer.push(ks.row3);
        layer.push(ks.zero[zones[0].value].concat(ks.row4));
        keymap.push(layer);
    }

    return keymap;
};
