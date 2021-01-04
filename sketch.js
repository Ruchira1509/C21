var fixedRect, movingRect;
var gameObject1,gameObject2,gameObject3,gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor="green";
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor="green";
  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject2 = createSprite(300, 100, 50, 50);
  gameObject3 = createSprite(500, 100, 50, 50);
  gameObject4 = createSprite(700, 100, 50, 50);
}

function draw() {
  background(0,0,0);  // r,g,b => 0-255
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  console.log(movingRect.x - fixedRect.x)
  // call the function
  if (isTouching(movingRect, gameObject1)){
    gameObject1.shapeColor="yellow";
    movingRect.shapeColor="orange";
  }
  else
  {
    gameObject1.shapeColor="grey";
    movingRect.shapeColor="green";
  }
  drawSprites();
}

