var KEYBOARDS = KEYBOARDS || [];
shigawire = {};
KEYBOARDS.push(shigawire);

shigawire.id = 'shigawire_rev1';

// config
shigawire.config = {
    vendorId: '0xFEAE',
    productId: '0x9999',
    deviceVersion: '0x0001',
    manufacturer: 'Trash Industries',
    product: 'Shigawire',
    description: 'xNinjas keyboard',
    matrixRowPins: ['B2', 'B1', 'F0', 'F1', 'F4', 'D5', 'D3', 'D2', 'D0', 'B3'],
    matrixColumnPins: ['B6', 'B5', 'B4', 'D7', 'D6', 'D4', 'D1', 'B0'],
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
    permissiveHold: true,
    retroTapping: false
};

// rules
shigawire.rules = {
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
    backlightEnabled: false
};

// keymap
shigawire.configKeymap = {};
shigawire.configKeymap.keys = [
    "K00", "K01", "K02", "K03", "K04", "K05", "K06", "K07", "K96", "K95", "K94", "K93", "K92", "K91", "K90",
    "K10", "K11", "K12", "K13", "K14", "K15", "K16", "K17", "K87", "K86", "K85", "K84", "K83", "K82", "K81", "K80",
    "K20", "K21", "K22", "K23", "K24", "K25", "K26", "K27", "K76", "K75", "K74", "K73", "K72", "K71", "K70",
    "K30", "K31", "K32", "K33", "K34", "K35", "K36", "K37", "K66", "K65", "K64", "K63", "K62", "K61", "K60",
    "K40", "K41", "K42", "K45", "K55", "K54", "K53", "K52", "K51", "K50"
];

shigawire.configKeymap.positions = [
    ["K00", "K01", "K02", "K03", "K04", "K05", "K06", "K07"],
    ["K10", "K11", "K12", "K13", "K14", "K15", "K16", "K17"],
    ["K20", "K21", "K22", "K23", "K24", "K25", "K26", "K27"],
    ["K30", "K31", "K32", "K33", "K34", "K35", "K36", "K37"],
    ["K40", "K41", "K42", "KC_NO", "KC_NO", "K45", "KC_NO", "KC_NO"],
    ["K50", "K51", "K52", "K53", "K54", "K55", "KC_NO", "KC_NO"],
    ["K60", "K61", "K62", "K63", "K64", "K65", "K66", "KC_NO"],
    ["K70", "K71", "K72", "K73", "K74", "K75", "K76", "KC_NO"],
    ["K80", "K81", "K82", "K83", "K84", "K85", "K86", "K87"]
]

shigawire.static_indicators = [
  {
    pin: 'C6',
    type: 'power',
    action: 'power'
  },
  {
    pin: 'C7',
    type: 'power',
    action: 'power'
  },
  {
    pin: 'F6',
    type: 'power',
    action: 'power'
  },
  {
    pin: 'F5',
    type: 'power',
    action: 'power'
  }
];

// zones
shigawire.zones = []

// ui keymap
shigawire.keySections = [{
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
        id: 'k01',
        value: '2',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k02',
        value: '3',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k03',
        value: '4',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k04',
        value: '5',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k05',
        value: '6',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k06',
        value: '7',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k07',
        value: '8',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k08',
        value: '9',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k09',
        value: '0',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k0A',
        value: '1',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k0B',
        value: '2',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k0C',
        value: '3',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k0D',
        value: '4',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k0E',
        value: '5',
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
          shape: 'k100'
        },
        {
          id: 'k1C',
          value: 'DEL',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100'
        },
        {
          id: 'k1D',
          value: '7',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100'
        },
        {
          id: 'k1E',
          value: '8',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100'
        },
        {
          id: 'k1F',
          value: '9',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100'
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
          value: 'ENT',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k175'
        },
        {
          id: 'k2C',
          value: '4',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100'
        },
        {
          id: 'k2D',
          value: '5',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100'
        },
        {
          id: 'k2E',
          value: '6',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100'
        },
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
          value: 'RSFT',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k125'
        },
        {
          id: 'k3C',
          value: '1',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100'
        },
        {
          id: 'k3D',
          value: '2',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100'
        },
        {
          id: 'k3E',
          value: '3',
          type: 'normal',
          secondary: null,
          showMenu: false,
          shape: 'k100'
        }
    ],
    row5: [
      {
        id: 'k40',
        value: 'LCTL',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k125'
      },
      {
        id: 'k41',
        value: 'LGUI',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k42',
        value: 'LALT',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k125'
      },
      {
        id: 'k43',
        value: 'SPC',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k625'
      },
      {
        id: 'k44',
        value: 'LALT',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k125'
      },
      {
        id: 'k45',
        value: '1',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k46',
        value: '2',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k47',
        value: '3',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k48',
        value: '4',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      },
      {
        id: 'k49',
        value: '5',
        type: 'normal',
        secondary: null,
        showMenu: false,
        shape: 'k100'
      }
    ]
}];

shigawire.keymap = function() {
    var keymap = [];
    var layer = [];
    var ks;
    var i;

    for (i in shigawire.keySections) {
        ks = shigawire.keySections[i];
        layer = new Array();
        layer.push(ks.row1);
        layer.push(ks.row2);
        layer.push(ks.row3);
        layer.push(ks.row4);
        layer.push(ks.row5);
        keymap.push(layer);
    }

    return keymap;
};
