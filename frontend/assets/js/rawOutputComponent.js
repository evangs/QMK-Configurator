Vue.component('raw-output', {
	props: ['layerData'],
  template: '<textarea id="raw-output" v-on:change="updateLayerData" :value="JSON.stringify(layerData)"></textarea>',
  data: function() {
  	return {
    };
  },
  methods: {
  	updateLayerData: function() {
    	var el = document.getElementById('raw-output');
    	this.$emit('updatelayerdata', JSON.parse(el.value));
    }
  }
})