$('.about__slider').slick({
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

let modal = document.getElementById("myModal");
let btn = document.getElementsByClassName("btn")[0];

btn.onclick = function () {
    modal.style.display = "block";
}


window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}