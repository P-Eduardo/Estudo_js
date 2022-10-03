const slider = document.querySelector(".capas");
const slides = document.querySelectorAll(".item");
const button = document.querySelectorAll(".button");
const content = document.querySelectorAll(".js-descricao section");

if (slides.length && content.length) {

    content[0].classList.add("ativo")
    let current = 0;
    let prev = 8;
    let next = 1;

    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
    }

    const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);

    const gotoNext = () => current < 8 ? gotoNum(current + 1) : gotoNum(0);

    const gotoNum = number => {
        current = number;
        prev = current - 1;
        next = current + 1;

        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove("active");
            slides[i].classList.remove("prev");
            slides[i].classList.remove("next");
        }

        if (next == 9) {
            next = 0;
        }

        if (prev == -1) {
            prev = 8;
        }



        slides[current].classList.add("active");
        slides[prev].classList.add("prev");
        slides[next].classList.add("next");
        content.forEach((section) => {
            section.classList.remove("ativo");
        });
        content[current].classList.add("ativo");

    }

}




//Menu scroll
const menuLink = document.querySelectorAll('.js-menu a[href^="#"]');
console.log(menuLink);

function getDistanceFromTheTop(element) {
    const id = element.getAttribute("href");
    return document.querySelector(id).offsetTop;
}

function nativeScroll(distanceFromTheTop) {
    window.scroll({
        top: distanceFromTheTop,
        behavior: 'smooth'
    })

}
function scrollToSection(e) {
    e.preventDefault();

    const distanceFromTheTop = getDistanceFromTheTop(e.target) - 40;
    nativeScroll(distanceFromTheTop);

}

menuLink.forEach((link) => {
    link.addEventListener("click", scrollToSection);
});