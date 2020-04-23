
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
function setup() {
  createCanvas(600,400);
  engine = Engine.create()
  world = engine.world
  

  
  bob = new Bob(300,250,80,80) 
  stand = new Stand(300,50,250,25);
  cons1 = new Chain(bob.body,stand.body);
 

  
}

function draw() {
  background(0,125,255);
  if(keyDown("space")){
    bob.body.position.x = mouseX
   bob.body.position.y = mouseY
  }
  if(keyDown("enter")){
    bob.body.position.x = 300
    bob.body.position.y= 250
  }
  Engine.update(engine);
 bob.display()
 stand.display()
 cons1.display()


  
  drawSprites();
}

