
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var P1;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1500,650);
P1=new Paper(350,250,100);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
P1.display()
  groundObject.display();
  dustbinObj.display();
  keyPressed()
}
function keyPressed(){
	if (keyDown("up")){
		Matter.Body.applyForce(P1.body,P1.body.position,{x:130,y:-145})
	}
}

