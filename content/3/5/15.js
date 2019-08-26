// p

var gifP = document.querySelectorAll('.online-now-init')

for (var i = 0; i < gifP.length; i++) {
  gifP[i].src = "./assets/img/emoticon.gif";
  gifP[i].style.display = "block";
  gifP[i].style.zIndex = 1003;
}
