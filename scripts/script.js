$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 500) {
        $("#MainNav").addClass("NavbarBg");
    } else {
        $("#MainNav").removeClass("NavbarBg");
    }
});

//Preloader
var preloader = $('.preloader');
$(window).on('load', function() {
    var preloaderFadeOutTime = 300;

    function hidePreloader() {
        preloader.fadeOut(preloaderFadeOutTime);
    }
    hidePreloader();
});