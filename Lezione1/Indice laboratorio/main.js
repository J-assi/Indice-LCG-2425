console.log("OK")

let cellSize = 130;
//let p;
//let y0;
//let x0;
//let r = 50;
let t = 0;
let N_cols;
let N_rows;

function setup(){
    createCanvas(900,900);
    //x0 = noise(1)* width;
    //y0 = noise(1)* height;
    //p = createVector(x0, y0);
    N_cols = floor(width / cellSize);
    N_rows = floor(height/ cellSize);
    cells = []
    for(let i= 0; i< N_rows * N_cols; i++){
        const col = (i % N_cols);
        const row = floor(i/ N_cols);
        cells.push(createVector(
            col* cellSize + noise(i)* cellSize,
            row* cellSize + noise(i)* cellSize
        ))
    }
}

function draw(){
    background(0);

    t = t + 0.03

   //p.x = x0 + r* cos(t)* noise(t);
    //p.y = y0 + r* sin(t)* noise(t);
noStroke()
    cells.forEach((p, i) => {
        const col = (i % N_cols);
        const row = floor(i/ N_cols);
        const px0 = (col * cellSize + noise(i)* cellSize)
        const py0 = (row* cellSize + noise(i)* cellSize)
        p.x = px0 
        +
        0.7* map(cos(t* noise(i)), -1, 1, -noise(i)* cellSize, cellSize- noise(i)* cellSize);
        p.y = py0 
        +
        0.7* map(sin(t* noise(i)), -1, 1, -noise(i)* cellSize, cellSize- noise(i)* cellSize);
    })

    for(let i= 1; i < N_cols - 1; i++)
        for(let j = 1; j < N_rows - 1; j++){
          const n1 = cells[(j - 1) * N_cols + (i - 1)]
          const n2 = cells[(j - 1) * N_cols + (i)]
          const n3 = cells[(j - 1) * N_cols + (i + 1)]
          
          const n4 = cells[(j) * N_cols + (i - 1)]
          const n6 = cells[(j) * N_cols + (i + 1)]
          const n7 = cells[(j + 1) * N_cols + (i - 1)]
          const n8 = cells[(j + 1) * N_cols + (i)]
          const n9 = cells[(j + 1) * N_cols + (i + 1)]

          const p = cells[j * N_cols + i]

          const neigh = [n1, n2, n3, n4, n6, n7, n8, n9]
          neigh.forEach(other => {
            let d = p.dist(other)
            if(d < cellSize * 1.25) {
                d = map(d, 0.5 * cellSize, 1.25 * cellSize, 255, 0)
                stroke(0, 0, d)
                strokeWeight(3)
            }
            line(p.x, p.y, other.x, other.y)
          })
          
        }

    //drawGrid()

    cells.forEach(p => {
        circle(p.x, p.y, 15) 
        noStroke()
        fill(0, 0, 0);
    })

    //circle(p.x, p.y, 20)
}


function drawGrid() {
stroke(255);
    for (let i=0; i < floor(width / cellSize); i++) {
        line(i * cellSize, 0, i * cellSize, height);
    }    
    for (let i= 0; i< floor(height/ cellSize); i++) {
        line(0, i* cellSize, width, i* cellSize);
    }
}