
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var gameOver,GameOverImage;
var score;
var PLAY = 1;
var END = 0;
var gameState = 1;

var survivalTime;
var background,backgroundImage;
var ground,groundImage;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  backgroundImage = loadImage("ground2.png");
  GameOverImage = loadImage("gameOver2.png");


}
function setup() {
  
  background = createSprite(0,0,20,50);
  background.addImage(backgroundImage);
  background.scale = 1.5;
 
  
  
  monkey = createSprite(80,222,10,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  
  
  ground = createSprite(400,222,900,10);
  ground.velocityX = -4;
 
  ground.x = ground.width/2;
  ground.velocityX = -4;
  ground.x = ground.width/2
  console.log(ground.x);
  ground.visible = false;
  
  
  foodGroup = createGroup();
   obstacleGroup = createGroup();
  var score = 1;
  var SurvivalTime = 3
}


function draw() {
 
  if(keyDown ("Space") && monkey.y>100 ) {
    monkey.velocityY =-8;
  }
  monkey.velocityY = monkey.velocityY + 0.2;
  if(ground.x<0) {
    ground.x = ground.width/2; 
  }
  if(monkey.isTouching(foodGroup)) {
    score = score+1;
    foodGroup.destroyEach();
    
  }
  if(monkey.isTouching(obstacleGroup)) {
    obstacleGroup.destroyEach();
    
  }
  
  

  monkey.collide(ground);
  
  spawnObstacles();
  spawnFood();
 drawSprites();
  
  stroke("white");
  textSize = (40);
  fill("white");
  text("Score: "+ score,600,50);
  
   stroke("black");
  textSize = (20);
  fill("black");
  SurvivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time: "+ SurvivalTime, 200,50)
  
  



function spawnFood() {
  if(frameCount%80 === 0) {
    banana = createSprite(600,150,40,10);
    banana.addImage(bananaImage);
    banana.scale = 0.1
    banana.y = random(89,100);
    banana.velocityX = -5;
    banana.lifetime = 150;
    foodGroup.add(banana)
    
  }
}
function spawnObstacles() {
  if(frameCount%80=== 0) {
  obstacle = createSprite(800,200,10,40);
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.1;
  obstacle.velocityX = -6;
    obstacle.lifetime = 150;
   obstacleGroup.add(obstacle);
    
  }
}






}