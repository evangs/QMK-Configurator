Vue.component('layer', {
	props: ['keyInfo'],
  template: '<div class="layer"><div v-for="row in keyInfo"><span v-for="kf in row"><key-component v-on:updatemenu="updateContextMenus" v-bind:key-info="kf"></key-component></span></div></div>',
  data: function() {
  	return {
    }
  },
  methods: {
  	updateContextMenus: function(newVal) {
      var i = 0;
      var j = 0;
      for (i = 0; i < this.keyInfo.length; i++) {
        for (j = 0; j < this.keyInfo[i].length; j++) {
          if (this.keyInfo[i][j].id === newVal.id) {
            this.keyInfo[i][j].showMenu = !newVal.showMenu;
          } else {
          	this.keyInfo[i][j].showMenu = false;
          }
        }
      }
    }
  }
})