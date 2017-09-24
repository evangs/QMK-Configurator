Vue.prototype.$http = axios;

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