$('.slider').slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: "<img class='prev' src='./src/images/previous.svg'>",
    nextArrow: "<img class='next' src='./src/images/next.svg'>",
    responsive: [
        {
            breakpoint: 720,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});
