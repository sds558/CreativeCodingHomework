Mover mover_unit;

void setup(){
 size(640, 360);
 mover_unit = new Mover(); //making an instance of the class - an object
 // this is when Mover() will exexcute over in Mover class


}

void draw(){
background(255); 
mover_unit.update(); //methods
mover_unit.checkEdges();
mover_unit.display();
}