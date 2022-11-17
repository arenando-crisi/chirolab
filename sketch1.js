let serial;
let options = {baudRate: 1000000};

let stato = 0;

var m1 = 0;
var m2 = 0;
var m3 = 0;
var m4 = 0;

var m1i = 0;
var m2i = 0;
var m3i = 0;
var m4i = 0;

let lock1 = false;
let lock2 = false;
let lock3 = false;
let lock4 = false;
let mp = false;
let mp1 = false;
let mp2 = false;
let mp3 = false;
let mp4 = false;

var c1;
var c2;
var c3;
var c4;

var p1;
var p2;
var p3;
var p4;

var t1;
var t2;
var t3;
var t4;

let a1;
let a2;
let a3;
let a4;

let img;
let img1;
let scritta;
let sfondo;
let sfondo1;

let hn;
let hnr;

let input1;
let input2;
let input3;
let input4;
let input5;

let nome;
let cognome;
let giorno;
let mese;
let anno;

let c = 0;
let vi = 0;
let t = 270;
let d = 330;

let vit;
let test;
let cuor;
let destin;

let vx2, vy2, vx3, vy3, vx4, vy4;
let tx2, ty2, tx3, ty3, tx4, ty4;
let cx2, cy2, cx3, cy3, cx4, cy4;
let dx2, dy2, dx3, dy3, dx4, dy4;

let m1x;
let m2x;
let m3x;
let m4x;

let m1ix;
let m2ix;
let m3ix;
let m4ix;

let v1, v2, v3, v4;
let v1i, v2i, v3i, v4i;

let v = 0;

var pdf;

let buleana = false;
let buleana1 = false;
let buleana2 = false;

let cont = 0;

let angolo1;
let angolo3;

let angolo1i;
let angolo3i;

function setup() {
  createCanvas(windowWidth, windowHeight);
  serial = new p5.SerialPort(); // make a new instance of the serialport library
  serial.on('list', printList); // set a callback function for the serialport list event
  serial.on('connected', serverConnected); // callback for connecting to the server
  serial.on('open', portOpen); // callback for the port opening
  serial.on('data', serialEvent); // callback for when new data arrives
  serial.on('error', serialError); // callback for errors
  serial.on('close', portClose); // callback for the port closing

  //serial.list(); // list the serial ports
  serial.open('COM6', options); // open a serial por

  input1 = createInput();
  input1.position(windowWidth/2.4 , windowHeight/1.9);
  input1.size(windowWidth/3.8, windowWidth/53);
  input1.hide();

  input2 = createInput();
  input2.position(windowWidth/2.4 , windowHeight/1.9 + windowHeight/13.3);
  input2.size(windowWidth/3.8, windowWidth/53);
  input2.hide();

  input3 = createSelect();
  input3.position(windowWidth/2.4 , windowHeight/1.9 + windowHeight/13.3 + windowHeight/13.3);
  input3.size(windowWidth/14, windowWidth/53);
  input3.hide();

  for(let i=1; i<32; i++){
    input3.option(i);
  }

  input4 = createSelect();
  input4.position(windowWidth/2.4 + windowWidth/10.15 , windowHeight/1.9 + windowHeight/13.3 + windowHeight/13.3);
  input4.size(windowWidth/14, windowWidth/53);
  input4.hide();

  for(let j=1; j<13; j++){
    input4.option(j);
  }

  input5 = createSelect();
  input5.position(windowWidth/2.4 + windowWidth/10.15 + windowWidth/10.15 , windowHeight/1.9 + windowHeight/13.3 + windowHeight/13.3);
  input5.size(windowWidth/14, windowWidth/53);
  input5.hide();

  for(let k=2020; k>1900; k--){
    input5.option(k);
  }

  pdf = createPDF();
  pdf.beginRecord();
}

