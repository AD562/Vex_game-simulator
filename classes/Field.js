class Field {
    constructor() {}

    draw() {
        if(!drawField) {
            background(27, 27, 27);
            return;
        }

        // Tiles
        for (var x = 0; x < 365; x += 365 / 6) {
            for (var y = 0; y < 365; y += 365 / 6) {
                stroke(40);
                strokeWeight(0.5);
                fill(60);
                rect(x, y, 365 / 6, 365 / 6);
            }
        }

        // Central Lines
        strokeWeight(3);
        stroke(255);
        line(7.3, 0, 365, 357.7);
        line(0, 0+(365*0.02), 365-(365*0.02), 365);

        // Autonomous Position Lines
        line(0, 365/6, 365/13, 365/6);
        line(365/1.5, 365, 365/1.5, 365/1.08);
        line(365/3, 0, 365/3, 365/13);
        line(365/1.08, 365/1.2, 365, 365/1.2);
        
        // Goal Red Bottom Bump
        strokeWeight(5);
        stroke(255, 0, 0);
        line(365/6, 365/1.48, 365/3, 365/1.48);
        line(365/3, 365/1.48, 365/3, 365/1.2);
        
        // Goal Blue Bottom Bump
        strokeWeight(5);
        stroke(0, 0, 255);
        line(365/1.48, 365/6, 365/1.48, 365/3);
        line(365/1.48, 365/3, 365/1.2, 365/3);
    }
}