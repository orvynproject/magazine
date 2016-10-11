loadHeader();

function loadHeader() {
	$.ajax({
		url: 'pages/layout/header.html',
		type: 'GET',
		dataType: 'html',
		success: function(msg) {
			console.log('loadHeader');
			$('.content-header').html(msg);
			loadSlider();
		}
	});
}

function loadSlider() {
	$.ajax({
		url: 'pages/home/slider.html',
		type: 'GET',
		dataType: 'html',
		success: function(msg) {
			console.log('loadSlider');
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
			console.log('loadBreakingNews');
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
			console.log('loadRecentUpdates');
			$('.content-recent-updates').html(msg);
		}
	});
}

function loadRandom() {
	$.ajax({
		url: 'pages/home/random.html',
		type: 'GET',
		dataType: 'html',
		success: function(msg) {
			console.log('loadRandom');
			$('.content-random').html(msg);
		}
	});
}

function loadGallery() {
	$.ajax({
		url: 'pages/home/gallery.html',
		type: 'GET',
		dataType: 'html',
		success: function(msg) {
			console.log('loadGallery');
			$('.content-gallery').html(msg);
		}
	});
}

function loadPowered() {
	$.ajax({
		url: 'pages/home/powered.html',
		type: 'GET',
		dataType: 'html',
		success: function(msg) {
			console.log('loadPowered');
			$('.content-powered').html(msg);
		}
	});
}

function loadFooter() {
	$.ajax({
		url: 'pages/layout/footer.html',
		type: 'GET',
		dataType: 'html',
		success: function(msg) {
			console.log('loadFooter');
			$('.content-footer').html(msg);
		}
	});
}