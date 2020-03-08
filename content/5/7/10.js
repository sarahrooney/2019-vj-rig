// k

bitScript = function() {
  ctx.background(255, 255, 0);

  var max_imgs = 2;
  var imgs = [];

  for (var i = 0; i < max_imgs; i++) {
    addImg();
  }

  function addImg() {
    var img = {
      x: 0,
      y: 0,
      speed_x: 8,
      speed_y: 8,
      // size: 2,
      id: "sadgirl",
      width: document.getElementById("sadgirl").dataset.width,
      height: document.getElementById("sadgirl").dataset.height
    }
    imgs.push(img);

    if (imgs.length > max_imgs) {
      imgs.splice(0,1);
    }
  }

  draw = function () {
    ctx.background(255, 255, 0);
    
    drawBall();
    drawImg(imgs[0]);
    moveImg(imgs[0], "x");
    drawImg(imgs[1]);
    moveImg(imgs[1], "y");
  }

  function drawBall(){
    var s = Sound.getHighsVol(h/1.2, h*1.15);
    ctx.fillEllipse(w/2, h/2, s, s);
    ctx.fillStyle = rgb(0, 255, 100);
  }

  function drawImg(selectImg){
    var img = selectImg;
    var fetchImg = document.getElementById(img.id)
    var imgWidth = img.width;
    var imgHeight = img.height;

    var newWidth = ((w / imgWidth) * imgWidth) * 2;
    var newHeight = ((h / imgHeight) * imgHeight) * 2;

    ctx2.drawImage(fetchImg, img.x, img.y, newWidth, newHeight)
  }

  function moveImg(selectImg, direction) {
    var img = selectImg;
    if (direction == "x") {
      img.x = img.x + img.speed_x;
      if (img.x < -img.width * 2 || img.x > w + img.width/2) {
        img.speed_x *= -1;
        if (img.y > h + img.height * 2) {
          img.y -= randomInt(-img.height/2, h/2);
        } else {
          img.y += randomInt(-img.height/2, h/2);
        }

        ctx2.clearRect(0, 0, w, h);
      }
    }
    if (direction == "y") {
      img.y = img.y + img.speed_y;
      if (img.y < -img.height * 2 || img.y > h + img.height/2) {
        img.speed_y *= -1;
        if (img.x > w + img.width * 2) {
          img.x -= randomInt(-img.width/2, w/2);
        } else {
          img.x += randomInt(-img.width/2, w/2);
        }
      }
    }
  }

  ctx2.globalCompositeOperation = 'hard-light';
}();
// multiply and color-burn
// overlay and difference
// hard-light and difference

document.getElementById('canvas2').style.mixBlendMode = 'difference';