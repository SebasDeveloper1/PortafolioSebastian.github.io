let animatedElements = document.querySelectorAll('.entrance-animation');

function showScroll() {
    let scrollTop = document.documentElement.scrollTop;

    for (let i = 0; i < animatedElements.length; i++) {
        let heightElement = (animatedElements[i].offsetTop - 500);
        if (heightElement < scrollTop) {
            if (i % 2 === 0) {
                animatedElements[i].style.opacity = 1;
                animatedElements[i].classList.add('entrance-animation-left');
            } else {
                animatedElements[i].style.opacity = 1;
                animatedElements[i].classList.add('entrance-animation-right');
            }
        }
    }
}

window.addEventListener('scroll', showScroll);