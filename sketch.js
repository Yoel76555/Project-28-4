
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stone, tree, ground, boy,boyImg;
var mango1,mango2,mango3,mango4, slingShot;
launchingForce=100;

function preload()
{
	boyImg=loadImage("boy.png");
	
}

function setup() {
	createCanvas(1300,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	

	//creating the sprites
	stone=new Stone(235,420,30);
	tree=new Tree(1050,580,500,500);
	ground= new Ground(600,height,1300,20);

	mango1= new Mango(800,330,40,40);
	mango2= new Mango(900,250,40,40);
	mango3= new Mango(1000,290,40,40);
	mango4= new Mango(1100,300,40,40);
	mango5= new Mango(730,290,40,40);
	slingShot= new SlingShot(stone.body,{x:200, y:400});
	
	
	Engine.run(engine);
}


function draw() {
  //rectMode(CENTER);
  background("gray");
  image(boyImg,200,375,200,300);
  tree.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone.display();
  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  
 // drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY});
  }
  function mousReleased(){
	  slingShot.fly();
  }
function detectollision(Lstone,Lmango){
	mangoBodyPosition=Lmango.body.position;
	stoneBodyPosition=Lstone.body.position;
 
	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance<=Lmango.r+Lstone.r){
		Matter.Body.setStatic(Lmango.body,false);
	}

}

function keyPressed() {
    if(keyCode === 32){
	Matter.Body.setPosition(stone.body,{x:235, y:420});
	slingShot.attach(stone.body);
   }
}




