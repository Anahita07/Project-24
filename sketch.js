
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,paper;

function setup() {
	createCanvas(1200,800);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,780,1200,20);
	paper = new Paper(200,770,25);
	dustbin = new Dustbin();

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  
 ground.display();
 paper.display();
 dustbin.display();

  drawSprites();
 
}

function keyPressed(){

  if (keyCode === UP_ARROW){

	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});

  }
}

