
/**
 * Handle filter.
 *
 */

const handleFiltration = ($target, targetClass) => {
	$target.each(function(evn) {
		const $this = $(this);

		$this.slideUp();

		if(! $this.hasClass(targetClass)) {
			return
		}

		$this.slideDown();
	})
}

const handleClick = ($link, $target) => {
	$link.on('click', 'a', function(evn) {
		const $this = $(this);
		const targetClass = $this.attr('href');

		$this
			.parent()
				.addClass('is-current')
			.siblings()
				.removeClass('is-current');

		evn.preventDefault();

		handleFiltration($target, targetClass);
	});
}

export default handleClick;
