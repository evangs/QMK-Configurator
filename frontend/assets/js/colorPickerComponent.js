Vue.component('color-picker', {
	props: ['value'],
  data: function () {
    return {
    	edit: false
    }
  },
  methods: {
    input: function () {
      this.$emit('input', this.value);
    }
  },
  template: `
  <div>
    <div class="led-preview" :style="{backgroundColor: 'rgb('+this.value.red+','+this.value.green+','+this.value.blue+')'}" v-on:click="edit = !edit"></div>

    <div class="colorpicker" v-if="edit">
      <div class="controls">
        <div><label>R</label> <input type="range" min="0" max="255" id="rVal" v-model="value.red" @input="input" /><input type="number" min="0" max="255" id="rValText" v-model="value.red" @input="input" /></div>
        <div><label>G</label> <input type="range" min="0" max="255" id="gVal" v-model="value.green" @input="input" /><input type="number" min="0" max="255" id="gValText" v-model="value.green" @input="input" /></div>
        <div><label>B</label> <input type="range" min="0" max="255" id="bVal" v-model="value.blue" @input="input" /><input type="number" min="0" max="255" id="bValText" v-model="value.blue" @input="input" /></div>
      </div>
    </div>
  </div>
  `
})