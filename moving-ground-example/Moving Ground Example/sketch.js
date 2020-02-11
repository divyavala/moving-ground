const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(200,height,400,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    if(ground.body.position.x <=50){
      Matter.Body.setPosition(ground.body, {x:200, y:height})
    }
}
