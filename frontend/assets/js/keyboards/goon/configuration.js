var KEYBOARDS = KEYBOARDS || [];
goon = {};
KEYBOARDS.push(goon);

goon.id = 'goon';

// config
goon.config = {
    vendorId: '0xFEAE',
    productId: '0x8847',
    deviceVersion: '0x0001',
    manufacturer: 'TheVan Keyboards',
    product: 'Goon',
    description: 'Goon 40%',
    matrixRowPins: ['B6', 'B5', 'B4', 'D6'],
    matrixColumnPins: ['D0', 'D1', 'D2', 'D3', 'D5', 'D4', 'D7', 'F7', 'F6', 'F5', 'B1'],
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
    permissiveHold: true,
    retroTapping: false
};

// rules
goon.rules = {
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

// keymap
goon.configKeymap = {};
goon.configKeymap.keys = [
    "K00", "K01", "K02", "K03", "K04", "K05", "K06", "K07", "K08", "K09", "K0A", "K3A",
    "K10", "K11", "K12", "K13", "K14", "K15", "K16", "K17", "K18", "K19", "K1A",
    "K20", "K21", "K22", "K23", "K24", "K25", "K26", "K27", "K28", "K29", "K2A",
    "K30", "K31", "K32", "K35", "K36", "K37", "K38"
];

goon.configKeymap.positions = [
    ["K00", "K01", "K02", "K03", "K04", "K05", "K06", "K07", "K08", "K09", "K0A"],
    ["K10", "K11", "K12", "K13", "K14", "K15", "K16", "K17", "K18", "K19", "K1A"],
    ["K20", "K21", "K22", "K23", "K24", "K25", "K26", "K27", "K28", "K29", "K2A"],
    ["K30", "K31", "K32", "KC_NO", "KC_NO", "K35", "K36", "K37", "K38", "KC_NO", "K3A"]
];

// zones
goon.zones = [
    {
        label: 'Right Shift',
        value: 0,
        choices: [
            {
                code: 0,
                name: 'Standard'
            },
            {
                code: 1,
                name: 'Split'
            }
        ]
    }
]

// ui keymap
goon.keySections = [
    { // DEFAULT LAYER ==========================================
        row1: [
          {
            id: 'k00',
            value: 'TAB',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k150'
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
            id: 'k3A',
            value: 'BSPC',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k150'
          }
        ],
        row2: [
            {
              id: 'k10',
              value: 'ESC',
              type: 'tapkey',
              secondary: 'L1',
              showMenu: false,
              shape: 'k175'
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
              value: 'QUOT',
              type: 'tapkey',
              secondary: 'L1',
              showMenu: false,
              shape: 'k225'
            }
        ],
        row3: [
            {
              id: 'k20',
              value: 'LSFT',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k225'
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
            }

        ],
        rightShift: [
          [
            {
              id: 'k28',
              value: 'SLSH',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100',
              zone: 'Right Shift'
            },
            {
              id: 'k29',
              value: 'NO',
              type: 'nodisplay'
            },
            {
              id: 'k2A',
              value: 'L2',
              type: 'momentary',
              secondary: null,
              showMenu: false,
              shape: 'k275',
              zone: 'Right Shift'
            }
          ],
          [
            {
              id: 'k28',
              value: 'SLSH',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100',
              zone: 'Right Shift'
            },
            {
              id: 'k29',
              value: 'DOT',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100',
              zone: 'Right Shift'
            },
            {
              id: 'k2A',
              value: 'L2',
              type: 'momentary',
              secondary: null,
              showMenu: false,
              shape: 'k175',
              zone: 'Right Shift'
            }
          ]
        ],
        row4: [
          {
            id: 'k30',
            value: 'LCTL',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k31',
            value: 'L2',
            type: 'momentary',
            secondary: null,
            showMenu: false,
            shape: 'k100'
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
            id: 'k35',
            value: 'SPC',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k625'
          },
          {
            id: 'k36',
            value: 'RALT',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k125'
          },
          {
            id: 'k37',
            value: 'RSFT',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k38',
            value: 'L3',
            type: 'toggle',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          }
        ]
    }
];

goon.keymap = function() {
    var keymap = [];
    var layer = [];
    var ks;
    var zones = goon.zones;
    var i;

    for (i in goon.keySections) {
        ks = goon.keySections[i];
        layer = new Array();
        layer.push(ks.row1);
        layer.push(ks.row2);
        layer.push(ks.row3.concat(ks.rightShift[zones[0].value]));
        layer.push(ks.row4);
        keymap.push(layer);
    }

    return keymap;
};
