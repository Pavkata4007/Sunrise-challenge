
/**
 * Handle accordion.
 *
 */

const initAccordions = ($accordion = $('.js-accordion')) => {
    $('.accordion__section').not('.is-current').find('.accordion__body').hide()

    $accordion.on('click', '.accordion__head', function (evn) {
        const $accordionSection = $(this).closest('.accordion__section');
        const $accordionBody = $accordionSection.find('.accordion__body');

        $accordionBody.stop().slideToggle();

        $accordionSection.toggleClass('is-current');

        $accordionSection.siblings().removeClass('is-current')
                .find('.accordion__body').slideUp();

        evn.preventDefault();
    });
}

initAccordions();
