let service_link = document.querySelector('.service');
let sidebar = document.getElementById("mySidenav");
let slider_container = document.querySelector('.slider-container');
let header = document.getElementsByTagName('header')[0];
let closeBtn = document.querySelector('.closebtn');

service_link.addEventListener('click', () => {
    sidebar.style.width = "456px";
    slider_container.style.transition = 'all 0.5s'
    slider_container.style.marginLeft = "450px";
    header.style.backgroundImage = 'none';
})

closeBtn.addEventListener('click', () => {
    document.getElementById("mySidenav").style.width = "0";
    slider_container.style.transition = 'all 0.5s'
    slider_container.style.marginLeft = "0";
    header.style.backgroundImage = 'url(./src/images/Mask.png)';
})


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


