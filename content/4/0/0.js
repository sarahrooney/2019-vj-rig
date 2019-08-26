bitScript = function() {
  ctx.background(0);

  var rects = [];
  var max_rects = 3;

  for (var i = 0; i < max_rects; i++) {
    addRect();
  }

  function addRect(){
    var rect = {
      x: 0,
      y: random(-h,-h/4),
      speed_x: 0,
      speed_y: randomInt(2, 6),
      width: w,
      height: h/4,
      color: rgb(0, 255, 255)
    }
    rects.push(rect);

    if (rects.length > max_rects) {
      rects.splice(0,1);
    }
  }

  draw = function () {
    drawRect();
    moveRect();

    var s = Sound.getHighsVol(0, 255);
    if(s > 155){
      drawBackground(s);
    } else {
      drawBackground(0);
    }
  }

  function moveRect() {
    for (var i = 0; i < rects.length; i++) {
      var rec = rects[i];
      rec.x += rec.speed_x;
      rec.y += rec.speed_y;

      if (rec.y > rec.height + (h+h/4)) {
        resetRect(rec)
      }
    }
  }

  function resetRect(_rec) {
    _rec.y = random(-h/4,0);
    _rec.color = rgb(0, 255, 255);
  }

  function drawRect() {
    for (var i = 0; i < rects.length; i++) {
      var rec = rects[i];

      ctx.fillStyle = rec.color;
      ctx.fillRect(rec.x, rec.y, rec.width, rec.height);
    }
  }

  function drawBackground(_s) {
    ctx.background(_s*1,0,0,0.05);
  }
}();

mixScript = function() {
  var clearItems = document.querySelectorAll('.v-block');
  for (var i = 0; i < clearItems.length; i++) {
    clearItems[i].classList.remove("v-block");
  }
}();

// bitScript = function() {
//   ctx.background(255);

//   var max_gifs = 90;
//   var gifs = [];

//   for (var i = 0; i < max_gifs; i++) {0
//     addGif();
//   }

//   function addGif(){
//     var gif = {
//       x: random(-400, w),
//       y: random(-400,0),
//       speed_x: 1,
//       speed_y: 1, //random(0.5, 3)
//       amplitude: random(w/10,h/4),
//       angle_x: random(360),
//       // size: 2,
//       id: "pinkbutterfly"
//     }
//     gifs.push(gif);

//     if (gifs.length > max_gifs) {
//       gifs.splice(0,1);
//     }
//   }

//   draw = function () {
//     // ctx.clearRect(0, 0, w, h);

//     drawGif();
//     moveGif();
//   }

//   function moveGif() {
//     for (var i = 0; i < gifs.length; i++) {
//       var g = gifs[i];
//       g.x = g.x + g.speed_x;
//       g.y = g.y + g.speed_y;

//       if (g.y > h) {
//         resetGif(g)
//       }
//     }
//   }

//   function resetGif(_g){
//     _g.y = random(-100,0);
//   }

//   function drawGif(){
//     for (var i = 0; i < gifs.length; i++) {
//       var g = gifs[i];
//       var img = document.getElementById(g.id)
//       ctx.drawImage(img, g.x, g.y)
//     }
//   }
// }();

// mixScript = function() {
//   var clearItems = document.querySelectorAll('.v-block');
//   for (var i = 0; i < clearItems.length; i++) {
//     clearItems[i].classList.remove("v-block");
//   }
// }();
