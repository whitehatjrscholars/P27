
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	base = new Base(400, 100)

	ball1 = new Ball(300, 200, 50)
	ball2 = new Ball(350, 200, 50)
	ball3 = new Ball(400, 200, 50)
	ball4 = new Ball(450, 200, 50)
	ball5 = new Ball(500, 200, 50)

	chain1 = new Chain(ball1.body, base.body, -50 * 2, 0);
	chain2 = new Chain(ball2.body, base.body, -25 * 2, 0);
	chain3 = new Chain(ball3.body, base.body, 0, 0);
	chain4 = new Chain(ball4.body, base.body, 25 * 2, 0);
	chain5 = new Chain(ball5.body, base.body, 50 * 2, 0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  base.display();

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();


  drawSprites();
 
}

function keyPressed() { 
	if (keyDown = "UP") {
		Body.applyForce(ball1.body,ball1.body.position,{x:-0.05,y:-0.05}); } 
} 

