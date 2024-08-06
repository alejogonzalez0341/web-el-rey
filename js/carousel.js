const carouselInner = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel__item');
const dotsContainer = document.querySelector('.carousel__dots');
let index = 0;

//dots
items.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.classList.add('carousel__dot');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
});

function updateCarousel() {
    const offset = -index * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;

    document.querySelectorAll('.carousel__dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

document.querySelector('.next').addEventListener('click', () => {
    if (index < items.length - 1) {
        index++
    } else {
        index = 0;
    }
    updateCarousel();
});

document.querySelector('.prev').addEventListener('click', () => {
    if (index > 0) {
        index--
    } else {
        index = items.length - 1
    }
    updateCarousel();
});


// Agregar soporte para deslizamiento  táctil en dispositivos móviles
let startX, endX

carouselInner.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

carouselInner.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].clientX;
    handleSwipe();
});

function handleSwipe() {
    if (startX > endX + 50) {
        document.querySelector('.next').click();
    } else if (startX < endX - 50) {
        document.querySelector('.prev').click();
    }
}

function goToSlide(slideIndex) {
    index = slideIndex;
    updateCarousel();
}
