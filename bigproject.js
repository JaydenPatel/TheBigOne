//JavaScript
console.log("Linked");

var playerX = document.getElementById("");
var spawnPoint = document.getElementById("");

var level;
var selectLevel;
var currentLevel;
var startLevel;

// img.addEventListener("click", startScreen)

function startScreen() {
    load();
}

function load() {
    if (localStorage.levelNumber == undefined) {
        startLevel = 1;
    }
    else
        startLevel = localStorage.levelNumber
    startGame();
}


function startGame() {
    if (startLevel == 1) {
        levelOne();
        console.log(startLevel);
    }
    if (startLevel == 2) {
        levelTwo();
        console.log(startLevel);
    }
    if (startLevel == 3) {
        levelThree();
        console.log(startLevel);
    }
}

function levelOne() {


    currentLevel = 1;
    save();
    console.log(currentLevel);
}

function levelTwo() {



    currentLevel = 2;
    save();
    console.log(currentLevel);
}

function levelThree() {



    currentLevel = 3;
    save();
    console.log(currentLevel);
}

function finish() {


    currentLevel = 1;
    save();
    console.log(currentLevel);
}



function save() {
    localStorage.setItem("levelNumber", currentLevel);
}

function reset() {
    localStorage.levelNumber = 1
    window.open("index.html");
}
