var osc; // this is the stuff the makes sound
var thenotes = [53, 56, 59, 62, 67, 76, 54, 58, 53, 65];
var whichnote = 0;

function setup() {
  createCanvas(800, 600);
  osc = new p5.Oscillator();
  osc.setType('square');
  osc.start();
}

function draw() {
  background(255);
  var whichnote = round(map(mouseX, 0, width, 0, 7));
  var increment = map(mouseX, 0, width, 0.05, .3)
  var thefreq = midiToFreq(thenotes[floor(whichnote)]);
  osc.freq(thefreq);
  var theamp = map(mouseY, 0, height, 1, 0);
  osc.amp(theamp, 0.1); // the .1 is how long to fade
  whichnote = (whichnote+1)%thenotes.length;
}