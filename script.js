
(function() {
  var onChangeOverlayLockedState = (function(isLocked) {
    if(!!!isLocked) {
      window.resizeHandle.$emit("show");
    } else {
      window.resizeHandle.$emit("hide");
    }
  });

  document.addEventListener("onOverlayStateUpdate", function (e) {
    if(typeof e.detail !== "undefined" && typeof e.detail.isLocked !== "undefined") {
      onChangeOverlayLockedState(e.detail.isLocked);
    }
  });

  document.addEventListener("onOverlayDataUpdate", function (e) {
    if(typeof e.detail !== "undefined") {
      window.vueRoot.$emit("onUpdateDataSource", e.detail);
    }
  });
})();
