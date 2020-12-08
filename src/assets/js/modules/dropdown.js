
/**
 * Handle dropdown.
 *
 */

$('.js-nav li a').on('click', function(evn) {
	const $this = $(this);
	const $dropdown = $this.siblings('.dropdown');

	if ($(window).width() < 1023){
		$dropdown.toggleClass('is-showing');
		$this.toggleClass('is-showing')
	}

	evn.preventDefault();
})
