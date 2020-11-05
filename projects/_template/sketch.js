function setup() {
  angleMode(DEGREES);
  createCanvas(800, 800, P2D);
  background(68, 71, 90);
  stroke(139, 233, 253);
  noFill()
  textAlign(CENTER, CENTER)
}

function draw() {
  textSize(32);
  strokeWeight(0.5)
  text('Hello, World!', width/2, height/2-25);
  text('Template Project by MarvinJWendt!', width/2, height/2+25);
}