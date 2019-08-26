var hues = [0, 70, 115, 320]

var randTop = randomInt(-50, -50)
    randLeft = randomInt(-50, -50)
    randHue = hues[randomInt(0, hues.length-1)]
    randScale = random(0.95,0.95)

document.getElementById('emptyWindow-VenoSci').classList.add("d-block");
document.getElementById('emptyWindow-VenoSci').style.filter = "hue-rotate(" + randHue + "deg)"
document.getElementById('emptyWindow-VenoSci').style.zIndex = 1001;
document.getElementById('emptyWindow-VenoSci').style.transform = "translate(" + randLeft + "%," + randTop + "%) scale(" + randScale + ")";
