// c
mixScript = function() {
  document.getElementById('Resort3Full').classList.add("v-block");
  document.getElementById('Resort3Full').style.zIndex = "1000";
  document.getElementById('Resort3Full').style.mixBlendMode = "soft-light";
}();


// old stuff

// this was stuff from from Gally's tutorials
// bitScript = function() {
//   ctx.background(255, 190, 250);

//   var number_of_balls = 100;
//   var balls = [];

//   for (var i = 0; number_of_balls >= i; i++) {
//     var ball = {
//       x:  w/2,
//       y: h/2,
//       speed_x: random(-5, 5),
//       speed_y: random(-5, 5),
//       size: 20,
//       color: rgb(randomInt(255),randomInt(50),randomInt(255))
//     }

//     balls.push(ball);
//   }

//   function addBall(){
//     var ball = {
//       x: mouseX,
//       y: mouseY,
//       speed_x: random(-5, 5),
//       speed_y: random(-5, 5),
//       size: 20,
//       color: rgb(randomInt(255),randomInt(50),randomInt(255))
//     }
//     balls.push(ball);

//     if (balls.length > 200) {
//       balls.splice(0,1);
//     }
//   }

//   draw = function () {
//     ctx.background(255, 0.2);

//     if (mouseMoved) {
//       addBall();
//     }

//     moveBall();
//     drawBall();

//     console.log(balls.length)
//   }

//   function moveBall(){
//     for (var i = 0; i < balls.length; i++) {
//       var b = balls[i];
//       b.x = b.x + b.speed_x;
//       b.y = b.y + b.speed_y;

//       if (b.x < b.size/2 || b.x > w - b.size/2) {
//         b.speed_x *= -1;
//       }

//       if (b.y < b.size/2 || b.y > h - b.size/2) {
//         b.speed_y *= -1;
//       }
//     }
//   }

//   function drawBall(){
//     for (var i = 0; i < balls.length; i++) {
//       var b = balls[i];
//       ctx.fillStyle = b.color;
//       ctx.fillEllipse(b.x, b.y, b.size, b.size);
//     }
//   }
// }();

// this was a heart
// ctx.beginPath();
// ctx.moveTo(600, 105);
// ctx.bezierCurveTo(590, 80, 555, 80, 555, 100);
// ctx.bezierCurveTo(557, 115, 570, 130, 580, 140);
// ctx.bezierCurveTo(578, 140, 590, 150, 600, 160);
// ctx.bezierCurveTo(620, 140, 630, 130, 630, 130);
// ctx.bezierCurveTo(640, 115, 650, 100, 640, 90);
// ctx.bezierCurveTo(630, 80, 610, 85, 600, 105);
// ctx.fillStyle = rgb(255, 255, 255)
// ctx.fill();

// sound stuff
// var s = Mic.getRMS();
// ctx.fillStyle = rgb(s*1.5);
// ctx.HfillEllipse(w/2, h/2, s*5, s*5);
