Vue.component('context-menu', {
  props: ['keyVal'],
  template: `
  <div tabindex="-1" :id="\'context\' + keyVal.id" class="context-menu-shell" v-on:keyup.esc="closeMenu">
    <button class="close-button" v-on:click="closeMenu">✕</button>
    <div class="context-menu">
        <div class="context-panel keytype">
            <span v-for="keyset in getKeyTypeKeysets()">
                <h3>{{keyset.label}}</h3>
                <div v-for="key in keyset.keys" v-on:click="updateValue(key.value, keyset.updateType)" :class="setClasses(key.value, keyset.cssClass)">
                    <span v-html="key.display"></span>
                    <span v-if="key.tooltip" class="tooltiptext">{{key.tooltip}}</span>
                </div>
            </span>
        </div>
        <div class="context-panel" :class="isSplitPanel()">
            <h3 class="section-header">Primary</h3>
            <span v-for="keyset in getPrimaryKeysets()">
                <h3 v-if="keyset.label">{{keyset.label}}</h3>
                <div v-for="key in keyset.keys" v-on:click="updateValue(key.value, keyset.updateType)" :class="setClasses(key.value, keyset.cssClass)">
                    <span v-html="key.display"></span>
                    <span v-if="key.tooltip" class="tooltiptext">{{key.tooltip}}</span>
                </div>
            </span>
        </div>
        <div class="context-panel split-panel" v-if="getSecondaryKeysets().length > 0">
            <h3 class="section-header">Secondary</h3>
            <span v-for="keyset in getSecondaryKeysets()">
                <h3>{{keyset.label}}</h3>
                <div v-for="key in keyset.keys" v-on:click="updateValue(key.value, keyset.updateType)" :class="setClasses(key.value, keyset.cssClass)">
                    <span v-html="key.display"></span>
                    <span v-if="key.tooltip" class="tooltiptext">{{key.tooltip}}</span>
                </div>
            </span>
        </div>
    </div>
  </div>`,
  data: function() {
    return {
      allKeys: KEYS,
      keyValue: this.keyVal
     }
  },
  methods: {
    mounted: function() {
      	var component = this;
        var eid = 'context' + this.keyVal.id;
      	var element = document.getElementById(eid);
        element.focus();
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