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

