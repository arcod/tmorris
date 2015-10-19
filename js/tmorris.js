$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
    return false;
});

$( window ).load(function() {
   $('.cover').fadeOut(2000);
});

$( window ).load(function() {
   $('.splash h1,h2,h3').fadeIn(500);
});



var nav = $('nav');
$(window).on('scroll', function() {
	var height = $(window).height();
	var st = $(this).scrollTop() - height/2;
    nav.css({ 'opacity' : (0 + st/height*2) });
});