$(document).ready(function () {
    $(document).scroll(function () {
        if ($(document).scrollTop() >= 50) {
            $("nav").addClass("fix-place");
            $("html").addClass("extraSpace");
        } else {
            $("nav").removeClass("fix-place");
            $("html").removeClass("extraSpace");
        }
    });
});
