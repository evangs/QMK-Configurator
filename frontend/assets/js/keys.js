var KEYS = [
  {
      label: 'Key Types',
    cssClass: 'extra-large-context-key',
    updateType: 'keyType',
    visible: ['normal', 'tapkey', 'modkey', 'toggle', 'momentary', 'combokey', 'direct', 'taptoggle', 'setdefaultlayer'],
      keys: [
      {value: 'normal', display: 'Normal'},
      {value: 'momentary', display: 'Momentary', tooltip: 'While held keys on the matching layer are active.'},
      {value: 'toggle', display: 'Toggle', tooltip: 'Pressing activates the matching layer. Pressing again deactivates it.'},
      {value: 'tapkey', display: 'Tap Key', tooltip: 'Key sends one code when pressed and another when held.'},
      {value: 'modkey', display: 'Mod Key', tooltip: 'Combines a primary key with a secondary as if both keys were pressed together.'},
      {value: 'combokey', display: 'Combo Key', tooltip: 'Combines multiple modifiers with a key.'},
      {value: 'direct', display: 'To Layer', tooltip: 'Goes to a layer. This code is special, because it lets you go either up or down the stack -- just goes directly to the layer you want.'},
      {value: 'taptoggle', display: 'Layer Tap Toggle', tooltip: 'If you hold the key down, the layer becomes active, and then deactivates when you let go. And if you tap it, the layer simply becomes active (toggles on).'},
      {value: 'setdefaultlayer', display: 'Set Default Layter', tooltip: 'Temporarily sets the default layer.'}
    ]
  },
  {
      label: 'Alphas',
    updateType: 'primary',
    visible: ['normal', 'tapkey', 'modkey', 'combokey'],
    keys: [
      {value: 'A', display: 'A'},
      {value: 'B', display: 'B'},
      {value: 'C', display: 'C'},
      {value: 'D', display: 'D'},
      {value: 'E', display: 'E'},
      {value: 'F', display: 'F'},
      {value: 'G', display: 'G'},
      {value: 'H', display: 'H'},
      {value: 'I', display: 'I'},
      {value: 'J', display: 'J'},
      {value: 'K', display: 'K'},
      {value: 'L', display: 'L'},
      {value: 'M', display: 'M'},
      {value: 'N', display: 'N'},
      {value: 'O', display: 'O'},
      {value: 'P', display: 'P'},
      {value: 'Q', display: 'Q'},
      {value: 'R', display: 'R'},
      {value: 'S', display: 'S'},
      {value: 'T', display: 'T'},
      {value: 'U', display: 'U'},
      {value: 'V', display: 'V'},
      {value: 'W', display: 'W'},
      {value: 'X', display: 'X'},
      {value: 'Y', display: 'Y'},
      {value: 'Z', display: 'Z'}
    ]
  },
  {
      label: ' ',
    updateType: 'primary',
    visible: ['normal', 'tapkey', 'modkey', 'combokey'],
    keys: [
      {value: '1', display: '1'},
      {value: '2', display: '2'},
      {value: '3', display: '3'},
      {value: '4', display: '4'},
      {value: '5', display: '5'},
      {value: '6', display: '6'},
      {value: '7', display: '7'},
      {value: '8', display: '8'},
      {value: '9', display: '9'},
      {value: '0', display: '0'}
    ]
  },
  {
      label: ' ',
    updateType: 'primary',
    visible: ['normal', 'tapkey', 'modkey', 'combokey'],
    keys: [
      {value: 'BSLS', display: '\\', tooltip: 'Back Slash'},
      {value: 'QUOT', display: '\'', tooltip: 'Quote'},
      {value: 'MINS', display: '-', tooltip: 'Hyphen'},
      {value: 'EQL', display: '=', tooltip: 'Equal'},
      {value: 'LBRC', display: '[', tooltip: 'Left Bracket'},
      {value: 'RBRC', display: ']', tooltip: 'Right Bracket'},
      {value: 'COMM', display: ',', tooltip: 'Comma'},
      {value: 'DOT', display: '.', tooltip: 'Period'},
      {value: 'SLSH', display: '/', tooltip: 'Forward Slash'},
      {value: 'GRV', display: '`', tooltip: 'Grave Accent'},
      {value: 'SCLN', display: ';', tooltip: 'Semicolon'}
    ]
  },
  {
      label: ' ',
    updateType: 'primary',
    visible: ['normal', 'tapkey', 'modkey', 'combokey'],
    keys: [
      {value: 'ENT', display: '↵', tooltip: 'Enter'},
      {value: 'ESC', display: '⎋', tooltip: 'Escape'},
      {value: 'BSPC', display: '⌫', tooltip: 'Backspace'},
      {value: 'TAB', display: '↹', tooltip: 'Tab'},
      {value: 'SPC', display: ' ', tooltip: 'Space'},
      {value: 'CAPS', display: '⇪', tooltip: 'Caps Lock'},
      {value: 'PSCR', display: '⎙', tooltip: 'Print Screen'},
      {value: 'SLCK', display: 'ScrLk', tooltip: 'Scroll Lock'},
      {value: 'PAUS', display: 'Break', tooltip: 'Pause/Break'},
      {value: 'INS', display: '⎀', tooltip: 'Insert'},
      {value: 'DEL', display: '⌦', tooltip: 'Delete'},
      {value: 'HOME', display: '⇱', tooltip: 'Home'},
      {value: 'END', display: '⇲', tooltip: 'End'},
      {value: 'PGUP', display: '⇞', tooltip: 'Page Up'},
      {value: 'PGDN', display: '⇟', tooltip: 'Page Down'},
      {value: 'DOWN', display: '↓'},
      {value: 'UP', display: '↑'},
      {value: 'LEFT', display: '←'},
      {value: 'RIGHT', display: '→'},
      {value: 'NUHS', display: '#', tooltip: 'ISO Hash'},
      {value: 'NUBS', display: '|', tooltip: 'ISO Back Slash'}
    ]
  },
  {
      label: ' ',
    updateType: 'primary',
    cssClass: 'large-context-key',
    visible: ['normal', 'tapkey', 'modkey', 'combokey'],
    keys: [
      {value: 'F1', display: 'F1'},
      {value: 'F2', display: 'F2'},
      {value: 'F3', display: 'F3'},
      {value: 'F4', display: 'F4'},
      {value: 'F5', display: 'F5'},
      {value: 'F6', display: 'F6'},
      {value: 'F7', display: 'F7'},
      {value: 'F8', display: 'F8'},
      {value: 'F9', display: 'F9'},
      {value: 'F10', display: 'F10'},
      {value: 'F11', display: 'F11'},
      {value: 'F12', display: 'F12'},
      {value: 'F13', display: 'F13'},
      {value: 'F14', display: 'F14'},
      {value: 'F15', display: 'F15'},
      {value: 'F16', display: 'F16'},
      {value: 'F17', display: 'F17'},
      {value: 'F18', display: 'F18'},
      {value: 'F19', display: 'F19'},
      {value: 'F20', display: 'F20'},
      {value: 'F21', display: 'F21'},
      {value: 'F22', display: 'F22'},
      {value: 'F23', display: 'F23'},
      {value: 'F24', display: 'F24'}
    ]
  },
  {
      label: 'Shifted Characters',
      updateType: 'primary',
      visible: ['normal', 'tapkey'],
      keys: [
          {value: 'TILD', display: '~'},
          {value: 'EXLM', display: '!'},
          {value: 'AT', display: '@'},
          {value: 'HASH', display: '#'},
          {value: 'DLR', display: '$'},
          {value: 'PERC', display: '%'},
          {value: 'CIRC', display: '^'},
          {value: 'AMPR', display: '&'},
          {value: 'ASTR', display: '*'},
          {value: 'LPRN', display: '('},
          {value: 'RPRN', display: ')'},
          {value: 'UNDS', display: '_'},
          {value: 'PLUS', display: '+'},
          {value: 'LCBR', display: '{'},
          {value: 'RCBR', display: '}'},
          {value: 'LT', display: '<'},
          {value: 'GT', display: '>'},
          {value: 'COLN', display: ':'},
          {value: 'DQT', display: '"'},
          {value: 'PIPE', display: '|'},
          {value: 'QUES', display: '?'},
      ]
  },
  {
      label: 'Keypad',
    updateType: 'primary',
    //cssClass: 'large-context-key',
    visible: ['normal', 'tapkey', 'modkey', 'combokey'],
    keys: [
      {value: 'NLCK', display: '🔒'},
      {value: 'PSLS', display: '\\'},
      {value: 'PAST', display: '*'},
      {value: 'PMNS', display: '-'},
      {value: 'PPLS', display: '+'},
      {value: 'PENT', display: '↵'},
      {value: 'PDOT', display: '.'},
      {value: 'PEQL', display: '='},
      {value: 'P0', display: '0'},
      {value: 'P1', display: '1'},
      {value: 'P2', display: '2'},
      {value: 'P3', display: '3'},
      {value: 'P4', display: '4'},
      {value: 'P5', display: '5'},
      {value: 'P6', display: '6'},
      {value: 'P7', display: '7'},
      {value: 'P8', display: '8'},
      {value: 'P8', display: '9'}
    ]
  },
  {
      label: 'Modifiers',
    cssClass: 'large-context-key',
    updateType: {
      'normal': 'primary',
      'tapkey': 'secondary',
      'modkey': 'secondary',
    },
    visible: ['normal', 'tapkey', 'modkey'],
    keys: [
      {value: 'LCTL', display: 'L⌃', tooltip: 'Left Control'},
      {value: 'RCTL', display: 'R⌃', tooltip: 'Right Control'},
      {value: 'LALT', display: 'L⎇', tooltip: 'Left Alt'},
      {value: 'RALT', display: 'R⎇', tooltip: 'Right Alt'},
      {value: 'LGUI', display: 'L⌘'},
      {value: 'RGUI', display: 'R⌘'},
      {value: 'LSFT', display: 'L⇧'},
      {value: 'RSFT', display: 'R⇧'},
      {value: 'APP', display: '▤'}
    ]
  },
  {
      label: 'Media',
    cssClass: 'large-context-key',
    updateType: 'primary',
    visible: ['normal', 'tapkey', 'combokey'],
    keys: [
      {value: 'MSTP', display: 'Stop'},
      {value: 'MPLY', display: 'Play'},
      {value: 'MPRV', display: 'Prev'},
      {value: 'MNXT', display: 'Next'},
      {value: 'MUTE', display: 'Mute'},
      {value: 'VOLD', display: 'Vol -'},
      {value: 'VOLU', display: 'Vol +'}
    ]
  },
  {
      label: 'Keyboard',
    cssClass: 'large-context-key',
    updateType: 'primary',
    visible: ['normal'],
    keys: [
      {value: 'TRNS', display: 'Trns'},
      {value: 'BL_TOGG', display: 'Toggle Led'},
      {value: 'RESET', display: 'Reset'},
      {value: 'NO', display: 'No Action'}
    ]
  },
  {
      label: 'Layers',
    updateType: {
      'direct': 'primary',
      'setdefaultlayer': 'primary'
    },
    cssClass: 'large-context-key',
          visible: ['direct', 'setdefaultlayer'],
      keys: [
      {value: 'L0', display: 'L0'}
      ]
  },
  {
      label: 'Layers',
    updateType: {
      'momentary': 'primary',
      'toggle': 'primary',
      'tapkey': 'secondary',
      'direct': 'primary',
      'taptoggle': 'primary',
      'setdefaultlayer': 'primary'
    },
    cssClass: 'large-context-key',
          visible: ['momentary', 'toggle', 'tapkey', 'direct', 'taptoggle', 'setdefaultlayer'],
      keys: [
      {value: 'L1', display: 'L1'},
      {value: 'L2', display: 'L2'},
      {value: 'L3', display: 'L3'},
      {value: 'L4', display: 'L4'},
      {value: 'L5', display: 'L5'},
      {value: 'L6', display: 'L6'},
      {value: 'L7', display: 'L7'},
      {value: 'L8', display: 'L8'},
      {value: 'L9', display: 'L9'},
      {value: 'L10', display: 'L10'},
      {value: 'L11', display: 'L11'},
      {value: 'L12', display: 'L12'},
      {value: 'L13', display: 'L13'},
      {value: 'L14', display: 'L14'},
      {value: 'L15', display: 'L15'}
      ]
  },
  {
      label: 'Combo Keys',
      updateType: 'secondary',
      visible: ['combokey'],
      cssClass: 'large-context-key',
      keys: [
          {value: 'HYPR', display: 'Hyper'},
          {value: 'MEH', display: 'Meh'},
          {value: 'LCAG', display: 'Lcag'},
          {value: 'ALTG', display: 'Altg'},
          {value: 'SCMD', display: 'Scmd'},
          {value: 'LCA', display: 'Lca'}
      ]
  },
  {
      label: 'Combo Tap Keys',
      updateType: 'secondary',
      visible: ['tapkey'],
      cssClass: 'large-context-key',
      keys: [
          {value: 'C_S', display: 'C_S'},
          {value: 'MEH', display: 'Meh'},
          {value: 'LCAG', display: 'Lcag'},
          {value: 'RCAG', display: 'Rcag'},
          {value: 'ALL', display: 'All'},
          {value: 'SCMD', display: 'Scmd'},
          {value: 'LCA', display: 'Lca'}
      ]
  }
];