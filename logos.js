// Mountainbike Logo – Fahrrad mit deutlicherem Sattel
new p5((p) => {
    p.setup = function() {
        const mbCanvas = p.createCanvas(150, 150);
        mbCanvas.parent("mountainbikeLogo");
        p.background(255);

        p.stroke(0);
        p.strokeWeight(3);
        p.noFill();

        // Räder
        p.ellipse(40, 110, 40, 40);
        p.ellipse(110, 110, 40, 40);

        // Rahmen
        p.line(40, 110, 65, 70);   // Hinterrad -> Sattel
        p.line(65, 70, 105, 110);  // Sattel -> Vorderrad
        p.line(65, 70, 65, 100);   // Sattel -> Pedale
        p.line(65, 100, 40, 110);  // Pedale -> Hinterrad
        p.line(65, 100, 105, 110); // Pedale -> Vorderrad

        // Sattel (deutlich)
        p.strokeWeight(5);
        p.line(60, 68, 70, 68);

        // Lenker
        p.strokeWeight(3);
        p.line(105, 110, 95, 75);
        p.line(95, 75, 115, 75);
    };
});

new p5((p) => {
    p.setup = function() {
        const spCanvas = p.createCanvas(150, 150);
        spCanvas.parent("sprachkurseLogo");
        p.background(255);

        p.noStroke();

        // Erste Blase – unten links, blau
        let x1 = 50, y1 = 60, w1 = 70, h1 = 50;
        p.fill(135, 206, 250, 200);
        p.ellipse(x1, y1, w1, h1);
        // Schnabel tangential an der Blase (zeigt nach unten links)
        p.triangle(x1 - w1/2, y1 + 5, x1 - w1/2 - 10, y1 + 10, x1 - w1/2 + 5, y1 + 15);
        p.fill(0);
        p.textSize(16);
        p.textStyle(p.BOLD);
        p.text("ABC", x1 - 15, y1 + 5);

        // Zweite Blase – rechts unten, grün, Ukrainisch
        let x2 = 95, y2 = 90, w2 = 80, h2 = 50;
        p.fill(144, 238, 144, 200);
        p.ellipse(x2, y2, w2, h2);
        // Schnabel tangential an der Blase (zeigt nach unten rechts)
        p.triangle(x2 + w2/2, y2 + 5, x2 + w2/2 + 10, y2 + 10, x2 + w2/2 - 5, y2 + 15);
        p.fill(0);
        p.textSize(14);
        p.text("Привіт", x2 - 20, y2 + 5); // "Hallo" auf Ukrainisch
    };
});



new p5(p => {
  p.setup = () => {
    const c = p.createCanvas(150,150);
    c.parent("schwarzwaldLogo");
    p.background(255);

    p.stroke(20,80,40);
    p.strokeWeight(2);
    p.fill(34,139,34);

    drawTree(40);
    drawTree(75);
    drawTree(110);
  };

  function drawTree(x){
    p.triangle(x,40,x-20,90,x+20,90);
    p.triangle(x,55,x-25,110,x+25,110);
  }
});


// Entwicklung Logo – modernes Zahnrad mit Farbakzenten
new p5((p) => {
    p.setup = function() {
        const enCanvas = p.createCanvas(150, 150);
        enCanvas.parent("entwicklungLogo");
        p.background(255);

        drawGear(p, 75, 75, 40, 8);
    };

    function drawGear(p, x, y, radius, teeth) {
        p.push();
        p.translate(x, y);
        p.stroke(0);
        p.strokeWeight(2);
        p.fill(200, 200, 200);

        p.beginShape();
        for (let i = 0; i < teeth*2; i++) {
            let angle = i * p.TWO_PI / (teeth*2);
            let r = i % 2 === 0 ? radius : radius*0.7;
            p.vertex(r * p.cos(angle), r * p.sin(angle));
        }
        p.endShape(p.CLOSE);

        // Zentrum farbig
        p.fill(100, 150, 255);
        p.ellipse(0, 0, radius*0.6, radius*0.6);
        p.pop();
    }
});


