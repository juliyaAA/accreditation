$(document).ready(function () {
    //scroll
    $(window).scroll(function () {
        if ($(this).scrollTop() > 900) {
            $('#scrollup').fadeIn();
        } else {
            $('#scrollup').fadeOut();
        }
    });
    $('#scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 100);
        return false;
    });

    $('.burger-menu').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('.header__menu').toggleClass('active');
    });

});