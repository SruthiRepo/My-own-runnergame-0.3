
var gameState = 0;
var score = 0;

var prisonerSprite, bgSprite; guardSprite;

var bgIMG, prisonerAnimation, coinIMG, obstacleIMG, guardAnimation;
var coinsGroup; 
var obstaclesGroup, obs1, obs2, obs3;


function preload(){

  prisonerAnimation = loadAnimation("./assets/p1.png", "./assets/p2.png","./assets/p3.png","./assets/p4.png",
  "./assets/p5.png","./assets/p6.png");

  guardAnimation = loadAnimation("./assets/G1.png", "./assets/G2.png","./assets/G3.png","./assets/G4.png",
  "./assets/G5.png","./assets/G6.png");
  bgIMG = loadImage("./assets/bg3.jpg");
  
  //preload guard image, coin image, obstacles image etc
  coinIMG = loadImage("./assets/coin.png");

  obs1 = loadImage("./assets/obs1.png");
  obs2 = loadImage("./assets/obs2.png");
  obs3 = loadImage("./assets/obs3.png");

}

function setup() {
  createCanvas(700, 900);

  bgSprite = createSprite(width/2, height/2, width, height);
  bgSprite.addImage("background", bgIMG);
  bgSprite.scale = 1.3;
    bgSprite.x = 300;

  prisonerSprite = createSprite(width/2, height-150);
  prisonerSprite.addAnimation("running", prisonerAnimation);
  prisonerSprite.scale = 0.5;

  //create security guard sprite
  guardSprite = createSprite(width/2, height-50);
  
  //add animation to guard
  guardSprite.addAnimation("chasing", guardAnimation);
  guardSprite.scale = 0.5;

  //create coins group and obstacles group
  coinsGroup = new Group();
  obstaclesGroup = new Group();
}


function draw() {
  background("black");

  //step 1: display a scoreboard
  if (gameState===0) {
    fill("red");
    textSize(25)
    text("Press SPACE to start the game", width/2-100, height/2);
    if(keyDown("space")){
      gameState=1;
    }
  }
  else if(gameState===1){
    background(255,255,255);  
    drawSprites();
  }
  else{

  }

  bgSprite.velocityX=-2;

  if (bgSprite.x<0) {

    bgSprite.x = width/2;
    
  }

}

//create function spawn obstacles
function spawnObstacles() {
  if(frameCount % 120 === 0) {

    var obstacle = createSprite(camera.position.x+400,330,40,40);
    obstacle.setCollider("rectangle",0,0,200,200)
    obstacle.addImage(obs1, obs2, obs3);
    obstacle.scale = 0.15;      

    obstacle.lifetime = 400;
    obstaclesGroup.add(obstacle);
  
}
}
// create function spawnCoins 