new p5(p => {
  p.setup = () => {
    const c = p.createCanvas(150, 150);
    c.parent("erinnerungLogo");
    p.background(255);

    const cx = 75;
    const cy = 80;

    // ================= BUCH-KOORDINATEN =================
    const leftTop = {x: 30, y: 45};
    const leftBottom = {x: 30, y: 110};
    const rightTop = {x: 120, y: 45};
    const rightBottom = {x: 120, y: 110};
    const midTop = {x: 75, y: 55};
    const midBottom = {x: 75, y: 120};

    // ================= RINGE =================
    const ringCount = 6;
    const ringStep = 10;

    // Innerer Radius = bis knapp zur Spitze des oberen leeren Dreiecks
    const innerRadius = Math.hypot(midTop.x - cx, midTop.y - cy) - 5; // kleiner, weiter oben

    for (let i = 0; i < ringCount; i++) {
      const rInner = innerRadius + i * ringStep;
      const rOuter = rInner + ringStep;

      // Farbverlauf: dunkles → helleres Blau
      const col = p.lerpColor(
        p.color(40, 90, 160),
        p.color(200, 225, 255),
        i / (ringCount - 1)
      );

      // Ringfläche
      p.noStroke();
      p.fill(col);
      p.beginShape();
      for (let a = 0; a <= 360; a += 5) {
        p.vertex(
          cx + Math.cos(p.radians(a)) * rOuter,
          cy + Math.sin(p.radians(a)) * rOuter * 0.65
        );
      }
      for (let a = 360; a >= 0; a -= 5) {
        p.vertex(
          cx + Math.cos(p.radians(a)) * rInner,
          cy + Math.sin(p.radians(a)) * rInner * 0.65
        );
      }
      p.endShape(p.CLOSE);

      // Schwarze Ringlinie
      p.noFill();
      p.stroke(0);
      p.strokeWeight(1.5);
      p.ellipse(cx, cy, rInner * 2, rInner * 2 * 0.65);
    }

    // ================= BUCHFLÄCHEN WEISS ÜBER RINGE =================
    p.noStroke();
    p.fill(255);

    // Linkes Parallelogramm
    p.beginShape();
    p.vertex(leftTop.x, leftTop.y);
    p.vertex(midTop.x, midTop.y);
    p.vertex(midBottom.x, midBottom.y);
    p.vertex(leftBottom.x, leftBottom.y);
    p.endShape(p.CLOSE);

    // Rechtes Parallelogramm
    p.beginShape();
    p.vertex(midTop.x, midTop.y);
    p.vertex(rightTop.x, rightTop.y);
    p.vertex(rightBottom.x, rightBottom.y);
    p.vertex(midBottom.x, midBottom.y);
    p.endShape(p.CLOSE);

    // ================= BUCHLINIEN =================
    p.stroke(30);
    p.strokeWeight(2);
    p.noFill();

    // Linkes Parallelogramm
    p.beginShape();
    p.vertex(leftTop.x, leftTop.y);
    p.vertex(midTop.x, midTop.y);
    p.vertex(midBottom.x, midBottom.y);
    p.vertex(leftBottom.x, leftBottom.y);
    p.endShape(p.CLOSE);

    // Rechtes Parallelogramm
    p.beginShape();
    p.vertex(midTop.x, midTop.y);
    p.vertex(rightTop.x, rightTop.y);
    p.vertex(rightBottom.x, rightBottom.y);
    p.vertex(midBottom.x, midBottom.y);
    p.endShape(p.CLOSE);

    // Mittelstrich
    p.strokeWeight(3);
    p.line(midTop.x, midTop.y, midBottom.x, midBottom.y);
  };
});







// ----------------- 3T (rekursive Struktur f1) -----------------
new p5((p) => {
    p.setup = function() {
        let tttCanvas = p.createCanvas(150, 150);
        tttCanvas.parent("3tLogo");
        p.background(255);
        p.stroke(200, 100, 100);
        p.noFill();
        p.translate(75, 120); // Startpunkt unten Mitte
        drawF1(60); // Initiale Länge

        function drawF1(len){
            p.strokeWeight(1);
            if(len < 1) {
                p.point(0,0);
                return;
            }
            p.push();
            drawF1(len*0.5);
            p.pop();
            p.push();
            p.translate(len,0);
            p.rotate(-p.PI/2);
            drawF1(len*0.5);
            p.pop(); 
            p.push();
            p.translate(0,-len*0.5);
            drawF1(len*0.5);
            p.pop(); 
        }
    };
});

