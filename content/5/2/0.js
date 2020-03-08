video.style.display = "block";

bitScript = function() {
	ctx.background(255, 246, 122);

	draw = function () {
    ctx.background(255, 246, 122);

    drawBall();
  }

  function drawBall(){
  	var s = Sound.getHighsVol(h/1.2, h*1.15);
    ctx.fillEllipse(w/2, h/2, s, s);
    ctx.fillStyle = rgb(118, 2, 181);
  }
}();

document.getElementById('canvas1').style.mixBlendMode = 'exclusion';