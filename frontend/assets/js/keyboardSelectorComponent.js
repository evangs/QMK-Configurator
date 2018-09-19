Vue.component('keyboard-selector-component', {
  props: ['keyboards', 'value'],
  template: `
  <div class="keyboardbox">
  	<h3>Keyboards</h3>
    <select @change="changeKeyboard"
    				v-model="value">
    	<option v-for="keyboard in keyboards"
      				:value="keyboard">
      	{{ keyboard.config.product }}
      </option>
    </select>
  </div>`,
  methods: {
    changeKeyboard: function () {
      this.$emit('input', this.value);
    }
  },
});