const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  ground=new Ground(600,590,1200,20)
  box1=new Box(700,100,60,60)
  box2=new Box(700,100,60,60)
  box3=new Box(700,100,60,60)
  box4=new Box(700,100,60,60)
  box5=new Box(700,100,60,60)
  box6=new Box(700,100,60,60)
  
  box7=new Box(770,100,60,60)
  box8=new Box(770,100,60,60)
  box9=new Box(770,100,60,60)
  box10=new Box(770,100,60,60)
  box11=new Box(770,100,60,60)
  box12=new Box(770,100,60,60)
  
  ball=new Ball(550,300,50)
  rope= new Rope(ball.body,{x:550,y:200})
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  ground.display()
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()

  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()

  ball.display()
rope.display()
}

function mouseDragged(){
  
  Matter.Body.setPosition(ball.body,{
      x:mouseX,y:mouseY
  })

}