
/**
 * Handle dropdown.
 *
 */

$('.js-nav li a').on('click', function(evn) {
	const $this = $(this);
	const $dropdown = $this.siblings('.dropdown');
	const $win = $(window)

	if ($win.width() < 1023){
		$dropdown.toggleClass('is-showing');
		$this.toggleClass('is-showing');
	}

	$win.on('resize', function() {
		$dropdown.removeClass('is-showing');
		$this.removeClass('is-showing');
	})

	evn.preventDefault();
})
