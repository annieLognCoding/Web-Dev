let circleX = 200;
let circleY = 200;
let speedX = Math.floor(Math.random() * 3) + 1;
let speedY = Math.floor(Math.random() * 3) + 1;

function setup(){
    createCanvas(400, 400);
    background(220);
    circle(circleX, circleY, 50);
}

function draw(){
    background(220);
    if(circleX - 35 < 0 || circleX + 35 > 400){
        prevSpeedX = speedX
        while(circleX - speedX - 35 < 0 ||  circleX - speedX + 35 > 400){
            speedX = Math.floor(Math.random() * 3) + 1;
            if(prevSpeedX > 0){
                speedX = -1 * speedX 
            }
        }
        
        
    }
    if(circleY - 35 < 0  || circleY + 35 > 400){
        prevSpeedY = speedY
        while(circleY - speedY - 35 < 0 ||  circleY - speedY + 35 > 400){
            speedY = Math.floor(Math.random() * 3) + 1;
            if(prevSpeedY > 0){
                speedY = -1 * speedY 
            }
        }
    }
    circleX -= speedX;
    circleY -= speedY;
    circle(circleX, circleY, 50);

}