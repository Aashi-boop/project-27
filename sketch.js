
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 bob1= new bob(250-25,400)
	 bob2= new bob(250+80-25,400)
	 bob3= new bob(250+80+80-25,400)
	 bob4= new bob(250+80-25+80+80,400)
	 bob5= new bob(250-25+80+80+80+80,400)
	 r1= new roof(400,150,450,15)
	 ro1= new rope(bob1.body,{x:225,y:150})
	 ro2= new rope(bob2.body,{x:225+80,y:150})
	 ro3= new rope(bob3.body,{x:225+80+80,y:150})
	 ro4= new rope(bob4.body,{x:225+80+80+80,y:150})
	 ro5= new rope(bob5.body,{x:225+80+80+80+80,y:150})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  
  drawSprites();
 bob1.display()
 bob2.display()
 bob3.display()
 bob4.display()
 bob5.display()
 r1.display()
 ro1.display()
 ro3.display()
 ro4.display()
 ro5.display()
 ro2.display()
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Body.applyForce(bob1.body,bob1.body.position,{x:-200,y:-200})
	}
}

