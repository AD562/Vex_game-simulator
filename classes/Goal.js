class Goal{
    constructor(color) {
        this.color = color;
        this.x = color == "red" ? 48.66 : 316.61;
        this.y = color == "red" ? 316.61 : 48.66;
        this.diameter = 36.5;
    }

    draw() {
        if(!drawGoals) return;

        stroke(255);
        strokeWeight(5);

        if(this.color == "red") {
            line(0, 270.37, 94.8, 365);
        } else {
            line(274.43, 0, 365, 91.25);
        }
        
        let rgbColor = this.color == "red" ? [255, 0, 0] : [0, 0, 255];

        fill(0, 0, 0, 0);
        strokeWeight(3);
        stroke(rgbColor[0], rgbColor[1], rgbColor[2]);
        circle(this.x, this.y, this.diameter);
        fill(rgbColor[0], rgbColor[1], rgbColor[2]);
        circle(this.x, this.y, this.diameter/1.7);
    }
}