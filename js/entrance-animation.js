let animatedElements = document.querySelectorAll('.entrance-animation');

function showScroll() {
    let scrollTop = document.documentElement.scrollTop;

    for (let i = 0; i < animatedElements.length; i++) {
        let heightElement = (animatedElements[i].offsetTop - 500);
        if (heightElement < scrollTop) {
            animatedElements[i].style.opacity = 1;
            animatedElements[i].classList.add('entrance-animation-left');
        }
    }
}

window.addEventListener('scroll', showScroll);