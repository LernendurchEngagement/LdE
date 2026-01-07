new p5((p) => {
    const angle = p.PI / 4; 

    p.setup = function () {
        const c = p.createCanvas(150, 150);
        c.parent("baumLogo");
        p.background(255);
        p.noLoop();
        p.strokeCap(p.ROUND);

        p.push();
        p.translate(p.width / 2, p.height);
        p.tree(35);
        p.pop();
    };

    p.tree = function (len) {
        if (len < 1) return;

        let t = p.pow(1 / len, 0.3);

        p.stroke(
            171 + t * (31 - 171),
            92 + t * (158 - 92),
            9 + t * (17 - 9)
        );
        p.strokeWeight(len * 0.15);
        p.line(0, 0, 0, -len);

        p.push();
        p.translate(0, -len);

        p.push();
        p.rotate(angle);
        p.tree(len * 0.72);
        p.pop();

        p.push();
        p.rotate(-angle * 0.6);
        p.tree(len * 0.7);
        p.pop();

        p.pop();
    };
});
