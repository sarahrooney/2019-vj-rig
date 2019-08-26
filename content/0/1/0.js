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

  var max_bigBalls = 30
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
      speed_y: random(0.5, 2),
      size: w/2,
      color: purpleBlues[randomInt(0, purpleBlues.length)]
    }
    bigBalls.push(bigBall);

    if (bigBalls.length > max_bigBalls) {
      bigBalls.splice(0,1);
    }
  }

  var img = document.getElementById('floatingflowers');
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
    ctx.background(0,0,100, 0.1);

    moveBall();
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

    // time += 0.8
    // var sineWav = Math.cos(time * 0.85) + 2

    // if (sineWav > 2 && count < 8){
    //   multImg(count);
    // } else if (sineWav < 2 && count < 8){
    //   multImg(count += 1);
    //   ctx2.clearRect( 0, 0, w, h )
    // } else if (count >= 8) {
    //   count = 1
    // }

    // // this was a happy accident !
    // time += 0.2
    // var sineWav = Math.cos(time * 0.5) + 2
    // console.log(sineWav)
    // if (sineWav >= 1){
    //   multImg(2*sineWav);
    // } else {
    //   ctx2.clearRect( 0, 0, w, h )
    // }
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
  "color-dodge"
]
document.getElementById('canvas2').style.mixBlendMode = blendModes[randomInt(0, blendModes.length-1)];

mixScript = function() {
  var clearItems = document.querySelectorAll('.v-block');
  for (var i = 0; i < clearItems.length; i++) {
    clearItems[i].classList.remove("v-block");
  }
}();

// this was me trying to make a starfield

// bitScript = function() {
//   ctx.background(0);

//   var max_balls = 500;
//   var balls = [];

//   for (var i = 0; i < max_balls; i++) {
//     addBall();
//   }

//   function addBall(){
//     var ball = {
//       x: w/2,
//       y: h/2,
//       speed_x: random(-3, 3),
//       speed_y: random(-3, 3),
//       size: 2,
//       color: rgb(255, 255, 255)
//     }
//     balls.push(ball);

//     if (balls.length > max_balls) {
//       balls.splice(0,1);
//     }
//   }

//   draw = function () {
//     ctx.background(0, 0.1);

//     moveBall();
//     drawBall();
//   }

//   function moveBall(){
//     for (var i = 0; i < balls.length; i++) {
//       var b = balls[i];
//       b.x = b.x + b.speed_x;
//       b.y = b.y + b.speed_y;

//       if (b.y > h || b.x > w) {
//         resetBall(b)
//       }
//     }
//   }

//   function resetBall(_b){
//     _b.x = w/2
//     _b.y = h/2;
//     _b.colour = rgb(255,255,255);
//   }

//   function drawBall(){
//     for (var i = 0; i < balls.length; i++) {
//       var b = balls[i];
//       ctx.fillStyle = b.color;
//       ctx.fillEllipse(b.x, b.y, b.size, b.size);
//     }
//   }

// }();
