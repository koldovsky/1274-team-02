let currentIndex = 0; 
const slides = document.querySelectorAll('.new-mobile-games__carousel-slide');
const totalSlides = slides.length;

function showSlides() {
    slides.forEach(slide => {
        slide.style.display = 'none'; 
    });

    const isSmallScreen = window.innerWidth <= 340;

    if (isSmallScreen) {
        
        slides[currentIndex].style.display = 'block';
    } else {
        
        let displayedIndices = new Set(); 
        for (let i = 0; i < 3; i++) {
            const index = (currentIndex + i) % totalSlides; 
            if (!displayedIndices.has(index)) {
                slides[index].style.display = 'block'; 
                displayedIndices.add(index); 
            }
        }
    }
}

function nextSlide() {
    currentIndex += 3; 
    if (currentIndex >= totalSlides) {
        currentIndex = 0; 
    }
    showSlides();
}

function prevSlide() {
    currentIndex -= 3; 
    if (currentIndex < 0) {
        currentIndex = totalSlides - (totalSlides % 3); // Loop to the last set
    }
    showSlides();
}

document.querySelector('.new-mobile-games__carousel-button-next').addEventListener('click', nextSlide);
document.querySelector('.new-mobile-games__carousel-button-prev').addEventListener('click', prevSlide);
window.addEventListener('resize', showSlides);


showSlides();
