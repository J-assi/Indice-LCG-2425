let xsize = 900;
let ysize = 900;

function setup() {
  createCanvas(xsize, ysize);
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
  text("Lorem ipsum dolor et si insametLorem ipsum dolor et si insametLorem ipsum dolor et si insametLorem ipsum dolor et si insametLorem ipsum dolor et si insametLorem ipsum dolor et si insametLorem ipsum dolor et si insametLorem ipsum dolor et si insametLorem ipsum dolor et si insametLorem ipsum dolor et si insametLorem ipsum dolor et si insamet",
    450,150,250,);


  stroke("yellow");
  strokeWeight(10);
  let xstella_primordiale = 40;
  let ystella_primordiale = 40;
  point (xstella_primordiale, ystella_primordiale);
  let passo= 1;
  for(let i=0 ; i<5; i = i+passo){ 
    strokeWeight(i * 10)
    if(i%2==0){
      stroke("yellow");
    }else{
      stroke("white");
    }
    point(xstella_primordiale * i, ystella_primordiale * i);
  }

  stroke(220);
  fill("white")
  strokeWeight(0);
  rect(300,450,150,150);
  fill("violet");
  triangle(300,450, 375,330, 450,450);
  fill("lightblue");
  rect(320,470,30,30);
  rect(380,470,30,30);
  fill("brown");
  rect(390,530,40,70);

  stroke(220);
  fill("white");
  strokeWeight(0);
  rect(530,450,150,150);
  fill("orange");
  triangle(530,450, 605,330, 680,450);
  fill("lightblue");
  rect(550,470,30,30);
  rect(610,470,30,30);
  fill("brown");
  rect(620,530,40,70);
}

