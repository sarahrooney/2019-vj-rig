var randTop = randomInt(-60, -35)
    randLeft = randomInt(-65, -30)
    randHue = randomInt(0, 360)
    randScale = random(0.7,0.9)

document.getElementById('emptyWindow-Ribbon').classList.add("d-block");
document.getElementById('emptyWindow-Ribbon').style.filter = "hue-rotate(" + randHue + "deg)"
document.getElementById('emptyWindow-Ribbon').style.transform = "translate(" + randLeft + "%," + randTop + "%) scale(" + randScale + ")";
