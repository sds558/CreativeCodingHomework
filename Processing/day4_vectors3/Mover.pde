PVector location;



PVector velocity; //declaring it
PVector acceleration;
float topspeed;

Mover() { // class constructor
  location = new PVector(width/2, heigh/2);
  velocity = new PVector(0, 0);
  accleration = new PVector(-0.001, 0.01);
  topspeed = 10;
}

void update(){
  velocity.add(acceleration);
  velocity.add(topspeed);
  location.add(velocity);

}
  void display() {
    stroke(0);
    strokeWeight(2);
    fill(127);
    ellipse(location.x, location.y, 48, 48);
    
  }

}