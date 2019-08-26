// c

mixScript = function() {
  document.getElementById('imvuFrozenPopup2Full').classList.add("v-block");

  window.addEventListener('keydown', function(e) {
    var keyCode = e.keyCode;
    if (keyCode == 67) {
      if(e.shiftKey){
        document.getElementById('imvuFrozenPopup2Full').style.zIndex = 1000;
        document.getElementById('imvuFrozenPopup2Full').style.mixBlendMode = "hard-light";
      } else if (!e.shiftKey) {
        document.getElementById('imvuFrozenPopup2Full').style.zIndex = 0;
        document.getElementById('imvuFrozenPopup2Full').style.mixBlendMode = "initial";
      }
    }
  });
}();
