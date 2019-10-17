let mic;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    noStroke();
    mic = new p5.AudioIn();
    mic.start();

}

function draw() {
    background(255);
    var boca_w = 200;
    noStroke();
    push();
    translate(width / 2, height / 2);
    rectMode(CENTER);

    micLevel = mic.getLevel();
    mov = map(micLevel, 0, 1, 10, 500)

    //barba
    fill('orange');
    rect(0, 190, boca_w + mov, 700);

    //fondo boca
    fill('red');
    rect(0, 100, boca_w + mov, 100);

    //dientes abajo
    fill(255);
    rect(0, 135, boca_w + mov, 40, 10);

    //dientes arriba
    fill(255);
    rect(0, 60, boca_w + mov, 40, 10);
    pop();

    //front
    fill('orange');
    rect(0, 0, width, height / 1.8);

    //ojo izquierdo
    fill('green');
    ellipse(width * 0.25, height / 2.5, 40 + mov);
    fill(0);
    ellipse(width * 0.25, height / 2.5, 20);

    //ojo derecho
    fill('green');
    ellipse(width * 0.75, height / 2.5, 40 + mov);
    fill(0);
    ellipse(width * 0.75, height / 2.5, 20);

    //gafas izquierda
    noFill();
    stroke(0);
    rect(width * 0.19, height / 3.2, 150, 130);

    //gafas derecha
    noFill();
    stroke(0);
    rect(width * 0.69, height / 3.2, 150, 130);

    //nariz
    noFill();
    stroke(255);
    strokeWeight(10);
    arc(width * 0.5, height / 1.85, 30, 30, radians(230), radians(310));
    
}

function touchStarted() {
    getAudioContext().resume();
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}
