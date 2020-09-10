$(function() {

	/* Fixed header */
	var header = $("#header");
	var intro = $("#intro");
	var introH = intro.innerHeight();
	var scrollPos = $(window).scrollTop();
	var nav = $("#nav");
	var navToggle = $("#navToggle");

	checkScroll(scrollPos, introH);

	$(window).on("scroll resize", function() {
		introH = intro.innerHeight();
		scrollPos = $(this).scrollTop();

		checkScroll(scrollPos, introH);
	});

	function checkScroll(scrollPos, introH) {
		if (scrollPos > introH) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	}

	/* Smooth scroll */
	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		var elementId = $(this).data("scroll");
		var elementOffset = $(elementId).offset().top;

		nav.removeClass("show");

		$("html, body").animate({
			scrollTop: elementOffset - 70
		}, 700);
	});

	/* Nav Toggle */
	navToggle.on("click", function(event) {
		event.preventDefault();

		nav.toggleClass("show");
	});

	/* Reviews: https://kenwheeler.github.io/slick/ */
	var slider = $("#reviewsSlider");

	slider.slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		arrows: false,
		dots: true
	});

});
