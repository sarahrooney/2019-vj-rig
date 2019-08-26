// n

mixScript = function() {
  document.getElementById('imvuAmourPopup0Full').classList.add("v-block");

  window.addEventListener('keydown', function(e) {
    var keyCode = e.keyCode;
    if (keyCode == 78) {
      if(e.shiftKey){
        document.getElementById('imvuAmourPopup0Full').style.zIndex = 1000;
        document.getElementById('imvuAmourPopup0Full').style.mixBlendMode = "color-dodge";
      } else if (!e.shiftKey) {
        document.getElementById('imvuAmourPopup0Full').style.zIndex = 0;
        document.getElementById('imvuAmourPopup0Full').style.mixBlendMode = "initial";
      }
    }
  });
}();
