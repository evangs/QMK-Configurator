var KEYBOARDS = KEYBOARDS || [];
parallelParking = {};
KEYBOARDS.push(parallelParking);

parallelParking.id = 'parallelParking_rev1';

// config
parallelParking.config = {
    vendorId: '0xFEAE',
    productId: '0x88AA',
    deviceVersion: '0x0001',
    manufacturer: 'Trash Man',
    product: 'parallelParking',
    description: 'Parallel Parking Macropad',
    matrixRowPins: ['F0', 'F1'],
    matrixColumnPins: [7, 6, 5, 4, 3, 2, 1, 0],
    multiplexPins: ['F5', 'D7', 'B4'],
    diodeDirection: 'ROW2COL',
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
    actionLayerEnabled: false,
    actionTappingEnabled: false,
    actionOneShotEnabled: false,
    actionMacroEnabled: false,
    actionFunctionEnabled: false,
    permissiveHold: true
};

// rules
parallelParking.rules = {
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
parallelParking.configKeymap = {};
parallelParking.configKeymap.keys = [
    "K00", "K01", "K02", "K03", "K04", "K05", "K06", "K07",
    "K10", "K11", "K12", "K13", "K14", "K15", "K16", "K17"
];

parallelParking.configKeymap.positions = [
    ["K00", "K01", "K02", "K03", "K04", "K05", "K06", "K07"],
    ["K10", "K11", "K12", "K13", "K14", "K15", "K16", "K17"]
];

parallelParking.zones = [];

// ui keymap
parallelParking.keySections = [
    { // DEFAULT LAYER ==========================================
        row1: [
          {
            id: 'k00',
            value: '1',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
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
          }
        ],
        row2: [
            {
              id: 'k10',
              value: '9',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
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
              value: 'B',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k13',
              value: 'C',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k14',
              value: 'D',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k15',
              value: 'E',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k16',
              value: 'F',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            },
            {
              id: 'k17',
              value: '0',
              type: 'normal',
              secondary: null,
              showMenu: false,
              shape: 'k100'
            }
        ]
    }
];

parallelParking.keymap = function() {
    var keymap = [];
    var layer = [];
    var ks;
    var i;

    for (i in parallelParking.keySections) {
        ks = parallelParking.keySections[i];
        layer = new Array();
        layer.push(ks.row1);
        layer.push(ks.row2);
        keymap.push(layer);
    }

    return keymap;
};
