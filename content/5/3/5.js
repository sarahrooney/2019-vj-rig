// f

bitScript = function() {
  ctx.background(118, 2, 181);

  var max_imgs = 2;
  var imgs = [];

  for (var i = 0; i < max_imgs; i++) {
    addImg();
  }

  function addImg() {
    var img = {
      x: 0,
      y: 0,
      speed_x: 5,
      speed_y: 5,
      // size: 2,
      id: "chuu",
      width: document.getElementById("chuu").dataset.width,
      height: document.getElementById("chuu").dataset.height
    }
    imgs.push(img);

    if (imgs.length > max_imgs) {
      imgs.splice(0,1);
    }
  }

  draw = function () {
    ctx.background(118, 2, 181);
    

    drawBall();
    drawImg(imgs[0]);
    moveImg(imgs[0], "x");
    drawImg(imgs[1]);
    moveImg(imgs[1], "y");
  }

  function drawBall(){
    var s = Sound.getHighsVol(h/1.2, h*1.15);
    ctx.fillEllipse(w/2, h/2, s, s);
    ctx.fillStyle = rgb(255, 246, 122);
  }

  function drawImg(selectImg){
    var img = selectImg;
    var fetchImg = document.getElementById(img.id)
    var imgWidth = img.width;
    var imgHeight = img.height;

    var newWidth = ((w / imgWidth) * imgWidth) * 1;
    var newHeight = ((h / imgHeight) * imgHeight) * 1;

    ctx2.drawImage(fetchImg, img.x, img.y, newWidth, newHeight)
  }

  function moveImg(selectImg, direction) {
    var img = selectImg;
    if (direction == "x") {
      img.x = img.x + img.speed_x;
      if (img.x < -w || img.x > w) {
        img.speed_x *= -1;
        if (img.y > h) {
          img.y -= 5;
        } else {
          img.y += 5;
        }

        ctx2.clearRect(0, 0, w, h);
      }
    }
    if (direction == "y") {
      img.y = img.y + img.speed_y;
      if (img.y < -h || img.y > h) {
        img.speed_y *= -1;
        if (img.x > w) {
          img.x -= 5;
        } else {
          img.x += 5;
        }
      }
    }
  }

  ctx2.globalCompositeOperation = 'soft-light';
}();
// multiply and color-burn
// overlay and difference
// hard-light and difference

document.getElementById('canvas2').style.mixBlendMode = 'lighten';