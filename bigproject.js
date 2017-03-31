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
var restartLevelButton = document.getElementById("restartLevel");
var saveButton = document.getElementById("save");
var levelsTab = document.getElementById("levelsTab");
var levelsSpan = document.getElementById("levelsSpan");
var instructions = document.getElementById("instructions");

var levelSelectOne = document.getElementById("levelSelectOne");
var levelSelectTwo = document.getElementById("levelSelectTwo");
var levelSelectThree = document.getElementById("levelSelectThree");


var menu = document.getElementById("menu");
var startScreen = document.getElementById("startScreen");

levelsTab.addEventListener("click", showLevels)
loadGameButton.addEventListener("click", loadGame);
newGameButton.addEventListener("click", reset);
restartLevelButton.addEventListener("click", restartLevel);
saveButton.addEventListener("click", save);
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
        prelevelOne();

}

function prelevelOne() {
    startScreen.innerHTML = "<center><div id='prelevelOneDIV'>Can you escape Summit Shasta? To play, find the keys to open the locks. Then click the door to go to the next level</div></center>";
    var preloadDiv = document.getElementById("prelevelOneDIV");
    preloadDiv.addEventListener("click", function() {
        levelOne();
    });
}

function levelOne() {
    currentLevel = 1;
    save();
    console.log(theCurrentLevel + currentLevel);
    levelSelectOne.className = "levelOptions";
    startScreen.innerHTML = "<img class='lockLevelOne' id='lockLevelOne' src='./images/lock1.png' />";
    startScreen.innerHTML += "<img class='keyLevelOne' id='keyLevelOne' src='./images/levelOneKeyIMG.png' />";
    startScreen.innerHTML += "<img class='backgroundIMG' id='backgroundIMG' src='./images/level1Background.jpg' />";
    startOptions.className = "hide";
    var lockLevelOne = document.getElementById("lockLevelOne");
    var keyLevelOne = document.getElementById("keyLevelOne");
    var backgroundIMG = document.getElementById("backgroundIMG");
    var clickable = false;
    keyLevelOne.addEventListener("click", clickKey);
    backgroundIMG.addEventListener("click", clickScreen);

    function clickKey() {
        console.log("Key Clicked");
        lockLevelOne.className = "hide";
        keyLevelOne.className = "hide";
        clickable = true;
    }

    function clickScreen() {
        if (clickable == true) {
            levelTwo();
            console.log("Starting Level Two");
        }
    }

}

function levelTwo() {


    currentLevel = 2;
    save();
    console.log(theCurrentLevel + currentLevel);
    levelSelectOne.className = "levelOptions";
    levelSelectTwo.className = "levelOptions";
    startOptions.className = "hide";
    startScreen.innerHTML = "";
}

function levelThree() {



    currentLevel = 3;
    save();
    console.log(theCurrentLevel + currentLevel);
    levelSelectOne.className = "levelOptions";
    levelSelectTwo.className = "levelOptions";
    levelSelectThree.className = "levelOptions";
    startOptions.className = "hide";
    startScreen.innerHTML = "";
}

function finish() {


    currentLevel = 1;
    save();
    console.log(theCurrentLevel + currentLevel);
    levelSelectOne.className = "levelOptions";
    levelSelectTwo.className = "levelOptions";
    levelSelectThree.className = "levelOptions";
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




function save() {
    localStorage.setItem("levelNumber", currentLevel);
    console.log("Saved current level to: " + currentLevel);
}

function restartLevel() {
    var level = currentLevel;
    if (level == 1) {
        levelOne();
        console.log("Restarted level 1");
    }
    else if (level == 2) {
        levelTwo();
        console.log("Restarted level 2");
    }
    else if (level == 3) {
        levelThree();
        console.log("Restarted level 3");
    }
}


function showLevels() {
    levelsSpan.className = "show";
    instructions.className = "hide";
}
