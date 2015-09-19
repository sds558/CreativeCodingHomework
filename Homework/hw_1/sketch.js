var r, g, b, w, h; // GLOBAL variables
var stars= star(0, 0, 30, 70, 5);
var p = 50;
var x1= random(0, 799);
var y1= random(0, 599);

function setup() {
  createCanvas(800, 600); 
  
  background(0, 0, 0);
  
}

function draw() {
      
  r = random(0, 255);
  g = 255;
  b = random(0, 255);

  
  fill(r, g, b); 
  stroke(0, 0, 0, 25);
  star(mouseX, mouseY, 5, 10, 5);
  
  /*
  push();
  translate(width*0.2, height*0.5);
  rotate(frameCount /5.0);
  star(0, 0, 5, 70, 3); 
  pop();
  
  push();
  translate(width*0.5, height*0.5);
  rotate(frameCount / 5.0);
  star(0, 0, 80, 100, 40); 
  pop();
  */
  
  fill(r, 255, b, 25); 
  stroke(0, 0, 0, 25);
  translate(width*0.5, height*0.5);
  rotate(frameCount / 0.0009);
  star(0, 0, 80, 150, 5); 
  
  fill(r, 255, b, 15); 
  stroke(0, 0, 0, 25);
  translate(width*0.20, height*0.20);
  rotate(frameCount / 0.0009);
  star(0, 0, 5, 70, 5); 
  

  
  
  

}

function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

/*
function keyReleased()
{
  if(key==' ') background(255, 192, 0);

}


var r, g, b, w, h;

function setup() {
  createCanvas(800, 600);
  background(204, 240, 255);
  
}

function draw() {
 
  r= random(0, 255);
  g= random(0, 255);
  b= random(0, 255);
  
  fill(r, g, b, 25);
  stroke(r, g, b);
  
  ellipse(mouseX, mouseY, 48, 48);
}
*/