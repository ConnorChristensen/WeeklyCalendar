$(document).ready(function () {
    
    if ( $("nav").css("display") == 'none' ) {
        $(".hamburger").removeClass("is-active");
    }
    else {
        $(".hamburger").addClass("is-active");
    }
    
    $(window).resize(function() {        
        if ( $(window).width() > 900 ) {
            $("nav").show();
        } else {
            $("nav").hide();
        }
        
        if ( $("nav").css("display") == 'none' ) {
            $(".hamburger").removeClass("is-active");
        }
        else {
            $(".hamburger").addClass("is-active");
        }
    });
    $(".hamburger").click(function(){
        $(this).toggleClass("is-active");
        $("nav").slideToggle();
    });
});