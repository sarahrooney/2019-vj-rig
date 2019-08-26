function onKeyDown(event) {
	// console.log(event.keyCode);
  var keyCode = event.keyCode;

  // CHANGE FILE // keys a-z
  if (keyCode >= 65 && keyCode <= 90) {
    changeFile(keyCode - 65);
  // CHANGE SET AND BANK // keys 0-9
  } else if (keyCode >= 48 && keyCode <= 57) {
		if(event.shiftKey) {
      changeSet(keyCode-48);
		} else {
			changeBank(keyCode-48);
		}
  } else if (keyCode == 192) {
    // ~ SHOW MOUSE
    showMouse();
  } else if (keyCode == 190) {
    // ~ ROTATE .
    rotate();
  } else if (keyCode == 188) {
    // ~ STOP ROTATE ,
    stopRotate();
  } else if (keyCode == 221) {
    // ~ SATURATION STROBE ]
    saturation();
  } else if (keyCode == 219) {
    // ~ STOP SATURATION STROBE [
    stopSaturation();
  } else if (keyCode == 220) {
    // ~ HUE CYCLE
    hue();
  } else if (keyCode == 222) {
    // ~ STOP HUE CYCLE
    stopHue();
  } else if (keyCode == 32) {
    // ~ REMOVE GENERATED GIFS SPACEBAR
    removeGenImgs();
  }
}

// window.addEventListener('keydown', function(e) {
//     if (typeof onKeyDown == 'function') onKeyDown(e);
// });
