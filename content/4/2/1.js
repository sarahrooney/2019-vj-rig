// b

mixScript = function() {
  document.getElementById('imvuCloseup4Full').classList.add("v-block");

  window.addEventListener('keydown', function(e) {
    var keyCode = e.keyCode;
    if (keyCode == 66) {
      if(e.shiftKey){
        document.getElementById('imvuCloseup4Full').style.zIndex = 1000;
        document.getElementById('imvuCloseup4Full').style.mixBlendMode = "difference";
      } else if (!e.shiftKey) {
        document.getElementById('imvuCloseup4Full').style.zIndex = 0;
        document.getElementById('imvuCloseup4Full').style.mixBlendMode = "initial";
      }
    }
  });
}();
