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






// Splash animation
$(document).ready(function() {
    $('#splash').css('opacity', '1'); // doing this with jQuery for ease

    // here are the basics, just like your existing code
    $("#splash").ready(function() {
        $("#splash").fadeOut(2350); // you could also use $(this).fadeOut('slow');
    });
});
