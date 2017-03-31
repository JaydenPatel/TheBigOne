/*global $ */
$(document).on('keydown', function(e) {
    if (e.keyCode === 27 && $('#levelSelectOne').hasClass('levelOptions')) {
        // ESC
        $("#menu").toggleClass("show");
        $(document).trigger('buttonClick');

    }
});
$(document).on('buttonClick', function() {
    $("#levelsSpan").removeClass('show');
    $("#levelsSpan").addClass('hide');
    $("#instructions").addClass('show');
});



//Prevents image interactions
$("img").mousedown(function() {
    return false;
});


// Splash animation
$(document).ready(function() {
    $('#splash').css('opacity', '1'); // doing this with jQuery for ease
    // here are the basics, just like your existing code
    $("#splash").ready(function() {
        $("#splash").fadeOut(3000); // you could also use $(this).fadeOut('slow');
    });
});
//Popup for New Game Button
/* global newGameButton */
/* global loadGameButton */
/* global swal */
/* global localStorage */
newGameButton.addEventListener("click", newGamePopup);

function newGamePopup() {
    swal({
        title: "Welcome to the game!",
        imageUrl: "./images/mattHesby.png",
        imageSize: "154.5x154.5",
        timer: 3000,
        allowEscapeKey: true,
        showLoaderOnConfirm: true,
    }, function() {;
    });
}
//Popup for Load Game Button
loadGameButton.addEventListener("click", loadGamePopup);

function loadGamePopup() {
setTimeout(function() {
    swal({
        title: "Checkpoint: Level " + localStorage.levelNumber,
        text: "Welcome Back! - Matt Hesby",
        imageUrl: "./images/mattHesby.png",
        imageSize: "154.5x154.5",
        timer: "3000",
        allowEscapeKey: true,
        showLoaderOnConfirm: true,
    }, function() {;
    });
});
}

