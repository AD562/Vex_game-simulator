let timer = 0;
let FPSUpdateTimer = 0;
let lastFPSUpdate = 0;

let robots = [];
let prevRobots = [];
let discs = [];

let discsCords = [
  [365/12, 365/12],
  [365/6, 365/6],
  [365/4, 365/4],
  [365/3, 365/3],
  [365/2.4, 365/2.4],
  [365/1.72, 365/1.72],
  [365/1.5, 365/1.5],
  [365/1.335, 365/1.335],
  [365/1.2, 365/1.2],
  [365/1.09, 365/1.09],

  [365/2.4, 365/4],
  [365/2, 365/3],
  [365/1.72, 365/2.4],
  [365/1.335, 365/1.72],

  [365/4, 365/2.4],
  [365/2.4, 365/1.72],
  [365/1.99, 365/1.5],
  [365/1.72, 365/1.335],

  [365/6+16.5/2, 365/1.5-16.5/2],
  [365/4.4+16.5/2, 365/1.5-16.5/2],
  [365/3.5+16.5/2, 365/1.5-16.5/2],
  [365/2.9+16.5/2, 365/1.4-16.5/2],
  [365/2.9+16.5/2, 365/1.293-16.5/2],
  [365/2.9+16.5/2, 365/1.2-16.5/2],

  [365/1.5-16.5/2, 365/6+16.5/2],
  [365/1.5-16.5/2, 365/4.4+16.5/2],
  [365/1.5-16.5/2, 365/3.5+16.5/2],
  [365/1.4-16.5/2, 365/2.9+16.5/2],
  [365/1.293-16.5/2, 365/2.9+16.5/2],
  [365/1.2-16.5/2, 365/2.9+16.5/2],
];

let goals = [new Goal("red"), new Goal("blue")];

let field = new Field();

function initialize() {
  robots = [];
  prevRobots = [];

  timer = 0;

  if(mode === "competition") population = 2;
  else if(mode === "driving") population = 1;

  // if(mode === "competition") {
  //   robots.push(new Robot(0, 18, 83, 0, 0.5, 0.01, 0.85, 0.85, 10, 0.1, "red"));
  //   robots.push(new Robot(1, 18, 83, 0, 0.5, 0.01, 0.85, 0.85, 10, 0.1, "blue"));
  // }

  // else {
    for (let i = 0; i < population; i++) {
      if(mode === "competition") {
        robots.push(new Robot(0, 18, 83, 0, 0.5, 0.01, 0.85, 0.85, 10, 0.1));
      } else {
        robots.push(new Robot(0, 18, 83, 0, 0.5, 0.01, 0.85, 0.85, 10, 0.1));
      }
    }
  // }

  if(mode === "competition") {
    discs = [discsCords.map(([x,y]) => new Disc(x,y, 16.5))];
  }
  else {
    discs = robots.map(() => discsCords.map(([x,y]) => new Disc(x,y, 16.5)));
  }
}

function setup() {
  createCanvas(365, 365);
  background(0);

  initialize();
};

function drawFPS() {
  FPSUpdateTimer++;

  if(FPSUpdateTimer >= 10) {
    FPSUpdateTimer = 0;
    lastFPSUpdate = Math.round(frameRate());
  }

  fill(255);
  noStroke();
  textSize(12);
  text(`FPS: ${lastFPSUpdate}`, 157, 355);
}

function draw() {
  frameRate(60);

  field.draw();

  drawFPS();

  if(mode === "competition") competitionControl();
  else if(mode === "driving") drivingControl();

  goals.map((goal) => goal.draw());
};

function competitionControl() {
  robots[0].handleInput(discs[0]);
  discs[0].map((disc) => disc.draw(robots[0].corners));

  robots[1].handleInput(discs[0], "WASD");
  discs[0].map((disc) => disc.draw(robots[1].corners));
};

function drivingControl() {
  robots[0].handleInput(discs[0]);
  discs[0].map((disc) => disc.draw(robots[0].corners));
};

function autonomousControl() {
  timer++;

  if(robots.every((robot) => robot.dead) || timer >= maxTime) {
    timer = 0;

    prevRobots = robots;
    robots = [];

    nextGeneration();

    generation++;
    document.querySelector(".generation").innerHTML = `Generation: ${generation}`;

    discs = robots.map(() => discsCords.map(([x,y]) => new Disc(x,y, 16.5)));
  }

  robots?.map((robot, index) => {
    discs[index].map((disc) => disc.draw(robot.corners));
    robot.think(discs[index]);
  });
};
