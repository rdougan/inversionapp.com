$(function() {
	var temp = 21.5;

	$('.inversion').hover(function() {
		$(this).addClass('over');
	}, function() {
		$(this).removeClass('over');
	});

	$('.increase').click(function() {
		temp += .5;
		$('.target, .target-statusbar').html(temp + '&deg;');
	});

	$('.decrease').click(function() {
		temp -= .5;
		$('.target, .target-statusbar').html(temp + '&deg;');
	});
});