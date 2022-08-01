import {myString} from './js/snippets.js';

window.onload = function () {
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

    for (let i = 0; i < count; i++) {
        console.log(i + ' is');
        console.log(buttons[i]);
        buttons[i].addEventListener('click', openButton, false);
    }

    let xs = ` <div class="cover-wrap">
        <div class="cover-content">
        <div class="textarea-wrap">
            <div class="textarea-item">
                <textarea class="textarea" name="" id="htmltxt" cols="30" rows="10">html</textarea>
                <button class="btns-icon btns-icon-customer">
                    <i class="fa fa-center fa-copy"></i> Copy HTML
                </button>
            </div>
            <div class="textarea-item">
                <textarea class="textarea" name="" id="csstxt" cols="30" rows="10">css</textarea>
                <button class="btns-icon btns-icon-customer">
                    <i class="fa fa-center fa-copy"></i>Copy CSS
                </button>
            </div>
            <div class="textarea-item">
                <textarea class="textarea" name="" id="jstxt" cols="30" rows="10"> </textarea>
                <button class="btns-icon btns-icon-customer">
                    <i class="fa fa-center fa-copy"></i>Copy JavaScript
                </button>
            </div>
        </div>
        <button class="btns-icon btns-icon-customer btn-done"><i class="fa fa-center fa-"></i>Done</button>
    </div>`;

    document.getElementById('htmltxt').value = xs;
    // console.log(myString);
    myString();
};

function openButton() {
    let opened = document.getElementsByClassName('cover-wrap')[0].style;
    opened.visibility = 'visible';
    // document.getElementsByClassName('cover-wrap')[0].style.visibility = 'visible';
}

function closeButton() {
    document.getElementsByClassName('cover-wrap')[0].style.visibility = 'hidden';
}
