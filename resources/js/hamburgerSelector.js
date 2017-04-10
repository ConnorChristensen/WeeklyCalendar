$(document).ready(function () {
    $(window).resize(function() {        
        if ( $(window).width() > 900 ) {
            $("nav").show();
        } else {
            $("nav").hide();
            if ( $(".hamburger").hasClass("is-active") ) {
                $(".hamburger").removeClass("is-active");
            }
        }
    });
    $(".hamburger").click(function(){
        $(this).toggleClass("is-active");
        $("nav").slideToggle();
    });
});