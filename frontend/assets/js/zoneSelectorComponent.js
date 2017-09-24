Vue.component('zone-selector-component', {
  props: ['zones'],
  template: '<div class="zonebox"><h3 v-on:click="toggleVisibility">Zones <span v-if="visible">⇩</span><span v-if="!visible">⇧</span></h3><div v-if="visible" class="zone" v-for="zone in zones"><label class="context-menu--select--label">{{zone.label}}:</label><select class="context-menu--select--select" v-model="zone.value" @change="changeZone" @mouseover="zoneHover(zone.label)" @mouseleave="zoneHover(undefined)"><option v-for="choice in zone.choices" v-bind:value="choice.code">{{ choice.name }}</option></select><div class="subzone" v-for="subZone in zone.subZones"><label class="context-menu--select--label">{{subZone[zone.value].label}}:</label><select class="context-menu--select--select" v-model="subZone[zone.value].value" @change="changeZone" @mouseover="zoneHover(subZone[zone.value].label)" @mouseleave="zoneHover(undefined)"><option v-for="choice in subZone[zone.value].choices" v-bind:value="choice.code">{{ choice.name }}</option></select></div></div></div>',
  data: function() {
      return {
          visible: true
      }
  },
  methods: {
    changeZone: function() {
      this.$emit('zone', this.zones);
    },
    zoneHover: function(zoneName) {
      eventHub.$emit('hover-zone', zoneName);
    },
    toggleVisibility: function() {
      this.visible = !this.visible;
    }
  },
});