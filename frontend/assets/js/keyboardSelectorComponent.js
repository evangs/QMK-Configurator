Vue.component('keyboard-selector-component', {
  props: ['keyboards', 'activeKeyboard'],
  template: '<div class="keyboardbox"><h3>Keyboards</h3><select class="context-menu--select--select" v-model="selectedKeyboard" @change="changeKeyboard"><option v-for="keyboard in keyboards" v-bind:value="keyboard">{{ keyboard.config.product }}</option></select></div>',
  data: function() {
      return {
          selectedKeyboard: this.activeKeyboard
      }
  },
  methods: {
    changeKeyboard: function () {
      this.$emit('keyboard', this.selectedKeyboard);
    }
  },
});