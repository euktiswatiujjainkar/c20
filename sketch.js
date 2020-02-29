
var r = 0;
var g = 50;
var b=255;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){
createCanvas(1200,400);
}


function draw(){
  background("white");
  ellipse(mouseX,mouseY,200,200);
  fill(0)
  var pointx= mouseX;
  r=pointx;
  g=pointx-10;
  b=pointx+30;
  background (r,g,b)
  
  


  
  // change the value of Red based on the mouse movement about the X axis
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis

  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.
}