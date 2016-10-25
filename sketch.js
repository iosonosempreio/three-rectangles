function setup() {
  createCanvas(800, 600);
  background(204,102,0);
}


function draw() {
  push()
  translate(width/2,height/2);
  rect(0,0,75,75);
  pop()
  push()
  translate(300,200);
  rect(0,0,75,75);
  pop()
}