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
    const c = p.createCanvas(150, 150);
    c.parent("InklusionLogo");
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
    c.parent("websiteLogo");
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

new p5(p => {
  p.setup = () => {
    const c = p.createCanvas(150,150);
    c.parent("capoaLogo");
    p.background(255);

    // Dach
    p.stroke(80);
    p.strokeWeight(3);
    p.line(30,60,75,30);
    p.line(75,30,120,60);

    // Menschen (farbig)
    const people = [
      {x:55, col:[255,180,180]},
      {x:75, col:[180,220,255]},
      {x:95, col:[180,255,200]}
    ];

    people.forEach(pers => {
      p.noStroke();
      p.fill(pers.col);
      p.ellipse(pers.x,80,18,18);      // Kopf
      p.rect(pers.x-7,90,14,30,6);     // Körper
      p.rect(pers.x-14,98,10,6,3);     // linker Arm
      p.rect(pers.x+4,98,10,6,3);      // rechter Arm
    });

    // Herz
    p.textSize(22);
    p.textAlign(p.CENTER,p.CENTER);
    p.text("❤️",75,52);
  };
});


new p5(p => {
  p.setup = () => {
    const c = p.createCanvas(150,150);
    c.parent("demokratieLogo");
    p.background(255);

    // =================
    // MENSCHEN
    // =================
    p.noStroke();

    // Linke Person (Sprecher)
    p.fill(200,220,255);
    p.ellipse(50,80,18,18);      // Kopf
    p.rect(43,90,14,35,6);       // Körper

    // Rechte Person (Zuhörer)
    p.fill(255,220,180);
    p.ellipse(100,80,18,18);
    p.rect(93,90,14,35,6);

    // =================
    // SPRECHBLASE
    // =================
    p.stroke(100);
    p.strokeWeight(2);
    p.fill(245);
    const bubbleX = 85;
    const bubbleY = 45;
    const bubbleW = 90;
    const bubbleH = 40;
    p.ellipse(bubbleX, bubbleY, bubbleW, bubbleH);

    // =================
    // SCHNABEL (Korrekt: tangential an der Blase, zeigt auf Sprecher)
    // =================
    const snBaseY = bubbleY + bubbleH/2;  // Basis: untere Kante der Blase
    const snBaseLeftX = bubbleX - 15;     // links
    const snBaseRightX = bubbleX - 5;     // rechts
    const snTipX = 63;                    // zeigt auf linke Person
    const snTipY = 72;                    // oberhalb des Kopfes, berührt Person nicht

    p.noStroke();
    p.fill(245);
    p.triangle(
      snBaseLeftX, snBaseY,
      snBaseRightX, snBaseY,
      snTipX, snTipY
    );

    p.stroke(100);
    p.strokeWeight(2);
    p.noFill();
    p.triangle(
      snBaseLeftX, snBaseY,
      snBaseRightX, snBaseY,
      snTipX, snTipY
    );

    // =================
    // BLATT IN DER BLASE
    // =================
    p.fill(255);
    p.stroke(120);
    p.rect(70,32,30,26,3);

    // Linien auf dem Blatt
    p.line(73,38,97,38);
    p.line(73,43,97,43);
    p.line(73,48,97,48);
  };
});





new p5(p => {
  p.setup = () => {
    const c = p.createCanvas(150,150);
    c.parent("bahnhofsmissionLogo");
    p.background(255);

    // Boden / kleiner Weg
    p.noStroke();
    p.fill(230,230,230);
    p.rect(0,120,150,30);

    // Person links
    p.fill(100,180,255);
    p.ellipse(55,65,20,20); // Kopf
    p.rect(48,75,14,35,6); // Körper

    // Person rechts
    p.fill(255,150,150);
    p.ellipse(95,65,20,20); 
    p.rect(88,75,14,35,6);

    // Verbindung (Hand-in-Hand)
    p.stroke(120);
    p.strokeWeight(4);
    p.line(62,95,88,95);

    // Herz über den Köpfen
    p.noStroke();
    p.fill(255,0,50);
    p.textSize(20);
    p.textAlign(p.CENTER,p.CENTER);
    p.text("❤️",75,45);
  };
});


new p5(p => {
  p.setup = () => {
    const c = p.createCanvas(150,150);
    c.parent("arbLogo");
    p.background(255);

    // Erwachsener
    p.noStroke();
    p.fill(180,220,255);
    p.ellipse(55,55,20,20);
    p.rect(47,65,16,45,6);

    // Kind
    p.fill(255,220,180);
    p.ellipse(90,70,14,14);
    p.rect(84,78,12,32,6);

    // Stern
    p.textSize(20);
    p.textAlign(p.CENTER,p.CENTER);
    p.text("⭐",75,30);
  };
});


new p5(p => {
  p.setup = () => {
    const c = p.createCanvas(150,150);
    c.parent("strandcafeLogo");
    p.background(255);

    // Tisch
    p.stroke(120,90,60);
    p.strokeWeight(3);
    p.line(30,95,120,95);

    // Menschen
    p.noStroke();
    p.fill(255,210,180);
    p.ellipse(55,65,18,18);
    p.rect(48,75,14,30,6);

    p.fill(180,220,255);
    p.ellipse(95,65,18,18);
    p.rect(88,75,14,30,6);

    // Kaffee
    p.textSize(22);
    p.textAlign(p.CENTER,p.CENTER);
    p.text("☕",75,55);

    // Herz
    p.text("❤️",75,30);
  };
});

