goTop();
function goTop() {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 400) {
			$('.gotop').fadeIn(200);
		}else{
			$('.gotop').fadeOut(200);
		}
	});
	$('.gotop').click(function(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop: 0}, 1000);
	});	
}