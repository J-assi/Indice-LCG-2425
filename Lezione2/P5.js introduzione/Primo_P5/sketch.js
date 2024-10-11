function setup() {
  createCanvas(900, 900);
}

function draw() {
  background("darkblue");
  fill(200);
  stroke("darkgrey");
  strokeWeight(3);
  circle(200,200,200);
  fill(150);
  stroke("grey");
  strokeWeight(1);
  circle(220,250,25);
  circle(260,210,15);
  circle(150,150,15);
  circle(200,170,25);
  circle(200,120,10);
  circle(160,240,10);

  fill("green");
  stroke("darkgreen");
  strokeWeight(5);
  rect(0,600,1000,700);

  fill("white");
  stroke(0);
  strokeWeight(0);
  text("Lorem ipsum dolor et si insamet",550,350,300,);
}
