
(function() {
  var vm = new Vue({
    el: "#vue-root",
    data: {
      encounter: {},
      combatants: {},
    },
    mounted: (function() {
      this.$on("onUpdateDataSource", (function(dataSource) {
        this.encounter = dataSource.Encounter;
        this.combatants = dataSource.Combatant;
        console.log(dataSource);
      }).bind(this));
    }),
    computed: {
      hasEncounterData: (function() {
        return Object.keys(this.encounter).length > 0;
      }),
    },
    filters: {
      floor: (function(value) {
        var floatValue = parseFloat(value);
        if(isNaN(floatValue)) {
          return value;
        } else {
          return Math.floor(floatValue);
        }
      }),
    },
  });

  window.vueRoot = vm;
})();
