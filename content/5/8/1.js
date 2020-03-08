// b
var emptyWindows = ['emptyWindow-Ribbon', 'emptyWindow-CatandGirl', 'emptyWindow-Singing']

var randTop = randomInt(-60, -35)
    randLeft = randomInt(-65, -30)
    randHue = randomInt(0, 360)
    randScale = random(.9,.9)

var emptyWindowDraw = document.getElementById(emptyWindows[randomInt(0, emptyWindows.length-1)]);

emptyWindowDraw.classList.add("d-block");
emptyWindowDraw.style.filter = "hue-rotate(" + randHue + "deg)"
emptyWindowDraw.style.zIndex = 1001;
emptyWindowDraw.style.transform = "translate(-50%, -50%) scale(" + randScale + ")";
