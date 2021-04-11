var computerScore = 0;
var playerScore = 0;
var gameState = "serve";
var computerMallet, playerMallet, striker;
var boundary1, boundary2, boundary3, boundary6, boundary4, boundary5, boundary6;
var goal1, goal2;
var edges;

function setup(){
createCanvas(1000,400);

edges = createEdgeSprites(edges);

computerMallet = createSprite(500,50,80,20);
computerMallet.shapeColor = "black";

playerMallet = createSprite(500,350,80,20);
playerMallet.shapeColor = "black";

striker = createSprite(500,200,20,20);      
striker.shapeColor = "white";

boundary1 = createSprite(200,10,10000,10);
boundary1.shapeColor = "white";

boundary2 = createSprite(200,390,10000,10);
boundary2.shapeColor = "white";

boundary3 = createSprite(980,200,10,800);
boundary3.shapeColor = "white";

boundary4 = createSprite(20,190,10,800);
boundary4.shapeColor = "white";

boundary5 = createSprite(200,140,10000,10);
boundary5.shapeColor = "white";

boundary6 = createSprite(200,260,10000,10);
boundary6.shapeColor = "white";

goal1 = createSprite(500,28,300,20);
goal1.shapeColor = "yellow";

goal2 = createSprite(500,372,300,20);
goal2.shapeColor = "yellow";

}

function draw() {
  background("green");
  
  for (var i = 0; i < 1030; i=i+20) {
    line(i,200,i+10,200);
  }
  fill("red");
  textSize(20);
  text(playerScore,40,220);
  text(computerScore,40,190);
  computerMallet.x = striker.x;
   
  if (gameState === "serve") {
    textSize(20);
    text("Press Space to Start",400,180);
  }
  
  striker.bounceOff(boundary1);
  striker.bounceOff(boundary2);
  striker.bounceOff(boundary3);
  striker.bounceOff(boundary4);
  striker.bounceOff(playerMallet);
  striker.bounceOff(computerMallet);
  playerMallet.bounceOff(edges);
  computerMallet.bounceOff(edges);
  
  if(keyDown("space") && gameState === "serve"){
    striker.velocityX = 4;
    striker.velocityY = -4;
    gameState = "play";
  }
  
  if(keyDown("LEFT_ARROW")){
    playerMallet.x = playerMallet.x - 5;
  }
  
  if(keyDown("RIGHT_ARROW")){
    playerMallet.x = playerMallet.x + 5;
  } 
  
 if(striker.isTouching(goal1)||striker.isTouching(goal2)){
   if(striker.isTouching(goal2)){
     computerScore = computerScore + 1;
   } 
   if(striker.isTouching(goal1)){
     playerScore = playerScore + 1;
   }
   reset();
   gameState = "serve";
 }
  
  if(playerScore===2||computerScore===2){
    text("Game over",160,150);
    text("Press 'R' to restart",150,180);
    gameState = "gameOver";
  }
  
  if(keyDown("r")&& gameState === "gameOver"){
    gameState = "serve";
    playerScore = 0;
    computerScore = 0;
  }
  
  drawSprites();
}

function reset(){
  striker.x = 500;
  striker.y = 200;
  striker.velocityX = 0;
  striker.velocityY = 0;  
}

