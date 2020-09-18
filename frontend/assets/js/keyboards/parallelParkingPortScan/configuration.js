var KEYBOARDS = KEYBOARDS || [];
parallelParkingPortScan = {};
KEYBOARDS.push(parallelParkingPortScan);

parallelParkingPortScan.id = 'parallelParkingPortScan_rev1';

// config
parallelParkingPortScan.config = {
    vendorId: '0xFEAE',
    productId: '0x88AA',
    deviceVersion: '0x0001',
    manufacturer: 'Trash Man',
    product: 'ParallelParkingPortScan',
    description: 'Parallel Parking Macropad',
    matrixColumnPins: ['B0', 'B1'],
    portscan: 'B0',
    portscanPins: 3,
    matrixRowPins: [7, 6, 5, 4, 3, 2, 1, 0],
    multiplexPins: ['D0', 'D1', 'D2'],
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
parallelParkingPortScan.rules = {
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
parallelParkingPortScan.configKeymap = {};
parallelParkingPortScan.configKeymap.keys = [
    "K00", "K10", "K20", "K30", "K40", "K50", "K60", "K70",
    "K01", "K11", "K21", "K31", "K41", "K51", "K61", "K71"
];

parallelParkingPortScan.configKeymap.positions = [
    ["K00", "K01"],
    ["K10", "K11"],
    ["K20", "K21"],
    ["K30", "K31"],
    ["K40", "K41"],
    ["K50", "K51"],
    ["K60", "K61"],
    ["K70", "K71"]
];

parallelParkingPortScan.zones = [];

// ui keymap
parallelParkingPortScan.keySections = [
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

parallelParkingPortScan.keymap = function() {
    var keymap = [];
    var layer = [];
    var ks;
    var i;

    for (i in parallelParkingPortScan.keySections) {
        ks = parallelParkingPortScan.keySections[i];
        layer = new Array();
        layer.push(ks.row1);
        layer.push(ks.row2);
        keymap.push(layer);
    }

    return keymap;
};
