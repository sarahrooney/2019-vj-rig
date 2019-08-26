var randTop = randomInt(-60, -35)
    randLeft = randomInt(-65, -30)
    randHue = randomInt(0, 360)
    randScale = random(0.6,0.8)

document.getElementById('emptyWindow-Kissy').classList.add("d-block");
document.getElementById('emptyWindow-Kissy').style.filter = "hue-rotate(" + randHue + "deg)"
document.getElementById('emptyWindow-Kissy').style.transform = "translate(" + randLeft + "%," + randTop + "%) scale(" + randScale + ")";
