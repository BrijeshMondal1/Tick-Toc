var Hour, Minute, Second;
var secAngle, mnAngle, hrAngle;

function setup() {
  
  createCanvas(windowWidth,windowHeight);
  

}

function draw() {
  
  background("grey");  
  
  drawSprites();

  translate(width/2,height/2);
  rotate(-90);
  
  Hour = hour();
  Minute = minute();
  Second = second();

  fill("black");
  stroke("white");
  strokeWeight(7);
  ellipse(0, 0, 360);
 
  scAngle = map(Second,0,60,0,360);
  mnAngle = map(Minute,0,60,0,360);
  hrAngle = map(Hour % 12,0,12,0,360);
 
   push();
   rotate(scAngle);
   stroke("cyan");
   strokeWeight(4);
   line(0,0,110,0);

   pop();
 
   push();

   rotate(mnAngle);
   stroke(46, 138, 87);
   strokeWeight(6);
   line(0,0,80,0);

   pop();
 
   push();
   
   rotate(hrAngle);
   stroke("orangered");
   strokeWeight(7);
   line(0,0,50,0);
 
   pop();
   
   point(0,0);
   strokeWeight(10);
   noFill();
   stroke("cyan");
   arc(0,0,300,300,0,scAngle);
   stroke(46, 138, 87);
   arc(0,0,280,280,0,mnAngle);
   stroke("orangered");
   arc(0,0,260,260,0,hrAngle);

}