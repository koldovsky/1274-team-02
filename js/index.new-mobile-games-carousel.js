let currentIndex = 0; // Індекс поточного слайду
const slides = document.querySelectorAll('.new-mobile-games__carousel-slide');
const totalSlides = slides.length;

// Функція для відображення слайдів
function showSlides() {
    slides.forEach((slide, index) => {
        if (index >= currentIndex && index < currentIndex + 3) {
            slide.style.display = 'block'; // Показати слайд
        } else {
            slide.style.display = 'none'; // Сховати слайд
        }
    });
}

// Функція для переходу до наступного слайду
function nextSlide() {
    currentIndex++;
    
    // Якщо досягли останнього слайду, скидаємо на перший
    if (currentIndex > totalSlides - 3) {
        currentIndex = 0;
    }
    
    showSlides();
}

// Функція для переходу до попереднього слайду
function prevSlide() {
    currentIndex--;
    
    // Якщо досягли першого слайду, переходимо до останнього
    if (currentIndex < 0) {
        currentIndex = totalSlides - 3; // Повертаємо на третій останній слайд
    }
    
    showSlides();
}

// Додати обробники подій для кнопок
document.querySelector('.new-mobile-games__carousel-button-next').addEventListener('click', nextSlide);
document.querySelector('.new-mobile-games__carousel-button-prev').addEventListener('click', prevSlide);

// Показати початкові слайди
showSlides();
