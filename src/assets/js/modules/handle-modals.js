
/**
 * Handle modals.
 *
 */

$('.wrapper').on('click', '.js-modal', function(evn) {
	evn.preventDefault();
	const $this = $(this);
	const href = $this.attr('href');
	const $targetModal = $(href);


	$targetModal.toggleClass('is-active');
	$('.header').addClass('is-showing');

});

/**
 * Close modal.
 */

$('.modal .modal__icon').on('click', function() {
	$('.modal').removeClass('is-active');
});
