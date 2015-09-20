var r, g, b, w, h; // GLOBAL variables


function setup() {
  createCanvas(1200, 800); 
  
  background(0, 0, 0);
  
}

function draw() {
      
  r = random(0, 255);
  g = 255;
  b = random(0, 255);
  
  

  var w = random(0, 25);
  var h= random(0, 25);
  var coordX = random(0, 1200); //X coords for background stars
  var coordY = random(0, 800);  //Y coords for background stars
  
  //The larger stars that you create
  fill(r, g, b, 10);
  noStroke();
  star(mouseX, mouseY, w, h, 5);
  
  //The random stars that are generated in the background
  fill(254, 252, 215, 35); //254, 252, 215
  noStroke();
  star(coordX, coordY, 5, 5, 5);
  
  
  
  //This star establishes the sun's core
  fill(253, 184, 19, 25); 
  stroke(0, 0, 0, 25);
  translate(width*0.5, height*0.5);
  rotate(frameCount / 0.0009);
  star(0, 0, 80, 150, 5); 
  
  //Another spinning star that is added inside the sun to add color/depth
  fill(252, 212, 64, 10); 
  stroke(0, 0, 0, 15);
  rotate(frameCount / 0.0009);
  star(0, 0, 90, 160, 5); 
  
  //Another Star was added inside to implement reddish aura
  fill(255, 102, 0, 25); 
  stroke(0, 0, 0, 25);
  rotate(frameCount / 0.0009);
  star(0, 0, 60, 100, 5);    
  
  
  //The fiery ring around the star
  fill(r, g, b, 25); 
  //stroke(0, 0, 0, 25);
  noStroke();
  translate(width*0.14, height*0.14);
  rotate(frameCount / 0.0040);
  star(0, 0, 5, 70, 5);
  
  //The 2nd fiery ring around the star
  fill(252, 212, 64, 25); 
  noStroke();
  rotate(frameCount / 0.0040);
  star(0, 0, 10, 80, 5);
  
  

  
  
  

}

function star(x, y, radius1, radius2, npoints) { //Function that defines a new shape, we pass in 5 parameters for the fxn
  var angle = TWO_PI / npoints; //establishes the angles within a star
  var halfAngle = angle/2.0;
  beginShape(); // records vertices for a unique shape, in this case: star
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE); // schematics for the shape has now ended
}


function keyReleased() // resets the entire project
{
  if(key==' ') background(0, 0, 0);

}
