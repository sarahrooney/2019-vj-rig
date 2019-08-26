// n

mixScript = function() {
  document.getElementById('imvuCloseup5Full').classList.add("v-block");

  window.addEventListener('keydown', function(e) {
    var keyCode = e.keyCode;
    if (keyCode == 78) {
      if(e.shiftKey){
        document.getElementById('imvuCloseup5Full').style.zIndex = 1000;
        document.getElementById('imvuCloseup5Full').style.mixBlendMode = "overlay";
      } else if (!e.shiftKey) {
        document.getElementById('imvuCloseup5Full').style.zIndex = 0;
        document.getElementById('imvuCloseup5Full').style.mixBlendMode = "initial";
      }
    }
  });
}();
