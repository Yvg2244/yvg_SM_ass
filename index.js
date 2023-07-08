window.addEventListener("DOMContentLoaded", function () {
  const carouselTrack = document.querySelector(".carouselTrack");
  const carouselSlides = Array.from(carouselTrack.children);
  const slideWidth = carouselSlides[0].getBoundingClientRect().width;

  // Duplicate the slides for infinite scrolling
  carouselTrack.appendChild(carouselSlides[0].cloneNode(true));
  carouselTrack.prepend(
    carouselSlides[carouselSlides.length - 1].cloneNode(true)
  );

  let slideIndex = 1;
  let currentPosition = -slideWidth;

  function moveCarousel() {
    currentPosition -= slideWidth;
    carouselTrack.style.transition = "transform 0.5s ease-in-out";
    carouselTrack.style.transform = `translateX(${currentPosition}px)`;
    slideIndex++;

    // Reset to the first slide after the last slide
    if (slideIndex === carouselSlides.length) {
      setTimeout(() => {
        carouselTrack.style.transition = "none";
        currentPosition = -slideWidth;
        carouselTrack.style.transform = `translateX(${currentPosition}px)`;
        slideIndex = 1;
      }, 500);
    }
  }

  // Auto move the carousel
  setInterval(moveCarousel, 1000);
});


const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('register-btn');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

loginBtn.addEventListener('click', () => {
  loginBtn.classList.add('active');
  registerBtn.classList.remove('active');
  loginForm.style.display = 'flex';
  registerForm.style.display = 'none';
});

registerBtn.addEventListener('click', () => {
  registerBtn.classList.add('active');
  loginBtn.classList.remove('active');
  loginForm.style.display = 'none';
  registerForm.style.display = 'flex';
});
