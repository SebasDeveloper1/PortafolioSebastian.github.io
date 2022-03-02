const slider = document.querySelector(".slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length - 1];
const btnRight = document.querySelector("#sliderBtnRight");
const btnLeft = document.querySelector("#sliderBtnLeft");
let interval;

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next() {
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 1s";
    setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 1000);
}

function Prev() {
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "0%";
    slider.style.transition = "all 1s";
    setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 1000);
}

function startSlider() {
    return interval = setInterval(() => { Next(); }, 8000);
}

function stopSlider() {
    return clearInterval(interval);
}

btnRight.addEventListener("click", () => {
    stopSlider();
    Next();
    startSlider();
});

btnLeft.addEventListener("click", () => {
    stopSlider();
    Prev();
    startSlider();
});

slider.addEventListener('mousedown', function () {
    stopSlider();
    slider.addEventListener('mouseup', function () {
        startSlider();
    });
});

slider.addEventListener('touchstart', function () {
    stopSlider();
    console.log('slider presionado');
});

slider.addEventListener('touchend', function () {
    startSlider();
    console.log('slider no presionado');
});

startSlider();