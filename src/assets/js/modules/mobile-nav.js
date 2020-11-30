
/**
 * Open mobile-nav
 */

$('.js-mobile-nav').on('click', function() {
	const $this = $(this);

	$('.header').toggleClass('is-active');

	$this.toggleClass('mobile-nav--active');

	let scroll = $(window).scrollTop();

	if (scroll >= 100) {
		$('.header .header__inner').removeClass('is-fixed');
	}
});
