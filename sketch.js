
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Ground,Paper,dustbinobj
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Ground = new ground(500,670,2500,20)
	Paper = new paper(100,600,10)
	
	 dustbinobj = new dustbin(600,650)
	 dustbinobj.shapeColor = "red"
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
  Ground.display();
  Paper.display();
  dustbinobj.display()
  
  
  
}

function keyPressed(){
	if(keyCode ===UP_ARROW){
		Matter.Body.applyForce(Paper.body,Paper.body.position,{x:9,y:-11})
	}

}



