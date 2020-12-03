const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var trashcan1, trashcan2, trashcan3;
var trashcan, trashcanImg;

var world;

function preload()
{	
	trashcanImg = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1250, 650);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paper = new Paper(200,450,70);
	ground = new Ground(width/2,630,width,40);
	trashcan1 = new Trashcan(1200,510,20,200);
	trashcan2 = new Trashcan(1000,510,20,200);
	trashcan3 = new Trashcan(1100,600,200,20);

	trashcan = Bodies.rectangle(1100, 510, 200, 50);

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
 
  
  paper.display();
  ground.display();
  trashcan1.display();
  trashcan2.display();
  trashcan3.display();

  imageMode(CENTER);

  image(trashcanImg, trashcan.position.x, trashcan.position.y, 200, 210);
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paper.body,paper.body.position,{x:700,y:-800});
	}
}




