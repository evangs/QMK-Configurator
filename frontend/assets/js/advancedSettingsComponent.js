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
            <label>Debouncing Delay:</label>
            <input type="number" v-model="activeKeyboard.config.debouncingDelay" />
        </div>
        <div class="form-control">
            <label>Tapping Term:</label>
            <input type="number" v-model="activeKeyboard.config.tappingTerm" />
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
    </div>
  </div>`,
  data: function() {
      return {
          visible: false,
      }
  }
});