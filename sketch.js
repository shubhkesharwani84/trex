var trex,trexAnimation

function preload(){
 trexAnimation = loadAnimation("trex1.png","trex3.png","trex4.png")
}

function setup() {
  createCanvas(400, 400);
  trex = createSprite(50,350,10,10) 
  trex.addAnimation("running",trexAnimation)
  trex.scale = 0.5
}

function draw() {
  background(220);
  drawSprites();

if(keyDown("space")){
   trex.velocityY = -12
}
  trex.velocityY = trex.velocityY+0.8



}