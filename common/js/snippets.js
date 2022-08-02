// Buttons
let count = document.getElementsByClassName('js-btns').length;
export let getHtml = [];
export let getCss = [];
export let getJs = [];
let varOfHTML = [
    'home',
    'bars',
    'trash',
    'close',
    'folder',
    'home',
    'bars',
    'trash',
    'close',
    'folder',
    'download',
    'success',
    'info',
    'warning',
    'danger',
    'default',
    'success',
    'info',
    'warning',
    'danger',
    'default',
    'success',
    'info',
    'warning',
    'danger',
    'default',
    'facebook',
    'twitter',
    'google',
    'linkedin',
    'youtube',
    'instagram',
    'pinterest',
    'snapchat',
    'skype',
    'android',
    'dribbble',
    'vimeo',
    'tumblr',
    'vine',
    'foursquare',
    'stumbleupon',
    'flickr',
    'yahoo',
    'reddit',
    'rss',
    'facebook',
    'twitter',
    'google',
    'linkedin',
    'youtube',
    'instagram',
    'pinterest',
    'snapchat',
    'skype',
    'android',
    'dribbble',
    'vimeo',
    'tumblr',
    'vine',
    'foursquare',
    'stumbleupon',
    'flickr',
    'yahoo',
    'reddit',
    'rss',
    'success',
    'info',
    'warning',
    'danger',
    'default',
    'pressed',
];

for (let i = 0; i < count; i++) {
    if (i < 5) {
        getHtml[
            i
        ] = `<button class="js-btns btns-icon">\n\t<i class="fa fa-center fa-${varOfHTML[i]}"> ${varOfHTML[i]}</i>\n</button>`;
    } else if (i < 10) {
        getHtml[
            i
        ] = `<button class="js-btns btns-icon"><i class="fa fa-center fa-${varOfHTML[i]}"></i> ${varOfHTML[i]}</button>`;
    } else if (i === 10) {
        getHtml[
            i
        ] = `<button class="js-btns btns-download">\n\t<i class="fa fa-${varOfHTML[i]}"></i> ${varOfHTML[i]}\n</button>`;
    } else if (i < 16) {
        getHtml[i] = `<button class="js-btns btns ${varOfHTML[i]}">${varOfHTML[i]}</button>`;
    } else if (i < 21) {
        getHtml[i] = `<button class="js-btns btns jp-${varOfHTML[i]}">${varOfHTML[i]}</button>`;
    } else if (i < 21) {
        getHtml[i] = `<button class="js-btns btns gradient-${varOfHTML[i]}">${varOfHTML[i]}</button>`;
    } else if (i < 26) {
        getHtml[i] = `<button class="js-btns fa fa-social fa-${varOfHTML[i]}"></button>`;
    } else if (i < 46) {
        getHtml[i] = `<button class="js-btns fa fa-social fa-${varOfHTML[i]}"></button>`;
    } else if (i < 66) {
        getHtml[i] = `<button class="js-btns fa fa-social fa-${varOfHTML[i]} radius"></button>`;
    } else if (i < 71) {
        getHtml[i] = `<button class="js-btns btns-outline outline-${varOfHTML[i]}">${varOfHTML[i]}</button>`;
    } else if (i == 71) {
        getHtml[i] = `<button class="js-btns btns-pressed">Click Me</button>`;
    } else if (i == 72) {
        getHtml[i] = ` <input type="checkbox" id="switch" />
        <label class="js-btns" for="switch">Toggle</label>`;
    }
}
