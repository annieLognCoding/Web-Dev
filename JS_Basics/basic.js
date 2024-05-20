let x = 50;
let y = 50;

function setup() {
  createCanvas(100, 100);

  background(200);
  frameRate(100);
  describe('A black dot moves around randomly leaving a trail.');
}

function draw() {
  // Update x and y randomly.
  x += random(-5, 5);
  y += random(-5, 5);

  if(x > 100){
    x = 100;
  }
  if (x < 0){
    x = 0;
  }
  if(y > 100){
    y = 100;
  }
  if (y < 0){
    y = 0;
  }


 
  // Draw the point.
  point(x, y);
}