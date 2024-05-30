function setup() {
    createCanvas(400, 400);
    background(220);
  }
  
  function draw() {
    // Nothing needed in draw loop for this project
  }
  
  function mousePressed() {
    let shapeType = int(random(3));
    let size = random(20, 50);
    let col = color(random(255), random(255), random(255));
  
    fill(col);
    noStroke();
  
    if (shapeType === 0) {
      ellipse(mouseX, mouseY, size, size);
    } else if (shapeType === 1) {
      rect(mouseX - size / 2, mouseY - size / 2, size, size);
    } else {
      triangle(
        mouseX, mouseY - size / 2,
        mouseX - size / 2, mouseY + size / 2,
        mouseX + size / 2, mouseY + size / 2
      );
    }
  }
  