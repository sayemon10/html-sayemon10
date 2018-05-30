$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 500) {
        $("#MainNav").addClass("NavbarBg");
    } else {
        $("#MainNav").removeClass("NavbarBg");
    }
});