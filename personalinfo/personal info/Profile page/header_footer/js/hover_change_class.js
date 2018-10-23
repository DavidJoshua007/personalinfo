$("document").ready(function(){
    $("div.sample a span").hover(function(){
        $('i').toggleClass('fa-times fa-bars');
    });
});