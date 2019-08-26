// x

mixScript = function() {
  document.getElementById('imvuCloseup1Full').classList.add("v-block");

  window.addEventListener('keydown', function(e) {
    var keyCode = e.keyCode;
    if (keyCode == 88) {
      if(e.shiftKey){
        document.getElementById('imvuCloseup1Full').style.zIndex = 1000;
        document.getElementById('imvuCloseup1Full').style.mixBlendMode = "difference";
      } else if (!e.shiftKey) {
        document.getElementById('imvuCloseup1Full').style.zIndex = 0;
        document.getElementById('imvuCloseup1Full').style.mixBlendMode = "initial";
      }
    }
  });
}();