function draw() {
  m1 = map(v1,6.75,238.75,0,255);
  m2 = map(v2,7,238.75,0,255);
  m3 = map(v3,8.25,240,0,255);
  m4 = map(v4,7,238.75,0,255);

  m1i = map(v1i,6.75,238.75,0,255);
  m2i = map(v2i,7,238.75,0,255);
  m3i = map(v3i,8.25,240,0,255);
  m4i = map(v4i,7,238.75,0,255);

  switch(stato){
    case 0:
      imageMode(CENTER);
      image(sfondo, windowWidth/3 , windowHeight/2 , windowWidth/0.57 , windowWidth/1.15);
      imageMode(CORNER);
      image(logolineo, windowWidth/26 , windowWidth/38.4, windowWidth/10.9, windowWidth/42.6);
      imageMode(CENTER);
      image(manodestra, windowWidth/2, windowHeight/2, windowWidth/5.36, windowWidth/4.41);
      fill(255);
      noStroke();
      textFont(hnr);
      textAlign(CENTER);
      textSize(windowWidth/80);
      text('Inserisci la mano destra per cominciare', windowWidth/2, windowHeight/2.25 + windowWidth/8 + windowHeight/10.3);


      serial.write(1);
      if (m1i > 0){
        stato = 100;
      }

      break;

    case 100:
      if (v1 == 78/4){
        stato = 1;
      }
      imageMode(CENTER);
      image(sfondo, windowWidth/3 , windowHeight/2 , windowWidth/0.57 , windowWidth/1.15);
      imageMode(CORNER);
      image(logolineo, windowWidth/26 , windowWidth/38.4, windowWidth/10.9, windowWidth/42.6);
      imageMode(CENTER);
      image(manodestra, windowWidth/2, windowHeight/2, windowWidth/5.36, windowWidth/4.41);
      fill(255);
      noStroke();
      textFont(hnr);
      textAlign(CENTER);
      textSize(windowWidth/80);
      text('Inserisci la mano destra per cominciare', windowWidth/2, windowHeight/2.25 + windowWidth/8 + windowHeight/10.3);

      break;

    case 1:

      imageMode(CENTER);
      image(img, windowWidth/3 , windowHeight/2 , windowWidth/0.57 , windowWidth/1.15);

      if ((windowWidth/1.126 - ((windowWidth/7)/2)) < mouseX && mouseX < (windowWidth/1.126 + ((windowWidth/7)/2)) && (windowHeight/1.115 - ((windowWidth/29)/2)) < mouseY && mouseY < (windowHeight/1.115 + ((windowWidth/29)/2))) {
        buleana = true;
        if (mp4 == true){
          serial.write(2);
          stato = 2;
          mp4 = false;
        }
      } else {
        buleana = false;
      }

      if ((windowWidth/8.9 - ((windowWidth/7)/2)) < mouseX && mouseX < (windowWidth/8.9 + ((windowWidth/7)/2)) && (windowHeight/1.115 - ((windowWidth/29)/2)) < mouseY && mouseY < (windowHeight/1.115 + ((windowWidth/29)/2))) {
        buleana1 = true;
        if (mp4 == true){
            window.open("index.html", "_self");
            mp4 = false;
        }
      } else {
        buleana1 = false;
      }


      if ((windowWidth/1.126 + ((windowWidth/7)/2) - (windowWidth/69.8)) < mouseX && mouseX < (windowWidth/1.126 + ((windowWidth/7)/2)) && (windowHeight/38.4 - ((windowWidth/69.8)/2)+ (windowWidth/69.8)) < mouseY && mouseY < (windowHeight/38.4 + ((windowWidth/69.8)/2)) + (windowWidth/69.8)) {
        buleana2 = true;
      } else {
        buleana2 = false;
      }

      strokeWeight(1);
      imageMode(CENTER);
      if (buleana == false) {
        image(pulsante, windowWidth/1.126, windowHeight/1.115, windowWidth/7, windowWidth/29);
      }else{
        image(pulsantep , windowWidth/1.126, windowHeight/1.115, windowWidth/7, windowWidth/29);
      }
      if (buleana1 == false) {
        image(pulsante, windowWidth/8.9, windowHeight/1.115, windowWidth/7, windowWidth/29);
      }else{
        image(pulsantep , windowWidth/8.9, windowHeight/1.115, windowWidth/7, windowWidth/29);
      }

      a1 = map(m1, 0, 255, 0, windowHeight/3.6);
      b1 = map(m2, 0, 255, 0, windowHeight/3.6);
      c1 = map(m3, 0, 255, 0, windowHeight/3.6);
      d1 = map(m4, 0, 255, 0, windowHeight/3.6);

      if (buleana2 == false) {
        noStroke();
        angleMode(DEGREES);

        rectMode(CORNER);
        fill(60);
        rect(windowWidth/1.55 , windowHeight/1.63 - windowHeight/15, windowWidth/137 , -windowHeight/3.6);
        if (p1 == 0){
          fill("#C9E8FB");
        }else{
          fill(90);
        }
        rect(windowWidth/1.55 , windowHeight/1.63 - windowHeight/15 , windowWidth/137 , -a1);

        fill(60);
        rect(windowWidth/1.55 + windowWidth/14.54, windowHeight/1.63  - windowHeight/15, windowWidth/137 , -windowHeight/3.6);
        if (p2 == 0){
          fill("#83C8E3");
        }else{
          fill(110);
        }
        rect(windowWidth/1.55 + windowWidth/14.54 , windowHeight/1.63 - windowHeight/15 , windowWidth/137, -b1);

        fill(60);
        rect(windowWidth/1.55 + windowWidth/14.54 + windowWidth/14.54, windowHeight/1.63 - windowHeight/15, windowWidth/137, -windowHeight/3.6);
        if (p3 == 0){
          fill("#3F99BA");
        }else{
          fill(130);
        }
        rect(windowWidth/1.55 + windowWidth/14.54 + windowWidth/14.54, windowHeight/1.63 - windowHeight/15, windowWidth/137, -c1);

        fill(60);
        rect(windowWidth/1.55 + windowWidth/14.54 + windowWidth/14.54 + windowWidth/14.54, windowHeight/1.63 - windowHeight/15, windowWidth/137, -windowHeight/3.6);
        if (p4 == 0){
          fill("#34568C");
        }else{
          fill(150);
        }
        rect(windowWidth/1.55 + windowWidth/14.54 + windowWidth/14.54 + windowWidth/14.54, windowHeight/1.63 - windowHeight/15, windowWidth/137, -d1);

        a1 = map(m1, 0, 255, 0, 100);
        b1 = map(m2, 0, 255, 0, 100);
        c1 = map(m3, 0, 255, 0, 100);
        d1 = map(m4, 0, 255, 0, 100);

        textAlign(LEFT);
        textSize(windowWidth/102.4);
        textFont(hnr);
        noStroke();
        fill(255);
        text(int(a1), windowWidth/1.555, windowHeight/3.61 - windowHeight/15);
        text(int(b1), windowWidth/1.555 + windowWidth/14.54, windowHeight/3.61 - windowHeight/15);
        text(int(c1), windowWidth/1.555 + windowWidth/14.54 + windowWidth/14.54, windowHeight/3.61 - windowHeight/15);
        text(int(d1), windowWidth/1.555 + windowWidth/14.54 + windowWidth/14.54 + windowWidth/14.54, windowHeight/3.61 - windowHeight/15);

        imageMode(CENTER);
        image(vit, windowWidth/1.54, windowHeight/1.46 - windowHeight/15, windowWidth/45.7, windowWidth/32);
        image(test, windowWidth/1.54 + windowWidth/14.54, windowHeight/1.46 - windowHeight/15, windowWidth/64, windowWidth/31.4);
        image(cuor, windowWidth/1.54 + windowWidth/14.54 + windowWidth/14.54, windowHeight/1.46 - windowHeight/15, windowWidth/56.4, windowWidth/32);
        image(destin, windowWidth/1.54 + windowWidth/14.54 + windowWidth/14.54 + windowWidth/14.54, windowHeight/1.46 - windowHeight/15, windowWidth/36.2, windowWidth/32);

        fill('#baa079');
        textFont(gr);
        textSize(windowWidth/48);
        textAlign(CENTER);
        text('vita', windowWidth/1.54, windowHeight/1.46 - windowHeight/15 + windowHeight/15);
        text('testa', windowWidth/1.54 + windowWidth/14.54, windowHeight/1.46 - windowHeight/15 + windowHeight/15);
        text('cuore', windowWidth/1.54 + windowWidth/14.54 + windowWidth/14.54, windowHeight/1.46 - windowHeight/15 + windowHeight/15);
        text('destino', windowWidth/1.54 + windowWidth/14.54 + windowWidth/14.54 + windowWidth/14.54, windowHeight/1.46 - windowHeight/15 + windowHeight/15);

      }else{
        image(vitab, windowWidth/1.63, windowHeight/2.6 - windowHeight/15, windowWidth/71.1, windowWidth/49.7);
        image(testab, windowWidth/1.63, windowHeight/2.1 - windowHeight/15, windowWidth/88, windowWidth/44.6);
        image(cuoreb, windowWidth/1.63, windowHeight/1.76 - windowHeight/15, windowWidth/88, windowWidth/48);
        image(destinob, windowWidth/1.63, windowHeight/1.52 - windowHeight/15, windowWidth/60, windowWidth/53.3);
        textAlign(LEFT);
        textSize(windowWidth/48);
        textFont(gr);
        noStroke();
        fill("#C9E8FB");
        text('vita', windowWidth/1.58, windowHeight/2.6 - windowHeight/100 - windowHeight/15);
        fill("#83C8E3");
        text('testa', windowWidth/1.58, windowHeight/2.1 - windowHeight/100 - windowHeight/15);
        fill("#3F99BA");
        text('cuore', windowWidth/1.58, windowHeight/1.76 - windowHeight/100 - windowHeight/15);
        fill("#34568C");
        text('destino', windowWidth/1.58, windowHeight/1.52 - windowHeight/100 - windowHeight/15);
        textFont(hnr);
        textSize(windowWidth/102.4);
        fill(255);
        text('determina la durata e la qualità della vita', windowWidth/1.38, windowHeight/2.6 - windowHeight/15, windowWidth/5);
        text('rappresenta le capacità cognitive e la determinazione individuale', windowWidth/1.38, windowHeight/2.1 - windowHeight/15, windowWidth/5);
        text('esprime la durata, la qualità e la stabilità delle relazioni', windowWidth/1.38, windowHeight/1.76 - windowHeight/15, windowWidth/5);
        text('definisce le probabilità di successo in termini di realizzazione personale', windowWidth/1.38, windowHeight/1.52 - windowHeight/15, windowWidth/5);

      }
      noStroke();
      fill(255);
      textAlign(CENTER, CENTER);
      textSize(windowWidth/102.4);
      textFont(hn);
      text('Conferma', windowWidth/1.126 , windowHeight/1.12);
      text('Esci', windowWidth/8.9 , windowHeight/1.12);
      text('linee chirologiche', windowWidth/1.126, windowWidth/38.4);
      image(info, windowWidth/1.126 + ((windowWidth/7)/2) - ((windowWidth/69.8)/2), windowWidth/38.4, windowWidth/69.8, windowWidth/69.8);

      imageMode(CORNER);
      image(logolineo, windowWidth/26 , windowWidth/38.4, windowWidth/10.9, windowWidth/42.6);

      strokeWeight(3);
      noFill();

      if (p1 == 0){
        stroke("#C9E8FB");
      }else{
        stroke(90);
      }
      /*vx2 = -0.09 * m1 + windowWidth/2.71;
      vy2 = 0.04 * m1 + windowWidth/52.93 + windowHeight/2;
      vx3 = -0.28 * m1 + windowWidth/2.74; //equazioni che mi permettono di mettere in relazione la posizione dei punto di mio interesse con il modificatore
      vy3 =  0.19 * m1 + windowWidth/46.52 + windowHeight/2;
      vx4 = -0.18 * m1 + windowWidth/2.78;
      vy4 = 0.52  * m1 + windowWidth/40.39 + windowHeight/2;
      bezier (windowWidth/2.68, windowHeight/2 + windowWidth/59.04, vx2, vy2, vx3, vy3, vx4, vy4);
      print('ww: '+windowWidth);
      print('wh: '+windowHeight);
      //line(vx4, vy4, vx3, vy3);*/

      angleMode(DEGREES);
      angolo1 = map(m1, 0, 255, 0, 86);
      arc(windowWidth/2.49, windowWidth/11.37 + windowHeight/2, windowWidth/6.56, windowWidth/6.56, - 120 - angolo1 , -115);

      if (p2 == 0){
        stroke("#83C8E3");
      }else{
        stroke(110);
      }
      tx2 = -0.09* m2 + windowWidth/2.74;
      ty2 = 0.05* m2 + windowWidth/(-307) + windowHeight/2;
      tx3 = -0.35 * m2 + windowWidth/2.78;
      ty3 =  0.22 * m2 + windowHeight/2;
      tx4 = -0.49 * m2 + windowWidth/2.83;
      ty4 =  0.37 * m2 + windowWidth/219.29 + windowHeight/2;
      bezier (windowWidth/2.70, -windowWidth/153.5 + windowHeight/2, tx2, ty2, tx3, ty3, tx4, ty4);
      //line(tx4, ty4, tx3, ty3);

      if (p3 == 0){
        stroke("#3F99BA");
      }else{
        stroke(130);
      }
      /*cx2 = 0.25 * m3 + windowWidth/3.79;
      cy2 = -0.02 * m3 + windowWidth/73.1 + windowHeight/2;
      cx3 =  0.42 * m3 + windowWidth/3.75;
      cy3 = -0.11 * m3 + windowWidth/76.75 + windowHeight/2;
      cx4 =  0.49 * m3 + windowWidth/3.72;
      cy4 = -0.21 * m3 + windowWidth/76.75 + windowHeight/2;
      bezier (windowWidth/3.83, windowWidth/73.1 + windowHeight/2, cx2, cy2, cx3, cy3, cx4, cy4);
      //line(cx4, cy4, cx3, cy3);*/

      angleMode(DEGREES);
      angolo3 = map(m3, 0, 255, 0, 40);
      arc(windowWidth/3.93,- windowWidth/8.52 + windowHeight/2, windowWidth/3.76, windowWidth/3.76, 80 - angolo3 , 87);

      if (p4 == 0){
        stroke("#34568C");
      }else{
        stroke(150);
      }
      dx2 = -0.07 * m4 + windowWidth/3.15;
      dy2 =  -0.24 * m4 + windowWidth/9.42 + windowHeight/2;
      dx3 =  -0.18 * m4 + windowWidth/3.16;
      dy3 = -0.47 * m4 + windowWidth/9.78 + windowHeight/2;
      dx4 = -0.29 * m4 + windowWidth/3.18;
      dy4 =  -0.61 * m4 + windowWidth/10.44 + windowHeight/2;
      bezier (windowWidth/3.14, windowWidth/9.03 + windowHeight/2, dx2, dy2, dx3, dy3, dx4, dy4);
      //line(dx4, dy4, dx3, dy3);

      let tot = m1+m2+m3+m4;
      a1 = ((m1)*360)/tot;
      b1 = ((m2)*360)/tot;
      c1 = ((m3)*360)/tot;
      d1 = ((m4)*360)/tot;

      noFill();
      strokeWeight(9);
      strokeCap(SQUARE);
      if (p1 == 0){
        stroke("#C9E8FB");
      }else{
        stroke(90);
      }
      arc(windowWidth/3 , windowHeight/2 , windowWidth/2.48 , windowWidth/2.48 , 0 , a1);

      if (p2 == 0){
        stroke("#83C8E3");
      }else{
        stroke(110);
      }
      arc(windowWidth/3 , windowHeight/2 , windowWidth/2.48 , windowWidth/2.48 , a1 , a1+b1);

      if (p3 == 0){
        stroke("#3F99BA");
      }else{
        stroke(130);
      }
      arc(windowWidth/3 , windowHeight/2 , windowWidth/2.48 , windowWidth/2.48  , a1+b1 , a1+b1+c1);

      if (p4 == 0){
        stroke("#34568C");
      }else{
        stroke(150);
      }
      arc(windowWidth/3 , windowHeight/2 , windowWidth/2.48 , windowWidth/2.48 , a1+b1+c1 , 360);

      break;

    case 2:
      if ((windowWidth/1.126 - ((windowWidth/7)/2)) < mouseX && mouseX < (windowWidth/1.126 + ((windowWidth/7)/2)) && (windowHeight/1.115 - ((windowWidth/29)/2)) < mouseY && mouseY < (windowHeight/1.115 + ((windowWidth/29)/2))) {
        buleana = true;
        if (mp4 == true){
            stato = 3;
            serial.write(3);
            mp4 = false;
        }
      } else {
        buleana = false;
        lock1 = false;
      }

      if ((windowWidth/8.9 - ((windowWidth/7)/2)) < mouseX && mouseX < (windowWidth/8.9 + ((windowWidth/7)/2)) && (windowHeight/1.115 - ((windowWidth/29)/2)) < mouseY && mouseY < (windowHeight/1.115 + ((windowWidth/29)/2))) {
        buleana1 = true;
        if (mp4 == true){
          serial.write(4);
          stato = 1;
          mp4 = false;
        }
      } else {
        buleana1 = false;
      }

      strokeWeight(1);
      imageMode(CENTER);
      image(sfondo, windowWidth/3 , windowHeight/2 , windowWidth/0.57 , windowWidth/1.15);
      imageMode(CORNER);
      image(logolineo, windowWidth/26 , windowWidth/38.4, windowWidth/10.9, windowWidth/42.6);
      noStroke();
      fill(255);
      textAlign(CENTER, CENTER);
      textSize(windowWidth/102.4);
      textFont(hn);
      imageMode(CENTER);
      if (buleana == false) {
        image(pulsante, windowWidth/1.126, windowHeight/1.115, windowWidth/7, windowWidth/29);
      }else{
        image(pulsantep , windowWidth/1.126, windowHeight/1.115, windowWidth/7, windowWidth/29);
      }
      if (buleana1 == false) {
        image(pulsante, windowWidth/8.9, windowHeight/1.115, windowWidth/7, windowWidth/29);
      }else{
        image(pulsantep , windowWidth/8.9, windowHeight/1.115, windowWidth/7, windowWidth/29);
      }
      text('Conferma', windowWidth/1.126 , windowHeight/1.12);
      text('Modifica', windowWidth/8.9 , windowHeight/1.12);


      if (m1i <= m1){
        t1 = "";
      } else {
        if (m1 >= 150){
          t1 = "Lieve riduzione della aspettativa di vita, possibile comparsa di patologie. ";
        } else if (m1 >= 50){
          t1 = "Aspettativa di vita sotto la media, maggiore propensione allo sviluppo di patologie debilitanti. ";
        } else {
          t1 = "Aspettativa di vita ridotta a livelli critici, altissimo rischio di malattie gravi, alte probabilità di incidenti. ";
        }
      }

      if (m2i <= m2){
        t2 = "";
      } else {
        if (m2 >= 150){
          t2 = "Lievi difficoltà cognitive e di concentrazione, leggero aumento dell'influenzabilità. ";
        } else if (m2 >= 50){
          t2 = "Netta diminuzione della capacità di intraprendere e portare avanti progetti a lungo termine. Concentrazione e capacità cognitive sotto la media. ";
        } else {
          t2 = "Quasi totale assenza di determinazione, incapacità di portare avanti qualsiasi progetto che non sia a breve termine. ";
        }
      }

      if (m3i <= m3){
        t3 = "";
      } else {
        if (m3 >= 150){
          t3 = "Lieve calo delle abiità relazionali, possibili tensioni nei rapporti con gli affetti personali. ";
        } else if (m3 >= 50){
          t3 = "Scarse abilità sociali e di relazione, difficoltà nell'instaurare rapporti soddisfacienti. ";
        } else {
          t3 = "Totale incapacità di relazionarsi agli altri ed instaurare rapporti soddisfacenti, possibile solitudine e depressione. ";
        }
      }

      if (m4i <= m4){
        t4 = "";
      } else {
        if (m4 >= 150){
          t4 = "Leggeri imprevisti nel percorso di vita desiderato. ";
        } else if (m4 >= 50){
          t4 = "Scarse probabilità di realizzarsi a livello personale e professionale. ";
        } else {
          t4 = "Fallimento professionale e personale quasi certo. ";
        }
      }

      textSize(windowWidth/48);
      textFont(gr);
      fill('#baa079');
      textAlign(LEFT);
      text("vita", windowWidth/3.1, windowHeight/2.3);
      text("testa", windowWidth/3.1, windowHeight/2.3 + windowHeight/11.1);
      text("cuore", windowWidth/3.1, windowHeight/2.3 + windowHeight/11.1 + windowHeight/11.1);
      text("destino", windowWidth/3.1, windowHeight/2.3 + windowHeight/11.1 + windowHeight/11.1 + windowHeight/11.1);

      textSize(windowWidth/102.4);
      fill(255);
      textFont(hnr);
      textAlign(LEFT);
      text(t1, windowWidth/2.3 , windowHeight/2.3 , windowWidth/3);
      text(t2, windowWidth/2.3 , windowHeight/2.3 + windowHeight/11.1 , windowWidth/3);
      text(t3, windowWidth/2.3 , windowHeight/2.3 + windowHeight/11.1 + windowHeight/11.1 , windowWidth/3);
      text(t4, windowWidth/2.3 , windowHeight/2.3 + windowHeight/11.1 + windowHeight/11.1 + windowHeight/11.1 , windowWidth/3);

      imageMode(CENTER);
      image(vit, windowWidth/3.5, windowHeight/2.3,windowWidth/71.1, windowWidth/49.7);
      image(test, windowWidth/3.5, windowHeight/2.3 + windowHeight/11.1 ,windowWidth/88, windowWidth/44.6);
      image(cuor, windowWidth/3.5, windowHeight/2.3 + windowHeight/11.1 + windowHeight/11.1 ,windowWidth/88, windowWidth/48);
      image(destin, windowWidth/3.5, windowHeight/2.3 + windowHeight/11.1 + windowHeight/11.1 + windowHeight/11.1 , windowWidth/60, windowWidth/53.3);

      textSize(windowWidth/30.72);
      textFont(gr);
      fill(255);
      textAlign(CENTER);
      text("effetti collaterali", windowWidth/2, windowHeight/3.6);

      break;

      case 3:
        if ((windowWidth/1.126 - ((windowWidth/7)/2)) < mouseX && mouseX < (windowWidth/1.126 + ((windowWidth/7)/2)) && (windowHeight/1.115 - ((windowWidth/29)/2)) < mouseY && mouseY < (windowHeight/1.115 + ((windowWidth/29)/2))) {
          buleana = true;
          if (mp4 == true){
            nome = input1.value();
            cognome = input2.value();
            giorno = input3.value();
            mese = input4.value();
            anno = input5.value();
            if (giorno < 32 && giorno > 0 && mese < 13 && mese > 0 && anno > 1900 && anno < 2022){
              stato = 40;
              serial.write(3);
            }
            mp4 = false;
          }
        } else {
          buleana = false;
        }
        strokeWeight(1);
        imageMode(CENTER);
        image(sfondo, windowWidth/3 , windowHeight/2 , windowWidth/0.57 , windowWidth/1.15);
        imageMode(CORNER);
        image(logolineo, windowWidth/26 , windowWidth/38.4, windowWidth/10.9, windowWidth/42.6);
        noStroke();
        fill(255);
        textAlign(CENTER, CENTER);
        textSize(windowWidth/102.4);
        textFont(hn);
        imageMode(CENTER);
        if (buleana == false) {
          image(pulsante, windowWidth/1.126, windowHeight/1.115, windowWidth/7, windowWidth/29);
        }else{
          image(pulsantep , windowWidth/1.126, windowHeight/1.115, windowWidth/7, windowWidth/29);
        }
        text('Conferma', windowWidth/1.126 , windowHeight/1.12);

        textSize(windowWidth/30.72);
        textFont(gr);
        fill(255);
        textAlign(CENTER);
        text("anagrafica paziente", windowWidth/2, windowHeight/3.6);

        textAlign(LEFT);
        textSize(windowWidth/102.4);
        textFont(hnr);
        text('Nome', windowWidth/3.2 , windowHeight/1.83);
        text('Cognome', windowWidth/3.2 , windowHeight/1.83 + windowHeight/13.3);
        text('Data di nascita', windowWidth/3.2 , windowHeight/1.83 + windowHeight/13.3 + windowHeight/13.3);

        textAlign(CENTER);
        text("Si prega di inserire i dati personali per completare il referto medico. I dati non verranno divulgati, nè utilizzati a fini commerciali",windowWidth/2 - ((windowWidth/2.7)/2), windowHeight/2.25, windowWidth/2.7);

        input1.show();
        input2.show();
        input3.show();
        input4.show();
        input5.show();

        break;

      case 40:
        imageMode(CORNER);
        image(recap, 0 , - (cont), windowWidth, windowWidth/0.37);
        input1.hide();
        input2.hide();
        input3.hide();
        input4.hide();
        input5.hide();

        imageMode(CENTER);
        image(pulsante, windowWidth/2.48, windowWidth/0.44 - cont, windowWidth/7, windowWidth/29);
        image(pulsante, windowWidth/1.62, windowWidth/0.44 - cont, windowWidth/7, windowWidth/29);
        if ((windowWidth/2.48 - ((windowWidth/7)/2)) < mouseX && mouseX < (windowWidth/2.48 + ((windowWidth/7)/2)) && (windowWidth/0.44 - cont - ((windowWidth/29)/2)) < mouseY && mouseY < (windowWidth/0.44 - cont + ((windowWidth/29)/2))) {
          image(pulsantep, windowWidth/2.48, windowWidth/0.44 - cont, windowWidth/7, windowWidth/29);
          if (mp4 == true){
            stato = 4;
            serial.write(3);
          }
        }

        if ((windowWidth/1.62 - ((windowWidth/7)/2)) < mouseX && mouseX < (windowWidth/1.62 + ((windowWidth/7)/2)) && (windowWidth/0.44 - cont - ((windowWidth/29)/2)) < mouseY && mouseY < (windowWidth/0.44 - cont + ((windowWidth/29)/2))) {
          image(pulsantep, windowWidth/1.62, windowWidth/0.44 - cont, windowWidth/7, windowWidth/29);
        }

        textAlign(CENTER, CENTER);
        textSize(windowWidth/102.4);
        textFont(hn);
        noStroke();
        fill(255);
        text('Scarica', windowWidth/2.48, windowWidth/0.44 - cont);
        text('Invia a casa', windowWidth/1.62, windowWidth/0.44 - cont);
        textFont(hnr);
        textAlign(LEFT);
        textSize(windowWidth/88);
        text(t1 + t2 + t3 + t4 , windowWidth/1.66 , windowWidth/5.13 - cont, windowWidth/3.09);

        strokeWeight(3);
        noFill();
        stroke(125);

        /*vx2 = -0.09 * m1i + windowWidth/2.71 - windowWidth/200;
        vy2 = 0.04 * m1i + windowWidth/3.9 - cont + windowWidth/150;
        vx3 = -0.28 * m1i + windowWidth/2.74 - windowWidth/200; //equazioni che mi permettono di mettere in relazione la posizione dei punto di mio interesse con il modificatore
        vy3 =  0.19 * m1i + windowWidth/3.86 - cont + windowWidth/150;
        vx4 = -0.18 * m1i + windowWidth/2.78 - windowWidth/200;
        vy4 = 0.52  * m1i + windowWidth/3.81 - cont + windowWidth/150;
        bezier (windowWidth/2.68 - windowWidth/200,windowWidth/3.93 - cont + windowWidth/150, vx2, vy2, vx3, vy3, vx4, vy4);
        //line(vx4, vy4, vx3, vy3);*/

        angleMode(DEGREES);
        angolo1i = map(m1i, 0, 255, 0, 86);
        arc(windowWidth/2.49 - windowWidth/200, windowWidth/3.07 + windowWidth/150 - cont, windowWidth/6.56, windowWidth/6.56, - 120 - angolo1i , -115);

        tx2 = -0.09* m2i + windowWidth/2.74 - windowWidth/200;
        ty2 = 0.05* m2i + windowWidth/4.26 - cont + windowWidth/150;
        tx3 = -0.35 * m2i + windowWidth/2.78 - windowWidth/200;
        ty3 =  0.22 * m2i + windowWidth/4.21 - cont + windowWidth/150;
        tx4 = -0.49 * m2i + windowWidth/2.83 - windowWidth/200;
        ty4 =  0.37 * m2i + windowWidth/4.13 - cont + windowWidth/150;
        bezier (windowWidth/2.70 - windowWidth/200, windowWidth/4.32 - cont + windowWidth/150, tx2, ty2, tx3, ty3, tx4, ty4);
        //line(tx4, ty4, tx3, ty3);

        /*cx2 = 0.25 * m3i + windowWidth/3.79 - windowWidth/200;
        cy2 = -0.02 * m3i + windowWidth/3.98 - cont + windowWidth/150;
        cx3 =  0.42 * m3i + windowWidth/3.75 - windowWidth/200;
        cy3 = -0.11 * m3i + windowWidth/3.99 - cont + windowWidth/150;
        cx4 =  0.49 * m3i + windowWidth/3.72 - windowWidth/200;
        cy4 = -0.21 * m3i + windowWidth/3.99 - cont + windowWidth/150;
        bezier (windowWidth/3.83 - windowWidth/200, windowWidth/3.98 - cont + windowWidth/150, cx2, cy2, cx3, cy3, cx4, cy4);
        //line(cx4, cy4, cx3, cy3);*/

        angleMode(DEGREES);
        angolo3i = map(m3i, 0, 255, 0, 40);
        arc(windowWidth/3.93 - windowWidth/200, windowWidth/8.29 + windowWidth/150 - cont, windowWidth/3.76, windowWidth/3.76, 80 - angolo3i , 87);

        dx2 = -0.07 * m4i + windowWidth/3.15 - windowWidth/200;
        dy2 =  -0.24 * m4i + windowWidth/2.91 - cont + windowWidth/150;
        dx3 =  -0.18 * m4i + windowWidth/3.16 - windowWidth/200;
        dy3 = -0.47 * m4i + windowWidth/2.94 - cont + windowWidth/150;
        dx4 = -0.29 * m4i + windowWidth/3.18 - windowWidth/200;
        dy4 =  -0.61 * m4i + windowWidth/3 - cont + windowWidth/150;
        bezier (windowWidth/3.14 - windowWidth/200, windowWidth/2.87 - cont + windowWidth/150, dx2, dy2, dx3, dy3, dx4, dy4);
        //line(dx4, dy4, dx3, dy3);

        stroke("#C9E8FB");
        /*vx2 = -0.09 * m1 + windowWidth/2.71 - windowWidth/200;
        vy2 = 0.04 * m1 + windowWidth/3.9 - cont + windowWidth/150;
        vx3 = -0.28 * m1 + windowWidth/2.74 - windowWidth/200; //equazioni che mi permettono di mettere in relazione la posizione dei punto di mio interesse con il modificatore
        vy3 =  0.19 * m1 + windowWidth/3.86 - cont + windowWidth/150;
        vx4 = -0.18 * m1 + windowWidth/2.78 - windowWidth/200;
        vy4 = 0.52  * m1 + windowWidth/3.81 - cont + windowWidth/150;
        bezier (windowWidth/2.68 - windowWidth/200,windowWidth/3.93 - cont + windowWidth/150, vx2, vy2, vx3, vy3, vx4, vy4);
        //line(vx4, vy4, vx3, vy3);*/

        angleMode(DEGREES);
        angolo1 = map(m1, 0, 255, 0, 86);
        arc(windowWidth/2.49 - windowWidth/200, windowWidth/3.07 + windowWidth/150 - cont, windowWidth/6.56, windowWidth/6.56, - 120 - angolo1 , -115);

        stroke("#83C8E3");
        tx2 = -0.09* m2 + windowWidth/2.74 - windowWidth/200;
        ty2 = 0.05* m2 + windowWidth/4.26 - cont + windowWidth/150;
        tx3 = -0.35 * m2 + windowWidth/2.78 - windowWidth/200;
        ty3 =  0.22 * m2 + windowWidth/4.21 - cont + windowWidth/150;
        tx4 = -0.49 * m2 + windowWidth/2.83 - windowWidth/200;
        ty4 =  0.37 * m2 + windowWidth/4.13 - cont + windowWidth/150;
        bezier (windowWidth/2.70 - windowWidth/200, windowWidth/4.32 - cont + windowWidth/150, tx2, ty2, tx3, ty3, tx4, ty4);
        //line(tx4, ty4, tx3, ty3);

        stroke("#3F99BA");
        /*cx2 = 0.25 * m3 + windowWidth/3.79 - windowWidth/200;
        cy2 = -0.02 * m3 + windowWidth/3.98 - cont + windowWidth/150;
        cx3 =  0.42 * m3 + windowWidth/3.75 - windowWidth/200;
        cy3 = -0.11 * m3 + windowWidth/3.99 - cont + windowWidth/150;
        cx4 =  0.49 * m3 + windowWidth/3.72 - windowWidth/200;
        cy4 = -0.21 * m3 + windowWidth/3.99 - cont + windowWidth/150;
        bezier (windowWidth/3.83 - windowWidth/200, windowWidth/3.98 - cont + windowWidth/150, cx2, cy2, cx3, cy3, cx4, cy4);
        //line(cx4, cy4, cx3, cy3);*/

        angleMode(DEGREES);
        angolo3 = map(m3, 0, 255, 0, 40);
        arc(windowWidth/3.93 - windowWidth/200, windowWidth/8.29 + windowWidth/150 - cont, windowWidth/3.76, windowWidth/3.76, 80 - angolo3 , 87);

        stroke("#34568C");
        dx2 = -0.07 * m4 + windowWidth/3.15 - windowWidth/200;
        dy2 =  -0.24 * m4 + windowWidth/2.91 - cont + windowWidth/150;
        dx3 =  -0.18 * m4 + windowWidth/3.16 - windowWidth/200;
        dy3 = -0.47 * m4 + windowWidth/2.94 - cont + windowWidth/150;
        dx4 = -0.29 * m4 + windowWidth/3.18 - windowWidth/200;
        dy4 =  -0.61 * m4 + windowWidth/3 - cont + windowWidth/150;
        bezier (windowWidth/3.14 - windowWidth/200, windowWidth/2.87 - cont + windowWidth/150, dx2, dy2, dx3, dy3, dx4, dy4);
        //line(dx4, dy4, dx3, dy3);

        imageMode(CORNER);

        a1 = map(m1, 0, 255, 0, windowWidth/6.34);
        b1 = map(m2, 0, 255, 0, windowWidth/6.34);
        c1 = map(m3, 0, 255, 0, windowWidth/6.34);
        d1 = map(m4, 0, 255, 0, windowWidth/6.34);

        strokeWeight(2);

        stroke("#b1def1");
        line(windowWidth/2,windowWidth/0.569 - cont - a1, windowWidth/2 + b1, windowWidth/0.569 - cont);
        line(windowWidth/2 + b1, windowWidth/0.569 - cont, windowWidth/2, windowWidth/0.569 - cont + c1);
        line(windowWidth/2, windowWidth/0.569 - cont + c1, windowWidth/2 - d1, windowWidth/0.569 - cont);
        line(windowWidth/2 - d1, windowWidth/0.569 - cont, windowWidth/2,windowWidth/0.569 - cont - a1);


        a1 = map(72, 0, 100, 0, windowWidth/6.34);
        b1 = map(58, 0, 100, 0, windowWidth/6.34);
        c1 = map(65, 0, 100, 0, windowWidth/6.34);
        d1 = map(43, 0, 100, 0, windowWidth/6.34);

        stroke("#baa079");
        line(windowWidth/2,windowWidth/0.569 - cont - a1, windowWidth/2 + b1, windowWidth/0.569 - cont);
        line(windowWidth/2 + b1, windowWidth/0.569 - cont, windowWidth/2, windowWidth/0.569 - cont + c1);
        line(windowWidth/2, windowWidth/0.569 - cont + c1, windowWidth/2 - d1, windowWidth/0.569 - cont);
        line(windowWidth/2 - d1, windowWidth/0.569 - cont, windowWidth/2,windowWidth/0.569 - cont - a1);

        angleMode(DEGREES);
        let ai = map(m1i, 0, 255, 0, 270);
        let bi = map(m2i, 0, 255, 0, 270);
        let ci = map(m3i, 0, 255, 0, 270);
        let di = map(m4i, 0, 255, 0, 270);

        noFill();
        strokeWeight(12);
        strokeCap(SQUARE);
        stroke("#C9E8FB");
        arc(windowWidth/2 , windowWidth/1.374 - cont , windowWidth/3.1 , windowWidth/3.1 , -90 , ai-90);
        stroke("#83C8E3");
        arc(windowWidth/2 , windowWidth/1.374 - cont , windowWidth/4.01 , windowWidth/4.01 , -90 , bi-90);
        stroke("#3F99BA");
        arc(windowWidth/2 , windowWidth/1.374 - cont , windowWidth/5.83 , windowWidth/5.83 , -90 , ci-90);
        stroke("#34568C");
        arc(windowWidth/2 , windowWidth/1.374 - cont , windowWidth/10.6 , windowWidth/10.6 , -90 , di-90);

        let a = map(m1, 0, 255, 0, 270);
        let b = map(m2, 0, 255, 0, 270);
        let c = map(m3, 0, 255, 0, 270);
        let d = map(m4, 0, 255, 0, 270);

        stroke("#C9E8FB");
        arc(windowWidth/2 , windowWidth/1.374 - cont , windowWidth/3.42 , windowWidth/3.42 , -90 , a-90);
        stroke("#83C8E3");
        arc(windowWidth/2 , windowWidth/1.374 - cont , windowWidth/4.6 , windowWidth/4.6 , -90 , b-90);
        stroke("#3F99BA");
        arc(windowWidth/2 , windowWidth/1.374 - cont , windowWidth/7.11 , windowWidth/7.11 , -90 , c-90);
        stroke("#34568C");
        arc(windowWidth/2 , windowWidth/1.374 - cont , windowWidth/15.1 , windowWidth/15.1 , -90 , d-90);

        m1x = map(m1, 0, 255, 0, 100);
        m2x = map(m2, 0, 255, 0, 100);
        m3x = map(m3, 0, 255, 0, 100);
        m4x = map(m4, 0, 255, 0, 100);

        m1ix = map(m1i, 0, 255, 0, 100);
        m2ix = map(m2i, 0, 255, 0, 100);
        m3ix = map(m3i, 0, 255, 0, 100);
        m4ix = map(m4i, 0, 255, 0, 100);

        angleMode(DEGREES);

        imageMode(CENTER);
        if (m1ix < m1x){
          if (m1x < 33){
            push();
            translate(windowWidth/1.38 , windowWidth/0.825 - cont);
            rotate(285);
            image(vit, 0 , -windowWidth/14.7 , windowWidth/96, windowWidth/68.5);
            pop();
          }else if(m1x < 66){
            push();
            translate(windowWidth/1.38 , windowWidth/0.825 - cont);
            rotate(165);
            image(vit, 0 , -windowWidth/14.7 , windowWidth/96, windowWidth/68.5);
            pop();
          }else{
            push();
            translate(windowWidth/1.38 , windowWidth/0.825 - cont);
            rotate(345);
            image(vit, 0 , -windowWidth/14.7 , windowWidth/96, windowWidth/68.5);
            pop();
          }
        }
        if (m2ix < m2x){
          if (m2x < 33){
            push();
            translate(windowWidth/1.38 , windowWidth/0.825 - cont);
            rotate(315);
            image(test, 0 , -windowWidth/14.7 , windowWidth/128, windowWidth/64);
            pop();
          }else if(m2x < 66){
            push();
            translate(windowWidth/1.38 , windowWidth/0.825 - cont);
            rotate(255);
            image(test, 0 , -windowWidth/14.7 , windowWidth/128, windowWidth/64);
            pop();
          }else{
            push();
            translate(windowWidth/1.38 , windowWidth/0.825 - cont);
            rotate(195);
            image(test, 0 , -windowWidth/14.7 , windowWidth/128, windowWidth/64);
            pop();
          }
        }
        if (m3ix < m3x){
          if (m3x < 33){
            push();
            translate(windowWidth/1.38 , windowWidth/0.825 - cont);
            rotate(225);
            image(cuor, 0 , -windowWidth/14.7 , windowWidth/120, windowWidth/66.2);
            pop();
          }else if(m3x < 66){
            push();
            translate(windowWidth/1.38 , windowWidth/0.825 - cont);
            rotate(135);
            image(cuor, 0 , -windowWidth/14.7 , windowWidth/120, windowWidth/66.2);
            pop();
          }else{
            push();
            translate(windowWidth/1.38 , windowWidth/0.825 - cont);
            rotate(15);
            image(cuor, 0 , -windowWidth/14.7 , windowWidth/120, windowWidth/66.2);
            pop();
          }
        }
        if (m4ix < m4x){
          if (m4x < 33){
            push();
            translate(windowWidth/1.38 , windowWidth/0.825 - cont);
            rotate(105);
            image(destin, 0 , -windowWidth/14.7 , windowWidth/80, windowWidth/68.6);
            pop();
          }else if(m4x < 66){
            push();
            translate(windowWidth/1.38 , windowWidth/0.825 - cont);
            rotate(75);
            image(destin, 0 , -windowWidth/14.7 , windowWidth/80, windowWidth/68.6);
            pop();
          }else{
            push();
            translate(windowWidth/1.38 , windowWidth/0.825 - cont);
            rotate(45);
            image(destin, 0 , -windowWidth/14.7 , windowWidth/80, windowWidth/68.6);
            pop();
          }
        }
        noStroke();
        fill(255);
        textFont(hnr);
        textSize(windowWidth/100);
        textAlign(LEFT);
        text(int(m1ix), windowWidth/1.49, windowWidth/2.77 - cont);
        text(int(m1x), windowWidth/1.42, windowWidth/2.77 - cont);
        text(int(m2ix), windowWidth/1.21, windowWidth/2.77 - cont);
        text(int(m2x), windowWidth/1.16, windowWidth/2.77 - cont);
        text(int(m3ix), windowWidth/1.48, windowWidth/2.575 - cont);
        text(int(m3x), windowWidth/1.41, windowWidth/2.575 - cont);
        text(int(m4ix), windowWidth/1.2, windowWidth/2.575 - cont);
        text(int(m4x), windowWidth/1.15, windowWidth/2.575 - cont);

        imageMode(CORNER);
        if (mouseX > windowWidth/1.06 && mouseY > windowWidth/1 - cont && mouseX < windowWidth/1.04 && mouseY < windowWidth/0.99 - cont){
          image(over, 0, windowWidth/1.0575 - cont, windowWidth, windowWidth/2.02);
        }
        image(logolineo, windowWidth/26 , windowWidth/38.4, windowWidth/10.9, windowWidth/42.6);
      break;

      case 4:
        if (v == 0){
          resizeCanvas(2480/2,3506/2,P2D);
          v = 1;
        }else if(v == 1){
          background(255);
          image(refertopag1, 0 , 0 , 2480/2, 3506/2);

          angleMode(DEGREES);
          let ai = map(m1i, 0, 255, 0, 270);
          let bi = map(m2i, 0, 255, 0, 270);
          let ci = map(m3i, 0, 255, 0, 270);
          let di = map(m4i, 0, 255, 0, 270);

          noFill();
          strokeWeight(12);
          strokeCap(SQUARE);
          stroke("#C9E8FB");
          arc(622 , 675 , 553 , 553 , -90 , ai-90);
          stroke("#3F99BA");
          arc(622 , 675 , 426 , 426 , -90 , bi-90);
          stroke("#83C8E3");
          arc(622 , 675 , 296 , 296 , -90 , ci-90);
          stroke("#34568C");
          arc(622 , 675 , 166 , 166 , -90 , di-90);

          let a = map(m1, 0, 255, 0, 270);
          let b = map(m2, 0, 255, 0, 270);
          let c = map(m3, 0, 255, 0, 270);
          let d = map(m4, 0, 255, 0, 270);

          stroke("#C9E8FB");
          arc(622 , 675 , 505 , 505 , -90 , a-90);
          stroke("#3F99BA");
          arc(622 , 675 , 375 , 375 , -90 , b-90);
          stroke("#83C8E3");
          arc(622 , 675 , 241 , 241 , -90 , c-90);
          stroke("#34568C");
          arc(622 , 675 , 115 , 115 , -90 , d-90);

          fill(0);
          noStroke();
          textAlign(LEFT);
          textSize(20);
          textFont(hnr);
          text(day() + '.' + month() + '.' + year(), 362 , 1634);
          textSize(23);
          text(t1 + t2 + t3 + t4 , 131 , 1230 , 976);

          textAlign(RIGHT);
          text(nome + ' ' + cognome + '   ' + giorno + '.' + mese + '.' + anno + '   ' + int(random(9)) + int(random(9)) + int(random(9)) + int(random(9)) + int(random(9)), 1121 , 186);
          pdf.nextPage();
          v = 2;
        }else if(v == 2){
          background(255);
          image(refertopag2, 0 , 0 , 2480/2, 3506/2);

          fill(0);
          noStroke();
          textSize(23);
          textFont(hnr);
          textAlign(RIGHT);
          text(nome + ' ' + cognome + '   ' + giorno + '.' + mese + '.' + anno + '   ' + int(random(9)) + int(random(9)) + int(random(9)) + int(random(9)) + int(random(9)), 1121 , 186);

          m1ix = map(m1i, 0, 255, 0, 100);
          m2ix = map(m2i, 0, 255, 0, 100);
          m3ix = map(m3i, 0, 255, 0, 100);
          m4ix = map(m4i, 0, 255, 0, 100);
          textSize(20);
          textAlign(LEFT);
          text(int(m1ix), 193 , 1635);
          text(int(m2ix), 467 , 1635);
          text(int(m3ix), 736 , 1635);
          text(int(m4ix), 1011 , 1635);

          m1x = map(m1, 0, 255, 0, 100);
          m2x = map(m2, 0, 255, 0, 100);
          m3x = map(m3, 0, 255, 0, 100);
          m4x = map(m4, 0, 255, 0, 100);
          textSize(20);
          textAlign(LEFT);
          text(int(m1ix), 265 , 1635);
          text(int(m2ix), 537 , 1635);
          text(int(m3ix), 807 , 1635);
          text(int(m4ix), 1080 , 1635);

          noFill();
          strokeWeight(3);
          stroke(125);
          /*vx2 = -0.12 * m1i + 694;
          vy2 =  0.05 * m1i + 935;
          vx3 = -0.45 * m1i + 685; //equazioni che mi permettono di mettere in relazione la posizione dei punto di mio interesse con il modificatore
          vy3 =  0.26 * m1i + 939;
          vx4 = -0.24 * m1i + 674;
          vy4 =  0.71 * m1i + 946;
          bezier (702, 931, vx2, vy2, vx3, vy3, vx4, vy4);*/

          angleMode(DEGREES);
          angolo1i = map(m1i, 0, 255, 0, 86);
          arc(758, 1077, 317, 317, - 120 - angolo1i , -115);

          tx2 = -0.13 * m2i + 687;
          ty2 =  0.08 * m2i + 888;
          tx3 = -0.47 * m2i + 675; //equazioni che mi permettono di mettere in relazione la posizione dei punto di mio interesse con il modificatore
          ty3 =  0.30 * m2i + 895;
          tx4 = -0.67 * m2i + 661;
          ty4 =  0.51 * m2i + 904;
          bezier (696, 882, tx2, ty2, tx3, ty3, tx4, ty4);

          /*cx2 =  0.29 * m3i + 479;
          cy2 = -0.02 * m3i + 923;
          cx3 =  0.54 * m3i + 489; //equazioni che mi permettono di mettere in relazione la posizione dei punto di mio interesse con il modificatore
          cy3 = -0.11 * m3i + 922;
          cx4 =  0.62 * m3i + 498;
          cy4 = -0.27 * m3i + 920;
          bezier (468, 923, cx2, cy2, cx3, cy3, cx4, cy4);*/

          angleMode(DEGREES);
          angolo3i = map(m3i, 0, 255, 0, 40);
          arc(453, 649, 553, 553, 80 - angolo3i , 87);

          dx2 = -0.08 * m4i + 584;
          dy2 = -0.32 * m4i + 1115;
          dx3 = -0.24 * m4i + 581; //equazioni che mi permettono di mettere in relazione la posizione dei punto di mio interesse con il modificatore
          dy3 = -0.61 * m4i + 1103;
          dx4 = -0.38 * m4i + 577;
          dy4 = -0.82 * m4i + 1092;
          bezier (587, 1126, dx2, dy2, dx3, dy3, dx4, dy4);

          stroke("#C9E8FB");
          /*vx2 = -0.12 * m1 + 694;
          vy2 =  0.05 * m1 + 935;
          vx3 = -0.45 * m1 + 685; //equazioni che mi permettono di mettere in relazione la posizione dei punto di mio interesse con il modificatore
          vy3 =  0.26 * m1 + 939;
          vx4 = -0.24 * m1 + 674;
          vy4 =  0.71 * m1 + 946;
          bezier (702, 931, vx2, vy2, vx3, vy3, vx4, vy4);*/
          angleMode(DEGREES);
          angolo1 = map(m1, 0, 255, 0, 86);
          arc(758, 1077, 317, 317, - 120 - angolo1 , -115);
          stroke("#3F99BA");
          tx2 = -0.13 * m2 + 687;
          ty2 =  0.08 * m2 + 888;
          tx3 = -0.47 * m2 + 675; //equazioni che mi permettono di mettere in relazione la posizione dei punto di mio interesse con il modificatore
          ty3 =  0.30 * m2 + 895;
          tx4 = -0.67 * m2 + 661;
          ty4 =  0.51 * m2 + 904;
          bezier (696, 882, tx2, ty2, tx3, ty3, tx4, ty4);
          stroke("#83C8E3");
          /*cx2 =  0.29 * m3 + 479;
          cy2 = -0.02 * m3 + 923;
          cx3 =  0.54 * m3 + 489; //equazioni che mi permettono di mettere in relazione la posizione dei punto di mio interesse con il modificatore
          cy3 = -0.11 * m3 + 922;
          cx4 =  0.62 * m3 + 498;
          cy4 = -0.27 * m3 + 920;
          bezier (468, 923, cx2, cy2, cx3, cy3, cx4, cy4);*/
          angleMode(DEGREES);
          angolo3 = map(m3, 0, 255, 0, 40);
          arc(453, 649, 553, 553, 80 - angolo3 , 87);
          stroke("#34568C");
          dx2 = -0.08 * m4 + 584;
          dy2 = -0.32 * m4 + 1115;
          dx3 = -0.24 * m4 + 581; //equazioni che mi permettono di mettere in relazione la posizione dei punto di mio interesse con il modificatore
          dy3 = -0.61 * m4 + 1103;
          dx4 = -0.38 * m4 + 577;
          dy4 = -0.82 * m4 + 1092;
          bezier (587, 1126, dx2, dy2, dx3, dy3, dx4, dy4);

          v = 3;
          pdf.nextPage();
        }else if(v == 3){
          background(255);
          image(refertopag3, 0 , 0 , 2480/2, 3506/2);

          fill(0);
          noStroke();
          textSize(23);
          textFont(hnr);
          textAlign(RIGHT);
          text(nome + ' ' + cognome + '   ' + giorno + '.' + mese + '.' + anno + '   ' + int(random(9)) + int(random(9)) + int(random(9)) + int(random(9)) + int(random(9)), 1121 , 186);
          textSize(20);
          textAlign(LEFT);
          text(day() + '.' + month() + '.' + year() + '  ' + hour() + '.' + minute(), 303 , 1634);
          text("45° 30' 00''", 883, 1634);

          angleMode(DEGREES);
          if (m1ix < m1x){
            if (m1x < 33){
              push();
              translate(620 , 891);
              rotate(285);
              image(vit, -13 , -175 , 26 ,38);
              pop();
            }else if(m1x < 66){
              push();
              translate(620 , 891);
              rotate(165);
              image(vit, -13 , -175 , 26 ,38);
              pop();
            }else{
              push();
              translate(620 , 891);
              rotate(345);
              image(vit, -13 , -175 , 26 ,38);
              pop();
            }
          }

          if (m2ix < m2x){
            if (m2x < 33){
              push();
              translate(620 , 891);
              rotate(315);
              image(test, -11 , -175 , 23 ,45);
              pop();
            }else if(m2x < 66){
              push();
              translate(620 , 891);
              rotate(255);
              image(test, -11 , -175 , 23 ,45);
              pop();
            }else{
              push();
              translate(620 , 891);
              rotate(195);
              image(test, -11 , -175 , 23 ,45);
              pop();
            }
          }

          if (m3ix < m3x){
            if (m3x < 33){
              push();
              translate(620 , 891);
              rotate(225);
              image(cuor, -11 , -175 , 23 ,41);
              pop();
            }else if(m3x < 66){
              push();
              translate(620 , 891);
              rotate(135);
              image(cuor, -11 , -175 , 23 ,41);
              pop();
            }else{
              push();
              translate(620 , 891);
              rotate(15);
              image(cuor, -11 , -175 , 23 ,41);
              pop();
            }
          }

          if (m4ix < m4x){
            if (m4x < 33){
              push();
              translate(620 , 891);
              rotate(105);
              image(destin, -18 , -175 , 36 ,40);
              pop();
            }else if(m4x < 66){
              push();
              translate(620 , 891);
              rotate(75);
              image(destin, -18 , -175 , 36 ,40);
              pop();
            }else{
              push();
              translate(620 , 891);
              rotate(45);
              image(destin, -18 , -175 , 36 ,40);
              pop();
            }
          }

          pdf.nextPage();
          v = 4;
        }else if (v == 4){
          background(255);
          image(refertopag4, 0 , 0 , 2480/2, 3506/2);
          pdf.save({filename: 'Referto', margin: { top: '0px', left: '0px', right: '0px', bottom: '0px'}, width: 2480/2, height: 3506/2});
          window.open('index.html','_self');
        }

        break;

  }

}

