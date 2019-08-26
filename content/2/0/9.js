var randTop = randomInt(-60, -35)
    randLeft = randomInt(-65, -30)
    randHue = randomInt(0, 360)
    randScale = random(0.6,0.85)

document.getElementById('emptyWindow-CatandGirl').classList.add("d-block");
document.getElementById('emptyWindow-CatandGirl').style.filter = "hue-rotate(" + randHue + "deg)"
document.getElementById('emptyWindow-CatandGirl').style.transform = "translate(" + randLeft + "%," + randTop + "%) scale(" + randScale + ")";
