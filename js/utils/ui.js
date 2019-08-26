var cursor = false;

function showMouse(){
  console.log("showMouse");
  cursor = !cursor;
  if(cursor) {
    window.document.body.style.cursor = 'auto';
  } else {
    window.document.body.style.cursor = 'none';
  }
}

function rotate() {
  var windows = document.querySelectorAll('.window');
  for (var i = 0; i < windows.length; i++) {
    windows[i].classList.add('rotate')
  }
}

function stopRotate() {
  var rotating = document.querySelectorAll('.rotate');
  for (var i = 0; i < rotating.length; i++) {
    rotating[i].classList.remove('rotate')
  }
}

function saturation() {
  var windows = document.querySelectorAll('.window');
  for (var i = 0; i < windows.length; i++) {
    windows[i].classList.add('saturation')
  }
}

function stopSaturation() {
  var saturationWindows = document.querySelectorAll('.saturation');
  for (var i = 0; i < saturationWindows.length; i++) {
    saturationWindows[i].classList.remove('saturation')
  }
}

function hue() {
  var emptyWindows = document.querySelectorAll('.window');
  for (var i = 0; i < emptyWindows.length; i++) {
    emptyWindows[i].classList.add('hue')
  }
  console.log('start hue!')
}

function stopHue() {
  var hueWindows = document.querySelectorAll('.hue');
  for (var i = 0; i < hueWindows.length; i++) {
    hueWindows[i].classList.remove('hue')
  }
  console.log('stop hue!');
}

function removeGenImgs() {
  if(document.querySelectorAll('.gen')){
    var genImgs = document.querySelectorAll('.gen');
    for (var i = 0; i < genImgs.length; i++) {
      genImgs[i].remove();
    }
  }

  if(document.querySelectorAll('.d-block')) {
    var emptyWindows = document.querySelectorAll('.d-block');
    for (var i = 0; i < emptyWindows.length; i++) {
      emptyWindows[i].classList.remove("d-block");
      emptyWindows[i].classList.add("d-none");
    }
  }

  if(document.querySelectorAll('.online-now-init')) {
    var gifRain = document.querySelectorAll('.online-now-init');
    for (var i = 0; i < gifRain.length; i++) {
      gifRain[i].style.display = "none";
      gifRain[i].style.zIndex = 0;
    }
  }
}
