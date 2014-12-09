$(function() {
	$('ul.help li').hover(function() {
		$(this).addClass('over');
	}, function() {
		$(this).removeClass('over');
	});

	$('ul.help li').click(function() {
		$('ul.help li').removeClass('expanded');
		$(this).addClass('expanded');
	});
});