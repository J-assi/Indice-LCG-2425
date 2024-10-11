let canvasXMax = 400;
let canvasYMax = 400;

function setup() {
  createCanvas(canvasXMax, canvasYMax);
  background(220);
}

function draw() {
  textSize(15);
  let string_toprint= "Mouse x="+mouseX+", Mouse y="+mouseY;
  text(string_toprint, 20, 20);
  line(0,mouseX, canvasXMax,mouseY);
  if(mouseIsPressed == true){
    if(mouseButton == RIGHT){
      background(220)}
    stroke("yellow")
  } else{
    stroke("black")
  }
  
}


