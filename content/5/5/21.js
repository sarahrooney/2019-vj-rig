// v

var randTop = randomInt(-60, -35)
    randLeft = randomInt(-65, -30)
    randHue = randomInt(0, 360)
    randScale = random(0.75,0.8)

document.getElementById('emptyWindow-Car').classList.add("d-block");
document.getElementById('emptyWindow-Car').style.filter = "hue-rotate(" + randHue + "deg)"
document.getElementById('emptyWindow-Car').style.zIndex = 1001;
document.getElementById('emptyWindow-Car').style.transform = "translate(-50%, -50%) scale(" + randScale + ")";
