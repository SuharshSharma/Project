var steve;
var steveImg,bgImg,bgImg2;
var zombiE,zombie1,zombie2,zombie3;
var bult
function preload(){
  steveImg = loadAnimation("images/P1.png","images/P2.png","images/P3.png","images/P4.png","images/P5.png","images/P6.png");
  bgImg2= loadImage("images/bg1img.jpg");
  z1 = loadAnimation("images/Zombie1.png","images/Zombie2.png","images/Zombie3.png","images/Zombie4.png");
  bultImg = loadImage("images/bullet.png")
  fPosition = loadAnimation("images/P2.png")
  
}
function setup() {
  createCanvas(800,400);
  
  bg = createSprite(400,200)
  bg.addImage (bgImg2);
  bg.scale = 0.8;
  

  steve = createSprite(70,300,100,100);
  steve.addAnimation("player",steveImg);
  steve.scale = 0.7;
  zombieGroup = new Group();

 // createSprite(400, 200, 50, 50);
}



function draw() {
  background("yellow");  
  if(keyDown("UP_ARROW")){
    steve.y = steve.y-5;

  }
  if(keyDown("DOWN_ARROW")){
    steve.y = steve.y+5;

  }
  if(keyDown("RIGHT_ARROW")){
    steve.x = steve.x+5;

  }
  if(keyDown("LEFT_ARROW")){
    steve.x = steve.x-5;

  }
  if(zombieGroup.isTouching(steve)){

  }
  SpownZombies();
  FireBullets();
  drawSprites();
}
function SpownZombies(){
  if(frameCount%200===0){
    zombiE = createSprite(900,300,50,150);
    zombiE.addAnimation("zom1",z1)
    zombiE.velocityX = -5;
    zombieGroup.add(zombiE)
  }
}
function FireBullets(){
  if (keyWentDown("f")){
    bullet = createSprite(steve.x + 80,steve.y-30,20,10);
    bullet.velocityX = 20;
    bullet.addImage(bultImg);
    bullet.scale = 0.07
  }


}