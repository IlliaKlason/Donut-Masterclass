
$('.reviews__list').slick({
    autoplay: false,
    centerMode: true,
    infinite: true,
    arrows: false,
    slidesToShow: 3,
    slidesScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    cssEase: 'linear',
    dots: false,
    responsive: [{
        breakpoint: 768,
        settings: {
            variableWidth: true,
            slidesToShow: 3,
            slidesScroll: 1,
            centerMode: true,
            arrows: false
        }
    },
    {
        breakpoint: 320,
        settings: {
            variableWidth: true,
            slidesToShow: 1,
            slidesScroll: 1,
            centerMode: true,
            arrows: false
        }
    }
        // instead of a settings object
    ]
});

