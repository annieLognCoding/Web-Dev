let img;
let imgLoaded = false;
function preload(){
    

}

function setup() {
    // let myCanvas = createCanvas(600, 400);
    // myCanvas.parent('myContainer');
    /*
        drawingContext.shadowOffsetX = 5;
        drawingContext.shadowOffsetY = -5;
        drawingContext.shadowBlur = 10;
        drawingContext.shadowColor = 'black';
        background(200);
        ellipse(width / 2, height / 2, 50, 50);
        
    */

    /*asynchronous handling
    createCanvas(400, 240);
    let img = loadImage('cat.jpg');
    image(img, 0, 0);
    */

    createCanvas(400, 240);
    setTimeout(() => {
        console.log("Delayed for 1 second.");
        loadImage('cat.png', (loadedImage) => {
            img = loadedImage;
            imgLoaded = true;
            console.log("Image loaded.");
        });
    }, 1000);
    
    
}

function draw() {
    background(220);
    if (imgLoaded) {
        image(img, 0, 0);
    }
}