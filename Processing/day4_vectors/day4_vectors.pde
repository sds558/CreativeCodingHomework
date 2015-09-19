
float x= 100;
float y= 100;
float xspeed= 2.5;
float yspeed= 2;

void setup(){
  size(800, 200);
  smooth();
}



void draw(){
  background(255);
  
  x= x+ xspeed;
  y= y+ yspeed;
  
  if((x> width) || (y<0)){
  yspeed= yspeed * -1;
  }
  
  if((y>height) || (y<0)) {
  yspeed= yspeed*-1;
  }
  
  // displays circle at x location
  stroke(0);
  strokeWeight(20);
  fill(127);
  ellipse(x, y, 48, 48); //x, y, width, height
  
}