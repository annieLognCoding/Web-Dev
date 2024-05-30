function setup(){
    //setup canvas here
    createCanvas(400, 400);
    background(220);
}

function draw(){
    //mouse interaction
    if(mouseIsPressed){
        strokeWeight(4);
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}

// function mousePressed(){
//     point(mouseX, mouseY);
    
// }