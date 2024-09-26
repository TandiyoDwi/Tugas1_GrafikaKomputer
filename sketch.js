function setup() {
  createCanvas(640, 480);
  
}

function draw() {
  background(250,0,0);
  
  // Kepala
  fill(255, 224, 189);
  circle(320, 150, 80, 120);
  
  // Mata
  fill(0);  
  ellipse(305, 140, 20, 10); 
  ellipse(335, 140, 20, 10);
  
  // Mulut
  stroke(0);
  strokeWeight(2);
  noFill();
  arc(320, 160, 30, 20, 0, PI);
  
  // Badan
  fill(0, 102, 204);
  rect(290, 190, 60, 100);
  
  // Lengan
  rect(240, 190, 50, 70); 
  rect(350, 190, 50, 70); 
  
  // Kaki
  fill(0); 
  rect(290, 290, 25, 100); 
  rect(325, 290, 25, 100); 
}