// ----------------- HK (rekursive Struktur f5, sichtbar) -----------------
new p5((p) => {
    p.setup = function() {
        let hkCanvas = p.createCanvas(150, 150);
        hkCanvas.parent("hkLogo");
        p.background(255);
        p.stroke(100, 150, 200);
        p.noFill();
        p.translate(75, 100); // Startpunkt leicht nach unten

        let angle2 = 2*p.PI/5;
        let c = 0.5; // etwas größer für bessere Sichtbarkeit

        drawF5(80); // größere Initial-Länge

        function drawF5(len){
            p.strokeWeight(2);
            if(len < 3) { // minimal sichtbare Länge
                p.point(0,0);
                return;
            }
            for (let i=0; i<5; i++)  {
                p.push();
                p.rotate(angle2*i);
                p.translate(len*c/2,0);
                drawF5(len*c);
                p.pop();
            }
        }
    };
});


new p5(p => {
  p.setup = () => {
    const c = p.createCanvas(150, 150);
    c.parent("kleidungLogo");
    p.background(255);

    // =====================
    // T-SHIRT
    // =====================
    p.stroke(30);
    p.strokeWeight(2);
    p.fill(240);

    p.beginShape();
    p.vertex(55,30);
    p.vertex(65,30);
    p.vertex(70,36);
    p.vertex(80,36);
    p.vertex(85,30);
    p.vertex(95,30);
    p.vertex(125,45);
    p.vertex(120,60);
    p.vertex(105,60);
    p.vertex(105,125);
    p.vertex(45,125);
    p.vertex(45,60);
    p.vertex(30,60);
    p.vertex(25,45);
    p.endShape(p.CLOSE);

    // Herz
    p.textSize(24);
    p.textAlign(p.CENTER, p.CENTER);
    p.text("❤️", 75, 90);
  };
});

new p5(p => {
  p.setup = () => {
    const c = p.createCanvas(150, 150);
    c.parent("nsdokuLogo"); // Logo-Container
    p.noLoop();
  };

  p.draw = () => {
    p.background(255); // Canvas weiß

    // Buchposition und Maße
    const x = 40;
    const y = 30;
    const width = 70;
    const height = 100;
    const spineWidth = 20;
    const depth = 15; // perspektivische Tiefe

    // --- Unterseite/Buchschnitt (parallel zur unteren Vorderkante) ---
    p.fill(255); // Buchseiten weiß
    p.stroke(0);
    p.beginShape();
    // Startpunkt: Buchrücken unten links
    p.vertex(x, y + height);

    // Endpunkt: parallele Linie zur unteren Vorderkante der Vorderseite
    let buchschnittBreite = width - spineWidth; // horizontale Länge
    let endX = x + buchschnittBreite;
    let endY = y + height + depth; // gleiche Steigung wie untere Kante des Covers

    p.vertex(endX, endY); 
    // Optional: Ecke, um die Fläche sichtbar zu machen
    p.vertex(x + width, y + height + depth);
    p.vertex(x + spineWidth, y + height);
    p.endShape(p.CLOSE);

    // --- Vorderseite ---
    p.fill(255);
    p.stroke(0);
    p.beginShape();
    p.vertex(x + spineWidth, y);                  // oben links
    p.vertex(x + width, y + depth);               // oben rechts leicht nach unten
    p.vertex(x + width, y + height + depth);      // unten rechts
    p.vertex(x + spineWidth, y + height);         // unten links
    p.endShape(p.CLOSE);

    // --- Buchrücken ---
    p.fill('#8b0000');
    p.noStroke();
    p.beginShape();
    p.vertex(x, y);                               // oben links
    p.vertex(x + spineWidth, y);                  // oben rechts
    p.vertex(x + spineWidth, y + height);         // unten rechts
    p.vertex(x, y + height);                      // unten links
    p.endShape(p.CLOSE);

    // --- Titel auf Buchrücken ---
    p.fill(255);
    p.textAlign(p.CENTER, p.CENTER);
    p.textSize(12);
    p.push();
    p.translate(x + spineWidth / 2, y + height / 2);
    p.rotate(-p.HALF_PI);
    p.text("NS-Zeit", 0, 0);
    p.pop();
  };
});

new p5(p => {
  p.setup = () => {
    const c = p.createCanvas(150,150);
    c.parent("websideLogo");
    p.background(255);

    // Bildschirm
    p.stroke(40);
    p.strokeWeight(2);
    p.noFill();
    p.rect(25,35,100,60,6);

    // Stand
    p.rect(45,100,60,10,4);

    // Zentrierter Text
    p.noStroke();
    p.fill(40);
    p.textSize(12);
    p.textAlign(p.CENTER, p.CENTER);

    p.text("HTML",75,50);
    p.text("CSS",75,65);
    p.text("JS",75,80);
  };
});


