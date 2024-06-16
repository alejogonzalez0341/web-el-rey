let currentIndex = 0;

function changeSlide(index) {
    const carouselInner = document.querySelector('.carousel-inner');
    const slides = document.querySelectorAll('.carousel-inner img');
    if (index >= 0 && index < slides.length) {
        carouselInner.style.transform = `translateX(-${index * 100}%)`;
        currentIndex = index;
    }
}
