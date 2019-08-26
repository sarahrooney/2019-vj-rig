// c

mixScript = function() {
  document.getElementById('initiald3Full').classList.add("v-block");

  window.addEventListener('keydown', function(e) {
    var keyCode = e.keyCode;
    if (keyCode == 67) {
      if(e.shiftKey){
        document.getElementById('initiald3Full').style.zIndex = 1000;
        document.getElementById('initiald3Full').style.mixBlendMode = "difference";
      } else if (!e.shiftKey) {
        document.getElementById('initiald3Full').style.zIndex = 0;
        document.getElementById('initiald3Full').style.mixBlendMode = "initial";
      }
    }
  });
}();
