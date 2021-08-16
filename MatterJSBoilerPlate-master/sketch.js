
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}
var trash;
var can1,can2,can3,;
function setup() {
	createCanvas(800, 700);
engine = Engine.create();
world = engine.world;


	//Create the Bodies Here.
trash = new trash(100,100,10,10);
can1 = new trashCan(700,100,40,10);
can2 = new trashCan(750,130,10,30);
can2 = new trashCan(650,130,10,30);
ground = new ground(200,height,200,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  trash.display();
  can1.display();
  can2.display();
  can3.display();
  drawSprites();
 
}



