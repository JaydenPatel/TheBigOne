//JavaScript
console.log("Linked");

var playerX;
var spawnPoint;
var level;
var selectLevel;
var currentLevel;
var startLevel;
var newGame = document.getElementById("newGame");
newGame.addEventListener("click", reset)
var levelSelectOne = document.getElementById("levelSelectOne");
var levelSelectTwo = document.getElementById("levelSelectTwo");
var levelSelectThree = document.getElementById("levelSelectThree");

// img.addEventListener("click", startScreen)
console.log(localStorage.levelNumber)

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
    levelSelectOne.className = "levelOptions"
}

function levelTwo() {



    currentLevel = 2;
    save();
    console.log(currentLevel);
    levelSelectOne.className = "levelOptions";
    levelSelectTwo.className = "levelOptions"
}

function levelThree() {



    currentLevel = 3;
    save();
    console.log(currentLevel);
    levelSelectOne.className = "levelOptions"
    levelSelectTwo.className = "levelOptions"
    levelSelectThree.className = "levelOptions"
}

function finish() {


    currentLevel = 1;
    save();
    console.log(currentLevel);
    levelSelectOne.className = "levelOptions"
    levelSelectTwo.className = "levelOptions"
    levelSelectThree.className = "levelOptions"
}



function save() {
    localStorage.setItem("levelNumber", currentLevel);
}


function reset() {
    localStorage.levelNumber = 1
        // window.open("index.html");
    console.log(localStorage.levelNumber);
}
//localStorage.levelNumber = 2
