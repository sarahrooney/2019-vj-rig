mixScript = function() {
  var modes = ["difference","screen"]
  document.getElementById('Resort5').classList.add("v-block");
  document.getElementById('Resort5').style.filter = "hue-rotate(75deg) saturate(3)"
  document.getElementById('Resort5').style.mixBlendMode = modes[randomInt(0,modes.length-1)]
}();
