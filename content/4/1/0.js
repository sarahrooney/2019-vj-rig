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
      y: random(-h/2,-h/4),
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

  var img = document.getElementById('heartswoop');
  var imgWidth = img.dataset.width;
  var imgHeight = img.dataset.height;

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
    ctx2.clearRect(0, 0, w, h);

    drawRect();
    moveRect();

    var r = [
      random(8, 9),
      random(5, 6),
      1,
      random(7, 8),
      1,
      1,
      1,
      random(2, 10),
      random(5, 15),
    ];

    multImg(Math.ceil(w/imgWidth*r[randomInt(0,8)]), imgWidth*r[randomInt(0,8)], imgHeight*r[randomInt(0,8)]);

    var s = Sound.getMidsVol(0,255);
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
    ctx.background(1*_s,0,1*_s,0.05);
  }
}();

var blendModes = [
  "difference",
  "color-dodge",
  "color-burn"
]
document.getElementById('canvas2').style.mixBlendMode = blendModes[randomInt(0, blendModes.length-1)];

mixScript = function() {
  var clearItems = document.querySelectorAll('.v-block');
  for (var i = 0; i < clearItems.length; i++) {
    clearItems[i].classList.remove("v-block");
  }
}();
