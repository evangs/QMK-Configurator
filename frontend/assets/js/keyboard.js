Vue.prototype.$http = axios;

Vue.component('raw-output', {
	props: ['layerData'],
  template: '<textarea id="raw-output" v-on:change="updateLayerData" :value="JSON.stringify(layerData)"></textarea>',
  data: function() {
  	return {
    };
  },
  methods: {
  	updateLayerData: function() {
    	var el = document.getElementById('raw-output');
    	this.$emit('updatelayerdata', JSON.parse(el.value));
    }
  }
})
Vue.component('key-component', {
  props: ['keyInfo'],
  template: '<div v-if="displayKey()" class="inline-block"><div class="keyboard-key" :class="setClasses()" v-on:click="toggleMenu">{{generateKeyText()}}</div><context-menu v-if="keyInfo.showMenu" v-on:closemenu="toggleMenu" v-bind:key-val="keyInfo" v-on:updatekey="updateKey" v-on:updatekeytype="updateKeyType" v-on:updatesecondary="updateSecondary"></context-menu></div>',
  data: function() {
    return {
      keyDisplayMap: {
      	'BSPC': '⌫',
        'DEL': '⌦',
        'TAB': '↹',
        'ESC': '⎋',
        'ENT': '↵',
        'LSFT': '⇧',
        'RSFT': '⇧',
        'CAPS': '⇪',
        'UP': '↑',
        'DOWN': '↓',
        'LEFT': '←',
        'RIGHT': '→',
        'LALT': '⎇',
        'RALT': '⎇',
        'LCTL': '⌃',
        'RCTL': '⌃',
        'LGUI': '⌘',
        'RGUI': '⌘',
        'APP': '▤',
        'SPC': ' ',
        'SCLN': ';',
        'QUOT': '\'',
        'LBRC': '[',
        'RBRC': ']',
        'MINS': '-',
        'EQL': '=',
        'BSLS': '\\',
        'COMM': ',',
        'DOT': '.',
        'SLSH': '/',
        'BL_TOGG': 'Led Toggle',
        'NO': 'No Action',
        'RESET': 'Reset',
        'NUM': 'Num Lock',
        'GRV': '`',
        'NUHS': '#',
        'NUBS': '|',
        'TILD': '~',
        'EXLM': '!',
        'AT': '@',
        'HASH': '#',
        'DLR': '$',
        'PERC': '%',
        'CIRC': '^',
        'AMPR': '&',
        'ASTR': '*',
        'LPRN': '(',
        'RPRN': ')',
        'UNDS': '_',
        'PLUS': '+',
        'LCBR': '{',
        'RCBR': '}',
        'LT': '<',
        'GT': '>',
        'COLN': ':',
        'DQT': '"',
        'PIPE': '|',
        'QUES': '?',
        '1SFT': '!',
        '2SFT': '@',
        '3SFT': '#',
        '4SFT': '$',
        '5SFT': '%',
        '6SFT': '^',
        '7SFT': '&',
        '8SFT': '*',
        '9SFT': '(',
        '0SFT': ')'
      }
    }
  },
  methods: {
    updateKey: function(newVal) {
      // show context menu and allow updating of key values
      this.keyInfo.value = newVal;
      //this.toggleMenu();
    },
    updateKeyType: function(newType) {
    	this.keyInfo.type = newType;
    },
    updateSecondary: function(newVal) {
    	this.keyInfo.secondary = newVal;
    },
    toggleMenu: function() {
    	this.$emit('updatemenu', this.keyInfo);
    },
    setClasses: function() {
      var classes = [];
      classes.push(this.keyInfo.shape);
      if (this.keyInfo.showMenu) {
      	classes.push('active');
      }
      classes.push(this.keyInfo.type);

      switch(this.keyInfo.type) {
      	case 'normal':
        case 'momentary':
        case 'toggle':
        	if(!this.keyInfo.value) {
          	classes.push('error');
          }
          break;
        case 'tapkey':
        case 'modkey':
        	if(!this.keyInfo.value || !this.keyInfo.secondary) {
          	classes.push('error');
          }
          break;
      }

      return classes.join(' ');
    },
    generateKeyText: function() {
      switch (this.keyInfo.type) {
        case 'modkey':
          return this.translateDualValue(this.keyInfo.value, this.keyInfo.secondary) || ((this.translateValue(this.keyInfo.value) || '') + ' + ' + (this.translateValue(this.keyInfo.secondary) || ''));
        case 'tapkey':
          return 'Tap: ' + (this.translateValue(this.keyInfo.value) || '') + ' Hold: ' + (this.translateValue(this.keyInfo.secondary) || '');
        default:
          return this.translateValue(this.keyInfo.value);
      }
    },
    translateValue: function(val) {
    	return this.keyDisplayMap[val] || val;
    },
    translateDualValue: function(val, sec) {
    	if (!val || !sec) {
      	return;
      }

      return this.keyDisplayMap[val+sec.slice(1)];
    },
    displayKey: function() {
        return this.keyInfo.type != 'nodisplay';
    }
  }
})
Vue.component('context-menu', {
  props: ['keyVal'],
  template: '<div tabindex="-1" :id="\'context\' + keyVal.id" class="context-menu-shell" v-on:keyup.esc="closeMenu"><button class="close-button" v-on:click="closeMenu">✕</button><div class="context-menu"><div class="context-panel keytype"><span v-for="keyset in getKeyTypeKeysets()"><h3>{{keyset.label}}</h3><div v-for="key in keyset.keys" v-on:click="updateValue(key.value, keyset.updateType)" :class="setClasses(key.value, keyset.cssClass)">{{key.display}}<span v-if="key.tooltip" class="tooltiptext">{{key.tooltip}}</span></div></span></div><div class="context-panel" :class="isSplitPanel()"><h3 class="section-header">Primary</h3><span v-for="keyset in getPrimaryKeysets()"><h3 v-if="keyset.label">{{keyset.label}}</h3><div v-for="key in keyset.keys" v-on:click="updateValue(key.value, keyset.updateType)" :class="setClasses(key.value, keyset.cssClass)">{{key.display}}<span v-if="key.tooltip" class="tooltiptext">{{key.tooltip}}</span></div></span></div><div class="context-panel split-panel" v-if="getSecondaryKeysets().length > 0"><h3 class="section-header">Secondary</h3><span v-for="keyset in getSecondaryKeysets()"><h3>{{keyset.label}}</h3><div v-for="key in keyset.keys" v-on:click="updateValue(key.value, keyset.updateType)" :class="setClasses(key.value, keyset.cssClass)">{{key.display}}<span v-if="key.tooltip" class="tooltiptext">{{key.tooltip}}</span></div></span></div></div></div>',
  data: function() {
    return {
      allKeys: [
      	{
        	label: 'Key Types',
          cssClass: 'extra-large-context-key',
          updateType: 'keyType',
          visible: ['normal', 'tapkey', 'modkey', 'toggle', 'momentary', 'combokey'],
        	keys: [
            {value: 'normal', display: 'Normal'},
            {value: 'momentary', display: 'Momentary', tooltip: 'While held keys on the matching layer are active.'},
            {value: 'toggle', display: 'Toggle', tooltip: 'Pressing activates the matching layer. Pressing again deactivates it.'},
            {value: 'tapkey', display: 'Tap Key', tooltip: 'Key sends one code when pressed and another when held.'},
            {value: 'modkey', display: 'Mod Key', tooltip: 'Combines a primary key with a secondary as if both keys were pressed together.'},
            {value: 'combokey', display: 'Combo Key', tooltip: 'Combines multiple modifiers with a key.'}
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
          	'momentary': 'primary',
            'toggle': 'primary',
            'tapkey': 'secondary'
          },
          cssClass: 'large-context-key',
  				visible: ['momentary', 'toggle', 'tapkey'],
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
      ],
      keyValue: this.keyVal
     }
  },
  methods: {
    mounted: function() {
      	var component = this;
        var eid = 'context' + this.keyVal.id;
      	var element = document.getElementById(eid);
        element.focus();
        // element.addEventListener('blur', function(e) {
        // 	component.$emit('updatemenu', component.keyVal);
        //   //component.keyVal.showMenu = false;
        // }, true);
    },
  	getUpdateType: function(updateType) {
    	if (typeof updateType !== 'string') {
      	updateType = updateType[this.keyVal.type];
      }

      return updateType;
    },
    isKeyType: function(updateType, visibleTypes) {
    	return this.isVisible(visibleTypes) && this.getUpdateType(updateType) === 'keyType';
    },
    isPrimary: function(updateType, visibleTypes) {
    	return this.isVisible(visibleTypes) && this.getUpdateType(updateType) === 'primary';
    },
    isSecondary: function(updateType, visibleTypes) {
    	return this.isVisible(visibleTypes) && this.getUpdateType(updateType) === 'secondary';
    },
  	updateValue: function (newVal, updateType) {
    	updateType = this.getUpdateType(updateType);
    	switch(updateType) {
      	case 'primary':
        	this.$emit('updatekey', newVal);
          break;
        case 'keyType':
        	this.$emit('updatekeytype', newVal);
          this.clearField(newVal, 'primary');
          this.clearField(newVal, 'secondary');
          break;
        case 'secondary':
        	this.$emit('updatesecondary', newVal);
          break;
      }
    },
    clearField: function(newType, field) {
    	var keysets = this.getPrimaryKeysets();
      var keys = [];
      var i;
      var message = (field === 'primary') ? 'updatekey' : 'updatesecondary';
      var fieldVal = (field === 'primary') ? this.keyVal.value : this.keyVal.secondary;
      for (i = 0; i < keysets.length; i++) {
      	keys = keys.concat(keysets[i].keys.map(function(key){return key.value;}));
      }

      if (keys.indexOf(fieldVal) < 0) {
      	this.$emit(message, null);
      }
    },
    setActiveClass: function(val) {
    	if (val === this.keyVal.value) {
      	return 'active';
      }
      if (val === this.keyVal.secondary) {
      	return 'active';
      }
      if (val === this.keyVal.type) {
      	return 'active';
      }
    },
    setClasses: function(val, keysetClass) {
    	var cssClasses = [];
      if (keysetClass) {
      	cssClasses.push(keysetClass);
      }
      var activeClass = this.setActiveClass(val);
      if (activeClass) {
      	cssClasses.push(activeClass);
      }

      return cssClasses.join(' ');
    },
    isVisible: function(visibleTypes) {
    	return visibleTypes.indexOf(this.keyVal.type) > -1;
    },
    getKeyTypeKeysets: function () {
    	var isKeyType = this.isKeyType;
    	return this.allKeys.filter(function(keyset) {
      	return isKeyType(keyset.updateType, keyset.visible);
      });
    },
    getPrimaryKeysets: function () {
    	var isPrimary = this.isPrimary;
    	return this.allKeys.filter(function(keyset) {
      	return isPrimary(keyset.updateType, keyset.visible);
      });
    },
    getSecondaryKeysets: function () {
    	var isSecondary = this.isSecondary;
    	return this.allKeys.filter(function(keyset) {
      	return isSecondary(keyset.updateType, keyset.visible);
      });
    },
    isSplitPanel: function() {
    	if (this.getSecondaryKeysets().length > 0) {
				return 'split-panel';
      }
    },
    closeMenu: function() {
        this.$emit('closemenu');
    }
  }
})

Vue.component('layer', {
	props: ['keyInfo'],
  template: '<div class="layer"><div v-for="row in keyInfo"><span v-for="kf in row"><key-component v-on:updatemenu="updateContextMenus" v-bind:key-info="kf"></key-component></span></div></div>',
  data: function() {
  	return {
    }
  },
  methods: {
  	updateContextMenus: function(newVal) {
      var i = 0;
      var j = 0;
      for (i = 0; i < this.keyInfo.length; i++) {
        for (j = 0; j < this.keyInfo[i].length; j++) {
          if (this.keyInfo[i][j].id === newVal.id) {
            this.keyInfo[i][j].showMenu = !newVal.showMenu;
          } else {
          	this.keyInfo[i][j].showMenu = false;
          }
        }
      }
    }
  }
})

new Vue({
  el: '#app',
  data: {
    keyboards: KEYBOARDS,
    activeKeyboard: KEYBOARDS[0],
    layers: KEYBOARDS[0].keymap(),
    zones: KEYBOARDS[0].zones
  },
  // created: function() {
  //     this.activeKeyboard = this.keyboards[0];
  //     this.layers = this.keyboards[this.activeKeyboard].keymap();
  //     this.zones = this.keyboards[this.activeKeyboard].zones;
  // },
  methods: {
   	addLayer: function() {
      var copy = JSON.parse(JSON.stringify(this.layers[0]));
      var row = 0;
      var key = 0;

      for (row = 0; row < copy.length; row++){
      	for (key = 0; key < copy[row].length; key++) {
          if (copy[row][key].type != 'nodisplay') {
            copy[row][key].value = 'TRNS';
            copy[row][key].type = 'normal';
          }
        }
      }

      this.layers.push(copy);
    },
    deleteLayer: function(index) {
    	this.layers.splice(index, 1);
    },
    updateLayers: function(layerData) {
    	this.layers = layerData;
    },
    onZoneChange: function(zones) {
        this.layers = this.activeKeyboard.keymap();
    },
    onKeyboardChange: function(keyboard) {
        this.activeKeyboard = keyboard;
        this.layers = this.activeKeyboard.keymap();
        this.zones = this.activeKeyboard.zones;
    },
    buildFirmware: function() {
        this.$http.post('/', {
            config: this.activeKeyboard.config,
            rules: this.activeKeyboard.rules,
            configKeymap: this.activeKeyboard.configKeymap,
            keymap: this.layers
        })
        .then(function (response) {
          console.log(response);
          window.location.href = response.data.hex_url;
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
});