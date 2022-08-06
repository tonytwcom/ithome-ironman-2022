import {initMain} from '../common/js/initmain.js';

window.onload = function () {
    initMain();
    let slideIndex = 1;
    showSlide(slideIndex);
    // showSlide(slideIndex);
    let prev = document.getElementById('prev');
    prev.addEventListener('click', divideSlides, false);

    let next = document.getElementById('next');
    next.addEventListener('click', plusSlides, false);

    // function currentSlide(num) {
    //     showSlide((slideIndex += num));
    // }

    function plusSlides() {
        showSlide((slideIndex += 1));
    }

    function divideSlides() {
        showSlide((slideIndex -= 1));
    }

    function showSlide(num) {
        let slides = document.getElementsByClassName('slide__item');
        let dots = document.getElementsByClassName('slide__dot');
        console.log(num);
        if (num > slides.length) {
            slideIndex = 1;
        }

        if (num < 1) {
            slideIndex = slides.length;
        }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
            console.log(slides[i]);
        }

        slides[slideIndex - 1].style.display = 'block';
    }
};
