let message = document.getElementsByClassName('message')[0];
let messageEmail = document.getElementsByClassName('messageEmail')[0];
let cv = document.getElementsByClassName('cv')[0];


function checkForm(form) {
    let nameValue = form.firstname.value;
    let emailValue = form.email.value;
    let fileValue = form.cv.value;
    let isValid = true;

    if (nameValue == '') {
        form.firstname.style.border = '2px solid red';
        message.innerText = 'Name is required';
        isValid = false;
    }

    if (emailValue == '') {
        form.email.style.border = '2px solid red';
        messageEmail.innerText = 'Email is required';
        isValid = false;
    }

    if (fileValue == '') {
        cv.style.border = '2px solid red';
        isValid = false;
    }
    return isValid;
}

//  Office section

let slideField1 = document.getElementsByClassName('workplace__img')[0];
let slideField2 = document.getElementsByClassName('workplace__office-img1')[0];
let slideField3 = document.getElementsByClassName('workplace__office-img')[0];
let slideField4 = document.getElementsByClassName('workplace__office-image')[0];

function numberCheck(number, dataValue) {
    if (number === dataValue) {
        return true;
    } else {
        return false;
    }
}

function checkImage(image) {
    let randomImageNumber = (Math.floor(Math.random() * 3) + 1);
    let dataValue = image.getAttribute('data-slide-number');
    if (numberCheck(randomImageNumber, dataValue)) {
        checkImage(image);
    } else {
        image.setAttribute('data-slide-number', randomImageNumber.toString());
    }
    return randomImageNumber;
}

function generateRandomSlide(element) {
    return element.src = `./src/imagesSlider/${element.getAttribute('data-name')}/image-${checkImage(element)}.jpg`;
}

function checkSlide(slide, sliderNumber) {
    let dataValue = slide.getAttribute('data-slide-element');
    if (numberCheck(sliderNumber, +dataValue)) {
        sliderNumber = Math.floor(Math.random() * 4);
    } else {
        slide.setAttribute('data-slide-element', sliderNumber.toString());
    }
    return sliderNumber;
}

function main() {
    let sliderArray = [slideField1, slideField2, slideField3, slideField4];
    let sliderNumber = Math.floor(Math.random() * 4);
    let randomSlide = checkSlide(sliderArray[sliderNumber], sliderNumber);
    generateRandomSlide(sliderArray[randomSlide]);
}

setInterval(() => {
    main();
}, 2000);

