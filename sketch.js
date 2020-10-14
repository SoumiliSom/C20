
var fixedrect,movingrect;

function setup() {
  createCanvas(600,600);
 
  fixedrect=createSprite(300,300,30,30);
  fixedrect.shapeColor="green";

  movingrect=createSprite(500,300,30,30);
  movingrect.shapeColor="green";

}

function draw() {
  background(255,255,255); 
  
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;

  if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2 && fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2 && fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2 && movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2 ){
    fixedrect.shapeColor="red";
    movingrect.shapeColor="red";
  }
   else{
    movingrect.shapeColor="green";
    fixedrect.shapeColor="green";  
   }

  drawSprites();
}