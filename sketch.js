var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	redleftbox=createSprite(width/2-100,600,20,100);
	redrightbox=createSprite(width/2+100,600,20,100);
	redbottombox=createSprite(width/2,650,200,20);
	redleftbox.shapeColor="red";
	redrightbox.shapeColor="red";
	redbottombox.shapeColor="red";


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	 leftbox=Bodies.rectangle(width/2-50,600,20,100,{isStatic:true});
	 World.add(world,leftbox);

	 rightbox=Bodies.rectangle(width/2+50,600,20,100,{isStatic:true});
	 World.add(world,rightbox);

	 bottombox=Bodies.rectangle(width/2,650,200,50,{isStatic:true});
	 World.add(world,bottombox);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 


  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody,false);
  }

  if(keyCode===LEFT_ARROW){
	 helicopterSprite.x=helicopterSprite.x-20;
	 redleftbox.x=redleftbox.x-20;
	 redrightbox.x=redrightbox.x-20;
	 redbottombox.x=redbottombox.x-20;
	 packageSprite.x=packageSprite.x-20;


	 Matter.Body.translate(packageBody,{x:-20,y:0});
	

	 Matter.Body.translate(leftbox,{x:-20,y:0});
	 Matter.Body.translate(rightbox,{x:-20,y:0});
	 Matter.Body.translate(bottombox,{x:-20,y:0});
	 
  }

  if(keyCode===RIGHT_ARROW){
	helicopterSprite.x=helicopterSprite.x+20;
	redleftbox.x=redleftbox.x+20;
	 redrightbox.x=redrightbox.x+20;
	 redbottombox.x=redbottombox.x+20;
	 packageSprite.x=packageSprite.x+20;


	Matter.Body.translate(packageBody,{x:20,y:0});


	Matter.Body.translate(leftbox,{x:20,y:0});
	Matter.Body.translate(rightbox,{x:20,y:0});
	Matter.Body.translate(bottombox,{x:20,y:0});
	
 }
}

