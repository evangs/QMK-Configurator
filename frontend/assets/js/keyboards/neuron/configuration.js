var KEYBOARDS = KEYBOARDS || [];
neuron = {};
KEYBOARDS.push(neuron);

neuron.id = 'neuron_rev1';

// config
neuron.config = {
    vendorId: '0xFEED',
    productId: '0x62AC',
    deviceVersion: '0x0001',
    manufacturer: 'Walletburner',
    product: 'Neuron',
    description: 'Neuron 40% Keyboard',
    matrixRowPins: ['D0', 'D1', 'D3', 'F5'],
    matrixColumnPins: ['F0', 'F7', 'F6', 'F4', 'F1', 'E6', 'D6', 'D2', 'B4', 'D7', 'B6', 'D5'],
    diodeDirection: 'COL2ROW',
    matrixHasGhost: false,
    backlightLevels: 3,
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
neuron.rules = {
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
    backlightEnabled: true,
    rgbLightEnabled: false
};

// keymap
neuron.configKeymap = {};
neuron.configKeymap.keys = [
    "K00", "K01", "K02", "K03", "K04", "K05", "K06", "K07", "K08", "K09", "K0A", "K0B",
    "K10", "K11", "K12", "K13", "K14", "K15", "K16", "K17", "K18", "K19", "K1B",
    "K20", "K22", "K23", "K24", "K25", "K26", "K27", "K28", "K29", "K2A", "K2B",
    "K31", "K32", "K33", "K36", "K38", "K3A", "K3B"
];

neuron.configKeymap.positions = [
    ["K00", "K01", "K02", "K03", "K04", "K05", "K06", "K07", "K08", "K09", "K0A", "K0B"],
    ["K10", "K11", "K12", "K13", "K14", "K15", "K16", "K17", "K18", "K19", "KC_NO", "K1B"],
    ["K20", "KC_NO", "K22", "K23", "K24", "K25", "K26", "K27", "K28", "K29", "K2A", "K2B"],
    ["KC_NO", "K31", "K32", "K33", "KC_NO", "KC_NO", "K36", "KC_NO", "K38", "KC_NO", "K3A", "K3B"]
];

// zones
neuron.zones = [
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
                name: 'Alternate'
            }
        ]
    },
    {
        label: 'Bottom Row',
        value: 0,
        choices: [
            {
                code: 0,
                name: 'Full Space'
            },
            {
                code: 1,
                name: 'Split Space'
            }
        ]
    }
]

// ui keymap
neuron.keySections = [
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
              id: 'k1B',
              value: 'QUOT',
              type: 'tapkey',
              secondary: 'L1',
              showMenu: false,
              shape: 'k175'
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
              id: 'k28',
              value: 'COMM',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            }
          ],
          rightShift: [
            [
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
                id: 'k2B',
                value: 'ENT',
                type: 'tapkey',
                secondary: 'L2',
                showMenu: false,
                shape: 'k125',
                zone: 'Right Shift'
              }
          ],
          [
            {
              id: 'k29',
              value: 'DOT',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k125',
              zone: 'Right Shift'
            },
            {
              id: 'k2B',
              value: 'ENT',
              type: 'tapkey',
              secondary: 'L2',
              showMenu: false,
              shape: 'k100',
              zone: 'Right Shift'
            }
          ]
        ],
        bottomRow: [
            [
                {
                  id: 'k31',
                  value: 'LCTL',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k125',
                  zone: 'Bottom Row',
                  spacer: 'ls100'
                },
                {
                  id: 'k32',
                  value: 'L2',
                  type: 'momentary',
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
                  id: 'k36',
                  value: 'SPC',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k625',
                  zone: 'Bottom Row'
                },
                {
                  id: 'k38',
                  value: 'NO',
                  type: 'nodisplay'
                },
                {
                  id: 'k3A',
                  value: 'NO',
                  type: 'nodisplay'
                },
                {
                  id: 'k3B',
                  value: 'LGUI',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k125',
                  zone: 'Bottom Row'
                }
            ],
            [
                {
                  id: 'k31',
                  value: 'LCTL',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k100',
                  zone: 'Bottom Row',
                  spacer: 'ls100'
                },
                {
                  id: 'k32',
                  value: 'L2',
                  type: 'momentary',
                  secondary: null,
                  showMenu: false,
                  shape: 'k150',
                  zone: 'Bottom Row'
                },
                {
                  id: 'k33',
                  value: 'SPC',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k225',
                  zone: 'Bottom Row'
                },
                {
                  id: 'k36',
                  value: 'NO',
                  type: 'nodisplay'
                },
                {
                  id: 'k38',
                  value: 'ENT',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k275',
                  zone: 'Bottom Row'
                },
                {
                  id: 'k3A',
                  value: 'LALT',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k150',
                  zone: 'Bottom Row'
                },
                {
                  id: 'k3B',
                  value: 'LGUI',
                  type: 'normal',
                  secondary: null,
                  showMenu: false,
                  shape: 'k100',
                  zone: 'Bottom Row'
                }
            ]
        ]
    }
];

neuron.keymap = function() {
    var keymap = [];
    var layer = [];
    var ks;
    var zones = neuron.zones;
    var i;

    for (i in neuron.keySections) {
        ks = neuron.keySections[i];
        layer = new Array();
        layer.push(ks.row1);
        layer.push(ks.row2);
        layer.push(ks.row3.concat(ks.rightShift[zones[0].value]));
        layer.push(ks.bottomRow[zones[1].value])
        keymap.push(layer);
    }

    return keymap;
};
