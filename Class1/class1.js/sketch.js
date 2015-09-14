var r;
var g;
var b;
var i = 5
function setup() {
  createCanvas(800, 600);
  
  r= random(0, 255);
  g= random(0, 255);
  b= random(0, 255);
  d= random(6, 100);
 
  background(255);
}

function draw() {
  //r = map(mouseY, 0, height-1, 255, 0);
  //b = map(mouseX, 0, width-1, 0, 255);

  
  fill(r, g, b);
  ellipse(mouseX, mouseY, d, d);
  d= d+i;
  
  if (d >= 200 || d<0) i= i*-1; 
  
}







/*if(mouseIsPressed) {
    fill(0);
  }
  else { 
  fill(0, 255, 0);
  }
  
  ellipse(mouseX, mouseY, 400, 400);
  */
  