// z

mixScript = function() {
  document.getElementById('initiald1Full').classList.add("v-block");

  window.addEventListener('keydown', function(e) {
    var keyCode = e.keyCode;
    if (keyCode == 90) {
      if(e.shiftKey){
        document.getElementById('initiald1Full').style.zIndex = 1000;
        document.getElementById('initiald1Full').style.mixBlendMode = "difference";
      } else if (!e.shiftKey) {
        document.getElementById('initiald1Full').style.zIndex = 0;
        document.getElementById('initiald1Full').style.mixBlendMode = "initial";
      }
    }
  });
}();
