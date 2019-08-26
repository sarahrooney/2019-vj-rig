// v

mixScript = function() {
  document.getElementById('imvuCloseup3Full').classList.add("v-block");

  window.addEventListener('keydown', function(e) {
    var keyCode = e.keyCode;
    if (keyCode == 86) {
      if(e.shiftKey){
        document.getElementById('imvuCloseup3Full').style.zIndex = 1000;
        document.getElementById('imvuCloseup3Full').style.mixBlendMode = "difference";
      } else if (!e.shiftKey) {
        document.getElementById('imvuCloseup3Full').style.zIndex = 0;
        document.getElementById('imvuCloseup3Full').style.mixBlendMode = "initial";
      }
    }
  });
}();
