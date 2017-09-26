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
  	this.savedLayouts = JSON.parse(localStorage.getItem('savedKeyboardLayouts')) || [];
  },
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
            if (copy[row][key].zone) {
                delete copy[row][key].zone;
            }
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
    	this.savedLayouts.push(this.activeKeyboard);
    	localStorage.setItem('savedKeyboardLayouts', JSON.stringify(this.savedLayouts));
    },
    deleteSavedLayout: function(layoutName) {
    	var layoutIndex = this.savedLayouts.findIndex(function(l) {
      	return l.name + l.timestamp === layoutName;
      });

      if (confirm('Are you sure you want to delete? This action cannot be undone.')) {
      	this.savedLayouts.splice(layoutIndex, 1);
        localStorage.setItem('savedKeyboardLayouts', JSON.stringify(this.savedLayouts));
      }
    }
  },
  watch: {
  	activeKeyboard: function() {
    	this.layers = this.activeKeyboard.keymap();
      this.zones = this.activeKeyboard.zones;
    }
  }
});