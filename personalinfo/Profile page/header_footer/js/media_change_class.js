$(window).on('load, resize', function mobileViewUpdate() {
    var viewportWidth = $(window).width();
    if (viewportWidth < 600) {
        $(".view").removeClass("justify-content-between").addClass("gallery-mobile");
    }
});



