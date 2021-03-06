// SPIROGRAPH //perhaps make a flower of some sort?
// http://en.wikipedia.org/wiki/Spirograph
// also (for inspiration):
// http://ensign.editme.com/t43dances
//
// this p5 sketch uses simple transformations to create a
// Spirograph-like effect with interlocking circles (called sines).  
// press the spacebar to switch between tracing and
// showing the underlying geometry.
//
// your tasks:
// (1) tweak the code to change the simulation so that it draws something you like.
// hint: you can change the underlying system, the way it gets traced when you hit the space bar,
// or both.  try to change *both*.  :)
// (2) use p5.sound or tone.js to make the simulation MAKE SOUND.
// hint: the websites for p5.sound and tone.js have lots of examples.
// try and adapt them.
// another hint: javascript isn't super efficient with a large number of audio playing at once.
// see if there's a simple way to get an effective sound, or limit the number of shapes
// you're working with.
var osc; // this is the thing that makes the sound
var thenotes = [62, 62, 64, 62, 67, 66, 62, 62, 64, 62, 69, 67, 62, 62, 74, 71, 67, 66, 64, 72, 72, 71, 67, 69, 67];
var NUMSINES = 20; // how many of these things can we do at once?
var sines = new Array(NUMSINES); // an array to hold all the current angles
var rad; // an initial radius value for the central sine
var i; // a counter variable

// play with these to get a sense of what's going on:
var fund = 0.005; // the speed of the central sine
var ratio = 10; // what multiplier for speed is each additional sine?
var alpha = 100; // how opaque is the tracing system

var trace = false; // are we tracing?



function setup()
{
  
  createCanvas(800, 600); // OpenGL mode

  rad = height/8; // compute radius for central circle
  background(255); // clear the screen

  for (i = 0; i<sines.length; i++)
  {
    sines[i] = PI; // start EVERYBODY facing NORTH
  }
  
  //frameRate(4);
  osc = new p5.Oscillator(); // set it up
  osc.setType('square'); // what kind of sound?
  osc.start(); // start it going
}

function draw()
{
  
  var thefreq = midiToFreq(thenotes[floor(random(0, thenotes.length))]);
  osc.freq(thefreq);
  var increment = map(mouseX, 0, width, 0.05, 0.3);
  var theamp = map(mouseY, 0, height, 1, 0);
  osc.amp(theamp, 0.1); // the 0.1 is how long to fade
  
  
  
  if (!trace) {
    background(0); // clear screen if showing geometry
    stroke(0, 255); // black pen
   // noFill(); // don't fill
   //fill(r, g, b);
  } 

  // MAIN ACTION
  push(); // start a transformation matrix
  translate(width/2, height/2); // move to middle of screen

  for (i = 0; i<sines.length; i++) // go through all the sines
  {
    var erad = 0; // radius for small "point" within circle... this is the 'pen' when tracing
    // setup for tracing
    if (trace) {
      stroke(232, 62, 210*(float(i)/sines.length), alpha); // pinkish/red
      fill(232, 62, 210, alpha/2); // pink-ish/red
      erad = 5.0*(1.0-float(i)/sines.length); // pen width will be related to which sine
    }
    var radius = rad/(i+1); // radius for circle itself
    rotate(sines[i]); // rotate circle
    if (!trace) ellipse(0, 0, radius/3, radius/3); // if we're simulating, draw the sine
    push(); // go up one level
    translate(0, radius); // move to sine edge
    if (!trace) ellipse(0, 0, 300, 300); // draw a little circle
    if (trace) ellipse(0, 0, erad, erad); // draw with erad if tracing
    pop(); // go down one level
    translate(0, radius); // move into position for next sine
    sines[i] = (sines[i]+(fund+(fund*i*ratio)))%TWO_PI; // update angle based on fundamental
  }
  
  pop(); // pop down final transformation
  //triangle(58, 75 (diff:+17), 58, 20 (diff:-38), 86, 50 (diff: -36);
   fill(139, 136, 120);
   noStroke();
   rect(400, 420, 5, 200);
   //triangle(405, 425, )
}


function keyReleased()
{
  if (key==' ') {
    trace = !trace; 
    background(255);
  }
}

