
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var survivalTime,score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4
  ground.x = ground.width/2;
  console.log(ground.x);
  
  obstacleGroup = new Group();
  FoodGroup = new Group();
  
 survivalTime = 0;
  score = 0;
}


function draw() {
   background(255);
  
  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }
  if (keyDown("space")) {
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8;

  monkey.collide(ground);
  
  
if (World.frameCount % 80 === 0) {
    var banana = createSprite(250, random(120, 200), 20, 20);
    banana.addImage(bananaImage);
    banana.scale = 0.05;
    banana.velocityX = -5;
    banana.lifetime = 70;
    
    FoodGroup.add(banana);
  
}
  
  
  if (frameCount % 300 === 0) {
    var stone = createSprite(300,280, 20, 20);
    stone.addImage(obstacleImage);
    stone.scale = 0.2
    stone.velocityX = -5;
    stone.lifetime = 100;
    
    obstacleGroup.add(stone);
  }

  
  
  

stroke("white");
textSize(20);
fill("white");
text("score:"+score,500,50);

stroke("black");
textSize(20);
fill("black");
survivalTime = Math.ceil(frameCount/frameRate())
text("survival Time:"+survivalTime,100,50);



drawSprites();
}



  




















