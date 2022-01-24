function scrollTo(element) {
    document.querySelector(element).scrollIntoView({ behavior: "smooth" });
}

document.querySelector("#goToUpButton").addEventListener("click", function (event) {
    scrollTo("#heroSectionIndex");
    event.preventDefault();
});