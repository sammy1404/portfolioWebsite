document.addEventListener("DOMContentLoaded", function() {
    var pentagon = document.querySelector(".icon.pentagon path");

    pentagon.style.animation = "animate-logo 2s linear forwards";
});

window.addEventListener("scroll", function() {
    var container = document.querySelector(".container");
    var scrolldown = document.querySelector(".scrollDown");

    if (window.scrollY > 1) {
        container.classList.add("move-top-left");
        scrolldown.classList.add("fade-out"); 
    } else {
        container.classList.remove("move-top-left");
        scrolldown.classList.remove("fade-out");
    }
});

// to hide the name thing
window.addEventListener("scroll", function() {
    var page1 = document.getElementById("page1");
    var titleBar = document.getElementById("titleBar");

    if (window.scrollY > (page1.clientHeight) * 0.4) {
        titleBar.style.display = "block"; // Show the title bar
        console.log("should display now")
    } else {
        titleBar.style.display = "none"; // Hide the title bar
    }
});

// Initially hide the titleBar
document.addEventListener("DOMContentLoaded", function() {
    var titleBar = document.getElementById("titleBar");
    titleBar.style.display = "none";
});


window.addEventListener("DOMContentLoaded", function() {
    console.log("Window width:", window.innerWidth, "Window height:", window.innerHeight);
});


window.addEventListener("scroll", function() {
    var intro = document.getElementById("intro");

    if (window.scrollY > 1) {
        intro.classList.add("appear");
    } else {
        intro.classList.remove("appear");
    }
    if(this.window.scroll = window.innerHeight*0.9){
        intro.classList.add("dissapear")
    }
})
