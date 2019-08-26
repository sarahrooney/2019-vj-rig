var randTop = randomInt(-60, -35)
    randLeft = randomInt(-65, -30)
    randHue = randomInt(0, 360)
    randScale = random(0.6,0.8)

document.getElementById('emptyWindow-Butterfly').classList.add("d-block");
document.getElementById('emptyWindow-Butterfly').style.filter = "hue-rotate(" + randHue + "deg)"
document.getElementById('emptyWindow-Butterfly').style.zIndex = 1001;
document.getElementById('emptyWindow-Butterfly').style.transform = "translate(" + randLeft + "%," + randTop + "%) scale(" + randScale + ")";
