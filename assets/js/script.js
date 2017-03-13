/* animacja hamburgera */
$(document).ready(function() {
    $('.menu').click(function() {
        $(this).toggleClass('open');
    });
});

/* wysokosc wysuwanego menu zgodna z wysokoscia body */
$(document).ready(function() {
    $("nav").height($("body").height());
});


/* gdy zmienia sie orientacja */
window.addEventListener('orientationchange', function() {
    $("nav").height($("body").height());
});

/* wysuwanie panelu */
$(function() {
    $(".menu").click(function() {
        $("nav").toggleClass('active');
        $("label").toggleClass('active');
        $("section").toggleClass('active');
    });
});

/* animacja arrowupdown */
$('.arrowupdown').on('click', function() {
    $(this).toggleClass('active');
});

/* wysuwanie panelu wyboru potrawy */
$(function() {
    $(".arrowupdownbox").click(function() {
        $(".updownpanel").toggleClass('active');
    });
});
