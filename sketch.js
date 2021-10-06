var ground, tree, mango1, mango2,mango3,mango4,mango5,stone,treeIMG,boyIMG,mangoIMG;
var launcherObject;
var lstone, lmango, mangoBodyPosition;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
treeIMG = loadImage("images/tree.png");
boyIMG = loadImage("images/boy.png");

}

function setup() {
	
	createCanvas(800, 700);
	tree = createSprite(600,500,50,200);
	tree.addImage("tree",treeIMG);
	tree.scale = 0.3;
	boy = createSprite(200,630,50,50);
	boy.addImage("tree",boyIMG);
	boy.scale = 0.1;
	engine = Engine.create()
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,700,800,30);
	mango1 = new Mango(600,400,50,50);
	
	mango2 = new Mango(650,400,50,50);
	
	mango3 = new Mango(720,400,50,50);
	
	mango4 = new Mango(550,350,50,50);
	
	mango5 = new Mango(600,350,50);
	mango6 = new Mango(650,350,50);
	mango7 = new Mango(600,350,50);
	mango8 = new Mango(600,450,50);
	mango9 = new Mango(650,450,50);
	mango10 = new Mango(700,450,50);
	mango11 = new Mango(550,450,50);
	mango12 = new Mango(500,450,50);
	mango13 = new Mango(460,450,50);
	mango14 = new Mango(600,400,50);
	stone = new Stone(150,580,30);
	string = new String(stone.body,{x:150,y:580});
	Engine.run(engine);
  
}


function draw() {
  background(rgb(118,233,255));
  rectMode(CENTER);
  
  ground.display();
  stone.display();
  tree.display();
  string.display();
  
  drawSprites();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  mango13.display();
  mango14.display()

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7);
  detectCollision(stone, mango8);
  detectCollision(stone, mango9);
  detectCollision(stone, mango10);
  detectCollision(stone, mango11);
  detectCollision(stone, mango12);
  detectCollision(stone, mango13);
  detectCollision(stone, mango14);

}
function mouseDragged (){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
	string.fly();
}
function detectCollision(lstone, lmango){
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance  = dist(stoneBodyPosition.x, stoneBodyPosition.y,mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance<80){
		console.log("collision");
		Matter.Body.setStatic(lmango.body, false);
		
	}
}
function setPosition(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:235, y:420});
		launcherObject.attach(stone.body);
	}
}


