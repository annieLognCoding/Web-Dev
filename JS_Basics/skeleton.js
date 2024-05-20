let currentColor = 'black';
let brushSize = 4;

function setup() {
  createCanvas(800, 600);
  background(255);
  // Create color buttons
  createButton('Red').mousePressed(() => currentColor = 'red');
  createButton('Green').mousePressed(() => currentColor = 'green');
  createButton('Blue').mousePressed(() => currentColor = 'blue');
  // Create brush size slider
  createSlider(1, 20, 4).input((e) => brushSize = e.target.value);
  // Create eraser button
  createButton('Eraser').mousePressed(() => currentColor = 255);
  // Create save button
  createButton('Save').mousePressed(() => saveCanvas('myDrawing', 'png'));
}

function draw() {
  stroke(currentColor);
  strokeWeight(brushSize);
  if (mouseIsPressed) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}