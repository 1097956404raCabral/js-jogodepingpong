// Função de configuração, executada uma vez no início

function setup() {

  // Cria uma tela de 800x600 pixels

  createCanvas(800, 600);

  // Define a cor de fundo para branco

  background(255);

}

// Função de desenho, executada continuamente a cada frame

function draw() {

  // Verifica se o mouse está sendo pressionado

  if (mouseIsPressed) {

    // Define a cor do traço para preto

    stroke(0);

    // Define a espessura do traço

    strokeWeight(4);

    // Desenha uma linha entre a posição anterior e a posição atual do mouse

    line(mouseX, mouseY, pmouseX, pmouseY);

  }

}

// Função para limpar a tela quando a tecla 'c' é pressionada

function keyPressed() {

  if (key === 'c' || key === 'C') {

    // Define a cor de fundo para branco, limpando a tela

    background(255);

  }

}



