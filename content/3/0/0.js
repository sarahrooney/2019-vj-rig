video.style.display = "none";

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
      y: random(h,h+100),
      speed_x: 0,
      speed_y: randomInt(3, 6) * -1,
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

      if (rec.y < rec.height * -1) {
        resetRect(rec)
      }
    }
  }

  function resetRect(_rec) {
    _rec.y = random(h,h+100);
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
    ctx.background(_s*25,_s*5,0,0.05);
  }
}();

mixScript = function() {
  var clearItems = document.querySelectorAll('.v-block');
  for (var i = 0; i < clearItems.length; i++) {
    clearItems[i].classList.remove("v-block");
  }
}();
