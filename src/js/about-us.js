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


// function showBigImages() {
//     let randomNumber = Math.floor(Math.random() * 3);
//     let images = [];
//     images[0] = './src/images/office-space.png';
//     images[1] = './src/images/img-big-1.jpg';
//     images[2] = './src/images/img-big-2.jpg';
//     document.slide.src = images[randomNumber];
// }

// function showMiddleImages() {
//     let randomNumber = Math.floor(Math.random() * 3);
//     let imagesMiddle = [];
//     imagesMiddle[0] = './src/images/mac.png';
//     imagesMiddle[1] = './src/images/img-middle-1.jpg';
//     imagesMiddle[2] = './src/images/img-middle-2.jpg';
//     document.slideComputers.src = imagesMiddle[randomNumber];
// }

// function showSmallImages() {
//     let randomNumber = Math.floor(Math.random() * 3);
//     let imagesSmall = [];
//     imagesSmall[0] = './src/images/notebook.png';
//     imagesSmall[1] = './src/images/img-small-1.jpg';
//     imagesSmall[2] = './src/images/img-small-2.jpg';
//     document.slideNotebooks.src = imagesSmall[randomNumber];
// }

// function showXsImages() {
//     let randomNumber = Math.floor(Math.random() * 3);
//     let imagesXs = [];
//     imagesXs[0] = './src/images/office-2.png';
//     imagesXs[1] = './src/images/img-xs-1.jpg';
//     imagesXs[2] = './src/images/img-xs-2.jpg';
//     document.slideOffice.src = imagesXs[randomNumber];
// }

// function main() {
//     let array_of_functions = [
//         showBigImages,
//         showMiddleImages,
//         showSmallImages,
//         showXsImages
//     ];
//     setInterval(() => {
//         let randomNumber = Math.floor(Math.random() * 4);
//         array_of_functions[randomNumber]()
//     }, 3000);
// }

// main();


let slideField1 = document.getElementsByClassName('workplace__img')[0];
let slideField2 = document.getElementsByClassName('workplace__office-img1')[0];
let slideField3 = document.getElementsByClassName('workplace__office-img')[0];
let slideField4 = document.getElementsByClassName('workplace__office-image')[0];

function randomSlide(element) {
    let el1 = slideField1.getAttribute('data-name');
    let el2 = slideField2.getAttribute('data-name');
    let el3 = slideField3.getAttribute('data-name');
    let el4 = slideField4.getAttribute('data-name');
    let randomNumber = (Math.floor(Math.random() * 3) + 1);
    return element.src = `./src/imagesSlider/${element.getAttribute('data-name')}/image-${randomNumber}.jpg`;
}

function main() {
    let sliderArray = [slideField1, slideField2, slideField3, slideField4];
    let randomNumber = Math.floor(Math.random() * 4);
    randomSlide(sliderArray[randomNumber]);
}

setInterval(() => {
    main();
}, 2000);

