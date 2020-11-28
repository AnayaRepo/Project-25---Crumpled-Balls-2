
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
	paper1 = new Paper(200, 440, 20);

	dustBinBottom = new Dustbin(690, 430, 300, 20);
	dustBinSide1 = new Dustbin(830, 390, 20, 100);
	dustBinSide2 = new Dustbin(550, 390, 20, 100);

	//image(dustBinImg, 400, 400);

	//loadImage('dustbin.png', img => {
	//	image(img, 0, 0);
	//});

	Engine.run(engine);
  
}


function draw() {
  background("white");
  Engine.update(engine);

  ground1.display();
  paper1.display();

  dustBinBottom.display();
  dustBinSide1.display();
  dustBinSide2.display();
  image(dustBinImg, dustBinBottom.body.position.x-175, dustBinBottom.body.position.y-150, 350, 160);

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper1.body, paper1.body.position,{x:70, y:-60});
	}
}



