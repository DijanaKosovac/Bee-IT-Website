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



