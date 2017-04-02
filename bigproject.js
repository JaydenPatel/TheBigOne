//JavaScript
//Displays your current level in the console
var theCurrentLevel = "The current level is: ";
console.log("The current cache level is: " + localStorage.levelNumber);


//Undefined Variable
var playerX;
var spawnPoint;
var level;
var currentLevel;
var startLevel;
var localStorage;


//Start screen 
var startScreen = document.getElementById("startScreen");
var newGameButton = document.getElementById("newGame");
var loadGameButton = document.getElementById("loadGame");
//Event Listeners for Start screen
loadGameButton.addEventListener("click", loadGame);
newGameButton.addEventListener("click", reset);

//Menu Options
var menu = document.getElementById("menu");
var startOptions = document.getElementById('startOptions');
var restartLevelButton = document.getElementById("restartLevel");
var saveButton = document.getElementById("save");
var levelsTab = document.getElementById("levelsTab");
var levelsSpan = document.getElementById("levelsSpan");
var instructions = document.getElementById("instructions");
var levelSelectOne = document.getElementById("levelSelectOne");
var levelSelectTwo = document.getElementById("levelSelectTwo");
var levelSelectThree = document.getElementById("levelSelectThree");
//Event Listeners for Menu Options
restartLevelButton.addEventListener("click", restartLevel);
saveButton.addEventListener("click", save);
levelsTab.addEventListener("click", showLevels)
levelSelectThree.addEventListener("click", selectLevelThree);
levelSelectTwo.addEventListener("click", selectLevelTwo);
levelSelectOne.addEventListener("click", selectLevelOne);

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
    startScreen.innerHTML = "<center><div id='prelevelOneDIV'>Can you escape Summit Shasta?<br><br>To play, find the keys to open the locks. Then click the door to go to the next level</div></center>";
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
    var clickableOne = false;
    keyLevelOne.addEventListener("click", clickKey);
    backgroundIMG.addEventListener("click", clickScreen);
    lockLevelOne.addEventListener("click", clickLock);

    function clickKey() {
        console.log("Key Obtained");
        keyLevelOne.className = "hide";
    }

    function clickLock() {
        if (keyLevelOne.className == "hide") {
            lockLevelOne.className = "hide";
            console.log("Lock opened");
            clickableOne = true;
        }
    }

    function clickScreen() {
        if (clickableOne == true) {
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

/*function finish() {


    currentLevel = 1;
    save();
    console.log(theCurrentLevel + currentLevel);
    levelSelectOne.className = "levelOptions";
    levelSelectTwo.className = "levelOptions";
    levelSelectThree.className = "levelOptions";
}
*/

function reset() {
    localStorage.levelNumber = 1;
    console.log("Reset to " + localStorage.levelNumber);
    load();
    loadGame();
}

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
