buttonUp = document.getElementById('goToUpButton');

window.onscroll = function () {
    let scroll = document.documentElement.scrollTop;

    if (scroll > 500) {
        buttonUp.style.transform = 'scale(1)';
    } else {
        buttonUp.style.transform = 'scale(0)';
    }
}

function scrollTo(element) {
    document.querySelector(element).scrollIntoView({ behavior: 'smooth' });
}

buttonUp.addEventListener('click', function (event) {
    scrollTo('#heroSectionIndex');
    event.preventDefault();
});