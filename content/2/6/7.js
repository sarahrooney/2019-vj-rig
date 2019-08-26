var randTop = randomInt(-60, -35)
    randLeft = randomInt(-65, -30)
    randHue = randomInt(0, 360)
    randScale = random(0.6,0.85)

document.getElementById('emptyWindow-Unicorn').classList.add("d-block");
document.getElementById('emptyWindow-Unicorn').style.filter = "hue-rotate(" + randHue + "deg)"
document.getElementById('emptyWindow-Unicorn').style.transform = "translate(" + randLeft + "%," + randTop + "%) scale(" + randScale + ")";
