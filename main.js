document.addEventListener("DOMContentLoaded", function() {
    var pentagon = document.querySelector(".icon.pentagon path");

    pentagon.style.animation = "animate-logo 2s linear forwards";

});

window.addEventListener("scroll", function() {
    var container = document.querySelector(".container");

    if (window.scrollY > 100) { // Adjust the value as needed
        container.classList.add("move-top-left");
    } else {
        container.classList.remove("move-top-left");
    }
});

