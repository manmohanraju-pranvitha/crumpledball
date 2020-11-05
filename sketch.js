
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world;
var engine;
var paper1;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


paper1=new Paper (200,30,20);
ground=new Ground(400,height,800,25);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
 // world.display();
paper1.display();
ground.display();
  
  drawSprites();
 
}



