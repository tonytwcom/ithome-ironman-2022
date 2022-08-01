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
};

function openButton() {
    console.log('hrrr');
    document.getElementsByClassName('cover-wrap')[0].style.visibility = 'visible';
}

function closeButton() {
    document.getElementsByClassName('cover-wrap')[0].style.visibility = 'hidden';
}
