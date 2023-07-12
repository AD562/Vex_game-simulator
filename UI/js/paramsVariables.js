let mode = selectInputs.mode.value;

let drawRobots = true;
let drawDiscs = true;
let drawGoals = true;
let drawField = true;

let showRobots = "allRobots";

let bestRobot = null;
let topScore = 0;

// Set Select Input Values
selectInputs.mode.addEventListener("change", (event) => {
    mode = event.target.value;
    initialize();
});


