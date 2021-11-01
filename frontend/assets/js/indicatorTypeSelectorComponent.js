Vue.component('indicator-type-selector-component', {
  props: ['indicatorTypes'],
  template: `
  <div class="zonebox" v-if="indicatorTypes && indicatorTypes.length > 0">
    <h3 v-on:click="visible = !visible">Indicator Types <span v-if="visible"><i class="fa fa-chevron-down" aria-hidden="true"></i></span><span v-if="!visible"><i class="fa fa-chevron-up" aria-hidden="true"></i></span></h3>
    <div v-if="visible">
      <div v-if="visible" class="indicatorType" v-for="indicatorType in indicatorTypes">
        <label>{{indicatorType.label}}:</label>
        <select v-model="indicatorType.value" @change="changeIndicatorType">
          <option v-for="choice in indicatorType.choices" v-bind:value="choice.code">{{ choice.name }}</option>
        </select>
      </div>
    </div>
  </div>`,
  data: function() {
    return {
      visible: true
    }
  },
  methods: {
    changeIndicatorType: function() {
      this.$emit('indicator-type', this.indicatorTypes);
    },
  },
});
