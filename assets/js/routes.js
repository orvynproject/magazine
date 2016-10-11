loadHeader();
loadSlider();
loadBreakingNews();
loadRecentUpdates();
loadFooter();

function loadHeader() {
	$.ajax({
		url: 'pages/layout/header.html',
		type: 'GET',
		dataType: 'html',
		success: function(msg) {
			$('.content-header').html(msg);
		}
	});
}

function loadSlider() {
	$.ajax({
		url: 'pages/home/slider.html',
		type: 'GET',
		dataType: 'html',
		success: function(msg) {
			$('.content-slider').html(msg);
		}
	});
}
function loadBreakingNews() {
	$.ajax({
		url: 'pages/home/breaking-news.html',
		type: 'GET',
		dataType: 'html',
		success: function(msg) {
			$('.content-breaking-news').html(msg);
		}
	});
}

function loadRecentUpdates() {
	$.ajax({
		url: 'pages/home/recent-updates.html',
		type: 'GET',
		dataType: 'html',
		success: function(msg) {
			$('.content-recent-updates').html(msg);
		}
	});
}

function loadFooter() {
	$.ajax({
		url: 'pages/layout/footer.html',
		type: 'GET',
		dataType: 'html',
		success: function(msg) {
			$('.content-footer').html(msg);
		}
	});
}