const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var division =[];
var plinko = [];
var particles = [];
var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(240, 795, 500, 50);
  
}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  
  ground.display();  
  drawSprites();
}