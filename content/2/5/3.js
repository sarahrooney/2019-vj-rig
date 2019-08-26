// d

var randTop = randomInt(-50, -55)
    randLeft = randomInt(-55, -50)
    randHue = randomInt(0, 360)
    randScale = random(0.75,0.8)

document.getElementById('emptyWindow-Lovely').classList.add("d-block");
document.getElementById('emptyWindow-Lovely').style.filter = "hue-rotate(" + randHue + "deg)"
document.getElementById('emptyWindow-Lovely').style.transform = "translate(" + randLeft + "%," + randTop + "%) scale(" + randScale + ")";
document.getElementById('emptyWindow-Lovely').style.mixBlendMode = "color-dodge";
