var randTop = randomInt(-60, -35)
    randLeft = randomInt(-65, -30)
    randHue = randomInt(0, 360)
    randScale = random(0.65,0.75)

document.getElementById('emptyWindow-Singing').classList.add("d-block");
document.getElementById('emptyWindow-Singing').style.filter = "hue-rotate(" + randHue + "deg)"
document.getElementById('emptyWindow-Singing').style.transform = "translate(" + randLeft + "%," + randTop + "%) scale(" + randScale + ")";
