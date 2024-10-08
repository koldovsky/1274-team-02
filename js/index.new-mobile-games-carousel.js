let currentIndex = 0; 
const slides = document.querySelectorAll('.new-mobile-games__carousel-slide');
const totalSlides = slides.length;


function showSlides() {
    slides.forEach((slide, index) => {
        if (index >= currentIndex && index < currentIndex + 3) {
            slide.style.display = 'block'; 
        } else {
            slide.style.display = 'none'; 
        }
    });
}


function nextSlide() {
    currentIndex++;
    
   
    if (currentIndex > totalSlides - 3) {
        currentIndex = 0;
    }
    
    showSlides();
}


function prevSlide() {
    currentIndex--;
    
    
    if (currentIndex < 0) {
        currentIndex = totalSlides - 3; 
    }
    
    showSlides();
}


document.querySelector('.new-mobile-games__carousel-button-next').addEventListener('click', nextSlide);
document.querySelector('.new-mobile-games__carousel-button-prev').addEventListener('click', prevSlide);


showSlides();
