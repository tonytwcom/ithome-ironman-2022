window.onload = function () {
    var el = document.getElementById('bbb');
    var el2 = document.getElementById('ddd');
    // var el = document.querySelector('.btns');
    el.addEventListener(
        'click',
        function () {
            console.log('good');
            // document.getElementById('ccc').style.transition-duration = '5s';
            document.getElementById('ccc').style.visibility = 'visible';
        },
        false
    );

    el2.addEventListener(
        'click',
        () => {
            document.getElementById('ccc').style.visibility = 'hidden';
        },
        false
    );
};
