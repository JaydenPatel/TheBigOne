//JavaScript
console.log("Linked");
var theCurrentLevel = "The current level is: ";

var playerX;
var spawnPoint;
var level;
var currentLevel;
var startLevel;
var localStorage;



var newGameButton = document.getElementById("newGame");
var loadGameButton = document.getElementById("loadGame");
var startOptions = document.getElementById('startOptions');



var levelSelectOne = document.getElementById("levelSelectOne");
var levelSelectTwo = document.getElementById("levelSelectTwo");
var levelSelectThree = document.getElementById("levelSelectThree");


var screen = document.getElementById("startScreen");
var menu = document.getElementById("menu");
var startScreen = document.getElementById("startScreen");


loadGameButton.addEventListener("click", loadGame);
newGameButton.addEventListener("click", reset);
levelSelectThree.addEventListener("click", selectLevelThree);
levelSelectTwo.addEventListener("click", selectLevelTwo);
levelSelectOne.addEventListener("click", selectLevelOne);



console.log("The current cache level is: " + localStorage.levelNumber);


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
    startScreen.innerHTML = "<img class='photo' src='./images/lock2.jpg' />";
    startScreen.innerHTML += "<img  class='backgroundIMG' src='./images/level1Background.jpg' />";
    startOptions.className = "hide";

}

function levelTwo() {


    currentLevel = 2;
    save();
    console.log(theCurrentLevel + currentLevel);
    levelSelectOne.className = "levelOptions";
    levelSelectTwo.className = "levelOptions";
    startOptions.className = "hide";
}

function levelThree() {



    currentLevel = 3;
    save();
    console.log(theCurrentLevel + currentLevel);
    levelSelectOne.className = "levelOptions";
    levelSelectTwo.className = "levelOptions";
    levelSelectThree.className = "levelOptions";
    startOptions.className = "hide";
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
    localStorage.levelNumber = 1;
    // window.open("index.html");
    console.log("Reset to " + localStorage.levelNumber);
    load();
    loadGame();
}
//localStorage.levelNumber = 2


function selectLevelOne() {
    levelOne();
}

function selectLevelTwo() {
    levelTwo();
}

function selectLevelThree() {
    levelThree();
}
