/**
 * Full Size Config
 */
const fullsize = {}

// ID
fullsize.id = 'fullsize_rev2'

// UI Config
fullsize.ui = {
  scale: 50,
  thumbScale: 10
}

// config
fullsize.config = {
  vendorId: '0xFEAE',
  productId: '0x8870',
  deviceVersion: '0x0001',
  manufacturer: 'Generic',
  product: 'Full Size',
  description: 'A full size keyboard example',
  matrixRowPins: ['B0', 'B2', 'B4', 'B5', 'B6'],
  matrixColumnPins: ['F5', 'B1', 'F0', 'F1', 'F4', 'B3', 'D7', 'D6', 'D4', 'D5', 'D3', 'D2', 'D1', 'D0'],
  diodeDirection: 'ROW2COL',
  matrixHasGhost: false,
  backlightLevels: 1,
  backlightPin: 'B7',
  debouncingDelay: 5,
  tappingTerm: 175,
  lockingSupportEnabled: true,
  lockingResyncEnabled: true,
  commandKeyCombination: 'keyboard_report->mods == (MOD_BIT(KC_LSHIFT) | MOD_BIT(KC_RSHIFT))',
  debugEnabled: true,
  printEnabled: true,
  actionLayerEnabled: true,
  actionTappingEnabled: true,
  actionOneShotEnabled: true,
  actionMacroEnabled: true,
  actionFunctionEnabled: true
}

// rules
fullsize.rules = {
  mcu: 'atmega32u4',
  processorFrequency: 16000000,
  architecture: 'AVR8',
  inputClockFrequency: 16000000,
  bootloaderSize: 4096,
  bootmagicEnabled: true,
  mousekeyEnabled: true,
  extrakeyEnabled: true,
  consoleEnabled: true,
  commandEnabled: true,
  sleepLedEnabled: false,
  nkroEnabled: true,
  backlightEnabled: true
}

// keymap
fullsize.configKeymap = {}
fullsize.configKeymap.keys = [
  "K00", "K01", "K02", "K03", "K04", "K05", "K06", "K07", "K08", "K09", "K0A", "K0B", "K0C", "K0D", "K2D",
  "K10", "K11", "K12", "K13", "K14", "K15", "K16", "K17", "K18", "K19", "K1A", "K1B", "K1C", "K1D",
  "K20", "K21", "K22", "K23", "K24", "K25", "K26", "K27", "K28", "K29", "K2A", "K2B", "K2C",
  "K30", "K31", "K32", "K33", "K34", "K35", "K36", "K37", "K38", "K39", "K3A", "K3B", "K3C", "K3D",
  "K40", "K41", "K42",      "K44", "K45", "K46",      "K48", "K49", "K4A", "K4B", "K4C"
]

fullsize.configKeymap.positions = [
  ["K00", "K01", "K02", "K03", "K04", "K05", "K06", "K07", "K08", "K09", "K0A", "K0B", "K0C", "K0D"],
  ["K10", "K11", "K12", "K13", "K14", "K15", "K16", "K17", "K18", "K19", "K1A", "K1B", "K1C", "K1D"],
  ["K20", "K21", "K22", "K23", "K24", "K25", "K26", "K27", "K28", "K29", "K2A", "K2B", "K2C", "K2D"],
  ["K30", "K31", "K32", "K33", "K34", "K35", "K36", "K37", "K38", "K39", "K3A", "K3B", "K3C", "K3D"],
  ["K40", "K41", "K42", "KC_NO", "K44", "K45", "K46", "KC_NO", "K48", "K49", "K4A", "K4B", "K4C", "KC_NO"]
]

// zones
fullsize.zones = []

