Vue.component('raw-output', {
	props: ['layerData'],
  template: `
  <div class="zonebox">
  	<h3 v-on:click="visible = !visible">Raw Output <span v-if="visible"><i class="fa fa-chevron-down" aria-hidden="true"></i></span><span v-if="!visible"><i class="fa fa-chevron-up" aria-hidden="true"></i></span></h3>
  	<textarea v-if="visible" id="raw-output" v-on:change="updateLayerData" :value="JSON.stringify(layerData)"></textarea>
  </div>`,
  data: function() {
  	return {
		visible: false
    };
  },
  methods: {
  	updateLayerData: function() {
    	var el = document.getElementById('raw-output');
    	this.$emit('updatelayerdata', JSON.parse(el.value));
    }
  }
})