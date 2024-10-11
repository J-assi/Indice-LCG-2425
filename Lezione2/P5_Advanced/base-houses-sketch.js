let canvasXMax=400, canvasYMax=400;
let moonXpos=255;
let moonYpos=50;
let slider;
function setup() {
  createCanvas(canvasXMax, canvasYMax);
  slider=createSlider(0,255,0,1);
  slider.position(0,canvasYMax-60);
  slider.size(150)
}
function draw() {
  let xStar=0
  let yStar=0
  background("navy");
  //moon
  frameRate(5);
  colorMode(RGB);
  fill(255, 255, 0, 200);
  stroke(255, 255, 255, 100)
  strokeWeight(10); //large outline
  circle(moonXpos, 50, 100)
  moonXpos= moonXpos+1;
  //overlappin circle
  if(moonXpos>canvasXMax){
    moonXpos=0;
  }
  moonXpos=frameCount % canvasXMax;
  stroke("navy");
  fill("navy");
  circle(moonXpos+50, 50,100);
  stroke(0);//black outline
  strokeWeight(1);//outline thickness
  fill("green");
  let y = 300;
  rect(0, y, canvasXMax, y);
  stroke(0);//black outline
  strokeWeight(1);//outline thickness
  let x_casa =0;
  let house_height = 100, house_width=100;
  for(let numero_case=0; numero_case<3; numero_case++){
    fill("white");
    rect(x_casa, y-house_height , house_width, house_height);
    fill("red");
    let roof_height=80;
    triangle(x_casa, y-house_height , x_casa+house_width, y-house_height, x_casa+(house_width/2), y-house_height-roof_height);
    x_casa += house_width+30;
  }
  for (let numero_stelle=0; numero_stelle <5; numero_stelle++){
    stroke("yellow");
    strokeWeight (random (20, 100));
    fill(random (220, 30));
    point(xStar,yStar);
    xStar= random(3, canvasXMax);
    yStar= random(0, canvasYMax);
  }
  //displays the x and y position of the mouse on the canvas
  stroke("white");
  strokeWeight(1);
  fill(255);//white text
  textSize(50)
  text(frameCount, 50, 500);
}
