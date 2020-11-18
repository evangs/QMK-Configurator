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
    buildInProgress: false,
    exportLink: '',
    exportFileName: '',
    urls: {}
  },
  created: function() {
    this.exportLink = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.activeKeyboard));
    this.exportFileName = this.activeKeyboard.config.product + '-' + new Date().getTime() + ".json"

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
    updateActiveKeyboard: function(data) {
      this.activeKeyboard = data;
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
      this.$http.post('/build', {
        config: this.activeKeyboard.config,
        rules: this.activeKeyboard.rules,
        configKeymap: this.activeKeyboard.configKeymap,
        keymap: this.layers,
        indicators: this.activeKeyboard.indicators,
        staticIndicators: this.activeKeyboard.static_indicators,
        rotaryEncoders: this.activeKeyboard.rotary_encoders
      })
      .then(function (response) {
        window.location.href = response.data.hex_url;
        context.urls = {
          config: response.data.config_url,
          rules: response.data.rules_url,
          keyboardC: response.data.keyboard_c_url,
          keyboardH: response.data.keyboard_h_url,
          keymap: response.data.keymap_url
        };
        context.buildInProgress = false;
      })
      .catch(function (error) {
        console.log(error);
        context.buildInProgress = false;
      });
    },
    fileChange: function(fileList) {
      var context = this;
      var formData = new FormData();
      formData.append('file', fileList[0]);

      this.$http.post('/import', formData)
      .then(function(response) {
        var layout = JSON.parse(response.data);

        context.activeKeyboard = context.keyboards.find(function(keeb) {
        	return keeb.id === layout.id;
        });

        context.activeKeyboard.config = layout.config;
        context.activeKeyboard.zones = layout.zones;
        context.activeKeyboard.keySections = layout.keySections;
        if (layout.indicators) {
          context.activeKeyboard.indicators = layout.indicators;
        }
        if (layout.static_indicators) {
          context.activeKeyboard.static_indicators = layout.static_indicators;
        }
        if (layout.rotary_encoders) {
          context.activeKeyboard.rotary_encoders = layout.rotary_encoders;
        }
      })
      .catch(function(error) {
        console.log(error);
      });
    },
    saveLayout: function() {
      var layoutCopy = JSON.parse(JSON.stringify(this.activeKeyboard));
      if (this.layoutName.trim()) {
      	layoutCopy.layoutName = this.layoutName.trim();
        this.layoutName = '';
      }
    	layoutCopy.timestamp = new Date().getTime();
    	Vue.set(this.savedLayouts, layoutCopy.layoutName, layoutCopy);
    	localStorage.setItem('savedKeyboardLayouts', JSON.stringify(this.savedLayouts));
    },
    deleteSavedLayout: function(layoutName) {
    	if (confirm('Are you sure you want to delete? This action cannot be undone.')) {
      	Vue.delete(this.savedLayouts, layoutName);
        localStorage.setItem('savedKeyboardLayouts', JSON.stringify(this.savedLayouts));
      }
    },
    downloadFile: function(url) {
      window.open(url, '_blank');
    }
  },
  watch: {
  	activeKeyboard: {
      handler: function() {
        this.layers = this.activeKeyboard.keymap();
        this.zones = this.activeKeyboard.zones;
        this.exportLink = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.activeKeyboard));
        this.exportFileName = this.activeKeyboard.config.product + '-' + new Date().getTime() + ".json"
      },
      deep: true
    }
  }
});
