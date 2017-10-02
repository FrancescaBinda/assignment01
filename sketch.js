function setup() {
  createCanvas(800, 600);
  
  // Set here the values that are not changing  all over the sketch
  strokeWeight(2);
}

function draw() {
  
  background('#70a5d4');
 // noStroke();
  
 

  // Antennas
  
  
  ellipseMode(CENTER);
  line (125,55,125,15);
   fill('#6a878c')
  ellipse(125, 15, 10, 10);
  ellipse(125, 55, 20, 10);
  fill('#eeb52a')
  
  
  
  //Arms
  fill('#6a878c')
  rect(40,210,20,185,  10, 0, 0, 0);
  rect(190,210,20,185,  0, 10, 0, 0);
  
  // Body
  fill('#adbfc7')
  rect(60,210,130,170);
  rect(80,230,90,130);
  
  ellipseMode(CENTER);
  ellipse(160, 300, 7, 7);
  
  
  
  // Legs
  fill('#adbfc7')
  rect(90,380,30,90);
  rect(130,380,30,90);
  
  // Legs
  fill('#6a878c')
  rect(130,380,30,10);
  rect(130,400,30,10);
  rect(130,420,30,10);
  rect(130,440,30,10);
  rect(130,460,30,10);
  
  rect(90,380,30,10);
  rect(90,400,30,10);
  rect(90,420,30,10);
  rect(90,440,30,10);
  rect(90,460,30,10);
  
  //feet
  fill('#636a6f')
  rect(70,470,50,20,20,0,0,0);
  rect(130,470,50,20,0,20,0,0);
  
   // Head
   fill('#adbfc7')
  ellipse(125, 110, 110, 110);
  rect(70,110,110,100);
 
  
   // Neck
 fill('#6a878c')
  rect(60,200,130,10,5,5,0,0);
  
  // mouth
  
  fill('#ffffd5')
  rect(90, 160,70,20, 5,5,5);
  
  //denti
  stroke(0,0,0);
  line (90,170,160,170);
  line (100,180,100,160);
  line (110,180,110,160);
  line (120,180,120,160);
  line (130,180,130,160);
  line (140,180,140,160);
  line (150,180,150,160);
  // Eye
   fill('#6a878c')
  rect(60,110,130,30, 10,10,10);
  fill(0,0,0)
  rect(70, 115,110,20, 10,10,10);
  
  fill('#ffffd5')
  arc(105, 135, 39, 39, PI, 0);
  arc(145, 135, 39, 39, PI, 0);
  fill('#000000')
  arc(105, 135, 10, 10, PI, 0);
  arc(145, 135, 10, 10, PI, 0);

  
 

}