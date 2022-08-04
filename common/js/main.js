// import {getHtml, getCss, getJs} from '../common/js/snippets.js';
import {showHeader} from './header.js';
import {showBanner} from './banner.js';
import {showFooter} from './footer.js';
import {showCover} from './cover.js';
export function initMain() {
    showHeader();
    showBanner();
    showFooter();
    showCover();
}
