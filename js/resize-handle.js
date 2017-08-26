
(function() {
  var vm = new Vue({
    el: "#resize-handle",
    data: {
      visibility: true,
    },
    mounted: (function() {
      this.$on("show", (function() {
        this.visibility = true;
      }));
      this.$on("hide", (function() {
        this.visibility = false;
      }));
    }),
  });

  window.resizeHandle = vm;
})();
