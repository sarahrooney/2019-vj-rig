function drawWindows(id, hue, scale) {
  var randTop = randomInt(-100, 50)
      randLeft = randomInt(-100, 50);

  var miniWindow = document.getElementById(id);

  function randomize(elem) {
    elem.style.filter = "hue-rotate(" + hue + "deg)";
    elem.style.transformOrigin = "top left";
    elem.style.transform = "translate(" + randLeft + "%," + randTop + "%) scale(" + 0.4 + ")";
    elem.style.display = "block";
    elem.classList.add("gen");
  }

  var clone = miniWindow.cloneNode(true);

  randomize(clone);

  document.querySelector(".imgCanvas").appendChild(clone);
}
