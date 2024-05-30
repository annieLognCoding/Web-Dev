let x = 200;
let y = 200;
let xSpeed = 2;
let ySpeed = 3;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // Move the ball
  x += xSpeed;
  y += ySpeed;

  // Bounce off edges
  if (x > width || x < 0) {
    xSpeed *= -1;
  }
  if (y > height || y < 0) {
    ySpeed *= -1;
  }

  // Draw the ball
  ellipse(x, y, 50, 50);
}