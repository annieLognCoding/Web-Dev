function setup() {
    createCanvas(400, 400, WEBGL);
  }
  
  function draw() {
    background(0);
    
    // let c = color(0, 255, 0);
    // directionalLight(c, 0, 1, 0);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);

    beginShape();
    fill(255, 0, 0);
    vertex(-50, 25, -50);
    vertex(-50, 25, 50);
    vertex(50, 25, 50);
    vertex(50, 25, -50);
    endShape(CLOSE);

    beginShape();
    fill(255, 0, 0);
    vertex(-50, 25, 50);
    vertex(50, 25, 50);
    vertex(0, -50, 0);
    endShape(CLOSE);

    beginShape();
    fill(255, 0, 0);
    vertex(50, 25, -50);
    vertex(50, 25, 50);
    vertex(0, -50, 0);
    endShape(CLOSE);

    beginShape();
    fill(255, 0, 0);
    vertex(50, 25, -50);
    vertex(-50, 25, -50);
    vertex(0, -50, 0);
    endShape(CLOSE);

    beginShape();
    fill(255, 0, 0);
    vertex(-50, 25, -50);
    vertex(-50, 25, 50);
    vertex(0, -50, 0);
    endShape(CLOSE);
    
  }
  