var KEYBOARDS = KEYBOARDS || [];
garbage_truck = {};
KEYBOARDS.push(garbage_truck);

garbage_truck.id = 'garbage_truck_rev1';

// config
garbage_truck.config = {
    vendorId: '0xFEAE',
    productId: '0x8849',
    deviceVersion: '0x0001',
    manufacturer: 'TheVan Keyboards',
    product: 'Garbage Truck',
    description: 'It is garbage',
    matrixRowPins: ['F0', 'F1', 'F4', 'F5', 'B7', 'D2', 'D3', 'B4'],
    matrixColumnPins: ['B2', 'B3', 'D5', 'B5', 'B6', 'C6', 'F7', 'F6'],
    diodeDirection: 'COL2ROW',
    matrixHasGhost: false,
    backlightLevels: 1,
    backlightPin: 'B7',
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
garbage_truck.rules = {
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
    rgbLightEnabled: false
};

garbage_truck.static_indicators = [
  {
    pin: 'D7',
    type: 'power',
    action: 'power'
  },
  {
    pin: 'D6',
    type: 'layer',
    action: 'L3'
  },
  {
    pin: 'D4',
    type: 'layer',
    action: 'L3'
  }
];

garbage_truck.rotary_encoders = [
  {
    pinA: 'B0',
    pinB: 'B1',
    actions: [
      {
        right: 'KC_VOLU',
        left: 'KC_VOLD'
      }
    ]
  }
];

// keymap
garbage_truck.configKeymap = {};
garbage_truck.configKeymap.keys = [
    "K00", "K01", "K02", "K03", "K04", "K05", "K06", "K07", "K47", "K46", "K45", "K44", "K43", "K42", "K41", "K40",
    "K10", "K11", "K12", "K13", "K14", "K15", "K16", "K17", "K57", "K56", "K55", "K54", "K53", "K52", "K51", "K50",
    "K20", "K21", "K22", "K23", "K24", "K25", "K26", "K27", "K67", "K66", "K65", "K64", "K63", "K62", "K61", "K60",
    "K30", "K31", "K32", "K35", "K76", "K75", "K74", "K73", "K72", "K71", "K70"
];

garbage_truck.configKeymap.positions = [
    ["K00", "K01", "K02", "K03", "K04", "K05", "K06", "K07"],
    ["K10", "K11", "K12", "K13", "K14", "K15", "K16", "K17"],
    ["K20", "K21", "K22", "K23", "K24", "K25", "K26", "K27"],
    ["K30", "K31", "K32", "KC_NO", "KC_NO", "K35", "KC_NO", "KC_NO"],
    ["K40", "K41", "K42", "K43", "K44", "K45", "K46", "K47"],
    ["K50", "K51", "K52", "K53", "K54", "K55", "K56", "K57"],
    ["K60", "K61", "K62", "K63", "K64", "K65", "K66", "K67"],
    ["K70", "K71", "K72", "K73", "K74", "K75", "K76", "KC_NO"]
];

// zones
garbage_truck.zones = [
    {
        label: 'Bottom Row',
        value: 0,
        choices: [
            {
                code: 0,
                name: '700 Offset'
            },
            {
                code: 1,
                name: '700 Symmetric'
            },
            {
              code: 2,
              name: '625 Space'
            }
        ]
    }
]

// ui keymap
garbage_truck.keySections = [
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
            id: 'k47',
            value: 'I',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k46',
            value: 'O',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k45',
            value: 'P',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k44',
            value: 'BSPC',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k43',
            value: 'DEL',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k42',
            value: '7',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100',
            spacer: 'ls200'
          },
          {
            id: 'k41',
            value: '8',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k40',
            value: '9',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
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
              id: 'k57',
              value: 'K',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k56',
              value: 'L',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k55',
              value: 'SCLN',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k54',
              value: 'QUOT',
              type: 'tapkey',
              secondary: 'L1',
              showMenu: false,
              shape: 'k175'
            },
            {
              id: 'k53',
              value: 'NO',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100',
              spacer: 'ls050 p050 encoder'
            },
            {
              id: 'k52',
              value: '4',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100',
              spacer: 'ls050'
            },
            {
              id: 'k51',
              value: '5',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k50',
              value: '6',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
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
              id: 'k67',
              value: 'COMM',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k66',
              value: 'DOT',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k65',
              value: 'SLSH',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k64',
              value: 'ENT',
              type: 'tapkey',
              secondary: 'L2',
              showMenu: false,
              shape: 'k125'
            },
            {
              id: 'k63',
              value: 'UP',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100',
              spacer: 'ls050 vp050'
            },
            {
              id: 'k62',
              value: '1',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100',
              spacer: 'ls050'
            },
            {
              id: 'k61',
              value: '2',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k60',
              value: '3',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            }
        ],
        row4l: [
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
            value: 'L2',
            type: 'momentary',
            secondary: null,
            showMenu: false,
            shape: 'k125'
          }
        ],
        spacebar: [
            [
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
                id: 'k35',
                value: 'SPC',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k700',
                zone: 'Bottom Row'
              },
              {
                id: 'k76',
                value: 'NO',
                type: 'nodisplay'
              },
              {
                id: 'k75',
                value: 'LALT',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k125',
                zone: 'Bottom Row'
              },
            ],
            [
              {
                id: 'k32',
                value: 'NO',
                type: 'nodisplay'
              },
              {
                id: 'k35',
                value: 'SPC',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k700',
                zone: 'Bottom Row'
              },
              {
                id: 'k76',
                value: 'LGUI',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k125',
                zone: 'Bottom Row'
              },
              {
                id: 'k75',
                value: 'LALT',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k125',
                zone: 'Bottom Row'
              },
            ],
            [
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
                id: 'k35',
                value: 'SPC',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k625',
                zone: 'Bottom Row'
              },
              {
                id: 'k76',
                value: 'LALT',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100',
                zone: 'Bottom Row'
              },
              {
                id: 'k75',
                value: 'RSFT',
                type: 'normal',
                secondary: null,
                showMenu: false,
                shape: 'k100',
                zone: 'Bottom Row'
              },
            ]
        ],
        row4r: [
          {
            id: 'k74',
            value: 'LEFT',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100',
            spacer: 'ls050 vs050'
          },
          {
            id: 'k73',
            value: 'DOWN',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100',
            spacer: 'vs050'
          },
          {
            id: 'k72',
            value: 'RIGHT',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100',
            spacer: 'vs050'
          },
          {
            id: 'k71',
            value: '0',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100',
            spacer: 'ls050'
          },
          {
            id: 'k70',
            value: 'DOT',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          }
        ]
    }
];

garbage_truck.keymap = function() {
    var keymap = [];
    var layer = [];
    var ks;
    var zones = garbage_truck.zones;
    var i;

    for (i in garbage_truck.keySections) {
        ks = garbage_truck.keySections[i];
        layer = new Array();
        layer.push(ks.row1);
        layer.push(ks.row2);
        layer.push(ks.row3);
        layer.push(ks.row4l.concat(ks.spacebar[zones[0].value], ks.row4r));
        keymap.push(layer);
    }

    return keymap;
};
