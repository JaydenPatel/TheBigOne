//JavaScript
console.log("Linked");
var theCurrentLevel = "The current level is: ";

var playerX;
var spawnPoint;
var level;
var selectLevel;
var currentLevel;
var startLevel;
var newGameButton = document.getElementById("newGame");
newGameButton.addEventListener("click", reset);
var loadGameButton = document.getElementById("loadGame");
loadGameButton.addEventListener("click", loadGame);
var levelSelectOne = document.getElementById("levelSelectOne");
var levelSelectTwo = document.getElementById("levelSelectTwo");
var levelSelectThree = document.getElementById("levelSelectThree");
var screen = document.getElementById("startScreen");
// img.addEventListener("click", startScreen)
console.log("The current cache level is: " + localStorage.levelNumber)


function load() {
    if (localStorage.levelNumber == undefined) {
        startLevel = 1;
    }
    else
        startLevel = localStorage.levelNumber;

    console.log("Starting level is: " + startLevel);
}
load();

function loadGame() {
    if (startLevel == 3) {
        levelThree();
    }
    else if (startLevel == 2) {
        levelTwo();
    }
    else
        levelOne();

}

function levelOne() {


    currentLevel = 1;
    save();
    console.log(theCurrentLevel + currentLevel);
    levelSelectOne.className = "levelOptions";
}

function levelTwo() {



    currentLevel = 2;
    save();
    console.log(theCurrentLevel + currentLevel);
    levelSelectOne.className = "levelOptions";
    levelSelectTwo.className = "levelOptions";
}

function levelThree() {



    currentLevel = 3;
    save();
    console.log(theCurrentLevel + currentLevel);
    levelSelectOne.className = "levelOptions";
    levelSelectTwo.className = "levelOptions";
    levelSelectThree.className = "levelOptions";
}

function finish() {


    currentLevel = 1;
    save();
    console.log(theCurrentLevel + currentLevel);
    levelSelectOne.className = "levelOptions";
    levelSelectTwo.className = "levelOptions";
    levelSelectThree.className = "levelOptions";
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
