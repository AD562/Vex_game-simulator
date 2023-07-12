function ShowHideTitles() {
    if (mode === "driving") {
        titles.currentScore.style.display = "block";

        titles.topScore.style.display = "none";
        titles.blueScore.style.display = "none";
        titles.redScore.style.display = "none";
    }
    else if (mode === "competition") {
        titles.blueScore.style.display = "block";
        titles.redScore.style.display = "block";

        titles.topScore.style.display = "none";
        titles.currentScore.style.display = "none";
    }
    else {
        titles.topScore.style.display = "block";

        titles.currentScore.style.display = "none";
        titles.blueScore.style.display = "none";
        titles.redScore.style.display = "none";
    }
}

function ShowHideTopRobotsToShow() {
    if (showRobots === "topRobots") {
        inputLabels.showRobots.style.display = "block";
        numberInputs.topRobotsToShow.style.display = "block";
    } else {
        inputLabels.showRobots.style.display = "none";
        numberInputs.topRobotsToShow.style.display = "none";
    }
}

function ShowHideAIParams() {
    if(mode === "driving" || mode === "competition") {
        document.querySelector(".col2").style.display = "none";
        document.querySelector(".col3").style.display = "none";

        inputLabels.population.style.display = "none";
        inputLabels.mutationRate.style.display = "none";
        inputLabels.timeToLive.style.display = "none";

        numberInputs.population.style.display = "none";
        numberInputs.mutationRate.style.display = "none";
        numberInputs.timeToLive.style.display = "none";
    } else {
        document.querySelector(".col2").style.display = "block";
        document.querySelector(".col3").style.display = "block";

        inputLabels.population.style.display = "block";
        inputLabels.mutationRate.style.display = "block";
        inputLabels.timeToLive.style.display = "block";

        numberInputs.population.style.display = "block";
        numberInputs.mutationRate.style.display = "block";
        numberInputs.timeToLive.style.display = "block";
    }
}