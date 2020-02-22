$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
        $(".logo").removeClass("logo-big");
        $(".logo").addClass("logo-small");

        $(".logo-text").removeClass("show-logo-text")
        $(".logo-text").addClass("hide-logo-text")
    }

    if (scroll <= 200) {
        $(".logo").addClass("logo-big");
        $(".logo").removeClass("logo-small");

        $(".logo-text").addClass("show-logo-text")
        $(".logo-text").removeClass("hide-logo-text")
    }
});