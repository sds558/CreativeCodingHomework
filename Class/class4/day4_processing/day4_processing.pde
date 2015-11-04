int option = 1; //this variable is global, which means both setup and draw
// use this varible


void setup() {
  size(400, 400);
  smooth(); //
  // noFill();
  //Command T positions everything
  //float = decimels
  // map() you pass through 5 variables
  //1st , what you want to manipulate
  //map(initial value, range1a, range1b, range2a,range2b)
  //
}

void draw() {
background(255);
  if (option==1){
  for (int x= 50; x<= width-50; x+= 20) {
    for (int y =50; y<=height-50; y+=20) {
      line(x-5, y-5, x+5, y+5);
      line(x+5, y-5, x-5, y+5);
    }
  }
  }
  //arc
  else if(option == 2) {
  int count= 120;
  for (int x = 50; x<= width-50; x+=20) {
    for (int y= 50; y<= height-50; y+=20) {
      //map redistrubutes a value to a new range
      float s = map(count, 120, 0, 0, TWO_PI*2);
      arc(x, y, 14, 14, s, s+PI);
      count--;
    }
  }
}
}

  void mousePressed(){
    option++;
    if(option > 2) option = 1;
  }