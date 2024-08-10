let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const slidesContainer = document.querySelector('.slides');

function showSlides() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  const slideWidth = slides[0].clientWidth;
  slidesContainer.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
  setTimeout(showSlides, 4000); // 
}

showSlides();



function toggleMenu() {
  const navbarLinks = document.getElementById('navbarLinks');
  if (navbarLinks.style.display === 'flex') {
    navbarLinks.style.display = 'none';
  } else {
    navbarLinks.style.display = 'flex';
  }
}

