$(document).ready(function() {
	$("#top-slider").owlCarousel({
		navigation : true,
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true,
		autoPlay: 2000,
		stopOnHover : true
	});
	$("#news-slider").owlCarousel({
		navigation : true,
		dots: false,
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true,
		autoPlay: 2000,
		stopOnHover : true
	});
	$("#news-gallery").owlCarousel({
		autoPlay: 2000,
		items : 4,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [979,3]
	});
	$("#image-gallery").owlCarousel({
		autoPlay: 2000,
		items : 6,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [979,3]
	});
	$("#powered-gallery").owlCarousel({
		autoPlay: 2000,
		items : 6,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [979,3]
	});
});