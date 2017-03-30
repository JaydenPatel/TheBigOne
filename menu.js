    $(document).on('keydown', function(e) {
        if (e.keyCode === 27) { // ESC
            $("#menu").toggleClass("show")
            //console.log("Menu Toggle");
        }
    });
    