video.style.display = "none";

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
    rgba(180, 10, 80, 0.1),
    rgba(200, 100, 240, 0.1)
  ]

  var max_balls = 1000;
  var balls = [];

  var max_bigBalls = 30
  var bigBalls = []

  for (var i = 0; i < max_balls; i++) {
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
      speed_y: random(0.5, 2),
      size: w/1.5,
      color: purpleBlues[randomInt(0, purpleBlues.length)]
    }
    bigBalls.push(bigBall);

    if (bigBalls.length > max_bigBalls) {
      bigBalls.splice(0,1);
    }
  }

  draw = function () {
    ctx.background(0,0,100, 0.1);

    moveBall();
    drawBall();
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

mixScript = function() {
  var clearItems = document.querySelectorAll('.v-block');
  for (var i = 0; i < clearItems.length; i++) {
    clearItems[i].classList.remove("v-block");
  }
}();
