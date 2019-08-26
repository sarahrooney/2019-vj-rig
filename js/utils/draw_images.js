function drawGif(pix, blend, randplace, mirrored, centered, yplace, xplace ){

   var pgcenter = window.innerWidth / 2;

   if(randplace==true) {
      var img = document.createElement('img');
      var ran = Math.floor(Math.random()*pix.length);
         img.src = pix[ran];

      img.style.top = (Math.random() * (window.innerHeight - (-1 * img.height/2))) + (-1 * img.height/2) + "px";
      img.style.left = (Math.random() * (window.innerWidth - (-1 * img.width/2))) + (-1 * img.height/2) + "px";

      document.querySelector(".imgCanvas").appendChild(img);
      img.className = "gen";

      if(blend==true) {
        img.style.mixBlendMode = "difference"
      }
   }

   else if(mirrored==true){

      var img1 = document.createElement('img');
      var img2 = document.createElement('img');
      var ran = Math.floor(Math.random()*pix.length);
         img1.src = pix[ran];
         img2.src = pix[ran];

      if(xplace=='tight'){
         var fromcenter = Math.random() * 50;
         img1.style.left = pgcenter - fromcenter - img1.width + 'px';
         img2.style.left = pgcenter + fromcenter + 'px';
         img2.style.webkitTransform = "scaleX(-1)";
      }

      else if(xplace=='loose'){
         var fromcenter = (Math.random()*150) + 150;
         img1.style.left = pgcenter - fromcenter - img1.width + 'px';
         img2.style.left = pgcenter + fromcenter + 'px';
         img2.style.webkitTransform = "scaleX(-1)";
      }

      else if(xplace=='wide'){
         var fromcenter = (Math.random()*200) + 350;
         img1.style.left = pgcenter - fromcenter - img1.width + 'px';
         img2.style.left = pgcenter + fromcenter + 'px';
         img2.style.webkitTransform = "scaleX(-1)";
      }

      if(yplace=='top'){
         var yspot = (Math.random()*window.innerHeight/3);
         img1.style.top = yspot + 'px';
         img2.style.top = yspot + 'px';
         img2.style.webkitTransform = "scaleX(-1)";
      }

      else if(yplace=='middle'){
         var yspot = (Math.random()*window.innerHeight/3) + window.innerHeight/3;
         img1.style.top = yspot + 'px';
         img2.style.top = yspot + 'px';
         img2.style.webkitTransform = "scaleX(-1)";

      }

      else if(yplace=='bottom'){
         var yspot = (Math.random()*window.innerHeight/3) + ((window.innerHeight/3)*2);
         img1.style.top = yspot - (img1.height/2) + 'px';
         img2.style.top = yspot - (img2.height/2) + 'px';
         img2.style.webkitTransform = "scaleX(-1)";

      }

      document.querySelector(".imgCanvas").appendChild(img1);
      document.querySelector(".imgCanvas").appendChild(img2);
      img1.className = "gen"
      img2.className = "gen"

      if(blend==true) {
        img1.style.mixBlendMode = "difference"
        img2.style.mixBlendMode = "difference"
      }

   }

   else if(centered==true){

      var img = document.createElement('img');
      var ran = Math.floor(Math.random()*pix.length);
         img.src = pix[ran];

      img.style.left = pgcenter-(img.width/2) + 'px';

      if(yplace=='top'){
         var yspot = (Math.random() * (window.innerHeight/4 - (-1 * img.height/2))) + (-1 * img.height/2);
         img.style.top = yspot + 'px';
      }

      else if(yplace=='middle'){
         var yspot = (window.innerHeight/2) - img.height/2;
         img.style.top = yspot + 'px';
      }

      else if(yplace=='bottom'){
        var yspot = (window.innerHeight/3) + (window.innerHeight/2.5);
        img.style.top = yspot + 'px';

      }

      else{
         img.style.top = yplace + 'px';
      }

      document.querySelector(".imgCanvas").appendChild(img);
      img.className = "gen"

      if(blend==true) {
        img.style.mixBlendMode = "difference"
      }
   }

   else{
      var img = document.createElement('img');
      var ran = Math.floor(Math.random()*pix.length);
         img.src = pix[ran];

      img.style.left = xplace + 'px';
      img.style.top = yplace + 'px';

      document.querySelector(".imgCanvas").appendChild(img);
      img.className = "gen"
   }

}
