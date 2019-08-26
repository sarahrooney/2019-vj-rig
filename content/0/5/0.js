bitScript = function() {
  ctx.background(0,0,100);
  var pinks = [
    rgb(255,216,253),
    rgb(251,190,239),
    rgb(254,200,225),
    rgb(255,234,239),
    rgb(255,232,250),
    rgb(255,245,255),
  ]

  var purpleBlues = [
    rgba(90, 0, 90, 0.1),
    rgba(0, 0, 90, 0.1),
    rgba(20, 0, 90, 0.1),
    rgba(10, 20, 105, 0.1),
    rgba(10, 20, 135, 0.1),
    rgba(0, 0, 200, 0.1),
    rgba(10, 0, 250, 0.1),
    rgba(100, 0, 80, 0.1),
    rgba(120, 10, 60, 0.1),
    rgba(180, 10, 80, 0.1)
  ]

  var max_balls = 1000;
  var balls = [];

  var max_bigBalls = 40
  var bigBalls = []

  for (var i = 0; i < max_balls; i++) {0
    addBall();
  }

  for (var i = 0; i < max_bigBalls; i++) {
    addBigBall();
  }

  function addBall(){
    var ball = {
      x: random(w),
      y: random(-200,h),
      speed_x: 0,
      speed_y: random(0.5, 3),
      size: 2,
      color: pinks[randomInt(0, pinks.length)]
    }
    balls.push(ball);

    if (balls.length > max_balls) {
      balls.splice(0,1);
    }
  }

  function addBigBall(){
    var bigBall = {
      x: random(-100, w+100),
      y: random(-200,h),
      speed_x: 0,
      speed_y: random(0.54, 2),
      size: w/2,
      color: purpleBlues[randomInt(0, purpleBlues.length)]
    }
    bigBalls.push(bigBall);

    if (bigBalls.length > max_bigBalls) {
      bigBalls.splice(0,1);
    }0
  }

  var img = document.getElementById('butterflyrose');
  var imgWidth = img.dataset.width;
  var imgHeight = img.dataset.height;

  function multImg(_int){
    var counter = randomInt(0,4);
    var counterDoubled = counter*counter;

    if(_int == 1) {
      ctx2.drawImage(img, w/2 - imgWidth/2, h/2 - imgHeight/2, imgWidth, imgHeight)
    } else {
      for (var i = 0; i < counter; i++) {
        for (var j = 0; j < counter; j++) {
          ctx2.drawImage(img, j * w/counter + w/counterDoubled, i * h/counter - h/counterDoubled + imgHeight/2, imgWidth, imgHeight)
        }
      }
    }
  }

  draw = function () {
    ctx.background(0,0,100, 0.1);

    moveBall();
    drawBall();

    var sineWav = w/2 + Math.cos(random(360))*w/2
    if (sineWav <= 200){
      multImg();
    } else {
      ctx2.clearRect( 0, 0, w, h )
    }
  }

  function moveBall(){
    for (var i = 0; i < balls.length; i++) {
      var b = balls[i];
      b.x = b.x + b.speed_x;
      b.y = b.y + b.speed_y;

      if (b.y > h) {
        resetBall(b)
      }
    }

    for (var i = 0; i < bigBalls.length; i++) {
      var bb = bigBalls[i];
      bb.x = bb.x + bb.speed_x;
      bb.y = bb.y + bb.speed_y;

      if (bb.y > h+bb.size/2) {
        resetBigBall(bb)
      }
    }
  }

  function resetBall(_b){
    _b.y = random(-100,0);
    _b.color = pinks[randomInt(0, pinks.length)];
  }

  function resetBigBall(_b){
    _b.y = random(_b.size/2*-1,0);
    _b.color = purpleBlues[randomInt(0, purpleBlues.length)]
  }

  function drawBall(){
    for (var i = 0; i < balls.length; i++) {
      var b = balls[i];
      ctx.fillStyle = b.color;

      var s = Sound.mapSound(i, balls.length, b.size, 200);
      if (i%3 === 0 && i%5 === 0) {
        ctx.fillEllipse(b.x, b.y, s*-0.1, s*-0.1);
      } else {
        ctx.fillEllipse(b.x, b.y, b.size, b.size);
      }
    }

    for (var i = 0; i < bigBalls.length; i++) {
      var bb = bigBalls[i];
      ctx.fillStyle = bb.color;
      ctx.fillEllipse(bb.x, bb.y, bb.size, bb.size);
    }
  }
}();

var blendModes = [
  "color-dodge",
  "multiply"
]
document.getElementById('canvas2').style.mixBlendMode = blendModes[randomInt(0, blendModes.length-1)];

mixScript = function() {
  var clearItems = document.querySelectorAll('.v-block');
  for (var i = 0; i < clearItems.length; i++) {
    clearItems[i].classList.remove("v-block");
  }
}();