function preload() {
  img = loadImage('manobella.jpg');
  scritta = loadImage('scritta_inserimento.png');
  sfondo = loadImage('sfondo.jpg');
  refertopag1 = loadImage('pagina1.png');
  refertopag2 = loadImage('pagina2.png');
  refertopag3 = loadImage('pagina3.png');
  refertopag4 = loadImage('pagina4.png');
  vit = loadImage('vita.png');
  test = loadImage('testa.png');
  cuor = loadImage('cuore.png');
  destin = loadImage('destino.png');
  vitab = loadImage('vitab.png');
  testab = loadImage('testab.png');
  cuoreb = loadImage('cuoreb.png');
  destinob = loadImage('destinob.png');
  manodestra = loadImage('manodestra.png');
  logolineo = loadImage('logolineo.png');
  pulsante = loadImage('bottone.png');
  pulsantep = loadImage('bottone_pieno.png');
  info = loadImage('info.png');
  hn = loadFont('HelveticaNeuBold.ttf');
  hnr = loadFont('HelveticaNeue.ttf');
  gr = loadFont('GARABD.ttf');
  grr = loadFont('GARA.ttf');
  recap = loadImage('recap.jpg');
  faderecap = loadImage('faderecap.jpg');
  over = loadImage('over.png');
}

