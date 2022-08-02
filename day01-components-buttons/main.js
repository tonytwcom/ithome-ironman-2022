import {getHtml} from '../common/js/snippets.js';
import {showHeader} from '../common/js/header.js';
import {showFooter} from '../common/js/footer.js';
import {showCover} from '../common/js/cover.js';

window.onload = function () {
    showHeader();
    showFooter();
    showCover();
    // console.log(count);
    // var el = document.getElementById('bbb');
    // var el2 = document.getElementById('ddd');
    // // var el = document.querySelector('.btns');
    // el.addEventListener(
    //     'click',
    //     function () {
    //         console.log('good');
    //         // document.getElementById('ccc').style.transition-duration = '5s';
    //         document.getElementById('ccc').style.visibility = 'visible';
    //     },
    //     false
    // );

    // el2.addEventListener(
    //     'click',
    //     () => {
    //         document.getElementById('ccc').style.visibility = 'hidden';
    //     },
    //     false
    // );

    let buttons = document.querySelectorAll('.btn-style');
    let done = document.querySelector('.btn-done');
    let count = document.getElementsByClassName('btn-style').length;

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

    // document.getElementById('htmltxt').value = getHtml[i];
    // console.log(myString);
};

function openButton(i) {
    let opened = document.getElementsByClassName('cover')[0].style;
    opened.visibility = 'visible';
    document.getElementById('htmltxt').value = getHtml[i];
    document.getElementById('csstxt').value = getHtml[i];
    document.getElementById('jstxt').value = getHtml[i];
}

function closeButton() {
    document.getElementsByClassName('cover')[0].style.visibility = 'hidden';
}
