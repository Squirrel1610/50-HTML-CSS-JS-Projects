const bodyElement = document.querySelector('body');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('#left');
const nextBtn = document.querySelector('#right');

let activeSlide = 0;

setBgToBody();

prevBtn.addEventListener('click', () => {
    activeSlide--;
    if (activeSlide < 0) {
        activeSlide = slides.length - 1;
    }
    setBgToBody();
    setActiveSlide();
});

nextBtn.addEventListener('click', () => {
    activeSlide++;
    if (activeSlide > slides.length - 1) {
        activeSlide = 0
    }
    setBgToBody()
    setActiveSlide()
});

function setBgToBody() {
  console.log(slides)
  bodyElement.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
    slides.forEach((slide) => slide.classList.remove('active'));
    slides[activeSlide].classList.add('active');
}