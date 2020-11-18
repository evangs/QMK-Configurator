Vue.component('rotary-encoders', {
	props: ['encoders'],
  template: `
  <div class="zonebox" v-if="encoders && encoders.length > 0">
  	<h3 v-on:click="visible = !visible">Encoders <span v-if="visible"><i class="fa fa-chevron-down" aria-hidden="true"></i></span><span v-if="!visible"><i class="fa fa-chevron-up" aria-hidden="true"></i></span></h3>
    <div v-if="visible">
      <div v-for="(encoder, index) in encoders" class="col-12">
        <h4>Encoder {{index + 1}} Pins {{encoder.pinA}}, {{encoder.pinB}}</h4>
				<button v-on:click="addAction(encoder)">Add Action</button>
				<div v-for="(action, actionIndex) in encoder.actions">
	        <select v-model="action.left">
	          <option v-for="option in actions" :value="option">
	            {{ actionsMap[option] }}
	          </option>
	        </select>
	        <select v-model="action.right">
	          <option v-for="option in actions" :value="option">
	            {{ actionsMap[option] }}
	          </option>
	        </select>
					<button v-on:click="deleteAction(encoder, actionIndex)">Delete</button>
				</div>
      </div>
    </div>
  </div>`,
  data: function() {
  	return {
		  visible: true,
      actionsMap: {
        'KC_VOLU': 'Volume Up',
        'KC_VOLD': 'Volume Down',
        'KC_MNXT': 'Playback Next',
        'KC_MPRV': 'Playback Previous',
        'KC_WH_U': 'Mouse Wheel Up',
        'KC_WH_D': 'Mouse Wheel Down',
        'KC_WH_L': 'Mouse Wheel Left',
        'KC_WH_R': 'Mouse Wheel Right',
        'KC_MS_U': 'Mouse Up',
        'KC_MS_D': 'Mouse Down',
        'KC_MS_L': 'Mouse Left',
        'KC_MS_R': 'Mouse Right',
        'RGB_MODE_FORWARD': 'RGB Mode +',
        'RGB_MODE_REVERSE': 'RGB Mode -',
        'RGB_HUI': 'RGB Hue +',
        'RGB_HUD': 'RGB Hue -',
        'RGB_SAI': 'RGB Saturation +',
        'RGB_SAD': 'RGB Saturation -',
        'RGB_VAI': 'RGB Value +',
        'RGB_VAD': 'RGB Value -',
        'KC_BRIGHTNESS_UP': 'Brightness +',
        'KC_BRIGHTNESS_DOWN': 'Brightness -',
        'BL_INC': 'Backlight +',
        'BL_DEC': 'Backlight -',
				'TRNS': 'TRNS',
				'KC_LEFT': 'Left',
				'KC_RIGHT': 'Right',
				'KC_UP': 'Up',
				'KC_DOWN': 'Down'
      },
      actions: [
        'KC_VOLU',
        'KC_VOLD',
        'KC_MNXT',
        'KC_MPRV',
        'KC_WH_U',
        'KC_WH_D',
        'KC_WH_L',
        'KC_WH_R',
        'KC_MS_U',
        'KC_MS_D',
        'KC_MS_L',
        'KC_MS_R',
				'KC_LEFT',
				'KC_RIGHT',
				'KC_UP',
				'KC_DOWN',
        'RGB_MODE_FORWARD',
        'RGB_MODE_REVERSE',
        'RGB_HUI',
        'RGB_HUD',
        'RGB_SAI',
        'RGB_SAD',
        'RGB_VAI',
        'RGB_VAD',
        'KC_BRIGHTNESS_UP',
        'KC_BRIGHTNESS_DOWN',
        'BL_INC',
        'BL_DEC',
				'TRNS'
      ]
    };
  },
	methods: {
		addAction: encoder => encoder.actions.push({right: 'TRNS', left: 'TRNS'}),
		deleteAction: (encoder, actionIndex) => encoder.actions.splice(actionIndex, 1)
	}
})
