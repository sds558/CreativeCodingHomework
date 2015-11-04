// this generates a 'cooked text file'
var alicelines; // this is gonna hold the text file

function preload() {
  // ignore the bullshit error that happens when you do this:
  alicelines = loadStrings('./data/pokemon.txt');
  
}
function draw() {
  createCanvas(800, 600);
  //background(0);
  var ind = floor(random(alicelines.length));
  textSize(10);
  fill(0, 0, 0);
  //text(alicelines, 400, 400);
  //console.log(alicelines);
}
