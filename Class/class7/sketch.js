//var exes = new Array(1000);
//var eyes = new Array(1000);
var circles = new Array(1000);
// to add a picture assign a var = thedonald, then function preload(){ thedonald = loadImage(./data/trump.png)}
function setup() {
   createCanvas(800, 600);

   for(var i= 0;i<1000;i++){
   circles[i] = thecircle(random(0, 20));
}
}

function draw() {
     //circles[i] = random(0, width);
    //circles[i] = random(0, height);
   
    background(255);
    for (var i = 0; i<1000; i++){
      circles[i].draw();
    }
}
//this is a class
  function thecircle(diameter){ //fxn is going to have variable called diameter

  //constructor is code you use when you run a new class
  //this code below are the properties
  this.x = random(0, width);
  this.y = random(0, height);
  this.d = diameter;
   
  //these are methods, (verbs in the class are methods, properties are the...)
  this.draw = function() {
    ellipse(this.x, this.y, this.d, this.d);
    this.x += random(-2, 2);
    this.y += random(-2, 2);
  }
  }