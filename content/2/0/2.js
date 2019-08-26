// c

mixScript = function() {
  document.getElementById('imvuCloseup2Full').classList.add("v-block");

  window.addEventListener('keydown', function(e) {
    var keyCode = e.keyCode;
    if (keyCode == 67) {
      if(e.shiftKey){
        document.getElementById('imvuCloseup2Full').style.zIndex = 1000;
        document.getElementById('imvuCloseup2Full').style.mixBlendMode = "difference";
      } else if (!e.shiftKey) {
        document.getElementById('imvuCloseup2Full').style.zIndex = 0;
        document.getElementById('imvuCloseup2Full').style.mixBlendMode = "initial";
      }
    }
  });
}();
