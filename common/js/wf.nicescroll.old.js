//jquery.nicescroll 3.5.4
(function($) {

$(document).ready(function(){
	$("html").niceScroll({
		background: 'none repeat scroll 0 0 rgba(0, 0, 0, 0.2)',
		scrollspeed: 50,
		mousescrollstep: 50,
		cursorwidth: "6px",
		cursorborder: 0,
		cursorcolor: '#3399ff',
		autohidemode: false,
		zindex: 9999999,
		horizrailenabled: false,
		cursorborderradius: 0,
		autohidemode: true,
		hidecursordelay: 400
	});
});

$(document).ready(function(){
	$(".nicescroll").niceScroll({
		background: 'none repeat scroll 0 0 rgba(0, 0, 0, 0.2)',
		scrollspeed: 50,
		mousescrollstep: 50,
		cursorwidth: "4px",
		cursorborder: 0,
		cursorcolor: '#3399ff',
		autohidemode: false,
		zindex: 9999999,
		horizrailenabled: false,
		cursorborderradius: 0,
		autohidemode: true,
		hidecursordelay: 400
	});
});

})(jQuery);
