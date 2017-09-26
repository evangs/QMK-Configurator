Vue.component('zone-selector-component', {
  props: ['zones'],
  template: `
  <div class="zonebox" v-if="zones.length > 0">
    <h3 v-on:click="visible = !visible">Zones <span v-if="visible"><i class="fa fa-chevron-down" aria-hidden="true"></i></span><span v-if="!visible"><i class="fa fa-chevron-up" aria-hidden="true"></i></span></h3>
    <div v-if="visible" class="zone" v-for="zone in zones">
        <label>{{zone.label}}:</label>
        <select v-model="zone.value" @change="changeZone" @mouseover="zoneHover(zone.label)" @mouseleave="zoneHover(undefined)">
            <option v-for="choice in zone.choices" v-bind:value="choice.code">{{ choice.name }}</option>
        </select>
        <div class="subzone" v-for="subZone in zone.subZones">
            <label>{{subZone[zone.value].label}}:</label>
            <select v-model="subZone[zone.value].value" @change="changeZone" @mouseover="zoneHover(subZone[zone.value].label)" @mouseleave="zoneHover(undefined)">
                <option v-for="choice in subZone[zone.value].choices" v-bind:value="choice.code">{{ choice.name }}</option>
            </select>
        </div>
    </div>
  </div>`,
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
    }
  },
});