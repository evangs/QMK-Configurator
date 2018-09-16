Vue.component('keyboard-selector-component', {
  props: ['keyboards', 'value'],
  template: `
  <div class="keyboardbox">
  	<h3>Keyboards</h3>
    <select @change="changeKeyboard"
    				v-model="currentKeyboard">
    	<option v-for="keyboard in keyboards"
      				:value="keyboard">
      	{{ keyboard.config.product }}
      </option>
    </select>
  </div>`,
  data: function() {
    return {
      currentKeyboard: this.value
     }
  },
  methods: {
    changeKeyboard: function () {
      this.$emit('input', this.currentKeyboard);
    }
  },
});