// ui keymap
fullsize.keySections = [{
  row1: [
    {
      id: 'k00',
      value: 'ESC',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100',
      spacer: 's100'
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
      shape: 'k100',
      spacer: 's050'
    },
    {
      id: 'k05',
      value: 'F5',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100'
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
      shape: 'k100',
      spacer: 's050'
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
      id: 'k0A',
      value: 'F10',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100'
    },
    {
      id: 'k0B',
      value: 'F11',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100'
    },
    {
      id: 'k0C',
      value: 'F12',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100',
      spacer: 's025'
    },
    {
      id: 'k0D',
      value: 'PSCR',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100'
    },
    {
      id: 'k0E',
      value: 'SLCK',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100'
    },
    {
      id: 'k0F',
      value: 'PAUS',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100'
    },
  ],
  row2: [
    {
      id: 'k10',
      value: 'GRV',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100',
      spacer: 'vs050'
    },
    {
      id: 'k11',
      value: '1',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100',
      spacer: 'vs050'
    },
    {
      id: 'k12',
      value: '2',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100',
      spacer: 'vs050'
    },
    {
      id: 'k13',
      value: '3',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100',
      spacer: 'vs050'
    },
    {
      id: 'k14',
      value: '4',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100',
      spacer: 'vs050'
    },
    {
      id: 'k15',
      value: '5',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100',
      spacer: 'vs050'
    },
    {
      id: 'k16',
      value: '6',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100',
      spacer: 'vs050'
    },
    {
      id: 'k17',
      value: '7',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100',
      spacer: 'vs050'
    },
    {
      id: 'k18',
      value: '8',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100',
      spacer: 'vs050'
    },
    {
      id: 'k19',
      value: '9',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100',
      spacer: 'vs050'
    },
    {
      id: 'k1A',
      value: '0',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100',
      spacer: 'vs050'
    },
    {
      id: 'k1B',
      value: 'MINS',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100',
      spacer: 'vs050'
    },
    {
      id: 'k1C',
      value: 'EQL',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100',
      spacer: 'vs050'
    },
    {
      id: 'k1D',
      value: 'BSPC',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k200',
      spacer: 's025 vs050'
    },
    {
      id: 'k1E',
      value: 'INS',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100',
      spacer: 'vs050'
    },
    {
      id: 'k1F',
      value: 'HOME',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100',
      spacer: 'vs050'
    },
    {
      id: 'k1G',
      value: 'PGUP',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100',
      spacer: 's025 vs050'
    },
    {
      id: 'k1H',
      value: 'NLCK',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100',
      spacer: 'vs050'
    },
    {
      id: 'k1I',
      value: 'PSLS',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100',
      spacer: 'vs050'
    },
    {
      id: 'k1J',
      value: 'PAST',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100',
      spacer: 'vs050'
    },
    {
      id: 'k1J',
      value: 'PMNS',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100',
      spacer: 'vs050'
    }
  ],
  row3: [
    {
      id: 'k20',
      value: 'TAB',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k150'
    },
    {
      id: 'k21',
      value: 'Q',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100'
    },
    {
      id: 'k22',
      value: 'W',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100'
    },
    {
      id: 'k23',
      value: 'E',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100'
    },
    {
      id: 'k24',
      value: 'R',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100'
    },
    {
      id: 'k25',
      value: 'T',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100'
    },
    {
      id: 'k26',
      value: 'Y',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100'
    },
    {
      id: 'k27',
      value: 'U',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100'
    },
    {
      id: 'k28',
      value: 'I',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100'
    },
    {
      id: 'k29',
      value: 'O',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100'
    },
    {
      id: 'k2A',
      value: 'P',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100'
    },
    {
      id: 'k2B',
      value: 'LBRC',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100'
    },
    {
      id: 'k2C',
      value: 'RBRC',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100'
    },
    {
      id: 'k2D',
      value: 'BSLS',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k150',
      spacer: 's025'
    },
    {
      id: 'k2E',
      value: 'DEL',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100'
    },
    {
      id: 'k2F',
      value: 'END',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100'
    },
    {
      id: 'k2G',
      value: 'PGDN',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100',
      spacer: 's025'
    },
    {
      id: 'k2H',
      value: 'P7',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100'
    },
    {
      id: 'k2I',
      value: 'P8',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100'
    },
    {
      id: 'k2J',
      value: 'P9',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100'
    },
    {
      id: 'k2K',
      value: 'PPLS',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k200v'
    }
  ],
  row4: [
    {
      id: 'k30',
      value: 'CAPS',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k175',
    },
    {
      id: 'k31',
      value: 'A',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100'
    },
    {
      id: 'k32',
      value: 'S',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100'
    },
    {
      id: 'k33',
      value: 'D',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100'
    },
    {
      id: 'k34',
      value: 'F',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100'
    },
    {
      id: 'k35',
      value: 'G',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100'
    },
    {
      id: 'k36',
      value: 'H',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100'
    },
    {
      id: 'k37',
      value: 'J',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100'
    },
    {
      id: 'k38',
      value: 'K',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100'
    },
    {
      id: 'k39',
      value: 'L',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100'
    },
    {
      id: 'k3A',
      value: 'SCLN',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100'
    },
    {
      id: 'k3B',
      value: 'QUOT',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100'
    },
    {
      id: 'k3C',
      value: 'ENT',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k225',
      spacer: 's350'
    },
    {
      id: 'k3D',
      value: 'P4',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100'
    },
    {
      id: 'k3E',
      value: 'P5',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100'
    },
    {
      id: 'k3F',
      value: 'P6',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100'
    }
  ],
  row5: [
    {
      id: 'k40',
      value: 'LSFT',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k225'
    },
    {
      id: 'k42',
      value: 'Z',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100'
    },
    {
      id: 'k43',
      value: 'X',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100'
    },
    {
      id: 'k44',
      value: 'C',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100'
    },
    {
      id: 'k45',
      value: 'V',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100'
    },
    {
      id: 'k46',
      value: 'B',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100'
    },
    {
      id: 'k47',
      value: 'N',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100'
    },
    {
      id: 'k48',
      value: 'M',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100'
    },
    {
      id: 'k49',
      value: 'COMM',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100'
    },
    {
      id: 'k4A',
      value: 'DOT',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100'
    },
    {
      id: 'k4B',
      value: 'SLSH',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100'
    },
    {
      id: 'k4C',
      value: 'RSFT',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k275',
      spacer: 's125'
    },
    {
      id: 'k4D',
      value: 'UP',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100',
      spacer: 's125'
    },
    {
      id: 'k4E',
      value: 'P1',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100'
    },
    {
      id: 'k4F',
      value: 'P2',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100'
    },
    {
      id: 'k4G',
      value: 'P3',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100'
    },
    {
      id: 'k4H',
      value: 'PENT',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k200v'
    }
  ],
  row6: [
    {
      id: 'k50',
      value: 'LCTL',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k125'
    },
    {
      id: 'k51',
      value: 'LGUI',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k125'
    },
    {
      id: 'k52',
      value: 'LALT',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k125'
    },
    {
      id: 'k55',
      value: 'SPC',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k625'
    },
    {
      id: 'k58',
      value: 'RGUI',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k125'
    },
    {
      id: 'k59',
      value: 'RALT',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k125'
    },
    {
      id: 'k5B',
      value: 'APP',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k125'
    },
    {
      id: 'k5C',
      value: 'RCTL',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k125',
      spacer: 's025'
    },
    {
      id: 'k5D',
      value: 'LEFT',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100'
    },
    {
      id: 'k5E',
      value: 'DOWN',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100'
    },
    {
      id: 'k5F',
      value: 'RIGHT',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100',
      spacer: 's025'
    },
    {
      id: 'k5G',
      value: 'P0',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k200'
    },
    {
      id: 'k5H',
      value: 'PDOT',
      type: 'normal',
      secondary: null,
      showMenu: false,
      shape: 'k100'
    }
  ]
}]

fullsize.keymap = function(ks, zones) {
  const keymap = []
  keymap.push(ks.row1)
  keymap.push(ks.row2)
  keymap.push(ks.row3)
  keymap.push(ks.row4)
  keymap.push(ks.row5)
  keymap.push(ks.row6)
  return keymap
}

// Default Layout
fullsize.layouts = [{
  id: '0',
  name: 'Default',
  immutable: true
}]

// Default Layers
fullsize.layers = [{
  id: '0',
  layoutId: '0',
  name: 'Default',
  keys: fullsize.keySections[0]
}]

export default fullsize
