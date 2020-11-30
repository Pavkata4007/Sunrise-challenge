
/**
 * Open mobile-nav
 */

$('.js-mobile-nav').on('click', function() {
	const $this = $(this);

	$('.header').toggleClass('is-active');

	$this.toggleClass('mobile-nav--active');
});
