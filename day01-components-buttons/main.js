// import {showHeader} from '../common/js/header.js';
// import {showFooter} from '../common/js/footer.js';
// import {showCover} from '../common/js/cover.js';
import {initMain} from '../common/js/main.js';
import {getHtml, getCss, getJs} from '../common/js/snippets.js';

window.onload = function () {
    // showHeader();
    // showFooter();
    // showCover();
    initMain();

    let buttons = document.querySelectorAll('.js-btns');
    let done = document.querySelector('.js-doneBtn');
    let count = document.getElementsByClassName('js-btns').length;
    let copyBtn = document.querySelectorAll('.js-copyBtn');

    for (let i = 0; i < 3; i++) {
        copyBtn[i].addEventListener(
            'click',
            function () {
                getCode(i);
            },
            false
        );
    }
    done.addEventListener('click', closeButton, false);

    // 監聽全部 button
    for (let i = 0; i < count; i++) {
        // console.log(buttons[i]);
        // console.log('');
        buttons[i].addEventListener(
            'click',
            function () {
                openButton(i);
            },
            false
        );
        // document.getElementById('htmltxt').innerHTML = buttons[i];
        // buttons[i]getHtml[i]
    }
    function getCode(i) {
        let getTxt = ['htmltxt', 'csstxt', 'jstxt'];
        let copyText = document.getElementById(getTxt[i]);
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);
    }
    // document.getElementById('htmltxt').value = getHtml[i];
    // console.log(myString);
};

function openButton(i) {
    const intst = i;
    console.log(intst);
    let opened = document.getElementsByClassName('cover')[0].style;
    opened.visibility = 'visible';
    document.getElementById('htmltxt').value = getHtml[i];
    document.getElementById('csstxt').value = getCss[i];
    document.getElementById('jstxt').value = getJs[i];
}

function closeButton() {
    document.getElementsByClassName('cover')[0].style.visibility = 'hidden';
}
