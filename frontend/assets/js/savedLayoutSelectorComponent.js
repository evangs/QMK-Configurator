Vue.component('saved-layout-selector-component', {
  props: ['keyboards', 'savedLayouts', 'value'],
  template: `
  <div class="zonebox" v-if="Object.keys(savedLayouts).length > 0">
    <h3 v-on:click="visible = !visible">Saved Layouts <span v-if="visible"><i class="fa fa-chevron-down" aria-hidden="true"></i></span><span v-if="!visible"><i class="fa fa-chevron-up" aria-hidden="true"></i></span></h3>
    <ul class="saved-layouts" v-if="visible">
    	<li v-for="layout in savedLayouts">
      	  <span>{{layout.layoutName}}</span>
      	  <button v-on:click="changeLayout(layout)" class="btn-primary"><i class="fa fa-keyboard-o" aria-hidden="true"></i> Load</button>
          <button v-on:click="deleteLayout(layout)" class="btn-warning"><i class="fa fa-trash-o" aria-hidden="true"></i> Delete</button>
        </li>
    </ul>
  </div>`,
  data: function() {
      return {
          visible: true
      }
  },
  methods: {
    changeLayout: function (layout) {
    	var keyboard = this.keyboards.find(function(keeb) {
      	return keeb.id === layout.id;
      });
      keyboard.config = JSON.parse(JSON.stringify(layout.config));
      keyboard.zones = JSON.parse(JSON.stringify(layout.zones));
      keyboard.keySections = JSON.parse(JSON.stringify(layout.keySections));
      if (layout.indicators) {
        keyboard.indicators = JSON.parse(JSON.stringify(layout.indicators));
      }
      if (layout.static_indicators) {
        keyboard.static_indicators = JSON.parse(JSON.stringify(layout.static_indicators));
      }
      if (layout.rotary_encoders) {
        keyboard.rotary_encoders = JSON.parse(JSON.stringify(layout.rotary_encoders));
      }
      this.$emit('input', keyboard);
    },
    deleteLayout: function (layout) {
      this.$emit('delete-layout', layout.layoutName);
    }
  },
});
