let mp;
let cont = 0;
let stato = 0;
let colore;
let colore1;
let colore3;
let x1;
let x2;
let x3;
let x4;
let x5;
let num = 1;
let buleana = false;
let buleana1 = false;
let buleana2 = false;
let buleana3 = false;
let buleana4 = false;
let buleana5 = false;
let buleana6 = false;
let buleana7 = false;
let p1 = 0;
let p2 = 0;
let p3 = 0;
let p4 = 0;
let q = 1;
let barretta;

let input1;
let input2;
let input3;
let input4;
let input5;

function preload() {
  chirolab = loadImage('chirolab.png');
  kit = loadImage("animazione2/142.png");
  chirolabbianco = loadImage('chirolabbianco.png');
  pulsante = loadImage('bottone.png');
  pulsantep = loadImage('bottone_pieno.png');
  hn = loadFont('HelveticaNeuBold.ttf');
  hnr = loadFont('HelveticaNeue.ttf');
  gr = loadFont('GARABD.ttf');
  grr = loadFont('GARA.ttf');
  img = loadImage('sfondo_inserimento.png');
  pallino = loadImage('pallino.png');
  vita = loadImage('vita.png');
  testa = loadImage('testa.png');
  cuore = loadImage('cuore.png');
  destino = loadImage('destino.png');
  rec1 = loadImage('p1.jpg');
  rec2 = loadImage('p2.jpg');
  rec3 = loadImage('p3.jpg');
  rec4 = loadImage('p4.jpg');
  rec5 = loadImage('p5.jpg');
  rec6 = loadImage('p6.jpg');
  scuro = loadImage('scuro.png');
  contatti = loadImage('contatti.png');
  piu = loadImage('piu.jpg');
  piup = loadImage('piup.jpg');
  meno = loadImage('meno.jpg');
  menop = loadImage('menop.jpg');
  freccia = loadImage('freccia.png');
  kitbase = loadImage('kitbase.png');
  indietro = loadImage('icsnera.jpg');
  indietrop = loadImage('ics.png');
  indietrob = loadImage('icsbianca.png');
  kitcomputer = loadImage('kittamuert.png');
  logolineo = loadImage('logolineo.png');
  manodestra = loadImage('manodestra.png');
  slider = loadImage('slider.png');
  blocco = loadImage('blocco.png');
  sfondo = loadImage('sfondo.jpg');

  for (let i = 1; i < 143; i++) {
    img[i] = loadImage('animazione2/' + i + '.jpg');
  }

  for (let j = 1; j < 151; j++) {
    pallino[j] = loadImage('animazione1/' + j + '.jpg');
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  frameCount = 60;

  input1 = createInput();
  input1.position(windowWidth/2 - windowWidth/4 - windowWidth/50 , windowHeight/4.5);
  input1.size(windowWidth/4, windowWidth/50);
  input1.hide();

  input2 = createInput();
  input2.position(windowWidth/2 + windowWidth/50 , windowHeight/4.5);
  input2.size(windowWidth/4, windowWidth/50);
  input2.hide();

  input3 = createSelect();
  input3.position(windowWidth/2 - windowWidth/4 - windowWidth/50 , windowHeight/3);
  input3.size(windowWidth/4, windowWidth/50);
  input3.hide();

  for(let i=18; i<122; i++){
    input3.option(i);
  }

  input4 = createInput();
  input4.position(windowWidth/2 + windowWidth/50 , windowHeight/3);
  input4.size(windowWidth/4, windowWidth/50);
  input4.hide();

  input5 = createInput();
  input5.position(windowWidth/2 - windowWidth/4 - windowWidth/50 , windowHeight/2.25);
  input5.size(((windowWidth/4)*2) + ((windowWidth/50)*2), windowWidth/8);
  input5.hide();
}

function draw() {
  switch(stato){
    case 0:
      input1.hide();
      input2.hide();
      input3.hide();
      input4.hide();
      input5.hide();
      background('#202021');
      colore = color(255,255,255);
      /*if (frameCount < 45){
        colore.setAlpha(frameCount*5.66);
      }else{
        colore.setAlpha(255-((frameCount-45)*17));
      }

      fill(colore);
      noStroke();
      textSize(windowWidth/30.72);
      textFont(hn);
      textAlign(CENTER);
      text('Handling your future', windowWidth/2 ,windowHeight/2);*/
      if (frameCount > 60){
        stato = 1;
        colore = color(32,32,33);
      }
    break;

    case 1:
      background(colore);
      noStroke();
      fill(colore);
      imageMode(CENTER);
      angleMode(DEGREES);
      tint(255,(frameCount-60)*4.25);
      if (frameCount<150){
        image(chirolabbianco, windowWidth/2 ,windowHeight/2 - windowWidth/76.8, windowWidth/6.144, windowWidth/29.53);
        translate(windowWidth/1.97,windowHeight/2.08);
        rotate(-12);
        arc(0,0, windowWidth/35.5,  windowWidth/32, frameCount*4-240, 360);
      }else{
        colore = color(32+(frameCount*8.5-1275),32+(frameCount*8.5-1275),33+(frameCount*8.5-1275));
        tint(255,(255-(frameCount-150)*5.1));
        image(chirolabbianco, windowWidth/2 ,windowHeight/2 - windowWidth/76.8, windowWidth/6.144, windowWidth/29.53);
      }
      if (frameCount == 200){
        stato = 2;
      }
    break;

    case 2:
      //print(mouseX);
      //print(mouseY);
      background(255);

      input1.hide();
      input2.hide();
      input3.hide();
      input4.hide();
      input5.hide();

      if (windowWidth/26 < mouseX && mouseX < windowWidth/6.41 && windowHeight/21 < mouseY && mouseY < windowHeight/11 && mp == true){
        cont = 0;
        stato = 0;
        frameCount = 0;
      }
      if (windowWidth/26 < mouseX && mouseX < windowWidth/6.41 && windowHeight/21 < mouseY && mouseY < windowHeight/11){
        cursor(HAND);
      }else{
        cursor(ARROW);
      }

      if (windowWidth/26 < mouseX && mouseX < windowWidth/10.44 && windowHeight/1.27 < mouseY && mouseY < windowHeight/1.25){
        x1 = windowWidth/21.33;
        if (mp == true){
          cont = (windowHeight + ((windowWidth/2.5)/2) - (windowHeight/2) + 375)/5;
        }
      }else{
        x1 = windowWidth/26;
      }

      if (windowWidth/26 < mouseX && mouseX < windowWidth/14.09 && windowHeight/1.21 < mouseY && mouseY < windowHeight/1.19){
        x2 = windowWidth/21.33;
        if (mp == true){
          cont = (windowWidth/25) + (7*(windowHeight/20)) + 326;
          mp = false;
        }
      }else{
        x2 = windowWidth/26;
      }

      if (windowWidth/26 < mouseX && mouseX < windowWidth/10.44 && windowHeight/1.16 < mouseY && mouseY < windowHeight/1.14){
        x3 = windowWidth/21.33;
        if (mp == true){
          cont = (16*(windowHeight/30)) + (windowWidth/30) + (7*(windowHeight/24)) + 1625/6 + windowHeight/40;
        }
      }else{
        x3 = windowWidth/26;
      }

      if (windowWidth/26 < mouseX && mouseX < windowWidth/14.09 && windowHeight/1.105 < mouseY && mouseY < windowHeight/1.09){
        x4 = windowWidth/21.33;
        if (mp == true){
          stato = 3;
          mp = false;
        }
      }else{
        x4 = windowWidth/26;
      }

      if (windowWidth/26 < mouseX && mouseX < windowWidth/14.09 && windowHeight/1.055 < mouseY && mouseY < windowHeight/1.04){
        x5 = windowWidth/21.33;
        if (mp == true){
          cont = ((windowWidth/25) + (2*(windowWidth/25.6)) + (0.155*(windowWidth/5)) + (2*(windowHeight/5)) + (7*(windowHeight/20)) + 325 + windowHeight/9.6);
          mp == false;
        }
      }else{
        x5 = windowWidth/26;
      }

      if (cont < 45){
        if ((windowWidth/1.126 - ((windowWidth/7)/2)) < mouseX && mouseX < (windowWidth/1.126 + ((windowWidth/7)/2)) && (windowHeight/1.115 - ((windowWidth/29)/2)) < mouseY && mouseY < (windowHeight/1.115 + ((windowWidth/29)/2))) {
          buleana = true;
          if (mp == true){
            stato = 5;
            mp = false;
          }
        }else {
          buleana = false;
        }
      }else{
        if (windowHeight/1.115 - ((cont-45)*5) > windowHeight/38.4 + ((windowWidth/30))){
          if ((windowWidth/1.126 - ((windowWidth/7)/2)) < mouseX && mouseX < (windowWidth/1.126 + ((windowWidth/7)/2)) && (windowHeight/1.115 - ((windowWidth/29)/2)) - ((cont-45)*5) < mouseY && mouseY < (windowHeight/1.115 + ((windowWidth/29)/2)) - ((cont-45)*5)) {
            buleana = true;
            if (mp == true){
              stato = 5;
                mp = false;
            }
          }else {
            buleana = false;
          }
        }else{
          if ((windowWidth/1.126 - ((windowWidth/7)/2)) < mouseX && mouseX < (windowWidth/1.126 + ((windowWidth/7)/2)) && (windowHeight/38.4 + ((windowWidth/30)) - ((windowWidth/29)/2)) < mouseY && mouseY < ((windowWidth/30)) + ((windowWidth/29))) {
            buleana = true;
            if (mp == true){
              stato = 5;
              mp = false;
            }
          }else {
            buleana = false;
          }
        }
      }

      if (windowWidth/2 - ((windowWidth/3)/2) < mouseX && mouseX < windowWidth/2 - ((windowWidth/3)/2) + windowWidth/7 && windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight + windowHeight/10 < mouseY && mouseY < windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight + windowHeight/10 + windowWidth/29){
        buleana1 = true;
      }else{
        buleana1 = false;
      }

      if (windowWidth/2 - ((windowWidth/7)/2) < mouseX && mouseX < windowWidth/2 + ((windowWidth/7)/2) && windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight + windowHeight/7.553 - ((windowWidth/29)/2) < mouseY && mouseY < windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight + windowHeight/7.553 + ((windowWidth/29)/2)){
        buleana2 = true;
      }else{
        buleana2 = false;
      }

      if (windowWidth/2 - ((windowWidth/6)/2) < mouseX && mouseX < windowWidth/2 + ((windowWidth/6)/2) && 2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5 + windowWidth/5.12 + windowWidth/5.12 + windowHeight/2.3 - ((windowWidth/27)/2) < mouseY && mouseY < 2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5 + windowWidth/5.12 + windowWidth/5.12 + windowHeight/2.3 + ((windowWidth/27)/2)){
        buleana3 = true;
      }else{
        buleana3 = false;
      }

      if (windowWidth/2 - windowWidth/5.39 - ((windowWidth/13.81)*0.7)/2 < mouseX && mouseX < windowWidth/2 - windowWidth/5.39 + ((windowWidth/13.81)*0.7)/2 && windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/5 - windowHeight/20 - (windowWidth/13.81)/2 < mouseY && mouseY < windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/5 - windowHeight/20 + (windowWidth/13.81)/2) {
        buleana4 = true;
      }else {
        buleana4 = false;
      }

      if (windowWidth/2 + windowWidth/5.39 - ((windowWidth/13.81)*0.52)/2 < mouseX && mouseX < windowWidth/2 + windowWidth/5.39 + ((windowWidth/13.81)*0.52)/2 && windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/5 - windowHeight/20 - (windowWidth/13.81)/2 < mouseY && mouseY < windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/5 - windowHeight/20 + (windowWidth/13.81)/2) {
        buleana5 = true;
      }else {
        buleana5 = false;
      }

      if (windowWidth/2 - windowWidth/5.39 - ((windowWidth/13.81)*0.6)/2 < mouseX && mouseX < windowWidth/2 - windowWidth/5.39 + ((windowWidth/13.81)*0.6)/2 && windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.7 + windowHeight/40 - (windowWidth/13.81)/2 < mouseY && mouseY < windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.7 + windowHeight/40 + (windowWidth/13.81)/2) {
        buleana6 = true;
      }else {
        buleana6 = false;
      }

      if (windowWidth/2 + windowWidth/5.39 - ((windowWidth/13.81)*0.85)/2 < mouseX && mouseX < windowWidth/2 + windowWidth/5.39 + ((windowWidth/13.81)*0.85)/2 && windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.7 + windowHeight/40 - (windowWidth/13.81)/2 < mouseY && mouseY < windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.7 + windowHeight/40 + (windowWidth/13.81)/2) {
        buleana7 = true;
      }else {
        buleana7 = false;
      }

      /*imageMode(CENTER);
      image(vita, windowWidth/2 - windowWidth/3.72, windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/5, (windowWidth/13.81)*0.7, windowWidth/13.81);
      image(testa, windowWidth/2 - windowWidth/10, windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/5, (windowWidth/13.81)*0.52, windowWidth/13.81);
      image(cuore, windowWidth/2 + windowWidth/10, windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/5, (windowWidth/13.81)*0.6, windowWidth/13.81);
      image(destino, windowWidth/2 + windowWidth/3.72, windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/5, (windowWidth/13.81)*0.85, windowWidth/13.81);*/


      noFill();
      colore = color(186,160,121);
      colore2 = color(186,160,121);
      /*if (cont < 75){
        colore.setAlpha((frameCount-200)*8.5);
        stroke(colore);
        circle(0,windowWidth/2,windowWidth/1.09);
        circle(windowWidth/2.70,windowWidth/12,windowWidth/2.29);
        circle(windowWidth/1.26,windowWidth/1.36,windowWidth/0.95);
        circle(windowWidth/1.64,windowWidth/2.38,windowWidth/4.01);
      }else{
        colore.setAlpha(255-((cont-75)*5.66));
        stroke(colore);
        circle(0,windowWidth/2,windowWidth/1.09);
        circle(windowWidth/2.70,windowWidth/12,windowWidth/2.29);
        circle(windowWidth/1.26,windowWidth/1.36,windowWidth/0.95);
        circle(windowWidth/1.64,windowWidth/2.38,windowWidth/4.01);
      }*/

      if (cont < 75){
        num = (int(cont*3.3))+1;
        if (num > 150){
          num = 150;
        }
        if (num < 1){
          num = 1;
        }
        imageMode(CENTER);
        image(pallino[num],windowWidth/2,windowHeight/2, windowWidth/2.5, windowWidth/2.5);
      }else{
        tint(255,255-(cont-75)*5.66);
        imageMode(CENTER);
        image(pallino[150],windowWidth/2,windowHeight/2, windowWidth/2.5, windowWidth/2.5);

      }
      colore1 = color(32,32,33);
      if (frameCount < 230){
        colore1.setAlpha((frameCount-200)*8.5);
      }
      tint(255,(frameCount-200)*8.5);
      imageMode(CORNER);
      image(chirolab, windowWidth/26 , windowWidth/38.4 , windowWidth/8.48 , windowWidth/42.6);
      if (cont<30) {
        if (cont>20){
          colore1.setAlpha(255 - ((cont-20)*25.5));
        }
        fill(colore1);
        noStroke();
        textSize(windowWidth/30.72);
        textFont(gr);
        textAlign(CENTER);
        text('conosci te stesso', windowWidth/2 ,windowHeight/2/* - windowWidth/6*/);
        imageMode(CENTER);
        image(freccia,windowWidth/2, windowHeight/1.06, windowWidth/30, windowWidth/66);
      } else {
        if (cont <= 45){
          colore1.setAlpha((cont-30)*25.5);
          fill(colore1);
          noStroke();
          textSize(windowWidth/30.72);
          textFont(gr);
          textAlign(CENTER);
          text('sii te stesso', windowWidth/2 ,windowHeight/2/* - windowWidth/6*/);
          textSize(windowWidth/102.4);
          textFont(hnr);
          textAlign(CENTER);
          text('Possiedi già lineo?', windowWidth/1.126, windowHeight/1.20);
          imageMode(CENTER);
          if (buleana == false) {
            image(pulsante, windowWidth/1.126, windowHeight/1.115, windowWidth/7, windowWidth/29);
          }else{
            image(pulsantep , windowWidth/1.126, windowHeight/1.115, windowWidth/7, windowWidth/29);
          }
          textSize(windowWidth/102.4);
          textFont(hn);
          text('Inizia la modifica', windowWidth/1.126 , windowHeight/1.12);

        }else{
          fill(colore1);
          noStroke();
          textSize(windowWidth/30.72);
          textFont(gr);
          textAlign(CENTER);
          text('sii te stesso', windowWidth/2 ,windowHeight/2/* - windowWidth/6 */- ((cont-45)*5));
          textSize(windowWidth/102.4);
          textFont(hnr);
          textAlign(CENTER);
          imageMode(CENTER);
          text('Possiedi già lineo?', windowWidth/1.126, windowHeight/1.20 - ((cont-45)*5));
          if (windowHeight/1.115 - ((cont-45)*5) > windowHeight/38.4 + ((windowWidth/30))){
            if (buleana == false) {
              image(pulsante, windowWidth/1.126, windowHeight/1.115 - ((cont-45)*5), windowWidth/7, windowWidth/29);
            }else{
              image(pulsantep , windowWidth/1.126, windowHeight/1.115 - ((cont-45)*5), windowWidth/7, windowWidth/29);
            }
            textSize(windowWidth/102.4);
            textFont(hn);
            text('Inizia la modifica', windowWidth/1.126 , windowHeight/1.12 - ((cont-45)*5));
          }else{
            if (buleana == false) {
              image(pulsante, windowWidth/1.126, windowHeight/38.4 + ((windowWidth/30)), windowWidth/7, windowWidth/29);
            }else{
              image(pulsantep , windowWidth/1.126, windowHeight/38.4 + ((windowWidth/30)), windowWidth/7, windowWidth/29);
            }
            textSize(windowWidth/102.4);
            textFont(hn);
            text('Inizia la modifica', windowWidth/1.126 , windowHeight/38.2 + windowWidth/32);
          }
        }
        textSize(windowWidth/102.4);
        textFont(hnr);
        textAlign(LEFT);

        if (cont < 75){
          text('Chi siamo', x1 , windowHeight/1.26);
          text('Lineo', x2 , windowHeight/1.2);
          text('Recensioni', x3 , windowHeight/1.15);
          text('Shop', x4 , windowHeight/1.10);
          text('Contatti', x5 , windowHeight/1.05);
        }else if((((cont - ((windowHeight/10) + (windowWidth/25) + 75))-90)*5) < windowHeight/2){
          fill(colore2);
          text('Chi siamo', x1 , windowHeight/1.26);
          fill(colore1);
          text('Lineo', x2 , windowHeight/1.2);
          text('Recensioni', x3 , windowHeight/1.15);
          text('Shop', x4 , windowHeight/1.10);
          text('Contatti', x5 , windowHeight/1.05);
        }

        if ((windowHeight + ((windowWidth/2.5)/2)) - ((cont-75)*5) >= windowHeight/2){
          noFill();
          stroke(colore2);
          circle (windowWidth/2,(windowHeight + ((windowWidth/2.5)/2)) - ((cont-75)*5),windowWidth/2.5);
          textAlign(CENTER,CENTER);
          rectMode(CENTER);
          fill(colore1);
          noStroke();
          text('Siamo la clinica pioniera della Chiroplastica, una nuova concezione della chirurgia che coniuga al meglio le più avanzate tecnologie mediche e le pratiche chiromantiche.',windowWidth/2,(windowHeight + ((windowWidth/2.5)/2)) - ((cont-75)*5),windowWidth/3.5,windowWidth/20);
          push();
          imageMode(CENTER);
          translate(windowWidth/2, (windowHeight + ((windowWidth/2.5)/2)) - ((cont-75)*5));
          rotate(-40);
          image(pallino,(windowWidth/2.5)/2,0,windowWidth/12.9,windowWidth/12.9);
          pop();
          textSize(windowWidth/30.72);
          textFont(gr);
          textAlign(LEFT);
          text('Chi siamo', windowWidth/3.5,(windowHeight + ((windowWidth/2.5)/2)) - ((cont-75)*5) - windowHeight/4);
        }else if ((cont - ((windowHeight/10) + (windowWidth/25) + 75)) < 90){
          noFill();
          colore2 = color(186,160,121);
          stroke(colore2);
          circle (windowWidth/2,windowHeight/2,windowWidth/2.5);
          textAlign(CENTER,CENTER);
          textSize(windowWidth/102.4);
          rectMode(CENTER);
          fill(colore1);
          noStroke();
          if ((cont - ((windowHeight/10) + (windowWidth/25) + 75)) < 30){
            text('Siamo la clinica pioniera della Chiroplastica, una nuova concezione della chirurgia che coniuga al meglio le più avanzate tecnologie mediche e le pratiche chiromantiche.',windowWidth/2,windowHeight/2,windowWidth/3.5,windowWidth/12.38);
          }else if ((cont - ((windowHeight/10) + (windowWidth/25) + 75)) < 60){
            text('Il nostro fine ultimo è promuovere il benessere dei nostri pazienti e permettergli di raggiungere autodeterminazione ed equilibrio, liberandoli dalle costrizioni.',windowWidth/2,windowHeight/2,windowWidth/3.5,windowWidth/12.38);
          }else{
            text('Per adempiere a questa missione, offriamo qualsiasi intervento correttivo sulle linee chirologiche, mantenendo elevati gli standard qualitativi e di sicurezza, dalla prevenzione al monitoraggio costante post-operatorio.',windowWidth/2,windowHeight/2,windowWidth/3.6,windowWidth/12.38);
          }
          push();
          imageMode(CENTER);
          translate(windowWidth/2, windowHeight/2);
          rotate((((cont - ((windowHeight/10) + (windowWidth/25) + 75)))*2.5)-40);
          image(pallino,(windowWidth/2.5)/2,0,windowWidth/12.9,windowWidth/12.9);
          pop();
          textSize(windowWidth/30.72);
          textFont(gr);
          textAlign(LEFT);
          text('Chi siamo', windowWidth/3.5, windowHeight/4);
        }else if ((cont - ((windowHeight/10) + (windowWidth/25) + 75)) >= 90 && (((cont - ((windowHeight/10) + (windowWidth/25) + 75))-90)*5) <= windowHeight/2 + windowWidth/2.5) {
          noFill();
          colore2 = color(186,160,121);
          stroke(colore2);
          circle (windowWidth/2,windowHeight/2 - (((cont - ((windowHeight/10) + (windowWidth/25) + 75))-90)*5),windowWidth/2.5);
          textAlign(CENTER,CENTER);
          rectMode(CENTER);
          fill(colore1);
          noStroke();
          text('Per adempiere a questa missione, offriamo qualsiasi intervento correttivo sulle linee chirologiche, mantenendo elevati gli standard qualitativi e di sicurezza, dalla prevenzione al monitoraggio costante post-operatorio.',windowWidth/2,windowHeight/2 - (((cont - ((windowHeight/10) + (windowWidth/25) + 75))-90)*5),windowWidth/3.6,windowWidth/12.38);
          push();
          imageMode(CENTER);
          translate(windowWidth/2, windowHeight/2 - (((cont - ((windowHeight/10) + (windowWidth/25) + 75))-90)*5));
          rotate(((90)*2.5)-40);
          image(pallino,(windowWidth/2.5)/2,0,windowWidth/12.9,windowWidth/12.9);
          pop();
          textSize(windowWidth/30.72);
          textFont(gr);
          textAlign(LEFT);
          text('Chi siamo', windowWidth/3.5,windowHeight/2 - (((cont - ((windowHeight/10) + (windowWidth/25) + 75))-90)*5) - windowHeight/4);
          rectMode(CORNER);
          rect(0 , windowHeight - (((cont - ((windowHeight/10) + (windowWidth/25) + 75))-90)*5) + windowHeight/4,windowWidth,windowHeight);
        }

        if ((((cont - ((windowHeight/10) + (windowWidth/25) + 75))-90)*5) > windowHeight/2 && (((cont - ((windowHeight/10) + (windowWidth/25) + 75))-90)*5) < windowHeight + windowHeight/4) {
          textSize(windowWidth/102.4);
          textFont(hnr);
          textAlign(LEFT);
          rectMode(CORNER);
          fill('#202021');
          rect(0 , windowHeight - (((cont - ((windowHeight/10) + (windowWidth/25) + 75))-90)*5) + windowHeight/4,windowWidth,windowHeight);
          imageMode(CENTER);
          image(img[1],windowWidth/2,-(((cont - ((windowHeight/10) + (windowWidth/25) + 75))-90)*5) + windowHeight + windowHeight/4 + windowHeight/2,windowHeight/2.36,windowHeight);
          fill(255);
          text('Chi siamo', x1 , windowHeight/1.26);
          fill('#baa079');
          text('Lineo', x2 , windowHeight/1.2);
          fill(255);
          text('Recensioni', x3 , windowHeight/1.15);
          text('Shop', x4 , windowHeight/1.10);
          text('Contatti', x5 , windowHeight/1.05);
        }else if ((((cont - ((windowHeight/10) + (windowWidth/25) + 75))-90)*5) >= windowHeight + windowHeight/4 && (cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165)) < 142){
          background('#202021');
          num = (int((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))))+1;
          if (num > 141){
            num = 141;
          }
          if (num < 1){
            num = 1;
          }
          imageMode(CENTER);
          image(img[num],windowWidth/2,windowHeight/2,windowHeight/2.36,windowHeight);
          imageMode(CORNER);
          image(chirolabbianco, windowWidth/26 , windowWidth/38.4 , windowWidth/8.48 , windowWidth/42.6);
          textSize(windowWidth/102.4);
          textFont(hnr);
          textAlign(LEFT);
          fill(255);
          text('Chi siamo', x1 , windowHeight/1.26);
          fill('#baa079');
          text('Lineo', x2 , windowHeight/1.2);
          fill(255);
          text('Recensioni', x3 , windowHeight/1.15);
          text('Shop', x4 , windowHeight/1.10);
          text('Contatti', x5 , windowHeight/1.05);

          imageMode(CENTER);
          if (buleana == false) {
            image(pulsante, windowWidth/1.126, windowHeight/38.4 + ((windowWidth/30)), windowWidth/7, windowWidth/29);
          }else{
            image(pulsantep , windowWidth/1.126, windowHeight/38.4 + ((windowWidth/30)), windowWidth/7, windowWidth/29);
          }
          textSize(windowWidth/102.4);
          textFont(hn);
          textAlign(CENTER);
          text('Inizia la modifica', windowWidth/1.126 , windowHeight/38.2 + windowWidth/32);

        }else if ((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165)) >= 142 && (cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165)) < 161){
          background('#202021');
          colore3 = color('#ffffff');
          colore3.setAlpha(((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-142)*14.16);
          fill(colore3);
          textSize(windowWidth/30.72);
          textFont(gr);
          textAlign(LEFT);
          text('lineo',windowWidth/2,windowHeight/3);
          textSize(windowWidth/102.4);
          textFont(hnr);
          textAlign(LEFT);
          text('Lineo è un kit che permette una meticolosa lettura della mano, non invasiva e sicura, e mostra ai pazienti un quadro generale del loro destino attuale, permettendogli di decidere su quali aspetti intervenire, per creare la configurazione chirologica più adatta alle loro esigenze.', windowWidth/2,windowHeight/2.5,windowWidth/3.8);
          text('Fornisce poi una panoramica della nuova configurazione, le cui caratteristiche saranno conseguenza delle scelte compiute, e un referto riassuntivo con cui recarsi presso le nostre cliniche ed eseguire l’operazione.', windowWidth/2,windowHeight/2.5 + windowHeight/7,windowWidth/3.8);
          imageMode(CENTER);
          image(kit,windowWidth/(2+(((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-142)*(1/18))),windowHeight/(2-(((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-142)*(0.5/18))),(windowHeight/2.36)*(1+((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-142)*(1/18)),windowHeight*(1+((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-142)*(1/18)));
          imageMode(CORNER);
          image(chirolabbianco, windowWidth/26 , windowWidth/38.4 , windowWidth/8.48 , windowWidth/42.6);
          textSize(windowWidth/102.4);
          textFont(hnr);
          textAlign(LEFT);
          fill(255);
          text('Chi siamo', x1 , windowHeight/1.26);
          fill('#baa079');
          text('Lineo', x2 , windowHeight/1.2);
          fill(255);
          text('Recensioni', x3 , windowHeight/1.15);
          text('Shop', x4 , windowHeight/1.10);
          text('Contatti', x5 , windowHeight/1.05);

          imageMode(CENTER);
          if (buleana == false) {
            image(pulsante, windowWidth/1.126, windowHeight/38.4 + ((windowWidth/30)), windowWidth/7, windowWidth/29);
          }else{
            image(pulsantep , windowWidth/1.126, windowHeight/38.4 + ((windowWidth/30)), windowWidth/7, windowWidth/29);
          }
          textSize(windowWidth/102.4);
          textFont(hn);
          textAlign(CENTER);
          text('Inizia la modifica', windowWidth/1.126 , windowHeight/38.2 + windowWidth/32);

        }else if ((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165)) >= 161 && windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/5 > 0){
          background('#202021');
          colore3 = color(255,255,255);
          colore3.setAlpha(255);
          fill(colore3);
          textSize(windowWidth/30.72);
          textFont(gr);
          textAlign(LEFT);
          text('lineo',windowWidth/2,windowHeight/3 - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5));
          textSize(windowWidth/102.4);
          textFont(hnr);
          textAlign(LEFT);
          rectMode(CORNER);
          text('Lineo è un kit che permette una meticolosa lettura della mano, non invasiva e sicura, e mostra ai pazienti un quadro generale del loro destino attuale, permettendogli di decidere su quali aspetti intervenire, per creare la configurazione chirologica più adatta alle loro esigenze.', windowWidth/2, windowHeight/2.5 - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5), windowWidth/3.8);
          text('Fornisce poi una panoramica della nuova configurazione, le cui caratteristiche saranno conseguenza delle scelte compiute, e un referto riassuntivo con cui recarsi presso le nostre cliniche ed eseguire l’operazione.', windowWidth/2, windowHeight/2.5 + windowHeight/7 - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5), windowWidth/3.8);
          imageMode(CENTER);
          image(kit,windowWidth/3,windowHeight/1.5 - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5),(windowHeight/2.36)*2,windowHeight*2);
          imageMode(CORNER);
          image(chirolabbianco, windowWidth/26 , windowWidth/38.4 , windowWidth/8.48 , windowWidth/42.6);
          textSize(windowWidth/102.4);
          textFont(hnr);
          textAlign(LEFT);
          fill(255);
          text('Chi siamo', x1 , windowHeight/1.26);
          fill('#baa079');
          text('Lineo', x2 , windowHeight/1.2);
          fill(255);
          text('Recensioni', x3 , windowHeight/1.15);
          text('Shop', x4 , windowHeight/1.10);
          text('Contatti', x5 , windowHeight/1.05);

          imageMode(CENTER);
          if (buleana == false) {
            image(pulsante, windowWidth/1.126, windowHeight/38.4 + ((windowWidth/30)), windowWidth/7, windowWidth/29);
          }else{
            image(pulsantep , windowWidth/1.126, windowHeight/38.4 + ((windowWidth/30)), windowWidth/7, windowWidth/29);
          }
          textSize(windowWidth/102.4);
          textFont(hn);
          textAlign(CENTER);
          text('Inizia la modifica', windowWidth/1.126 , windowHeight/38.2 + windowWidth/32);

/*
          textSize(windowWidth/64);
          textFont(hn);
          textAlign(CENTER);
          text('Agisci sui quattro aspetti fondamentali del tuo futuro',windowWidth/2,windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5));*/

          imageMode(CENTER);
          textSize(windowWidth/30);
          textFont(gr);
          textAlign(CENTER);
          if (buleana4 == false) {
            image(vita, windowWidth/2 - windowWidth/5.39, windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/5 - windowHeight/20, (windowWidth/15)*0.7, windowWidth/15);
          }else{
            text('vita', windowWidth/2 - windowWidth/5.39, windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/5 - windowHeight/20);
          }

          if (buleana5 == false) {
            image(testa, windowWidth/2 + windowWidth/5.39, windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/5 - windowHeight/20, (windowWidth/15)*0.52, windowWidth/15);
          }else{
            text('testa', windowWidth/2 + windowWidth/5.39, windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/5 - windowHeight/20);
          }

          if (buleana6 == false) {
            image(cuore, windowWidth/2 - windowWidth/5.39, windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.7 + windowHeight/40, (windowWidth/15)*0.6, windowWidth/15);
          }else{
            text('cuore', windowWidth/2 - windowWidth/5.39, windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.7 + windowHeight/40);
          }

          if (buleana7 == false) {
            image(destino, windowWidth/2 + windowWidth/5.39, windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.7 + windowHeight/40, (windowWidth/15)*0.85, windowWidth/15);
          }else{
            text('destino', windowWidth/2 + windowWidth/5.39, windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.7 + windowHeight/40);
          }

          textSize(windowWidth/30.72);
          textFont(gr);
          textAlign(CENTER);
          if (windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/5 < windowHeight/2){
            if (p1 < 19) {
              p1 = p1 + 1;
              fill(255);
              text(p1 + '.3%',windowWidth/2 - windowWidth/5.39, windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/2.5 - windowHeight/10);
            }else{
              fill(255);
              text('18.3%',windowWidth/2 - windowWidth/5.39, windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/2.5 - windowHeight/10);
            }
            if (p2 < 7) {
              p2 = p2 + 7;
              fill(255);
              text(p2 + '.6%',windowWidth/2 + windowWidth/5.39, windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/2.5 - windowHeight/10);
            }else{
              fill(255);
              text('6.6%',windowWidth/2 + windowWidth/5.39, windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/2.5 - windowHeight/10);
            }
            if (p3 < 78) {
              p3 = p3 + 7;
              fill(255);
              text(p3 + '.7%',windowWidth/2 - windowWidth/5.39, windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5 + windowHeight/10);
            }else{
              fill(255);
              text('77.7%',windowWidth/2 - windowWidth/5.39, windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5 + windowHeight/10);
            }
            if (p4 < 24) {
              p4 = p4 + 1;
              fill(255);
              text(p4 + '.3%',windowWidth/2 + windowWidth/5.39, windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5 + windowHeight/10);
            }else{
              fill(255);
              text('23.3%',windowWidth/2 + windowWidth/5.39, windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5 + windowHeight/10);
            }
          }else{
            text('0%',windowWidth/2 - windowWidth/5.39, windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/2.5 - windowHeight/10);
            text('0%',windowWidth/2 + windowWidth/5.39 ,windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/2.5 - windowHeight/10);
          }
          textAlign(CENTER);
          textSize(windowWidth/102.4);
          textFont(hnr);
          text('Popolazione over 14 insoddisfatta del proprio stato di salute.', windowWidth/2 - windowWidth/5.39 - ((windowWidth/4.8)/2), windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/2 - windowHeight/10 - windowHeight/40, windowWidth/4.8);
          text('Studenti ripetenti per anno di corso.', windowWidth/2 + windowWidth/5.39 - ((windowWidth/4.8)/2), windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/2 - windowHeight/10 - windowHeight/40, windowWidth/4.8);
          text('Persone che non ripongono una completa fiducia nelle proprie relazioni interpersonali.', windowWidth/2 - windowWidth/5.39 - ((windowWidth/4.8)/2), windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.3 - windowHeight/40 + windowHeight/10, windowWidth/4.8);
          text('Popolazione insoddisfatta della propria dimensione lavorativa.', windowWidth/2 + windowWidth/5.39 - ((windowWidth/4.8)/2), windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.3 - windowHeight/40 + windowHeight/10, windowWidth/4.8);

          textAlign(CENTER);
          textFont(hnr);
          textSize(windowWidth/120);
          text('Fonte: ISTAT 2019', windowWidth/2, windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.05);

          textAlign(CENTER);
          textSize(windowWidth/102.4);
          textFont(hn);
          text('Inizia subito a progettare il tuo intervento chiroplastico con Lineo. Inizia subito la tua nuova vita.', windowWidth/2 - ((windowWidth/3)/2), windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight, windowWidth/3);

          imageMode(CENTER);

          if (buleana2 == false) {
            image(pulsante, windowWidth/2, windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight + windowHeight/7.553, windowWidth/7 , windowWidth/29);
          }else{
            image(pulsantep, windowWidth/2, windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight + windowHeight/7.553, windowWidth/7 , windowWidth/29);
          }

          textAlign(CENTER,CENTER);
          text('Acquista lineo',windowWidth/2, windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight + windowHeight/10.4 + ((windowWidth/29)/2));

        }else if (windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/5 <= 0 && cont < windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/5 + windowHeight + windowHeight) {
          background(255);
          rectMode(CORNER);
          fill('#202021')
          rect(0,windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/5, windowWidth,windowHeight);
          imageMode(CORNER);
          if ( windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight + windowHeight/10.4 + ((windowWidth/29)/2) > 0){
            image(chirolabbianco, windowWidth/26 , windowWidth/38.4 , windowWidth/8.48 , windowWidth/42.6);
          }else{
            image(chirolab, windowWidth/26 , windowWidth/38.4 , windowWidth/8.48 , windowWidth/42.6);
          }

          textSize(windowWidth/102.4);
          textFont(hnr);
          textAlign(LEFT);
          fill('#202021');
          text('Chi siamo', x1 , windowHeight/1.26);
          text('Lineo', x2 , windowHeight/1.2);
          fill('#baa079');
          text('Recensioni', x3 , windowHeight/1.15);
          fill('#202021');
          text('Shop', x4 , windowHeight/1.10);
          text('Contatti', x5 , windowHeight/1.05);

          imageMode(CENTER);
          textSize(windowWidth/30);
          textFont(gr);
          textAlign(CENTER);
          if (buleana4 == false) {
            image(vita, windowWidth/2 - windowWidth/5.39, windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/5 - windowHeight/20, (windowWidth/15)*0.7, windowWidth/15);
          }else{
            text('vita', windowWidth/2 - windowWidth/5.39, windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/5 - windowHeight/20);
          }

          if (buleana5 == false) {
            image(testa, windowWidth/2 + windowWidth/5.39, windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/5 - windowHeight/20, (windowWidth/15)*0.52, windowWidth/15);
          }else{
            text('testa', windowWidth/2 + windowWidth/5.39, windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/5 - windowHeight/20);
          }

          if (buleana6 == false) {
            image(cuore, windowWidth/2 - windowWidth/5.39, windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.7 + windowHeight/40, (windowWidth/15)*0.6, windowWidth/15);
          }else{
            text('cuore', windowWidth/2 - windowWidth/5.39, windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.7 + windowHeight/40);
          }

          if (buleana7 == false) {
            image(destino, windowWidth/2 + windowWidth/5.39, windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.7 + windowHeight/40, (windowWidth/15)*0.85, windowWidth/15);
          }else{
            text('destino', windowWidth/2 + windowWidth/5.39, windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.7 + windowHeight/40);
          }

          textSize(windowWidth/30.72);
          textFont(gr);
          textAlign(CENTER);
          if (windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/5 < windowHeight/2){
            if (p1 < 19) {
              p1 = p1 + 1;
              fill(255);
              text(p1 + '.3%',windowWidth/2 - windowWidth/5.39, windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/2.5 - windowHeight/10);
            }else{
              fill(255);
              text('18.3%',windowWidth/2 - windowWidth/5.39, windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/2.5 - windowHeight/10);
            }
            if (p2 < 7) {
              p2 = p2 + 7;
              fill(255);
              text(p2 + '.6%',windowWidth/2 + windowWidth/5.39, windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/2.5 - windowHeight/10);
            }else{
              fill(255);
              text('6.6%',windowWidth/2 + windowWidth/5.39, windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/2.5 - windowHeight/10);
            }
            if (p3 < 78) {
              p3 = p3 + 7;
              fill(255);
              text(p3 + '.7%',windowWidth/2 - windowWidth/5.39, windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5 + windowHeight/10);
            }else{
              fill(255);
              text('77.7%',windowWidth/2 - windowWidth/5.39, windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5 + windowHeight/10);
            }
            if (p4 < 24) {
              p4 = p4 + 1;
              fill(255);
              text(p4 + '.3%',windowWidth/2 + windowWidth/5.39, windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5 + windowHeight/10);
            }else{
              fill(255);
              text('23.3%',windowWidth/2 + windowWidth/5.39, windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5 + windowHeight/10);
            }
          }else{
            text('0%',windowWidth/2 - windowWidth/5.39, windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/2.5 - windowHeight/10);
            text('0%',windowWidth/2 + windowWidth/5.39 ,windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/2.5 - windowHeight/10);
            text('0%',windowWidth/2 - windowWidth/5.39, windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5);
            text('0%',windowWidth/2 + windowWidth/5.39, windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5);
          }
          textAlign(CENTER);
          textSize(windowWidth/102.4);
          textFont(hnr);
          text('Popolazione over 14 insoddisfatta del proprio stato di salute.', windowWidth/2 - windowWidth/5.39 - ((windowWidth/4.8)/2), windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/2 - windowHeight/10 - windowHeight/40, windowWidth/4.8);
          text('Studenti ripetenti per anno di corso.', windowWidth/2 + windowWidth/5.39 - ((windowWidth/4.8)/2), windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/2 - windowHeight/10 - windowHeight/40, windowWidth/4.8);
          text('Persone che non ripongono una completa fiducia nelle proprie relazioni interpersonali.', windowWidth/2 - windowWidth/5.39 - ((windowWidth/4.8)/2), windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.3 - windowHeight/40 + windowHeight/10, windowWidth/4.8);
          text('Popolazione insoddisfatta della propria dimensione lavorativa.', windowWidth/2 + windowWidth/5.39 - ((windowWidth/4.8)/2), windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.3 - windowHeight/40 + windowHeight/10, windowWidth/4.8);

          textAlign(CENTER);
          textFont(hnr);
          textSize(windowWidth/120);
          text('Fonte: ISTAT 2019', windowWidth/2, windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.05);

          textAlign(CENTER);
          textSize(windowWidth/102.4);
          textFont(hn);
          text('Inizia subito a progettare il tuo intervento chiroplastico con Lineo. Inizia subito la tua nuova vita.', windowWidth/2 - ((windowWidth/3)/2), windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight, windowWidth/3);

          imageMode(CENTER);
          if (buleana == false) {
            image(pulsante, windowWidth/1.126, windowHeight/38.4 + ((windowWidth/30)), windowWidth/7, windowWidth/29);
          }else{
            image(pulsantep , windowWidth/1.126, windowHeight/38.4 + ((windowWidth/30)), windowWidth/7, windowWidth/29);
          }
          textSize(windowWidth/102.4);
          textFont(hn);
          textAlign(CENTER);
          text('Inizia la modifica', windowWidth/1.126 , windowHeight/38.2 + windowWidth/32);


          imageMode(CENTER);

          if (buleana2 == false) {
            image(pulsante, windowWidth/2, windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight + windowHeight/7.553, windowWidth/7 , windowWidth/29);
          }else{
            image(pulsantep, windowWidth/2, windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight + windowHeight/7.553, windowWidth/7 , windowWidth/29);
            if (mp == true){
              stato = 3;
              mp = false;
            }
          }

          textAlign(CENTER,CENTER);
          text('Acquista lineo',windowWidth/2, windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight + windowHeight/10.4 + ((windowWidth/29)/2));

          fill('#202021');
          textSize(windowWidth/30.72);
          textFont(gr);
          textAlign(CENTER);
          text('Recensioni', windowWidth/2, 2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/3);

          imageMode(CENTER);
          image(rec1, windowWidth/2 - ((windowWidth/3.38)/2) - windowWidth/200, 2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5, windowWidth/3.38, windowWidth/5.39);
          image(rec2, windowWidth/2 + ((windowWidth/3.38)/2) + windowWidth/200, 2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5, windowWidth/3.38, windowWidth/5.39);
          image(rec3, windowWidth/2 - ((windowWidth/3.38)/2) - windowWidth/200, 2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5 + windowWidth/5.12, windowWidth/3.38, windowWidth/5.39);
          image(rec4, windowWidth/2 + ((windowWidth/3.38)/2) + windowWidth/200, 2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5 + windowWidth/5.12, windowWidth/3.38, windowWidth/5.39);


          if (windowWidth/2 - windowWidth/5.94 - ((windowWidth/3.03)/2) < mouseX && mouseX < windowWidth/2 - windowWidth/5.94 + ((windowWidth/3.03)/2) && 2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5 - ((windowWidth/5.39)/2) < mouseY && mouseY < 2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5 + ((windowWidth/5.39)/2)){
            image(scuro, windowWidth/2 - ((windowWidth/3.38)/2) - windowWidth/200, 2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5, windowWidth/3.38, windowWidth/5.39);
            fill(255);
            textSize(windowWidth/102.4);
            textFont(hnr);
            textAlign(CENTER);
            text('Ho sempre sognato di avere una famiglia. Grazie a Chirolab ho conosciuto la mia anima gemella e ora aspettiamo il nostro primo figlio.', windowWidth/2 - ((windowWidth/3.38)/2) - windowWidth/200 - ((windowWidth/4.2)/2), 2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5, windowWidth/4.2);
            textSize(windowWidth/80);
            textFont(hn);
            text('Annalisa, 27 anni', windowWidth/2 - ((windowWidth/3.38)/2) - windowWidth/200, 2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5 + windowWidth/18);
          }

          if (windowWidth/2 + windowWidth/5.94 - ((windowWidth/3.03)/2) < mouseX && mouseX < windowWidth/2 + windowWidth/5.94 + ((windowWidth/3.03)/2) && 2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5 - ((windowWidth/5.39)/2) < mouseY && mouseY < 2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5 + ((windowWidth/5.39)/2)){
            image(scuro, windowWidth/2 + ((windowWidth/3.38)/2) + windowWidth/200, 2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5, windowWidth/3.38, windowWidth/5.39);
            fill(255);
            textSize(windowWidth/102.4);
            textFont(hnr);
            textAlign(CENTER);
            text("Dopo l'ennesimo fallimento, ero ad un passo dall'abbandonare il mio sogno, ma l'intervento mi ha ridato la forza e la speranza necessarie.", windowWidth/2 + ((windowWidth/3.38)/2) + windowWidth/200 - ((windowWidth/4.2)/2), 2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5, windowWidth/4.2);
            textSize(windowWidth/80);
            textFont(hn);
            text('James, 38 anni', windowWidth/2 + ((windowWidth/3.38)/2) + windowWidth/200, 2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5 + windowWidth/18);
          }

          if (windowWidth/2 - windowWidth/5.94 - ((windowWidth/3.03)/2) < mouseX && mouseX < windowWidth/2 - windowWidth/5.94 + ((windowWidth/3.03)/2) && 2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5 - ((windowWidth/5.39)/2) + windowWidth/5.12 < mouseY && mouseY < 2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5 + ((windowWidth/5.39)/2) + windowWidth/5.12){
            image(scuro, windowWidth/2 - ((windowWidth/3.38)/2) - windowWidth/200, 2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5 + windowWidth/5.12, windowWidth/3.38, windowWidth/5.39);
            fill(255);
            textSize(windowWidth/102.4);
            textFont(hnr);
            textAlign(CENTER);
            text("Negli ultimi anni senitvo che la mia mente non era più attiva e  pronta come un tempo. L'operazione ha rallentato lo scorrere degli anni e mi sembra di essere di nuovo nel fiore degli anni.", windowWidth/2 - ((windowWidth/3.38)/2) - windowWidth/200 - ((windowWidth/4.2)/2), 2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5 + windowWidth/5.12, windowWidth/4.2);
            textSize(windowWidth/80);
            textFont(hn);
            text('Roberto, 61 anni', windowWidth/2 - ((windowWidth/3.38)/2) - windowWidth/200, 2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5 + windowWidth/5.12 + windowWidth/18);
          }

          if (windowWidth/2 + windowWidth/5.94 - ((windowWidth/3.03)/2) < mouseX && mouseX < windowWidth/2 + windowWidth/5.94 + ((windowWidth/3.03)/2) && 2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5 - ((windowWidth/5.39)/2) + windowWidth/5.12 < mouseY && mouseY < 2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5 + ((windowWidth/5.39)/2) + windowWidth/5.12){
            image(scuro, windowWidth/2 + ((windowWidth/3.38)/2) + windowWidth/200, 2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5 + windowWidth/5.12, windowWidth/3.38, windowWidth/5.39);
            fill(255);
            textSize(windowWidth/102.4);
            textFont(hnr);
            textAlign(CENTER);
            text("Credevo che non sarei mai riuscita a recuperare il rapporto con mio figlio, ma dopo essermi rivolta a Chirolab è successo il miracolo!", windowWidth/2 + ((windowWidth/3.38)/2) + windowWidth/200 - ((windowWidth/4.2)/2), 2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5 + windowWidth/5.12, windowWidth/4.2);
            textSize(windowWidth/80);
            textFont(hn);
            text('Giovanna, 58 anni', windowWidth/2 + ((windowWidth/3.38)/2) + windowWidth/200, 2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5 + windowWidth/5.12 + windowWidth/18);
          }
        }else if(cont >= windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/5 + windowHeight + windowHeight){
          background(255);
          fill('#202021')
          imageMode(CORNER);
          image(chirolab, windowWidth/26 , windowWidth/38.4 , windowWidth/8.48 , windowWidth/42.6);
          textSize(windowWidth/102.4);
          textFont(hnr);
          textAlign(LEFT);
          fill('#202021');
          text('Chi siamo', x1 , windowHeight/1.26);
          text('Lineo', x2 , windowHeight/1.2);
          fill('#baa079');
          text('Recensioni', x3 , windowHeight/1.15);
          fill('#202021');
          text('Shop', x4 , windowHeight/1.10);
          text('Contatti', x5 , windowHeight/1.05);
          fill('#202021');
          textSize(windowWidth/30.72);
          textFont(gr);
          textAlign(CENTER);
          text('Recensioni', windowWidth/2, 2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/3);

          imageMode(CENTER);
          image(rec1, windowWidth/2 - ((windowWidth/3.38)/2) - windowWidth/200, 2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5, windowWidth/3.38, windowWidth/5.39);
          image(rec2, windowWidth/2 + ((windowWidth/3.38)/2) + windowWidth/200, 2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5, windowWidth/3.38, windowWidth/5.39);
          image(rec3, windowWidth/2 - ((windowWidth/3.38)/2) - windowWidth/200, 2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5 + windowWidth/5.12, windowWidth/3.38, windowWidth/5.39);
          image(rec4, windowWidth/2 + ((windowWidth/3.38)/2) + windowWidth/200, 2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5 + windowWidth/5.12, windowWidth/3.38, windowWidth/5.39);
          image(rec5, windowWidth/2 - ((windowWidth/3.38)/2) - windowWidth/200, 2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5 + windowWidth/5.12 + windowWidth/5.12, windowWidth/3.38, windowWidth/5.39);
          image(rec6, windowWidth/2 + ((windowWidth/3.38)/2) + windowWidth/200, 2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5 + windowWidth/5.12 + windowWidth/5.12, windowWidth/3.38, windowWidth/5.39);

          imageMode(CENTER);
          if (buleana == false) {
            image(pulsante, windowWidth/1.126, windowHeight/38.4 + ((windowWidth/30)), windowWidth/7, windowWidth/29);
          }else{
            image(pulsantep , windowWidth/1.126, windowHeight/38.4 + ((windowWidth/30)), windowWidth/7, windowWidth/29);
          }
          textSize(windowWidth/102.4);
          textFont(hn);
          textAlign(CENTER);
          text('Inizia la modifica', windowWidth/1.126 , windowHeight/38.2 + windowWidth/32);

          if (windowWidth/2 - windowWidth/5.94 - ((windowWidth/3.03)/2) < mouseX && mouseX < windowWidth/2 - windowWidth/5.94 + ((windowWidth/3.03)/2) && 2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5 - ((windowWidth/5.39)/2) < mouseY && mouseY < 2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5 + ((windowWidth/5.39)/2)){
            image(scuro, windowWidth/2 - ((windowWidth/3.38)/2) - windowWidth/200, 2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5, windowWidth/3.38, windowWidth/5.39);
            fill(255);
            textSize(windowWidth/102.4);
            textFont(hnr);
            textAlign(CENTER);
            text('Ho sempre sognato di avere una famiglia. Grazie a Chirolab ho conosciuto la mia anima gemella e ora aspettiamo il nostro primo figlio.', windowWidth/2 - ((windowWidth/3.38)/2) - windowWidth/200 - ((windowWidth/4.2)/2), 2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5, windowWidth/4.2);
            textSize(windowWidth/80);
            textFont(hn);
            text('Annalisa, 27 anni', windowWidth/2 - ((windowWidth/3.38)/2) - windowWidth/200, 2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5 + windowWidth/18);
          }

          if (windowWidth/2 + windowWidth/5.94 - ((windowWidth/3.03)/2) < mouseX && mouseX < windowWidth/2 + windowWidth/5.94 + ((windowWidth/3.03)/2) && 2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5 - ((windowWidth/5.39)/2) < mouseY && mouseY < 2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5 + ((windowWidth/5.39)/2)){
            image(scuro, windowWidth/2 + ((windowWidth/3.38)/2) + windowWidth/200, 2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5, windowWidth/3.38, windowWidth/5.39);
            fill(255);
            textSize(windowWidth/102.4);
            textFont(hnr);
            textAlign(CENTER);
            text("Dopo l'ennesimo fallimento, ero ad un passo dall'abbandonare il mio sogno, ma l'intervento mi ha ridato la forza e la speranza necessarie.", windowWidth/2 + ((windowWidth/3.38)/2) + windowWidth/200 - ((windowWidth/4.2)/2), 2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5, windowWidth/4.2);
            textSize(windowWidth/80);
            textFont(hn);
            text('James, 38 anni', windowWidth/2 + ((windowWidth/3.38)/2) + windowWidth/200, 2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5 + windowWidth/18);
          }

          if (windowWidth/2 - windowWidth/5.94 - ((windowWidth/3.03)/2) < mouseX && mouseX < windowWidth/2 - windowWidth/5.94 + ((windowWidth/3.03)/2) && 2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5 - ((windowWidth/5.39)/2) + windowWidth/5.12 < mouseY && mouseY < 2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5 + ((windowWidth/5.39)/2) + windowWidth/5.12){
            image(scuro, windowWidth/2 - ((windowWidth/3.38)/2) - windowWidth/200, 2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5 + windowWidth/5.12, windowWidth/3.38, windowWidth/5.39);
            fill(255);
            textSize(windowWidth/102.4);
            textFont(hnr);
            textAlign(CENTER);
            text("Negli ultimi anni senitvo che la mia mente non era più attiva e pronta come un tempo. Dopo l'operazione mi sembra di essere di nuovo nel fiore degli anni.", windowWidth/2 - ((windowWidth/3.38)/2) - windowWidth/200 - ((windowWidth/4.2)/2), 2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5 + windowWidth/5.12, windowWidth/4.2);
            textSize(windowWidth/80);
            textFont(hn);
            text('Roberto, 61 anni', windowWidth/2 - ((windowWidth/3.38)/2) - windowWidth/200, 2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5 + windowWidth/5.12 + windowWidth/18);
          }

          if (windowWidth/2 + windowWidth/5.94 - ((windowWidth/3.03)/2) < mouseX && mouseX < windowWidth/2 + windowWidth/5.94 + ((windowWidth/3.03)/2) && 2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5 - ((windowWidth/5.39)/2) + windowWidth/5.12 < mouseY && mouseY < 2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5 + ((windowWidth/5.39)/2) + windowWidth/5.12){
            image(scuro, windowWidth/2 + ((windowWidth/3.38)/2) + windowWidth/200, 2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5 + windowWidth/5.12, windowWidth/3.38, windowWidth/5.39);
            fill(255);
            textSize(windowWidth/102.4);
            textFont(hnr);
            textAlign(CENTER);
            text("Credevo che non sarei mai riuscita a recuperare il rapporto con mio figlio, ma dopo essermi rivolta a Chirolab è successo il miracolo!", windowWidth/2 + ((windowWidth/3.38)/2) + windowWidth/200 - ((windowWidth/4.2)/2), 2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5 + windowWidth/5.12, windowWidth/4.2);
            textSize(windowWidth/80);
            textFont(hn);
            text('Giovanna, 58 anni', windowWidth/2 + ((windowWidth/3.38)/2) + windowWidth/200, 2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5 + windowWidth/5.12 + windowWidth/18);
          }

          if (windowWidth/2 - windowWidth/5.94 - ((windowWidth/3.03)/2) < mouseX && mouseX < windowWidth/2 - windowWidth/5.94 + ((windowWidth/3.03)/2) && 2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5 - ((windowWidth/5.39)/2) + windowWidth/5.12 + windowWidth/5.12  < mouseY && mouseY < 2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5 + ((windowWidth/5.39)/2) + windowWidth/5.12 + windowWidth/5.12){
            image(scuro, windowWidth/2 - ((windowWidth/3.38)/2) - windowWidth/200, 2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5 + windowWidth/5.12 + windowWidth/5.12, windowWidth/3.38, windowWidth/5.39);
            fill(255);
            textSize(windowWidth/102.4);
            textFont(hnr);
            textAlign(CENTER);
            text("Prima dell'intervento, la mia vita era solo l'ombra di ciò che è ora. Devo ringraziare il team di Chirolab. che mi ha permesso di vivere davvero.", windowWidth/2 - ((windowWidth/3.38)/2) - windowWidth/200 - ((windowWidth/4.2)/2), 2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5 + windowWidth/5.12 + windowWidth/5.12, windowWidth/4.2);
            textSize(windowWidth/80);
            textFont(hn);
            text('Fernando, 24 anni', windowWidth/2 - ((windowWidth/3.38)/2) - windowWidth/200, 2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5 + windowWidth/5.12 + windowWidth/5.12 + windowWidth/18);
          }

          if (windowWidth/2 + windowWidth/5.94 - ((windowWidth/3.03)/2) < mouseX && mouseX < windowWidth/2 + windowWidth/5.94 + ((windowWidth/3.03)/2) && 2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5 - ((windowWidth/5.39)/2) + windowWidth/5.12 + windowWidth/5.12 < mouseY && mouseY < 2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5 + ((windowWidth/5.39)/2) + windowWidth/5.12+ windowWidth/5.12){
            image(scuro, windowWidth/2 + ((windowWidth/3.38)/2) + windowWidth/200, 2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5 + windowWidth/5.12 + windowWidth/5.12, windowWidth/3.38, windowWidth/5.39);
            fill(255);
            textSize(windowWidth/102.4);
            textFont(hnr);
            textAlign(CENTER);
            text("I continui dolori che mi accompagnavano da anni mi stavano togliendo la voglia di vivere. L'operazione mi ha riportato a sorridere.", windowWidth/2 + ((windowWidth/3.38)/2) + windowWidth/200 - ((windowWidth/4.2)/2), 2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5 + windowWidth/5.12 + windowWidth/5.12, windowWidth/4.2);
            textSize(windowWidth/80);
            textFont(hn);
            text('Carla, 56 anni', windowWidth/2 + ((windowWidth/3.38)/2) + windowWidth/200, 2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5 + windowWidth/5.12 + windowWidth/5.12 + windowWidth/18);
          }

          fill('#202021');
          textSize(windowWidth/80);
          textFont(hn);
          textAlign(CENTER);
          text("Sei stato anche tu un nostro paziente e vuoi condividere la tua esperienza? Raccontaci come Chirolab ti ha cambiato la vita", windowWidth/2 - ((windowWidth/2)/2), 2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5 + windowWidth/5.12 + windowWidth/5.12 + windowHeight/3.5, windowWidth/2);

          imageMode(CENTER);
          if (buleana3 == false) {
            image(pulsante, windowWidth/2, 2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5 + windowWidth/5.12 + windowWidth/5.12 + windowHeight/2.3, windowWidth/6 , windowWidth/27);
          }else{
            image(pulsantep , windowWidth/2, 2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5 + windowWidth/5.12 + windowWidth/5.12 + windowHeight/2.3, windowWidth/6, windowWidth/27);
            if (mp == true){
              stato = 4;
              mp = false;
            }
          }
          fill('#202021');
          textSize(windowWidth/102.4);
          textFont(hn);
          textAlign(CENTER);
          text("Raccontaci la tua esperienza", windowWidth/2, 2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5 + windowWidth/5.12 + windowWidth/5.12 + windowHeight/2.32);

          image(contatti,windowWidth/2,2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5 + windowWidth/5.12 + windowWidth/5.12 + windowHeight, windowWidth, windowWidth/4.55);
          if (mouseX > windowWidth - windowWidth/21 && mouseY > (2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5 + windowWidth/5.12 + windowWidth/5.12 + windowHeight) + windowHeight/25 && mouseX < windowWidth - windowWidth/31.5 && mouseY < (2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5 + windowWidth/5.12 + windowWidth/5.12 + windowHeight) + windowHeight/15.4){
              cursor(HAND);
              if (mp == true){
                window.open("https://www.instagram.com/chirolab_clinica/","_self");
              }
            }
            if (mouseX > windowWidth - windowWidth/21 && mouseY > (2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5 + windowWidth/5.12 + windowWidth/5.12 + windowHeight) + windowHeight/13 && mouseX < windowWidth - windowWidth/31.5 && mouseY < (2*windowHeight - (((cont - ((windowWidth/25) + (7*(windowHeight/20)) + 165))-160)*5) + windowHeight/1.5 + windowWidth/5.12 + windowWidth/5.12 + windowHeight) + windowHeight/9.8){
              cursor(HAND);
              if (mp == true){
                window.open("https://www.instagram.com/chirolab_clinica/","_self");
              }
            }
        }
      }
      barretta = map(cont, 0, ((windowWidth/25) + (2*(windowWidth/25.6)) + (0.155*(windowWidth/5)) + (2*(windowHeight/5)) + (7*(windowHeight/20)) + 325 + windowHeight/9.6), 0, windowHeight - windowWidth/50);
      rectMode(CORNER);
      fill('#baa079');
      rect(windowWidth - windowWidth/200, barretta, windowWidth/300, windowWidth/50);
    break;

    case 3:
      if (windowWidth/26 < mouseX && mouseX < windowWidth/6.41 && windowHeight/21 < mouseY && mouseY < windowHeight/11 && mp == true){
        cont = 0;
        stato = 0;
        frameCount = 0;
      }

      if ((windowWidth/2 + windowWidth/25 - ((windowWidth/100)/2)) < mouseX && mouseX < (windowWidth/2 + windowWidth/25 + ((windowWidth/100)/2)) && (windowHeight/7 + windowWidth/4.5 + windowHeight/36  - ((windowWidth/100)/2) + windowHeight/4) < mouseY && mouseY < (windowHeight/7 + windowWidth/4.5 + windowHeight/36  + ((windowWidth/100)/2)) + windowHeight/4) {
        buleana = true;
      }else {
        buleana = false;
      }

      if ((windowWidth/2 + windowWidth/15 - ((windowWidth/100)/2)) < mouseX && mouseX < (windowWidth/2 + windowWidth/15 + ((windowWidth/100)/2)) && (windowHeight/7 + windowWidth/4.5 + windowHeight/36  - ((windowWidth/100)/2) + windowHeight/4) < mouseY && mouseY < (windowHeight/7 + windowWidth/4.5 + windowHeight/36  + ((windowWidth/100)/2)) + windowHeight/4) {
        buleana1 = true;
      }else {
        buleana1 = false;
      }

      if ((windowWidth - windowWidth/26 - windowWidth/7) < mouseX && mouseX < (windowWidth - windowWidth/26) && (windowHeight/7 + windowWidth/4.5 + windowHeight/30 + windowHeight/4 - (windowWidth/29)/2) < mouseY && mouseY < (windowHeight/7 + windowWidth/4.5 + windowHeight/30 + windowHeight/4 + (windowWidth/29)/2)) {
        buleana2 = true;
      }else {
        buleana2 = false;
      }

      if (windowWidth - windowWidth/26 - windowWidth/42.6 < mouseX && mouseX < windowWidth - windowWidth/26 && windowWidth/38.4 < mouseY && mouseY < windowWidth/38.4 + windowWidth/42.6) {
        buleana3 = true;
      }else {
        buleana3 = false;
      }

      background(255);
      fill(0);
      imageMode(CORNER);
      image(chirolab, windowWidth/26 , windowWidth/38.4 , windowWidth/8.48 , windowWidth/42.6);
      imageMode(CENTER);
      image(pallino[150], windowWidth/4 , windowHeight/2 , windowWidth/3, windowWidth/3);
      textSize(windowWidth/45);
      textFont(gr);
      textAlign(LEFT);
      text('Lineo - standard', windowWidth/2, windowHeight/6);
      textSize(windowWidth/90);
      textFont(hnr);
      text('Kit per la riprogettazione della configurazione chirologica', windowWidth/2, windowHeight/6 + windowHeight/25);
      textFont(hn);
      text('Contiene', windowWidth/2, windowHeight/6 + windowHeight/25 + windowHeight/15);
      imageMode(CORNER);
      image(kitbase, windowWidth/2, windowHeight/6 + windowHeight/25 + windowHeight/15 + windowHeight/15, windowWidth/4.1, windowWidth/19.8);
      textSize(windowWidth/120);
      textFont(hnr);
      text('kit', windowWidth/2 + windowWidth/50, windowHeight/6 + windowHeight/25 + windowHeight/15 + windowHeight/15 + windowWidth/19.8 + windowHeight/30);
      textAlign(CENTER);
      text('cavo USB',windowWidth/2 + (windowWidth/4.1)/2, windowHeight/6 + windowHeight/25 + windowHeight/15 + windowHeight/15 + windowWidth/19.8 + windowHeight/30);
      text('guida sulla chiromanzia', windowWidth/2  + windowWidth/4.1 - windowWidth/40, windowHeight/6 + windowHeight/25 + windowHeight/15 + windowHeight/15 + windowWidth/19.8 + windowHeight/30);
      textAlign(LEFT);
      textSize(windowWidth/90);
      textFont(hn);
      text('Specifiche tecniche', windowWidth/2, windowHeight/6 + windowHeight/25 + windowHeight/15 + windowHeight/4);
      textSize(windowWidth/120);
      textFont(hnr);
      text('Colore', windowWidth/2, windowHeight/6 + windowHeight/25 + windowHeight/15 + windowHeight/23 + windowHeight/4);
      text('Linee analizzabili', windowWidth/2, windowHeight/6 + windowHeight/25 + windowHeight/15 + windowHeight/23 + windowHeight/40 + windowHeight/4);
      text('Dimensioni', windowWidth/2, windowHeight/6 + windowHeight/25 + windowHeight/15 + windowHeight/23 + windowHeight/40 + windowHeight/40 + windowHeight/4);
      text('Peso', windowWidth/2, windowHeight/6 + windowHeight/25 + windowHeight/15 + windowHeight/23 + windowHeight/40 + windowHeight/40 + windowHeight/40 + windowHeight/4);
      text('bianco', windowWidth/2 + (windowWidth/4.1)/2 - windowWidth/55, windowHeight/6 + windowHeight/25 + windowHeight/15 + windowHeight/23 + windowHeight/4);
      text('4', windowWidth/2 + (windowWidth/4.1)/2 - windowWidth/55, windowHeight/6 + windowHeight/25 + windowHeight/15 + windowHeight/23 + windowHeight/40 + windowHeight/4);
      text('26.00 x 24.00. x 24.00 cm', windowWidth/2 + (windowWidth/4.1)/2 - windowWidth/55, windowHeight/6 + windowHeight/25 + windowHeight/15 + windowHeight/23 + windowHeight/40 + windowHeight/40 + windowHeight/4);
      text('400', windowWidth/2 + (windowWidth/4.1)/2 - windowWidth/55, windowHeight/6 + windowHeight/25 + windowHeight/15 + windowHeight/23 + windowHeight/40 + windowHeight/40 + windowHeight/40 + windowHeight/4);


      imageMode(CORNER);

      if (buleana2 == false) {
        image(pulsante, windowWidth - windowWidth/26 - windowWidth/7, windowHeight/7 + windowWidth/4.5 + windowHeight/30 + windowHeight/4 - (windowWidth/29)/2, windowWidth/7 , windowWidth/29);
      }else{
        image(pulsantep, windowWidth - windowWidth/26 - windowWidth/7, windowHeight/7 + windowWidth/4.5 + windowHeight/30 + windowHeight/4 - (windowWidth/29)/2, windowWidth/7 , windowWidth/29);
      }

      if (buleana3 == false) {
        image(indietro, windowWidth - windowWidth/26 - windowWidth/42.6, windowWidth/38.4, windowWidth/50 , windowWidth/50);
      }else{
        image(indietrop, windowWidth - windowWidth/26 - windowWidth/42.6, windowWidth/38.4, windowWidth/50 , windowWidth/50);
        if (mp == true){
          stato = 2;
          frameCount == 400;
          mp = false;
        }
      }

      textAlign(CENTER,CENTER);
      textFont(hn);
      textSize(windowWidth/102.4);
      text('Acquista', windowWidth - windowWidth/26 - (windowWidth/7)/2, windowHeight/7 + windowWidth/4.5 + windowHeight/30 + windowHeight/4 - windowHeight/300);

      textAlign(LEFT,CENTER);
      textSize(windowWidth/80);
      textFont(hn);
      text((q*110) + '.00 €', windowWidth/2, windowHeight/7 + windowWidth/4.5 + windowHeight/4);
      textFont(hnr);
      textSize(windowWidth/120);
      text('Quantità', windowWidth/2, windowHeight/7 + windowWidth/4.5 + windowHeight/30 + windowHeight/4);

      imageMode(CENTER);
      if (buleana == true){
        image(menop, windowWidth/2 + windowWidth/25, windowHeight/7 + windowWidth/4.5 + windowHeight/30 + windowHeight/4, windowWidth/100 , windowWidth/100);
        if (mp == true && q > 0){
          q--;
          mp = false;
        }
      }else{
        image(meno, windowWidth/2 + windowWidth/25, windowHeight/7 + windowWidth/4.5 + windowHeight/30 + windowHeight/4 , windowWidth/100 , windowWidth/100);
      }

      text(q, windowWidth/2 + windowWidth/19.5, windowHeight/7 + windowWidth/4.5 + windowHeight/30 + windowHeight/4);

      if (buleana1 == true){
        image(piup, windowWidth/2 + windowWidth/14.9, windowHeight/7 + windowWidth/4.5 + windowHeight/30 + windowHeight/4 , windowWidth/100 , windowWidth/100);
        if (mp == true){
          q++;
          mp = false;
        }
      }else{
        image(piu, windowWidth/2 + windowWidth/14.9, windowHeight/7 + windowWidth/4.5 + windowHeight/30 + windowHeight/4, windowWidth/100 , windowWidth/100);
      }
    break;

    case 4:
      if (windowWidth/26 < mouseX && mouseX < windowWidth/6.41 && windowHeight/21 < mouseY && mouseY < windowHeight/11 && mp == true){
        cont = 0;
        stato = 0;
        frameCount = 0;
      }

      if ((windowWidth/2 - ((windowWidth/7)/2)) < mouseX && mouseX < (windowWidth/2 + ((windowWidth/7)/2)) && (windowHeight/2.25 + windowWidth/8 + windowHeight/10 - ((windowWidth/29)/2)) < mouseY && mouseY < (windowHeight/2.25 + windowWidth/8 + windowHeight/10 + (windowWidth/29)/2)) {
        buleana = true;
      }else {
        buleana = false;
      }

      if (windowWidth - windowWidth/26 - windowWidth/42.6 < mouseX && mouseX < windowWidth - windowWidth/26 && windowWidth/38.4 < mouseY && mouseY < windowWidth/38.4 + windowWidth/42.6) {
        buleana1 = true;
      }else {
        buleana1 = false;
      }

      background(255);
      imageMode(CORNER);
      image(chirolab, windowWidth/26 , windowWidth/38.4 , windowWidth/8.48 , windowWidth/42.6);

      if (buleana1 == false) {
        image(indietro, windowWidth - windowWidth/26 - windowWidth/42.6, windowWidth/38.4, windowWidth/50 , windowWidth/50);
      }else{
        image(indietrop, windowWidth - windowWidth/26 - windowWidth/42.6, windowWidth/38.4, windowWidth/50 , windowWidth/50);
        if (mp == true){
          stato = 2;
          input1.hide();
          input2.hide();
          input3.hide();
          input4.hide();
          input5.hide();
          frameCount == 400;
          mp = false;
        }
      }

      textAlign(LEFT);
      fill(0);
      textFont(hnr);
      textSize(windowWidth/102.4);
      text('Nome', windowWidth/2 - windowWidth/4 - windowWidth/50 , windowHeight/4.5 - windowHeight/60);
      text('Cognome', windowWidth/2 + windowWidth/50 , windowHeight/4.5 - windowHeight/60);
      text('Età', windowWidth/2 - windowWidth/4 - windowWidth/50 , windowHeight/3 - windowHeight/60);
      text('Codice paziente*', windowWidth/2 + windowWidth/50 , windowHeight/3 - windowHeight/60);
      text('Racconta la tua esperienza', windowWidth/2 - windowWidth/4 - windowWidth/50 , windowHeight/2.25 - windowHeight/60);

      input1.show();
      input2.show();
      input3.show();
      input4.show();
      input5.show();

      imageMode(CENTER);
      if (buleana == false) {
        image(pulsante, windowWidth/2, windowHeight/2.25 + windowWidth/8 + windowHeight/10, windowWidth/7 , windowWidth/29);
      }else{
        image(pulsantep, windowWidth/2, windowHeight/2.25 + windowWidth/8 + windowHeight/10, windowWidth/7 , windowWidth/29);
        if (mp == true && input1!=0 && input2!=0 && input3!=0 && input4!=0 && input5!=0){
          stato = 2;
          frameCount == 400;
        }
      }

      textFont(hn);
      textAlign(CENTER);
      text('Invia', windowWidth/2, windowHeight/2.25 + windowWidth/8 + windowHeight/10.3);

      textFont(hnr);
      textSize(windowWidth/120);
      text('* È possibile trovare il proprio codice paziente sul referto pre-operatorio.', windowWidth/2, windowHeight/1.1);
      text('I dati anagrafici sono richiesti al fine di controllare la veridicità dell’operazione effettuata con Chirolab.', windowWidth/2, windowHeight/1.07);
      text('Questi non verranno divulgati, né mostrati, ad eccezione di nome ed età.', windowWidth/2, windowHeight/1.04);
    break;

    case 5:

      if ((windowWidth/1.126 - ((windowWidth/7)/2)) < mouseX && mouseX < (windowWidth/1.126 + ((windowWidth/7)/2)) && (windowHeight/1.115 - ((windowWidth/29)/2)) < mouseY && mouseY < (windowHeight/1.115 + ((windowWidth/29)/2))) {
        buleana = true;
        if (mp == true){
          stato = 6;
          mp = false;
        }
      } else {
        buleana = false;
      }

      if (windowWidth - windowWidth/26 - windowWidth/42.6 < mouseX && mouseX < windowWidth - windowWidth/26 && windowWidth/38.4 < mouseY && mouseY < windowWidth/38.4 + windowWidth/42.6) {
        buleana3 = true;
      }else {
        buleana3 = false;
      }

      background("#202021");
      stroke(186,160,121);
      noFill();
      imageMode(CENTER);
      image(sfondo, windowWidth/3 , windowHeight/2 , windowWidth/0.57 , windowWidth/1.15);
      imageMode(CORNER);
      image(logolineo, windowWidth/26 , windowWidth/38.4, windowWidth/10.9, windowWidth/42.6);
      imageMode(CENTER);
      image(kitcomputer, windowWidth/2, windowHeight/2, windowWidth/2.35, windowWidth/5.13);
      fill(255);
      noStroke();
      textFont(hnr);
      textAlign(CENTER);
      textSize(windowWidth/80);
      text('Collega lineo al tuo computer', windowWidth/2, windowHeight/2.25 + windowWidth/8 + windowHeight/10.3);
      ellipseMode(CENTER);
      fill(186,160,121);
      stroke(186,160,121);
      circle(windowWidth/2 - (windowWidth/100) - (windowWidth/50), windowHeight/1.115, windowWidth/100);
      noFill();
      stroke(255);
      circle(windowWidth/2 - (windowWidth/100), windowHeight/1.115, windowWidth/100);
      circle(windowWidth/2 + (windowWidth/100), windowHeight/1.115, windowWidth/100);
      circle(windowWidth/2 + (windowWidth/100) + (windowWidth/50), windowHeight/1.115, windowWidth/100);
      fill(255);
      noStroke();
      imageMode(CENTER);
      if (buleana == false) {
        image(pulsante, windowWidth/1.126, windowHeight/1.115, windowWidth/7, windowWidth/29);
      }else{
        image(pulsantep , windowWidth/1.126, windowHeight/1.115, windowWidth/7, windowWidth/29);
      }
      textSize(windowWidth/102.4);
      textFont(hn);
      text('Avanti', windowWidth/1.126 , windowHeight/1.12);

      imageMode(CORNER);

      if (buleana3 == false) {
        image(indietrob, windowWidth - windowWidth/26 - windowWidth/42.6, windowWidth/38.4, windowWidth/50 , windowWidth/50);
      }else{
        image(indietrop, windowWidth - windowWidth/26 - windowWidth/42.6, windowWidth/38.4, windowWidth/50 , windowWidth/50);
        if (mp == true){
          stato = 2;
          frameCount == 400;
          mp = false;
        }
      }
    break;

    case 6:

    if ((windowWidth/1.126 - ((windowWidth/7)/2)) < mouseX && mouseX < (windowWidth/1.126 + ((windowWidth/7)/2)) && (windowHeight/1.115 - ((windowWidth/29)/2)) < mouseY && mouseY < (windowHeight/1.115 + ((windowWidth/29)/2))) {
      buleana4 = true;
      if (mp == true){
          stato = 7;
          mp = false;
      }
    } else {
      buleana4 = false;
    }

    if ((windowWidth/8.9 - ((windowWidth/7)/2)) < mouseX && mouseX < (windowWidth/8.9 + ((windowWidth/7)/2)) && (windowHeight/1.115 - ((windowWidth/29)/2)) < mouseY && mouseY < (windowHeight/1.115 + ((windowWidth/29)/2))) {
      buleana2 = true;
      if (mp == true){
          stato = 5;
          mp = false;
      }
    } else {
      buleana2 = false;
    }

    if (windowWidth - windowWidth/26 - windowWidth/42.6 < mouseX && mouseX < windowWidth - windowWidth/26 && windowWidth/38.4 < mouseY && mouseY < windowWidth/38.4 + windowWidth/42.6) {
      buleana3 = true;
    }else {
      buleana3 = false;
    }

    background("#202021");
    stroke(186,160,121);
    noFill();
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
    text('Scopri i valori delle tue linee chirologiche', windowWidth/2, windowHeight/2.25 + windowWidth/8 + windowHeight/10.3);
    ellipseMode(CENTER);
    noFill();
    stroke(255);
    circle(windowWidth/2 - (windowWidth/100) - (windowWidth/50), windowHeight/1.115, windowWidth/100);
    fill(186,160,121);
    stroke(186,160,121);
    circle(windowWidth/2 - (windowWidth/100), windowHeight/1.115, windowWidth/100);
    noFill();
    stroke(255);
    circle(windowWidth/2 + (windowWidth/100), windowHeight/1.115, windowWidth/100);
    circle(windowWidth/2 + (windowWidth/100) + (windowWidth/50), windowHeight/1.115, windowWidth/100);
    fill(255);
    noStroke();
    imageMode(CENTER);
    if (buleana4 == false) {
      image(pulsante, windowWidth/1.126, windowHeight/1.115, windowWidth/7, windowWidth/29);
    }else{
      image(pulsantep , windowWidth/1.126, windowHeight/1.115, windowWidth/7, windowWidth/29);
    }
    if (buleana2 == false) {
      image(pulsante, windowWidth/8.9, windowHeight/1.115, windowWidth/7, windowWidth/29);
    }else{
      image(pulsantep , windowWidth/8.9, windowHeight/1.115, windowWidth/7, windowWidth/29);
    }
    textSize(windowWidth/102.4);
    textFont(hn);
    text('Avanti', windowWidth/1.126 , windowHeight/1.12);
    text('Indietro', windowWidth/8.9 , windowHeight/1.12);

    imageMode(CORNER);

    if (buleana3 == false) {
      image(indietrob, windowWidth - windowWidth/26 - windowWidth/42.6, windowWidth/38.4, windowWidth/50 , windowWidth/50);
    }else{
      image(indietrop, windowWidth - windowWidth/26 - windowWidth/42.6, windowWidth/38.4, windowWidth/50 , windowWidth/50);
      if (mp == true){
        stato = 2;
        frameCount == 400;
        mp = false;
      }
    }

    break;

    case 7:

      if ((windowWidth/1.126 - ((windowWidth/7)/2)) < mouseX && mouseX < (windowWidth/1.126 + ((windowWidth/7)/2)) && (windowHeight/1.115 - ((windowWidth/29)/2)) < mouseY && mouseY < (windowHeight/1.115 + ((windowWidth/29)/2))) {
        buleana4 = true;
        if (mp == true){
            stato = 8;
            mp = false;
        }
      } else {
        buleana4 = false;
      }

      if ((windowWidth/8.9 - ((windowWidth/7)/2)) < mouseX && mouseX < (windowWidth/8.9 + ((windowWidth/7)/2)) && (windowHeight/1.115 - ((windowWidth/29)/2)) < mouseY && mouseY < (windowHeight/1.115 + ((windowWidth/29)/2))) {
        buleana2 = true;
        if (mp == true){
            stato = 6;
            mp = false;
        }
      } else {
        buleana2 = false;
      }

      if (windowWidth - windowWidth/26 - windowWidth/42.6 < mouseX && mouseX < windowWidth - windowWidth/26 && windowWidth/38.4 < mouseY && mouseY < windowWidth/38.4 + windowWidth/42.6) {
        buleana3 = true;
      }else {
        buleana3 = false;
      }

      background("#202021");
      stroke(186,160,121);
      noFill();
      imageMode(CENTER);
      image(sfondo, windowWidth/3 , windowHeight/2 , windowWidth/0.57 , windowWidth/1.15);
      imageMode(CORNER);
      image(logolineo, windowWidth/26 , windowWidth/38.4, windowWidth/10.9, windowWidth/42.6);
      imageMode(CENTER);
      image(slider, windowWidth/2 - windowWidth/40, windowHeight/2, windowWidth/4.12, windowWidth/3.78);
      fill(255);
      noStroke();
      textFont(hnr);
      textAlign(CENTER);
      textSize(windowWidth/80);
      rectMode(CENTER);
      text('Con la mano sinistra muovi gli slider per modificare il valore delle linee.', windowWidth/2, windowHeight/2.25 + windowWidth/8 + windowHeight/10.3);
      text('Aumentando il valore di una linea, le altre diminuiscono proporzionalmente', windowWidth/2, windowHeight/2.25 + windowWidth/8 + windowHeight/10.3 + windowWidth/70);
      ellipseMode(CENTER);
      noFill();
      stroke(255);
      circle(windowWidth/2 - (windowWidth/100) - (windowWidth/50), windowHeight/1.115, windowWidth/100);
      circle(windowWidth/2 - (windowWidth/100), windowHeight/1.115, windowWidth/100);
      fill(186,160,121);
      stroke(186,160,121);
      circle(windowWidth/2 + (windowWidth/100), windowHeight/1.115, windowWidth/100);
      noFill();
      stroke(255);
      circle(windowWidth/2 + (windowWidth/100) + (windowWidth/50), windowHeight/1.115, windowWidth/100);
      fill(255);
      noStroke();
      imageMode(CENTER);
      if (buleana4 == false) {
        image(pulsante, windowWidth/1.126, windowHeight/1.115, windowWidth/7, windowWidth/29);
      }else{
        image(pulsantep , windowWidth/1.126, windowHeight/1.115, windowWidth/7, windowWidth/29);
      }
      if (buleana2 == false) {
        image(pulsante, windowWidth/8.9, windowHeight/1.115, windowWidth/7, windowWidth/29);
      }else{
        image(pulsantep , windowWidth/8.9, windowHeight/1.115, windowWidth/7, windowWidth/29);
      }
      textSize(windowWidth/102.4);
      textFont(hn);
      text('Avanti', windowWidth/1.126 , windowHeight/1.12);
      text('Indietro', windowWidth/8.9 , windowHeight/1.12);

      imageMode(CORNER);

      if (buleana3 == false) {
        image(indietrob, windowWidth - windowWidth/26 - windowWidth/42.6, windowWidth/38.4, windowWidth/50 , windowWidth/50);
      }else{
        image(indietrop, windowWidth - windowWidth/26 - windowWidth/42.6, windowWidth/38.4, windowWidth/50 , windowWidth/50);
        if (mp == true){
          stato = 2;
          frameCount == 400;
          mp = false;
        }
      }

    break;

    case 8:

      if ((windowWidth/1.126 - ((windowWidth/7)/2)) < mouseX && mouseX < (windowWidth/1.126 + ((windowWidth/7)/2)) && (windowHeight/1.115 - ((windowWidth/29)/2)) < mouseY && mouseY < (windowHeight/1.115 + ((windowWidth/29)/2))) {
        buleana4 = true;
        if (mp == true){
            window.open("lineo.html","_self");
            mp = false;
        }
      } else {
        buleana4 = false;
      }

      if ((windowWidth/8.9 - ((windowWidth/7)/2)) < mouseX && mouseX < (windowWidth/8.9 + ((windowWidth/7)/2)) && (windowHeight/1.115 - ((windowWidth/29)/2)) < mouseY && mouseY < (windowHeight/1.115 + ((windowWidth/29)/2))) {
        buleana2 = true;
        if (mp == true){
            stato = 7;
            mp = false;
        }
      } else {
        buleana2 = false;
      }

      if (windowWidth - windowWidth/26 - windowWidth/42.6 < mouseX && mouseX < windowWidth - windowWidth/26 && windowWidth/38.4 < mouseY && mouseY < windowWidth/38.4 + windowWidth/42.6) {
        buleana3 = true;
      }else {
        buleana3 = false;
      }

      background("#202021");
      stroke(186,160,121);
      noFill();
      imageMode(CENTER);
      image(sfondo, windowWidth/3 , windowHeight/2 , windowWidth/0.57 , windowWidth/1.15);
      imageMode(CORNER);
      image(logolineo, windowWidth/26 , windowWidth/38.4, windowWidth/10.9, windowWidth/42.6);
      imageMode(CENTER);
      image(blocco, windowWidth/2 - windowWidth/40 , windowHeight/2, windowWidth/3.82, windowWidth/4.13);
      fill(255);
      noStroke();
      textFont(hnr);
      textAlign(CENTER);
      textSize(windowWidth/80);
      text("Puoi bloccare la linea qunado raggiunge il livello desiderato per eliminare l'influenza delle altre", windowWidth/2, windowHeight/2.25 + windowWidth/8 + windowHeight/10.3);
      ellipseMode(CENTER);
      noFill();
      stroke(255);
      circle(windowWidth/2 - (windowWidth/100) - (windowWidth/50), windowHeight/1.115, windowWidth/100);
      circle(windowWidth/2 - (windowWidth/100), windowHeight/1.115, windowWidth/100);
      circle(windowWidth/2 + (windowWidth/100), windowHeight/1.115, windowWidth/100);
      fill(186,160,121);
      stroke(186,160,121);
      circle(windowWidth/2 + (windowWidth/100) + (windowWidth/50), windowHeight/1.115, windowWidth/100);
      fill(255);
      noStroke();
      imageMode(CENTER);
      if (buleana4 == false) {
        image(pulsante, windowWidth/1.126, windowHeight/1.115, windowWidth/7, windowWidth/29);
      }else{
        image(pulsantep , windowWidth/1.126, windowHeight/1.115, windowWidth/7, windowWidth/29);
      }
      if (buleana2 == false) {
        image(pulsante, windowWidth/8.9, windowHeight/1.115, windowWidth/7, windowWidth/29);
      }else{
        image(pulsantep , windowWidth/8.9, windowHeight/1.115, windowWidth/7, windowWidth/29);
      }
      textSize(windowWidth/102.4);
      textFont(hn);
      text('Prosegui', windowWidth/1.126 , windowHeight/1.12);
      text('Indietro', windowWidth/8.9 , windowHeight/1.12);

      imageMode(CORNER);

      if (buleana3 == false) {
        image(indietrob, windowWidth - windowWidth/26 - windowWidth/42.6, windowWidth/38.4, windowWidth/50 , windowWidth/50);
      }else{
        image(indietrop, windowWidth - windowWidth/26 - windowWidth/42.6, windowWidth/38.4, windowWidth/50 , windowWidth/50);
        if (mp == true){
          stato = 2;
          frameCount == 400;
          mp = false;
        }
      }

    break;
  }
}

function mouseWheel(event) {
  if (stato == 2){
    cont += (event.delta/10);
    if (cont < 0){
      cont = 0;
    }else if (cont > ((windowWidth/25) + (2*(windowWidth/25.6)) + (0.155*(windowWidth/5)) + (2*(windowHeight/5)) + (7*(windowHeight/20)) + 325 + windowHeight/9.6)){
      cont = ((windowWidth/25) + (2*(windowWidth/25.6)) + (0.155*(windowWidth/5)) + (2*(windowHeight/5)) + (7*(windowHeight/20)) + 325 + windowHeight/9.6);
    }
    print('cont = ' + cont);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed(){
  mp = true;
}

function mouseReleased(){
  mp = false;
}
