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
      },
      activeZone: undefined
    }
  },
  created: function() {
     eventHub.$on('hover-zone', this.hoverZone);
  },
  beforeDestroy: function() {
      eventHub.$off('hover-zone', this.hoverZone);
  },
  methods: {
    hoverZone: function(zone) {
      console.log(zone);
      this.activeZone = zone;
    },
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
      if (this.keyInfo.spacer) {
          classes.push(this.keyInfo.spacer);
      }
      if (this.activeZone && this.activeZone === this.keyInfo.zone) {
        classes.push('zone-hover');
      }

      switch(this.keyInfo.type) {
      	case 'normal':
        case 'momentary':
        case 'toggle':
        case 'direct':
        case 'taptoggle':
        case 'setdefaultlayer':
        	if(!this.keyInfo.value) {
          	classes.push('error');
          }
          break;
        case 'tapkey':
        case 'modkey':
        case 'combokey':
        	if(!this.keyInfo.value || !this.keyInfo.secondary) {
          	classes.push('error');
          }
          break;
      }

      return classes.join(' ');
    },
    generateKeyText: function() {
      switch (this.keyInfo.type) {
        case 'combokey':
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