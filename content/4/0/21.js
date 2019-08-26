// v

mixScript = function() {
  document.getElementById('initiald4Full').classList.add("v-block");

  window.addEventListener('keydown', function(e) {
    var keyCode = e.keyCode;
    if (keyCode == 86) {
      if(e.shiftKey){
        document.getElementById('initiald4Full').style.zIndex = 1000;
        document.getElementById('initiald4Full').style.mixBlendMode = "difference";
      } else if (!e.shiftKey) {
        document.getElementById('initiald4Full').style.zIndex = 0;
        document.getElementById('initiald4Full').style.mixBlendMode = "initial";
      }
    }
  });
}();
