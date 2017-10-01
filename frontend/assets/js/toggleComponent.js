Vue.component('toggle', {
  props: {
      value: Boolean
  },
  template: `
  <div v-on:click="input" :class="setClasses()"></div>`,
  data: function() {
      return {};
  },
  methods: {
    input: function() {
      this.$emit('input', !this.value);
    },
    setClasses: function() {
        var classes = [];
        classes.push('toggle-control');
        if (this.value) {
            classes.push('active');
        }

        return classes.join(' ');
    }
  }
});