mixScript = function() {
  var modes = ["hard-light","difference","screen"]
  document.getElementById('Resort1').classList.add("v-block");
  document.getElementById('Resort1').style.filter = "hue-rotate(75deg) saturate(3)"
  document.getElementById('Resort1').style.mixBlendMode = modes[randomInt(0,modes.length-1)]
}();
