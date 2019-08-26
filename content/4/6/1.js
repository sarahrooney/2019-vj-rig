// b

mixScript = function() {
  document.getElementById('imvuCityPopup1Full').classList.add("v-block");

  window.addEventListener('keydown', function(e) {
    var keyCode = e.keyCode;
    if (keyCode == 66) {
      if(e.shiftKey){
        document.getElementById('imvuCityPopup1Full').style.zIndex = 1000;
        document.getElementById('imvuCityPopup1Full').style.mixBlendMode = "darken";
      } else if (!e.shiftKey) {
        document.getElementById('imvuCityPopup1Full').style.zIndex = 0;
        document.getElementById('imvuCityPopup1Full').style.mixBlendMode = "initial";
      }
    }
  });
}();
