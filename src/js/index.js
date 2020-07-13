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


function validateFrom(form) {
    let warningMessage = document.getElementsByClassName('warning')[0];
    let warningEmail = document.getElementsByClassName('warningEmail')[0];
    let name = form.firstName.value;
    let emailValue = form.email.value;
    let isValid = true;

    if (name == '') {
        form.firstName.style.borderColor = 'red';
        warningMessage.innerText = 'This field is required';
        isValid = false;
    }

    if (emailValue == '') {
        form.email.style.borderColor = 'red';
        warningEmail.innerText = 'This field is required';
        isValid = false;
    }
    return isValid;
}