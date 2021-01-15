const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var helicopter,helicopterImage;
var package,packageImage;
var helpImage;
var backImage,back;
var vlogImage,vlog,hlog,guns,gunsImage;


var engine,myworld;

var log1,log2,log3;



function preload(){
	 
	packageImage = loadImage("package.png");
	helpImage = loadImage("help.gif");
	backImage = loadImage("back.gif");
	vlogImage = loadImage ("vlog.png");
	hlogImage = loadImage ("hlog.png");
	gunsImage = loadImage("guns.jfif")
}

function setup() {
	createCanvas(800,400);

	engine = Engine.create();
	myworld = engine.world;

	back = createSprite(400,200);
	back.addImage(backImage);
	back.scale=1.6;
	
    

	helicopter = createSprite(200,70);
	helicopter.addImage(helpImage);
	helicopter.scale=0.6;
	
	
	package = createSprite(300,300);
	package.addImage(gunsImage);
	package.scale=0.2;
	package.visible = false;
	
	log1 = createSprite(400,360,120,10);
	log1.addImage(hlogImage);
	log1.scale=0.2;

	log2 = createSprite(340,320,10,80);
	log2.addImage(vlogImage);
	log2.scale=0.15;

	log3 = createSprite(460,320,10,80);
	log3.addImage(vlogImage);
	log3.scale=0.15;

	Engine.run(engine);
	
	World.add(myworld,helicopter);


}


function draw() {
background("black");
Engine.update(engine);
edges = createEdgeSprites();
helicopter.bounceOff(edges);



package.x=helicopter.x;
//package.y=70;

if (keyDown("space")){
	package.visible=true;
}  
if(keyDown(DOWN_ARROW)){
	package.y=370;
}
if(keyDown(LEFT_ARROW)){
	helicopter.x=helicopter.x-10;
}
if(keyDown(RIGHT_ARROW)){
	helicopter.x=helicopter.x+10;
}

   

drawSprites();
 
}


