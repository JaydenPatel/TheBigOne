    $(document).on('keydown', function(e) {
        if (e.keyCode === 27) { // ESC
            $("#menu").toggleClass("show");
            $(document).trigger('buttonClick');

        }
    });
    $(document).on('buttonClick', function() {
        $("#levelsSpan").removeClass('show');
        $("#levelsSpan").addClass('hide');
    });
    