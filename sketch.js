var Engine = Matter.Engine,
 World = Matter.World,
  Events = Matter.Events,
   Bodies = Matter.Bodies;
   
   var particles = [];
   var plinkos = [];
   var divisions =[]; 
   var divisionHeight=300; 
   var score =0;

   function setup() {
      createCanvas(800, 800);
       engine = Engine.create(); 
       world = engine.world; 
       ground1 = new Ground(width/2,height,width,20);
        for (var k = 0; k <=width; k = k + 80) {
       divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight)); 
      } 
      for (var j = 75; j <=width; j=j+50) { 
      plinkos.push(new Plinko(j,75)); } 

      for (var j = 50; j <=width-10; j=j+50) {
         plinkos.push(new Plinko(j,175)); } 

         for (var j = 75; j <=width; j=j+50) {
            plinkos.push(new Plinko(j,275)); }

             for (var j = 50; j <=width-10; j=j+50) {
                plinkos.push(new Plinko(j,375)); } }
function draw() {
   background("black");
    textSize(20)
     //text("Score : "+score,20,30);
      Engine.update(engine);
       ground1.display(); 
       for (var i = 0; i < plinkos.length; i++)
        { plinkos[i].display(); } 
        if(frameCount%60===0){
           particles.push(new Particles(random(width/2-30, width/2+30), 10,10));
            score++; } 
            for (var j = 0; j < particles.length; j++) { particles[j].display(); }
             for (var k = 0; k < divisions.length; k++) { divisions[k].display(); } }
/*const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;

var plinkos=[];
var particles=[];
var divisions=[];

var DivisionHeight=300;



function setup() {
  createCanvas(600,690)//;

  engine = Engine.create();
	world = engine.world;

  ground = new Ground(300,690,690,20);

  for(var k = k <=width; k = k + 80;)
  {
    divisions.push(new Divisions(k,height - DivisionHeight/2,10,DivisionHeight));

  }
   for (var i =75 ; i<=width; i=i+ 50)
   {
     plinkos.push(new Plinko(j,75,10))
   }
   for (var i =50 ; i<=width-10; i=i+ 50)
   {
     plinkos.push(new Plinko(j,175,10))
   }
    
   for (var i =75 ; i<=width; i=i+ 50)
   {
     plinkos.push(new Plinko(j,275,10))
   }
   for (var i =50 ; i<=width-10; i=i+ 50)
   {
     plinkos.push(new Plinko(j,375,10))
   }
    

}

function draw() {
  background(0);
  Engine.update(engine);
  
  ground.display();
  for(var i=0 ; i<plinkos.length; i++ ){
    plinkos[i].display();
  }

  for(var i=0 ; i<particles.length; i++ ){
    particles[i].display();
  }

  for(var i=0 ; i<divisions.length; i++ ){
    divisions[i].display();
  }
  if (frameCount%60 === 0){
    particles.push(new Particles(random(width/2-30,width/2+30),10,10))
  }
  drawSprites();
}*/