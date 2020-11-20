
var monkey , monkey_running,monkeyImage,ground,
banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivaltime=0
var score=0
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  monkeyImage=loadImage("sprite_5.png")
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
   


monkey=createSprite(80,315,20,20);
   monkey.addAnimation("moving", monkey_running);  
  monkey.scale=0.1
  
  

ground = createSprite(400,350,900,10)  
ground .velocityX=-4
ground.x=ground.width/2
console.log (ground.x)
  
  
  
  FoodGroup = new Group();
  obstaclesGroup = new Group();

  score = 0;
 
  
  
  
}


function draw() {

  background(0)

    if (ground.x < 0){
      ground.x = ground.width/2;
    }  
  
 if(keyDown("space") ) {
      monkey.velocityY = -12;
    }
  
  // set gravity 
  
monkey.velocityY= monkey.velocityY + 1
  
if(obstaclesGroup.isTouching(monkey)){
ground.velocityX=0
monkey.velocityY=0
obstaclesGroup.setVelocityXEach=(0)
FoodGroup.setVelocityXEach=(0)
obstaclesGroup.setLifetimeEach=(-1)
FoodGroup.seLifetimeEach=(-1)  
}
    
 // monkey collided with ground
  
monkey.collide(ground)
   spawnFood();
    spawnObstacles(); 
  
stroke=("white")
  textsize=(20)
fill("white")
text("score"+score,500,50)

stroke=("red")
  textsize=(400)
fill("pink")  
survivaltime=Math.ceil(frameCount/frameRate())  
text("survivaltime"+survivaltime,100,50)  
  
  
  drawSprites();
}

function spawnFood (){
if (frameCount% 50===0){
 banana=createSprite(600,240,50,20)
banana.y=random(120,200)
banana.velocityX=-12
banana.addImage(bananaImage)  
banana.scale=0.1  
banana.lifetime=300
FoodGroup.add(banana) 
 monkey.depth = banana.depth + 1;  
} 
}




function spawnObstacles (){
if(frameCount%200===0){
obstacle=createSprite(300,320,20,20)
obstacle.velocityX=-6 
obstacle.addImage(obstaceImage)  
obstacle.scale=0.2  
obstacle.lifetime=200
obstaclesGroup.add(obstacle)  
}  
}