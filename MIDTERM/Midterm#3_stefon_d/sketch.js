//MIDTERM #3 - TURTLE/LINDENMEYER
// TURTLE STUFF:
var x, y; // the current position of the turtle
var currentangle = 0; // which way the turtle is pointing
var step = 50; // how much the turtle moves with each 'F'
var angle = 90; // how much the turtle turns with a '-' or '+'

triangle = [30, 75, 58, 20, 86, 75];

// LINDENMAYER STUFF (L-SYSTEMS)
var thestring = 'A'; // "axiom" or start of the string
var numloops = 5; // how many iterations of the L-system to pre-compute
var therules = []; // array for rules
therules[0] = ['A', '-BF+AFA-A-+A+FB-']; // first rule
therules[1] = ['B', '+AF-F-BFFFB+-FA+']; // second rule


var whereinstring = 0; // where in the L-system are we drawing right now?

// THIS RUNS WHEN WE HIT GO
function setup()
{
  createCanvas(800, 600); // this is the size of the window
  background(0, 191, 255); // background to white
  stroke(0, 0, 0, 255); // draw in black
  
  // start the x and y position at lower-left corner
  x = width/2;
  y = height/2;
  
  // COMPUTE THE L-SYSTEM
  for(var i = 0;i<numloops;i++) {
    thestring = lindenmayer(thestring); // do the stuff to make the string
  }
  console.log(thestring); // comment this out if it's slowing you down
  
}

// DO THIS EVERY FRAME
function draw()
{
  
  // draw the current character in the string:
  drawIt(thestring.charAt(whereinstring)); 
  
  // increment the point for where we're reading the string.
  // wrap around at the end.
  whereinstring++;
  if(whereinstring>thestring.length-1) whereinstring = 0;

}

// interpret an L-system
function lindenmayer(s)
{
  var outputstring = ''; // start a blank output string
  
  // go through the string, doing rewriting as we go
  
  // iterate through 'therules' looking for symbol matches:
  for(var i=0;i<s.length;i++) // every symbol in 's'
  {
    var ismatch = 0; // by default, no match
    for(var j = 0;j<therules.length;j++) // every rule in 'therules'
    {
      if(s.charAt(i)==therules[j][0]) // MATCH!
      {
        outputstring+=therules[j][1]; // write substitution
        ismatch = 1; // we have a match, so don't copy over symbol
        break; // get outta this for() loop
      }
    }
    // if nothing matches in 'therules' array, just copy the symbol over.
    if(ismatch===0) outputstring+= s.charAt(i); 
  }
  
  return(outputstring); // send out the modified string
}

// this is a custom function that draws turtle commands
function drawIt(k)
{
  if(k=='F') // draw forward
  {
    // polar to cartesian transformation based on step and currentangle:
    var x1 = x + step*cos(radians(currentangle));
    var y1 = y + step*sin(radians(currentangle));
    line(x, y, x1, y1); // connect the old and the new
    // update the turtle's position:
    x = x1;
    y = y1;
  }
  else if(k=='+')
  {
   currentangle+=angle; // turn left
  }
  else if(k=='-')
  {
   currentangle-=angle; // turn right   
  }
   
  // DRAW EVERYTHING:

  // give me some random color values:
  var r = random(0, 255);
  var g = random(0, 255);
  var b = random(0, 255);
  var a = random(50, 200);

  // pick a gaussian (D&D) distribution for the radius:
  var radius = 0;
  radius+= random(0, 15);
  radius+= random(0, 15);
  radius+= random(0, 15);
  radius = radius/3;
  
  if (x>width) x=0;
  if (y>height) y=0;
  if(x<0) x= width;
  if(y<0) y= height;
  
  // draw the stuff:
  fill(r, g, b, a); // interior fill color
  ellipse(x, y, radius+50, radius+50); // circle that chases the mouse
   //rect()
}

