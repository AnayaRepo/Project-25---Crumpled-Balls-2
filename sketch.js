
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paper1, ground1;
var dustBinSide1,dustBinSide2, dustBinBottom, dustBinImg;

function preload() {
    dustBinImg = loadImage("dustbing.png")
}

function setup() {
	createCanvas(900, 500);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(400, 450, 1000, 20);
	paper1 = new Paper(200, 440, 60);

	dustBinSide1 = createSprite(585, 300, 20, 260);
	dustBinSide2 = createSprite(395, 300, 20, 260);
	dustBinBottom = createSprite(490, 290, 300, 20);
	dustBinBottom.addImage(dustBinImg);
	dustBinBottom.scale = 0.95;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  ground1.display();
  paper1.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper1.body, paper1.body.position,{x:180, y:-970});
	}
}



