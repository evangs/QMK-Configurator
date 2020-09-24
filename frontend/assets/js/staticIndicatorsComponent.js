Vue.component('static-indicators', {
	props: ['indicators'],
  template: `
  <div class="zonebox" v-if="indicators && indicators.length > 0">
  	<h3 v-on:click="visible = !visible">Indicators <span v-if="visible"><i class="fa fa-chevron-down" aria-hidden="true"></i></span><span v-if="!visible"><i class="fa fa-chevron-up" aria-hidden="true"></i></span></h3>
    <div v-if="visible">
      <div v-for="(led, index) in indicators" class="col-4">
        <h4>Indicator {{index + 1}} Pin {{led.pin}}</h4>
        <select @change="updateAction(led)"
                v-model="led.action">
          <option v-for="option in indicatorActions"
                  :value="option">
            {{ indicatorMap[option].description }}
          </option>
        </select>
      </div>
    </div>
  </div>`,
  data: function() {
  	return {
		  visible: true,
      indicatorMap: {
        'L0': {description: 'Base Layer', type: 'layer'},
        'L1': {description: 'Layer 1', type: 'layer'},
        'L2': {description: 'Layer 2', type: 'layer'},
        'L3': {description: 'Layer 3', type: 'layer'},
        'L4': {description: 'Layer 4', type: 'layer'},
        'L5': {description: 'Layer 5', type: 'layer'},
        'L6': {description: 'Layer 6', type: 'layer'},
        'L7': {description: 'Layer 7', type: 'layer'},
        'L8': {description: 'Layer 8', type: 'layer'},
        'L9': {description: 'Layer 9', type: 'layer'},
        'L10': {description: 'Layer 10', type: 'layer'},
        'L11': {description: 'Layer 11', type: 'layer'},
        'L12': {description: 'Layer 12', type: 'layer'},
        'L13': {description: 'Layer 13', type: 'layer'},
        'L14': {description: 'Layer 14', type: 'layer'},
        'L15': {description: 'Layer 15', type: 'layer'},
        'USB_LED_NUM_LOCK': {description: 'Num Lock', type: 'keyboard'},
        'USB_LED_CAPS_LOCK': {description: 'Caps Lock', type: 'keyboard'},
        'USB_LED_SCROLL_LOCK': {description: 'Scroll Lock', type: 'keyboard'},
        'USB_LED_COMPOSE': {description: 'Compose', type: 'keyboard'},
        'USB_LED_KANA': {description: 'Kana', type: 'keyboard'},
        'power': {description: 'Power', type: 'power'},
        'off': {description: 'Off', type: 'off'}
      },
      indicatorActions: [
        'off',
        'power',
        'USB_LED_NUM_LOCK',
        'USB_LED_CAPS_LOCK',
        'USB_LED_SCROLL_LOCK',
        'USB_LED_COMPOSE',
        'USB_LED_KANA',
        'L0',
        'L1',
        'L2',
        'L3',
        'L4',
        'L5',
        'L6',
        'L7',
        'L8',
        'L9',
        'L10',
        'L11',
        'L12',
        'L13',
        'L14',
        'L15'
      ]
    };
  },
  methods: {
    updateAction: function(led) {
      led.type = this.indicatorMap[led.action].type;
    }
  }
})