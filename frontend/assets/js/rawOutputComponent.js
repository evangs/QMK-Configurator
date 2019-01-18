Vue.component('raw-output', {
	props: ['activeKeyboard', 'keyboards'],
  template: `
  <div class="zonebox">
  	<h3 v-on:click="visible = !visible">Raw Output <span v-if="visible"><i class="fa fa-chevron-down" aria-hidden="true"></i></span><span v-if="!visible"><i class="fa fa-chevron-up" aria-hidden="true"></i></span></h3>
  	<textarea v-if="visible" id="raw-output" v-on:change="updateActiveKeyboard" :value="JSON.stringify(activeKeyboard)"></textarea>
  </div>`,
  data: function() {
  	return {
		visible: false
    };
  },
  methods: {
  	updateActiveKeyboard: function() {
    	var el = document.getElementById('raw-output');
			var layout = JSON.parse(el.value);
			var keyboard = this.keyboards.find(function(keeb) {
      	return keeb.id === layout.id;
      });
      keyboard.config = JSON.parse(JSON.stringify(layout.config));
      keyboard.zones = JSON.parse(JSON.stringify(layout.zones));
      keyboard.keySections = JSON.parse(JSON.stringify(layout.keySections));
			if (layout.indicators) {
				keyboard.indicators = JSON.parse(JSON.stringify(layout.indicators));
			}
    	this.$emit('updateactivekeyboard', keyboard);
    }
  }
})