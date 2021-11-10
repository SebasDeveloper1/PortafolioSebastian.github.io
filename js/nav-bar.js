var nav = document.querySelector('nav'); // Identify target
const links = document.getElementsByClassName("nav__menu-container")[0];
const btn_Container = document.getElementsByClassName("nav__btn-container")[0];
const nav_Btn_Icon = document.getElementById("hamburger");
let menu_Status = false;

const toggleMenu = () => {
    links.classList.toggle("nav__menu-container2");
    links.style.transition = "clip-path 0.3s ease-in-out";
}

hamburger.addEventListener("click", function () {
    toggleMenu();
    if (document.querySelector(".nav__menu-container.nav__menu-container2")) {
        document.getElementById("hamburger").src = "./assets/icons/menu-close.svg";
        menu_Status = true;
    } else {
        document.getElementById("hamburger").src = "./assets/icons/menu.svg";
        menu_Status = false;
    }
})

window.addEventListener("resize", function () {
    if (screen.width > 768) {
        if (menu_Status == false) {
            toggleMenu();
            links.style.transition = "none";
            menu_Status = true;
            document.getElementById("hamburger").src = "./assets/icons/menu.svg";
        }
    } else {
        if (menu_Status) {
            toggleMenu();
            links.style.transition = "none";
            menu_Status = false;
        }
    }
})

window.addEventListener('scroll', function (event) { // To listen for event
    event.preventDefault();

    if (window.scrollY >= 1) { // Just an example
        nav.style.backgroundColor = '#080f28'; // or default color
    } else {
        nav.style.backgroundColor = 'transparent';
    }
});