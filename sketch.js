const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;
var engine ,world,platform1,demon,slingshort,platform2,bouncer,p1,d1,c1,coin;
function preload(){
  d1 = loadImage("images/monster.png")
  c1 = loadImage("images/coin.png")
}
function setup() {
  createCanvas(1300,600);
  engine = Engine.create()
  world = engine.world;
  platform1= new Platform(200,350,400,60);
  platform2 = new Platform(1200,500,200,40);
  bouncer = new Bouncer(700,500,100);
  p1 = new Player(350,300,50,80);
  p1.shapeColor = "red"
  demon = createSprite(30,250,50,50);
  demon.addImage(d1)
  demon.shapeColor="black"
  coin = createSprite(1200,450,50,50)
  coin.addImage(c1)
  coin.scale=0.10;
  slingshot = new SlingShot(p1.body,{x:280, y:180});

}

function draw() {
  background(0,255,0);
  platform1.display();
  platform2.display();
  bouncer.display();
  p1.display();
  slingshot.display();
    drawSprites();
  
}
function mouseDragged(){
  Matter.Body.setPosition(p1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}