$(document).ready(function () {
    
    $(window).scroll(function () {
    
        var showAfter = 100;
        if ($(this).scrollTop() > showAfter) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });


    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });
});



// $(function () {
//     console.log($('#demo').val);

//     $('p').text('Hello World');

//     // $('.demo').click(function () {

//     // });

//     $('.demo').on('click', function () {
//         // $('.demo').css({
//         //     color: '#0f0',
//         //     'font-size': '2rem',
//         //     'font-family': '微軟正黑體',
//         // });

//         // $('#go').animate(
//         //     {
//         //         color: '#0f0',
//         //     },
//         //     1500
//         // );
//         $('.demo').animate(
//             {
//                 width: '70%',
//                 opacity: 0.4,
//                 marginLeft: '0.6in',
//                 fontSize: '3em',
//                 borderWidth: '10px',
//             },
//             3000
//         );
//     });
//     // .on('click', function () {
//     //     alert('Hello World');
//     // })

//     $('button').click(function () {
//         $('p').slideToggle();
//     });
// });
