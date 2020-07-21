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

function checkImage(elem) {
    let randomNumber = (Math.floor(Math.random() * 3) + 1);
    let dataValue = elem.getAttribute('data-slide-number');
    if (randomNumber === +dataValue) {
        checkImage(elem);
    } else {
        elem.setAttribute('data-slide-number', randomNumber.toString());
    }
    console.log('random ' + randomNumber);
    return randomNumber;
}

function randomSlide(element) {
    return element.src = `./src/imagesSlider/${element.getAttribute('data-name')}/image-${checkImage(element)}.jpg`;
}

function checkSlide(slide) {
    let randomNumber = Math.floor(Math.random() * 4);
    let slideValue = slide.getAttribute('data-slide-element');
    if (randomNumber === +slideValue) {
        checkSlide(slide);
    } else {
        slide.setAttribute('data-slide-number', randomNumber.toString());
    }
    return randomNumber;
}

function main() {
    let sliderArray = [slideField1, slideField2, slideField3, slideField4];
    let random = Math.floor(Math.random() * 4);
    let randomNumber = checkSlide(sliderArray[random]);
    randomSlide(sliderArray[randomNumber]);
}

setInterval(() => {
    main();
}, 2000);

