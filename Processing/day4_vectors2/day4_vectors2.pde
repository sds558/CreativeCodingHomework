PVector location;
// PVector is a class..., location is an object

PVector velocity;

void setup(){
  size(400, 400);
  background(255);
  location = new PVector(100, 100); //passing two values of x and y
  velocity = new PVector(1000, 45); //

}

void draw(){
    noStroke();
    fill(225, 10);
    rect(0, 0, width, height);
    
    location.add(velocity);
    
    if( (location.x > width) || (location.x < 0) ) {
      velocity.x = velocity.x * -1;
    }
    
    if( (location.y > height) || (location.y < 0) ) {
      velocity.y = velocity.y * -1;
    }
    
    stroke(0);
    fill(175);
    ellipse(location.x, location.y, 16, 16);
}