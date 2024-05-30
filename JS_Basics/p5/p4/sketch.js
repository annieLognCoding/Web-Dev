let playerX;
let playerY;
let circleX;
let circleY;
let circleSpeed;

function setup() {
  createCanvas(400, 400);
  playerX = width / 2;
  playerY = height - 30;
  circleX = random(width);
  circleY = 0;
  circleSpeed = 2;
}

function draw() {
  background(220);

  // Draw player
  rect(playerX, playerY, 50, 20);

  // Draw and move circle
  ellipse(circleX, circleY, 20, 20);
  circleY += circleSpeed;

  // Reset circle if it goes off screen
  if (circleY > height) {
    circleY = 0;
    circleX = random(width);
  }

  // Move player with arrow keys
  if (keyIsDown(LEFT_ARROW)) {
    playerX -= 5;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    playerX += 5;
  }

  // Check for collision
  if (circleY + 10 > playerY && circleX > playerX && circleX < playerX + 50) {
    noLoop(); // Stop the game
    textSize(32);
    fill(255, 0, 0);
    text('Game Over', width / 2 - 80, height / 2);
  }
}
