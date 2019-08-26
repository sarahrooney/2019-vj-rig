// m

mixScript = function() {
  document.getElementById('imvuCloseup6Full').classList.add("v-block");

  window.addEventListener('keydown', function(e) {
    var keyCode = e.keyCode;
    if (keyCode == 77) {
      if(e.shiftKey){
        document.getElementById('imvuCloseup6Full').style.zIndex = 1000;
        document.getElementById('imvuCloseup6Full').style.mixBlendMode = "darken";
      } else if (!e.shiftKey) {
        document.getElementById('imvuCloseup6Full').style.zIndex = 0;
        document.getElementById('imvuCloseup6Full').style.mixBlendMode = "initial";
      }
    }
  });
}();
