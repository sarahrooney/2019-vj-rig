// v

mixScript = function() {
  document.getElementById('imvuCityPopup0Full').classList.add("v-block");

  window.addEventListener('keydown', function(e) {
    var keyCode = e.keyCode;
    if (keyCode == 86) {
      if(e.shiftKey){
        document.getElementById('imvuCityPopup0Full').style.zIndex = 1000;
        document.getElementById('imvuCityPopup0Full').style.mixBlendMode = "hard-light";
      } else if (!e.shiftKey) {
        document.getElementById('imvuCityPopup0Full').style.zIndex = 0;
        document.getElementById('imvuCityPopup0Full').style.mixBlendMode = "initial";
      }
    }
  });
}();
