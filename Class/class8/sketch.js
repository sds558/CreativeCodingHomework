var img;

function setup() {
  createCanvas(600, 600);
  img = createImage(100, 100);
}

function draw() {
  img.loadPixels();
    for (i = 0; i< img.width; i++) {
      for (j = 0; j<img.height; j++) {
        var r = random(10)>8;
        var thecolor= color(r*255);
        img.set(i, j, thecolor);
    var thecolor = color(random(255), random(255), random(255));
    img.set(i, j, thecolor); 
    }
  }
  img.updatePixels(); 
  image(img, 0, 0, width, height);
}
function mouseReleased(){
  
  
}