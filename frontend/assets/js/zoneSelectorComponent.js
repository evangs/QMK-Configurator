Vue.component('zone-selector-component', {
  props: ['zones'],
  template: '<div class="zonebox"><h3>Zones</h3><div v-for="zone in zones"><label class="context-menu--select--label">{{zone.label}}:</label><select class="context-menu--select--select" v-model="zone.value" @change="changeZone"><option v-for="choice in zone.choices" v-bind:value="choice.code">{{ choice.name }}</option></select><div v-for="subZone in zone.subZones"><label class="context-menu--select--label">{{subZone[zone.value].label}}:</label><select class="context-menu--select--select" v-model="subZone[zone.value].value" @change="changeZone"><option v-for="choice in subZone[zone.value].choices" v-bind:value="choice.code">{{ choice.name }}</option></select></div></div></div>',
  methods: {
    changeZone: function () {
      this.$emit('zone', this.zones);
    }
  },
});