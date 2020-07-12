let message = document.getElementsByClassName('message')[0];
let messageEmail = document.getElementsByClassName('messageEmail')[0];
function checkForm(form) {
    let nameValue = form.firstname.value;
    let emailValue = form.email.value;
    let fileValue = form.cv.value;

    if (nameValue == '') {
        form.firstname.style.border = '2px solid red';
        message.innerText = 'Name is required';
        return false;
    }

    if (emailValue == '') {
        form.email.style.border = '2px solid red';
        messageEmail.innerText = 'Email is required';
        return false;
    }

    if (fileValue == '') {
        form.cv.style.border = '2px solid red';
        return false;
    }

    return true;
}