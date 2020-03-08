// i

bitScript = function() {
	ctx.background(0, 255, 255);

	var img = document.getElementById('flowerfield');
  var imgWidth = img.dataset.width;
  var imgHeight = img.dataset.height;

  var time = 0.8
  var count = 1

  function multImg(_int, width, height){
    var counter = _int;
    var counterDoubled = counter*counter;

    if(_int == 1) {
      ctx2.drawImage(img, w/2 - width/2, h/2 - height/2, width, height)
    } else {
      for (var i = 0; i < counter; i++) {
        for (var j = 0; j < counter; j++) {
          ctx2.drawImage(img, j * width - width/4, i * height - height/4, width, height)
        }
      }
    }
  }

   draw = function () {
    ctx.background(0, 255, 255);

    drawBall();

    ctx2.clearRect(0, 0, w, h);

    var r = [
      random(0, 1),
      random(0, 3),
      1,
      random(0, 3),
      1,
      1,
      1
    ];

    multImg(Math.ceil(w/imgWidth*r[randomInt(0,6)]), imgWidth*r[randomInt(0,6)], imgHeight*r[randomInt(0,6)]);
  }

  function drawBall(){
  	var s = Sound.getHighsVol(h/1.2, h*1.15);
    ctx.fillEllipse(w/2, h/2, s, s);
    ctx.fillStyle = rgb(255, 145, 0);
  }
}();

document.getElementById('canvas3').style.mixBlendMode = 'exclusion';
document.getElementById('canvas2').style.mixBlendMode = 'saturation';