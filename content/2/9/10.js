var randTop = randomInt(-60, -35)
    randLeft = randomInt(-65, -30)
    randHue = randomInt(0, 360)
    randScale = random(0.6,0.9)

document.getElementById('emptyWindow-Candybar').classList.add("d-block");
document.getElementById('emptyWindow-Candybar').style.filter = "hue-rotate(" + randHue + "deg)"
document.getElementById('emptyWindow-Candybar').style.transform = "translate(" + randLeft + "%," + randTop + "%) scale(" + randScale + ")";
