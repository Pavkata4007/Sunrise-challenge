
/**
 * Sticky header.
 *
 */

$(document).scroll(function() {
	let scroll = $(window).scrollTop();

	 if (scroll >= 100) {
        $('.header .header__inner').addClass('is-fixed');
    } else {
    	$('.header .header__inner').removeClass('is-fixed');
    }
})
