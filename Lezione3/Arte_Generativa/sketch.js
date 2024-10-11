let cella = 34;  // Dimensione di ogni cella

function setup() {
  createCanvas(816, 816);
  frameRate(4);
  background("#DDD6D0");
  strokeWeight(5.5);
  stroke(0);
    // Calcola il numero di colonne nella griglia. 
  let colonne = width / cella;
    // Calcola il numero di righe nella griglia. 
  let righe = height / cella;

  for (let y = 0; y < righe; y++) {
    //La variabile y rappresenta l'indice di riga.
    for (let x = 0; x < colonne; x++)
      //La variabile x rappresenta l'indice di colonna. 
    {
      let xPos = x * cella;
        // Moltiplica l'indice x per la dimensione della cella, così da ottenere la posizione in pixel sulla griglia.
      let yPos = y * cella;
        // Moltiplica l'indice y per la dimensione della cella, così da ottenere la posizione in pixel sulla griglia.

      lineaRandom(xPos, yPos, cella);
        // Definisce le coordinate della linea casuale e la sua lunghezza, ovvero l'intera dimensione della cella.
    }
  }
}

function lineaRandom(x, y, cella) {
  let choice = int(random(4));  
  // Stabilisce un intervallo da 0 a 3
  if (choice === 0) {
    // Linea orizzontale
    line(x, y + cella / 2, x + cella, y + cella / 2);
      // Inizia dal punto (x, y + size / 2) (a metà altezza della cella) e termina in (x + size, y + size / 2), coprendo tutta la larghezza della cella sempre a metà altezza.
    stroke(0);
  } else if (choice === 1) {
    // Linea verticale
    line(x + cella / 2, y, x + cella / 2, y + cella);
      // Inizia da (x + size / 2, y) (a metà della larghezza della cella) e finisce in (x + size / 2, y + size), quindi la linea copre tutta l'altezza della cella.
    stroke(0);
  } else if (choice === 2) {
    // Diagonale sinistra
    line(x, y, x + cella, y + cella);
      // Inizia nell'angolo superiore sinistro (x, y) e termina nell'angolo inferiore destro (x + size, y + size).
    stroke(0);
  } else {
    // Diagonale destra
    line(x + cella, y, x, y + cella);
      // Inizia nell'angolo superiore destro (x, y) e termina nell'angolo inferiore sinistro (y + size, x + size).
    stroke(0);
  }
}
