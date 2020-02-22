$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
        $(".logo").removeClass("logo-big");
        $(".logo").addClass("logo-small");
    }

    if (scroll <= 200) {
        $(".logo").addClass("logo-big");
        $(".logo").removeClass("logo-small");
    }
});