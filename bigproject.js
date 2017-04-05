//Add information between each and every level to create a "story". 
// Makes for a better game

//JavaScript
//Displays your current level in the console
var theCurrentLevel = "The current level is: ";
console.log("The current cache level is: " + localStorage.levelNumber);


//Undefined Variables
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
        levelOne();

}

function prelevelOne() {
    startScreen.innerHTML = "<center><div id='prelevelOneDIV'>Can you escape?<br><br>To play, find the keys to open the locks. Then click the door to go to the next level</div></center>";
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
    startScreen.innerHTML = "<img class='locklevel2' id='locklevel2' src='./images/locklevel2.png' />";
    startScreen.innerHTML += "<img class='lock2level2' id='lock2level2' src='./images/locklevel2.png' />";
    startScreen.innerHTML += "<img class='lock3level2' id='lock3level2' src='./images/locklevel2.png' />";
    startScreen.innerHTML += "<img class= 'keylevel2' id='keylevel2' src='./images/keylevel2.png' />";
    startScreen.innerHTML += "<img class= 'key2level2' id='key2level2' src='./images/keylevel2.png' />";
    startScreen.innerHTML += "<img class= 'key3level2' id='key3level2' src='./images/keylevel2.png' />";
    startScreen.innerHTML += "<img class='kamikazebackground' id='kamikazebackground' src='./images/1680kamikaze.jpg' />";
    var locklevel2 = document.getElementById("locklevel2");
    var lock2level2 = document.getElementById("lock2level2");
    var lock3level2 = document.getElementById("lock3level2");
    var keylevel2 = document.getElementById("keylevel2");
    var key2level2 = document.getElementById("key2level2");
    var key3level2 = document.getElementById("key3level2");
    var kamikazebackground = document.getElementById("kamikazebackground");
    var nextlevel = false;
    var clicks = 0;
    keylevel2.addEventListener("click", clickkey1);
    key2level2.addEventListener("click", clickkey2);
    key3level2.addEventListener("click", clickkey3);
    locklevel2.addEventListener("click", clicklock1);
    lock2level2.addEventListener("click", clicklock2);
    lock3level2.addEventListener("click", clicklock3);
    kamikazebackground.addEventListener("click", finishedlevel2);

    function clickkey1() {
        console.log("Key Obtained");
        keylevel2.className = "hide";
    }

    function clickkey2() {
        console.log("Key Obtained");
        key2level2.className = "hide";
    }

    function clickkey3() {
        console.log("Key Obtained");
        key3level2.className = "hide";
    }

    function clicklock2() {
        if (key2level2.className == "hide") {
            lock2level2.className = "hide";
            console.log("Lock opened");
        }
    }

    function clicklock3() {
        if (key3level2.className == "hide") {
            lock3level2.className = "hide";
            console.log("Lock opened");
        }
    }

    function clicklock1() {
        if (keylevel2.className == "hide" && key2level2.className == "hide" && key3level2.className == "hide") {
            clicks += 1;
        }
        if (clicks == 5 && keylevel2.className == "hide" && key2level2.className == "hide" && key3level2.className == "hide") {
            locklevel2.className = "hide";
            console.log("Hatch Open");
            nextlevel = true;
            console.log(clicks);
        }
    }

    function finishedlevel2() {
        if (nextlevel == true) {
            levelThree();
            console.log("Starting Level 3");
        }
    }

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

function bossLevel() {
    currentLevel= 3;
    save();
    console.log(theCurrentLevel + currentLevel);
    levelSelectOne.className = "levelOptions";
    levelSelectTwo.className = "levelOptions";
    levelSelectThree.className = "levelOptions";
    startScreen.innerHTML = "<img class='bossLevelLock1' src='./images/bossLevelLock1.png' />";
    startScreen.innerHTML += "<img class='bossLevelLock2' src='./images/bossLevelLock2.png' />";
    startScreen.innerHTML += "<img class='bossLevelLock3' src='./images/bossLevelLock3.png' />";
    startScreen.innerHTML += "<img src = './images/bossLevelD.png' style='width: 550px; height: 550px;'/>";
    var lock1Key1got = false;
    var lock1Key2got = false;
    var lock1Key3got = false;
    var lock2Key1got = false;
    var lock2Key2got = false;
    var lock2Key3got = false;

    function unlockLock1() {
        if (lock1Key1got == true && lock1Key2got == true && lock1Key3got == true) {
            //hidden things
        }
    }
    

    function unlockLock2() {
        if (lock2Key1got == true && lock2Key2got == true && lock2Key3got == true) {
            //hidden things
        }
    }

}

function reset() {
    localStorage.levelNumber = 1;
    console.log("Reset to " + localStorage.levelNumber);
    load();
    loadGame();
}

function selectLevelOne() {
    bossLevel();
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
