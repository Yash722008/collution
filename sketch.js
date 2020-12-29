function setup() {
  createCanvas(800,400);
  shrav = createSprite(400, 200, 50, 50);
shrav.shapeColor ="red";

eve = createSprite(200,200,20,20);
eve.shapeColor="green";


}

function draw() {
  background(255,255,255);  
  drawSprites();

  eve.x=mouseX;
  eve.y=mouseY;

  if(eve.x-shrav.x<shrav.width/2+eve.width/2
    &&shrav.x-eve.x<shrav.width/2+eve.width/2
    &&eve.y-shrav.y<shrav.height/2+eve.height/2
    &&shrav.y-eve.y<shrav.height/2+eve.height/2){

      shrav.shapeColor="violet";
      eve.shapeColor = "orange";

  }
  else{
    shrav.shapeColor ="red";
    eve.shapeColor="green";

  }
}