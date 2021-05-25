Vue.component('advanced-settings-component', {
  props: ['activeKeyboard'],
  template: `
  <div class="zonebox">
    <h3 v-on:click="visible = !visible">Advanced Settings <span v-if="visible"><i class="fa fa-chevron-down" aria-hidden="true"></i></span><span v-if="!visible"><i class="fa fa-chevron-up" aria-hidden="true"></i></span></h3>
    <div v-if="visible">
        <div class="form-control">
            <label>Backlight Levels:</label>
            <input type="number" v-model="activeKeyboard.config.backlightLevels" />
        </div>
        <div class="form-control">
            <label>Max Power Consumption:</label>
            <input type="number" v-model="activeKeyboard.config.usbMaxPowerConsumption" />
        </div>
        <div class="form-control">
            <label>Debouncing Delay:</label>
            <input type="number" v-model="activeKeyboard.config.debouncingDelay" />
        </div>
        <div class="form-control">
            <label>Tapping Term:</label>
            <input type="number" v-model="activeKeyboard.config.tappingTerm" />
        </div>
        <div class="form-control">
            <label>Permissive Hold:</label>
            <toggle v-model="activeKeyboard.config.permissiveHold"></toggle>
        </div>
        <div class="form-control">
            <label>Locking Support:</label>
            <toggle v-model="activeKeyboard.config.lockingSupportEnabled"></toggle>
        </div>
        <div class="form-control">
            <label>locking Resync:</label>
            <toggle v-model="activeKeyboard.config.lockingResyncEnabled"></toggle>
        </div>
        <div class="form-control">
            <label>Debug:</label>
            <toggle v-model="activeKeyboard.config.debugEnabled"></toggle>
        </div>
        <div class="form-control">
            <label>Print:</label>
            <toggle v-model="activeKeyboard.config.printEnabled"></toggle>
        </div>
        <div class="form-control">
            <label>Action Layer:</label>
            <toggle v-model="activeKeyboard.config.actionLayerEnabled"></toggle>
        </div>
        <div class="form-control">
            <label>Action Tapping:</label>
            <toggle v-model="activeKeyboard.config.actionTappingEnabled"></toggle>
        </div>
        <div class="form-control">
            <label>Action One Shot:</label>
            <toggle v-model="activeKeyboard.config.actionOneShotEnabled"></toggle>
        </div>
        <div class="form-control">
            <label>Action Macro:</label>
            <toggle v-model="activeKeyboard.config.actionMacroEnabled"></toggle>
        </div>
        <div class="form-control">
            <label>Action Function:</label>
            <toggle v-model="activeKeyboard.config.actionFunctionEnabled"></toggle>
        </div>
        <div class="form-control">
            <label>Bootmagic:</label>
            <toggle v-model="activeKeyboard.rules.bootmagicEnabled"></toggle>
        </div>
        <div class="form-control">
            <label>Mouse Key:</label>
            <toggle v-model="activeKeyboard.rules.mousekeyEnabled"></toggle>
        </div>
        <div class="form-control">
            <label>Extra Key:</label>
            <toggle v-model="activeKeyboard.rules.extrakeyEnabled"></toggle>
        </div>
        <div class="form-control">
            <label>Console:</label>
            <toggle v-model="activeKeyboard.rules.consoleEnabled"></toggle>
        </div>
        <div class="form-control">
            <label>Command:</label>
            <toggle v-model="activeKeyboard.rules.commandEnabled"></toggle>
        </div>
        <div class="form-control">
            <label>Sleep LED:</label>
            <toggle v-model="activeKeyboard.rules.sleepLedEnabled"></toggle>
        </div>
        <div class="form-control">
            <label>NKRO:</label>
            <toggle v-model="activeKeyboard.rules.nkroEnabled"></toggle>
        </div>
        <div class="form-control">
            <label>Backlight:</label>
            <toggle v-model="activeKeyboard.rules.backlightEnabled"></toggle>
        </div>
        <div class="form-control">
          <label>RGB Max Value:</label>
          <input type="range" min="0" max="255" v-model="activeKeyboard.config.rgblightLimitValue" />
    </div>
  </div>`,
  data: function() {
      return {
          visible: false,
      }
  }
});
