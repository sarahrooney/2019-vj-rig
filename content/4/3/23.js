// x

mixScript = function() {
  document.getElementById('initiald2Full').classList.add("v-block");

  window.addEventListener('keydown', function(e) {
    var keyCode = e.keyCode;
    if (keyCode == 88) {
      if(e.shiftKey){
        document.getElementById('initiald2Full').style.zIndex = 1000;
        document.getElementById('initiald2Full').style.mixBlendMode = "difference";
      } else if (!e.shiftKey) {
        document.getElementById('initiald2Full').style.zIndex = 0;
        document.getElementById('initiald2Full').style.mixBlendMode = "initial";
      }
    }
  });
}();
