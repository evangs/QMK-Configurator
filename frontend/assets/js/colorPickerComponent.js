Vue.component('color-picker', {
	props: ['value'],
  data: function () {
    return {
    	edit: false,
    	previewColor: 'rgb('+this.value.red+','+this.value.green+','+this.value.blue+')',
      colorPickerModel: '#' + this.decToHex(this.value.red) + this.decToHex(this.value.green) + this.decToHex(this.value.blue)
    }
  },
  methods: {
    input: function () {
      this.$emit('input', this.value);
    },
  	updatePreviewStyle: function() {
    	this.previewColor = 'rgb('+this.value.red+','+this.value.green+','+this.value.blue+')';
      this.colorPickerModel = '#' + this.decToHex(this.value.red) + this.decToHex(this.value.green) + this.decToHex(this.value.blue);
      this.input();
    },
    updateRGB: function() {
    	this.value.red = this.hexToDec(this.colorPickerModel.substring(1,3));
      this.value.green = this.hexToDec(this.colorPickerModel.substring(3,5));
      this.value.blue = this.hexToDec(this.colorPickerModel.substring(5,7));
      this.updatePreviewStyle();
    },
    decToHex: function(dec) {
    	var DEC_MAP = {
      	0: '0',
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
        10: 'A',
        11: 'B',
        12: 'C',
        13: 'D',
        14: 'E',
        15: 'F'
      };

      return DEC_MAP[parseInt(dec/16)] + DEC_MAP[dec%16];
    },
    hexToDec: function(hex) {
    	hex = hex.toUpperCase();
    	var HEX_MAP = {
      	'0': 0,
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        'A': 10,
        'B': 11,
        'C': 12,
        'D': 13,
        'E': 14,
        'F': 15
      };

      return (HEX_MAP[hex[1]] + HEX_MAP[hex[0]] * 16);
    }
  },
  template: `
  <div>
    <div class="led-preview" :style="{backgroundColor: 'rgb('+this.value.red+','+this.value.green+','+this.value.blue+')'}" v-on:click="edit = !edit"></div>

    <div class="colorpicker" v-if="edit">
      <div class="controls">
        <div><label>R</label> <input type="range" min="0" max="255" id="rVal" v-model="value.red" @input="updatePreviewStyle" /></div>
        <div><label>G</label> <input type="range" min="0" max="255" id="gVal" v-model="value.green" @input="updatePreviewStyle" /></div>
        <div><label>B</label> <input type="range" min="0" max="255" id="bVal" v-model="value.blue" @input="updatePreviewStyle" /></div>
        <input type="color" v-model="colorPickerModel" @change="updateRGB">
      </div>
    </div>
  </div>
  `
})