let service_link = document.querySelector('.service');
let sidebar = document.querySelector('.sidebar');
let slider_container = document.querySelector('.slider-container');
let header = document.getElementsByTagName('header')[0];
let headline = document.getElementsByClassName('headline')[0];

service_link.addEventListener('click', () => {
    document.getElementById("mySidenav").style.width = "456px";
    slider_container.style.transition = 'all 0.5s'
    slider_container.style.marginLeft = "450px";
    header.style.backgroundImage = 'none';
})

headline.addEventListener('click', () => {
    document.getElementById("mySidenav").style.width = "0";
    slider_container.style.transition = 'all 0.5s'
    slider_container.style.marginLeft = "0";
    header.style.backgroundImage = 'url(./src/images/Mask.png)';
})