function printList(portList) {
  // portList is an array of serial port names
  for (var i = 0; i < portList.length; i++) {
    // Display the list the console:
    console.log(i + " " + portList[i]);
  }
}

function serverConnected() {
  console.log('connected to server.');
}

function portOpen() {
  console.log('the serial port opened.')
}

function serialEvent() {
  var data = serial.readLine();
  if (stato == 0){
    if (data.length > 0) {
      console.log(data);
      var sensors = split(data, ",");
      console.log(sensors);
      v1i = int(sensors[0])/4;
      v2i = int(sensors[1])/4;
      v3i = int(sensors[2])/4;
      v4i = int(sensors[3])/4;
    }
  }else{
    if (data.length > 0) {
      console.log(data);
      var sensors = split(data, ",");
      console.log(sensors);
      v1 = int(sensors[0])/4;
      v2 = int(sensors[1])/4;
      v3 = int(sensors[2])/4;
      v4 = int(sensors[3])/4;
      p1 = int(sensors[4]);
      p2 = int(sensors[5]);
      p3 = int(sensors[6]);
      p4 = int(sensors[7]);

    }
  }
}

function serialError(err) {
  console.log('Something went wrong with the serial port. ' + err);
}

function portClose() {
  console.log('The serial port closed.');
}

function mousePressed() {

  if (lock2 == true){
    serial.write(2);
    stato = 2;
    mp1 = true;
  }else{
    mp1 = false;
  }

  if (lock1 == true){
    serial.write(3);
    stato = 3;
    mp = true;
  }else{
    mp = false;
  }

  if (lock3 == true){
    serial.write(4);
    stato = 1;
    mp2 = true;
  }else{
    mp2 = false;
  }

  if (lock4 == true){
    mp3 = true;
    nome = input1.value();
    cognome = input2.value();
    giorno = input3.value();
    mese = input4.value();
    anno = input5.value();
    if (giorno < 32 && giorno > 0 && mese < 13 && mese > 0 && anno > 1900 && anno < 2022){
      stato = 4;
      serial.write(3);
    }

  }else{
    mp3 = false;
  }
  mp4 = true;
}

function mouseReleased(){
  mp4 = false;
}

function mouseWheel(event) {
  if (stato == 40){
    cont += (event.delta/2);
    if (cont < 0){
      cont = 0;
    }else if(cont > (((windowWidth/0.42)) - windowHeight)){
      cont = (((windowWidth/0.42)) - windowHeight);
    }
    print('cont = ' + cont);
  }
}
