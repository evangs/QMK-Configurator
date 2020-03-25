Vue.component('rotary-encoders', {
	props: ['encoders'],
  template: `
  <div class="zonebox" v-if="encoders && encoders.length > 0">
  	<h3 v-on:click="visible = !visible">Encoders <span v-if="visible"><i class="fa fa-chevron-down" aria-hidden="true"></i></span><span v-if="!visible"><i class="fa fa-chevron-up" aria-hidden="true"></i></span></h3>
    <div v-if="visible">
      <div v-for="(encoder, index) in encoders" class="col-4">
        <h4>Encoder {{index + 1}} Pins {{encoder.pinA}}, {{encoder.pinB}}</h4>
        <select v-model="encoder.left">
          <option v-for="option in actions" :value="option">
            {{ actionsMap[option] }}
          </option>
        </select>
        <select v-model="encoder.right">
          <option v-for="option in actions" :value="option">
            {{ actionsMap[option] }}
          </option>
        </select>
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
        'WH_U': 'Mouse Wheel Up',
        'WH_D': 'Mouse Wheel Down',
        'WH_L': 'Mouse Wheel Left',
        'WH_R': 'Mouse Wheel Right',
        'MS_U': 'Mouse Up',
        'MS_D': 'Mouse Down',
        'MS_L': 'Mouse Left',
        'MS_R': 'Mouse Right',
        'RGB_MODE_FORWARD': 'RGB Mode +',
        'RGB_MODE_REVERSE': 'RGB Mode -',
        'RGB_HUI': 'RGB Hue +',
        'RGB_HUD': 'RGB Hue -',
        'RGB_SAI': 'RGB Saturation +',
        'RGB_SAD': 'RGB Saturation -',
        'RGB_VAI': 'RGB Value +',
        'RGB_VAD': 'RGB Value -',
        'BRIGHTNESS_UP': 'Brightness +',
        'BRIGHTNESS_DOWN': 'Brightness -',
        'BL_INC': 'Backlight +',
        'BL_DEC': 'Backlight -'
      },
      actions: [
        'KC_VOLU',
        'KC_VOLD',
        'KC_MNXT',
        'KC_MPRV',
        'WH_U',
        'WH_D',
        'WH_L',
        'WH_R',
        'MS_U',
        'MS_D',
        'MS_L',
        'MS_R',
        'RGB_MODE_FORWARD',
        'RGB_MODE_REVERSE',
        'RGB_HUI',
        'RGB_HUD',
        'RGB_SAI',
        'RGB_SAD',
        'RGB_VAI',
        'RGB_VAD',
        'BRIGHTNESS_UP',
        'BRIGHTNESS_DOWN',
        'BL_INC',
        'BL_DEC'
      ]
    };
  }
})
