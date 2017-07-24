var progressCallback = function () {
    $('.progress-bar').each(function () {
        width = $(this).attr('aria-valuenow');
        $(this).text($(this).text() + "  -  " + width + "%");
        $(this).animate({
            width: width + '%'
        }, 1000);
    });
};

$(document).ready(function() {
	$('.navbar-brand').addClass('wow animated fadeInLeft');
	$('.navbar-right li').addClass('wow animated fadeInRight');
	$('.jumbotron h1').addClass('wow animated fadeInDown');
	$('.jumbotron p').addClass('wow animated fadeInUp');
	$('#about p').addClass('wow animated fadeInUp');
	$('.portfolio img').addClass('wow animated fadeInLeft');
	$('.timeline-year').addClass('wow animated fadeInLeft');
  $('.timeline-content').addClass('wow animated rotateInUpLeft');
  
  /* WOW Animation When You Scroll */
  wow = new WOW({
      mobile: false
  });
  wow.init();
  
  /* Progress animation */
	progressCallback();
});


