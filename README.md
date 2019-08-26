# Summer 2019 VJ setup
this is the setup i've been using to VJ this summer!

this repo is image heavy. you've been warned.

you can see all of the images i'm using on `index.html` -- they need to be loaded and hidden (`display:none;`) on the page so that javascript knows their width and height when i trigger them to show up.

use `gulp server` to start. will run on https://localhost:8000.

use Chrome if you want mic input. you have to jump through hoops now to use the microphone input with javascript because of modern browser's security measures -- seems like simple https isn't enough. i followed how to create a certificate and key for local dev environment here:

https://www.freecodecamp.org/news/how-to-get-https-working-on-your-local-development-environment-in-5-minutes-7af615770eec/

If you know of an easier way to do this (or if i'm just overcomplicating using mic input), please let me know.


### resources & credit
all the tutorials i used by George Gally to help me get started:

https://www.freecodecamp.org/news/how-to-create-a-vj-engine-in-javascript-b63b7fb1c87b/

https://hackernoon.com/creative-coding-using-the-microphone-to-make-sound-reactive-art-part1-164fd3d972f3

https://hackernoon.com/creative-coding-grids-2e6bcaa07596

https://hackernoon.com/creating-a-pixelation-filter-for-creative-coding-fc6dc1d728b2

https://hackernoon.com/math-sin-and-math-cos-the-creative-coders-best-friend-597d69000644


### how to use
As detailed in that first tutorial ('How to Create a VJ Engine'), you use this setup by switching between different "sets" and then playing around with the content within those sets.

Access sets by holding shift + a number. I only have sets on numbers 0, 1, 2, 3, and 4 right now, but the possibilites are endless as you can fill out the rest of the sets with even more visual experiments.

Within those sets I have what I think of as "beds" of pulsing colors and imagery. You can flip between these by pressing any number without holding shift.

Everything else I tend to think of at top-level mixers -- trigger them via the keyboard. space bar erases top-level gifs and stickers. "a" will reset your image "bed".


### to-do
- figure out what to do with all these images to make this repo more transportable and avoid jank when vjing
- three.js??
- mixers/midi input would be great

Hope to add more to this soon!
