// q

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
      speed_x: randomInt(4, 7) * idk[randomInt(0, idk.length-1)],
      speed_y: randomInt(4, 7) * idk[randomInt(0, idk.length-1)],
      amplitude: random(w/10,h/4),
      angle_x: random(360),
      // size: 2,
      id: "error"
    }
    gifs.push(gif);

    if (gifs.length > max_gifs) {
      gifs.splice(0,1);
    }
  }

  draw = function () {
  	ctx.background(255, 255, 0);
    // ctx3.clearRect(0, 0, w, h);

    drawBall();
    drawGif();
    moveGif();
  }

  function drawBall(){
  	var s = Sound.getHighsVol(h/1.2, h*1.15);
    ctx.fillEllipse(w/2, h/2, s, s);
    ctx.fillStyle = rgb(0, 255, 100);
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

  // function resetGif(_g){
  // 	_g.x = ;
  //   _g.y = ; //random(-100,0)
  // }

  function drawGif(){
    for (var i = 0; i < gifs.length; i++) {
      var g = gifs[i];
      var img = document.getElementById(g.id)
      ctx3.drawImage(img, g.x, g.y)
    }
  }
}();

// mixScript = function() {
//   var clearItems = document.querySelectorAll('.v-block');
//   for (var i = 0; i < clearItems.length; i++) {
//     clearItems[i].classList.remove("v-block");
//   }

	// var img = document.getElementById('floatingflowers');
 //  var imgWidth = img.dataset.width;
 //  var imgHeight = img.dataset.height;

 //  var time = 0.8
 //  var count = 1

 //  function multImg(_int, width, height){
 //    var counter = _int;
 //    var counterDoubled = counter*counter;

 //    if(_int == 1) {
 //      ctx3.drawImage(img, w/2 - width/2, h/2 - height/2, width, height)
 //    } else {
 //      for (var i = 0; i < counter; i++) {
 //        for (var j = 0; j < counter; j++) {
 //          ctx3.drawImage(img, j * width - width/4, i * height - height/4, width, height)
 //        }
 //      }
 //    }
 //  }

 //  draw = function () {
 //    ctx3.clearRect(0, 0, w, h);

 //  	var r = [
 //      random(0, 1),
 //      random(0, 3),
 //      1,
 //      random(0, 3),
 //      1,
 //      1,
 //      1
 //    ];

 //    multImg(Math.ceil(w/imgWidth*r[randomInt(0,6)]), imgWidth*r[randomInt(0,6)], imgHeight*r[randomInt(0,6)]);
  // }
// }();

document.getElementById('canvas3').style.mixBlendMode = 'exclusion';