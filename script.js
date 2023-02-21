const hamburger = document.querySelector(".hamburger");
const navMenuLeft = document.querySelector(".nav-menu-left");
const navMenuRight = document.querySelector(".nav-menu-right");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenuLeft.classList.toggle("active");
    navMenuRight.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n. addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenuLeft.classList.remove("active");
    navMenuRight.classList.remove("active");
}))
