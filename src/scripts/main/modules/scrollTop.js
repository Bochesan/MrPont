var wHeight = $(window).height();
function fadeIO() {
    if ($(window).scrollTop() >= wHeight) {
        $('#scrolltop').fadeIn(500).css('display', 'flex');
    }
    else {
        $('#scrolltop').fadeOut(200);
    }
}

fadeIO();
$(window).scroll(function() {
    fadeIO();
});

$('#scrolltop').on('click', function() {
    $('body,html').animate({
        scrollTop: 0
    }, 800);
});
