mixScript = function() {
  var modes = ["difference","screen"]
  document.getElementById('Resort2').classList.add("v-block");
  document.getElementById('Resort2').style.filter = "hue-rotate(75deg) saturate(3)"
  document.getElementById('Resort2').style.mixBlendMode = modes[randomInt(0,modes.length-1)]
}();
