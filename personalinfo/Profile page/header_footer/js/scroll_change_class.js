$(function() {
    var header = $(".animation-position");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 40) {
            header.removeClass('animation-position').addClass("animation-position-alt animated slideInDown");
        } else {
            header.removeClass("animation-position-alt animated slideInDown").addClass('animation-position');
        }
    });
});