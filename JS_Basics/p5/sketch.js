let bigImage;
let loaded = false;

function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent('myContainer');
  bigImage = loadImage(
    "https://images.pexels.com/photos/358457/pexels-photo-358457.jpeg",
    () => loaded = true
  );
}

function draw() {
  if (!loaded) {
    background(0);
    // Your spinner here
  } else {
    image(bigImage, 0, 0, 400, 400);
}
}