/*
 * Polyfills
 */
import './polyfills/object-fit';

/*
 * Modules
 */
import './modules/mobile-nav';
import './modules/dropdown';
import './modules/sticky-header';
import './modules/handle-accordion';

import handleClick from './modules/handle-filter';

const $filters = $('.js-filters .filters__body');
const $accordion = $('.js-accordion .accordion__section');

handleClick($filters, $accordion);
