Vue.prototype.$http = axios;

new Vue({
  el: '#app',
  data: {
    keyboards: KEYBOARDS,
    activeKeyboard: KEYBOARDS[0],
    layers: KEYBOARDS[0].keymap(),
    zones: KEYBOARDS[0].zones,
    savedLayouts: undefined,
    layoutName: '',
    buildInProgress: false
  },
  created: function() {
  	this.savedLayouts = JSON.parse(localStorage.getItem('savedKeyboardLayouts')) || {};
    if (Array.isArray(this.savedLayouts)) {
      localStorage.setItem('savedKeyboardLayouts', JSON.stringify({}));
      this.savedLayouts = {};
    }
  },
  methods: {
    clearKey: function(key) {
      if (key.type !== 'nodisplay') {
        key.value = 'TRNS';
        key.type = 'normal';
        if (key.zone) {
            delete key.zone;
        }
      }
    },
   	addLayer: function() {
      var copy = JSON.parse(JSON.stringify(this.activeKeyboard.keySections[0]));
      var context = this;

      Object.keys(copy).forEach(function(key) {
        var section = copy[key];

        section.forEach(function(lkey) {
          if (Array.isArray(lkey)) {
            lkey.forEach(function(zlkey) {
              if (Array.isArray(zlkey)) {
                zlkey.forEach(function(szlkey) {
                  context.clearKey(szlkey);
                });
              } else {
                context.clearKey(zlkey);
              }
            });
          } else {
            context.clearKey(lkey);
          }
        });
      });
      for (row = 0; row < copy.length; row++){
      	for (key = 0; key < copy[row].length; key++) {
          if (copy[row][key].type != 'nodisplay') {
            copy[row][key].value = 'TRNS';
            copy[row][key].type = 'normal';
            if (copy[row][key].zone) {
              delete copy[row][key].zone;
            }
          }
        }
      }

      this.activeKeyboard.keySections.push(copy);
      this.layers = this.activeKeyboard.keymap();
    },
    deleteLayer: function(index) {
    	this.activeKeyboard.keySections.splice(index, 1);
        this.layers = this.activeKeyboard.keymap();
    },
    updateLayers: function(layerData) {
    	this.layers = layerData;
    },
    onZoneChange: function(zones) {
      this.layers = this.activeKeyboard.keymap();
    },
    buildFirmware: function() {
    	var context = this;
    	context.buildInProgress = true;
      this.$http.post('/', {
        config: this.activeKeyboard.config,
        rules: this.activeKeyboard.rules,
        configKeymap: this.activeKeyboard.configKeymap,
        keymap: this.layers
      })
      .then(function (response) {
        window.location.href = response.data.hex_url;
        context.buildInProgress = false;
      })
      .catch(function (error) {
        console.log(error);
        context.buildInProgress = false;
      });
    },
    saveLayout: function() {
      if (this.layoutName.trim()) {
      	this.activeKeyboard.layoutName = this.layoutName.trim();
        this.layoutName = '';
      }
    	this.activeKeyboard.timestamp = new Date().getTime();
    	this.savedLayouts[this.activeKeyboard.layoutName] = this.activeKeyboard;
    	localStorage.setItem('savedKeyboardLayouts', JSON.stringify(this.savedLayouts));
    },
    deleteSavedLayout: function(layoutName) {
    	if (confirm('Are you sure you want to delete? This action cannot be undone.')) {
      	delete this.savedLayouts[layoutName];
        localStorage.setItem('savedKeyboardLayouts', JSON.stringify(this.savedLayouts));
      }
    }
  },
  watch: {
  	activeKeyboard: {
      handler: function() {
        this.layers = this.activeKeyboard.keymap();
        this.zones = this.activeKeyboard.zones;
      },
      deep: true
    }
  }
});