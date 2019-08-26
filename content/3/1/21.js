mixScript = function() {
  var modes = ["difference","screen"]
  document.getElementById('Resort4').classList.add("v-block");
  document.getElementById('Resort4').style.filter = "hue-rotate(75deg) saturate(3)"
  document.getElementById('Resort4').style.mixBlendMode = modes[randomInt(0,modes.length-1)]
}();
