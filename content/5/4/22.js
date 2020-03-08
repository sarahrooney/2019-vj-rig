// w

bitScript = function() {
	var max_gifs = 10;
  var gifs = [];
  var idk = [-1, 1];

  for (var i = 0; i < max_gifs; i++) {0
    addGif();
  }

  function addGif() {
    var gif = {
      x: w * random(.15, .75),
      y: h * random(.15, .75),
      speed_x: randomInt(3.5, 7.5) * idk[randomInt(0, idk.length-1)],
      speed_y: randomInt(3.5, 7.5) * idk[randomInt(0, idk.length-1)],
      amplitude: random(w/10,h/4),
      angle_x: random(360),
      // size: 2,
      id: "automatic-updates"
    }
    gifs.push(gif);

    if (gifs.length > max_gifs) {
      gifs.splice(0,1);
    }
  }

  draw = function () {
  	ctx.background(0, 255, 0);
    // ctx3.clearRect(0, 0, w, h);

    drawBall();
    drawGif();
    moveGif();
  }

  function drawBall(){
  	var s = Sound.getHighsVol(h/1.2, h*1.15);
    ctx.fillEllipse(w/2, h/2, s, s);
    ctx.fillStyle = rgb(118, 2, 181);
  }

  function moveGif() {
    for (var i = 0; i < gifs.length; i++) {
      var g = gifs[i];
      g.x = g.x + g.speed_x;
      g.y = g.y + g.speed_y;

      if (g.x < 0 || g.x > w - 180) {
        g.speed_x *= -1;
      }
      if (g.y < 0 - 90 || g.y > h - 90) {
        g.speed_y *= -1;
      }
    }
  }

  function drawGif(){
    for (var i = 0; i < gifs.length; i++) {
      var g = gifs[i];
      var img = document.getElementById(g.id)
      ctx3.drawImage(img, g.x, g.y)
    }
  }
}();

document.getElementById('canvas3').style.mixBlendMode = 'exclusion';