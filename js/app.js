var bitScript;
var mixScript;
var topScript;

// add drawing canvases
var ctx = createCanvas( 'canvas1' );
var ctx2 = createCanvas( 'canvas2' );
var ctx3 = createCanvas( 'canvas3' );

// video element
var video = document.querySelector("#videoElement");
if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
  .then(function (stream) {
    video.srcObject = stream;
  })
  .catch(function (err0r) {
    console.log("Something went wrong!");
  });
}

var art_location = "/content";

var fileref;
var current_file = 0;
var current_set = 0;
var current_bank = 0;

// FILE LOADER FUNCTIONS
function changeFile(file) {
  reset();
  current_file = file;
  var loc = current_set + '/' + current_bank + '/' + current_file;
  var filename = 'content/' + loc + '.js';
  loadJS( filename );
  document.location.hash = loc;
  //console.log("File: " + loc);
}

function changeSet(set) {
  current_set = set;
  current_bank = 0;
  console.log( "changeSet: " + current_set );
  // reset
  changeFile(0);

  if (set == 0) {
    document.body.classList.remove("white");
    document.body.classList.add("black");
  } else if (set == 1) {
    document.body.classList.remove("white");
    document.body.classList.add("black");
  } else if (set == 2) {
    document.body.classList.remove("white");
    document.body.classList.add("black");
  }
}

function changeBank(bank) {
  current_bank = bank;
  console.log( "changeBank: " + current_bank );
  changeFile(0);
}

function reset(){
  ctx.clearRect( 0, 0, w, h );
  ctx2.clearRect( 0, 0, w, h );
  ctx3.clearRect( 0, 0, w, h );
  ctx.lineCap = "butt";
}

// INJECT JS ONTO PAGE
function loadJS(filename) {
  if (fileref != undefined) {
    document.getElementsByTagName("head")[0].removeChild(fileref);
  }
  fileref = document.createElement('script');
  fileref.setAttribute("type", "text/javascript");
  fileref.setAttribute("src", filename);
  document.getElementsByTagName("head")[0].appendChild(fileref);
}
