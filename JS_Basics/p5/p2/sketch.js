function setup() {
    createCanvas(400, 400);
    background(220);
  }
  
  function draw() {
    if (mouseIsPressed) {
      strokeWeight(4);
      stroke(0);
      line(mouseX, mouseY, pmouseX, pmouseY);
    }
  }