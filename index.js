//search feature-----------------------------------------
const user = [
  { name: "Shae Hope", age: "22", role: "MERN", location: "DELHI" },
  { name: "Andrew Maria", age: "22", role: "ANDROID", location: "MUMBAI" },
  { name: "James Jani", age: "22", role: "DATA SCIENCE", location: "PUNE" },
  { name: "Nasim", age: "22", role: "BACKEND", location: "JAIPUR" },
  {
    name: "Yash verdhan Gupta",
    age: "22",
    role: "MERN",
    location: "GHAZIABAD",
  },
];
const userShowContainer=document.getElementById("resultsSection")
function skillchanged(){
  console.log("first")
}
function locationchanged(){
  console.log("sec")
}
function  searchFunction(){
  const reqSkill=document.getElementById("searchSkillBox").value.toUpperCase()
  const reqLocation=document.getElementById("searchLocationBox").value.toUpperCase()
  console.log(reqLocation,reqSkill)
  const results= user.filter((item)=>{
    if(item.location==reqLocation && item.role==reqSkill)
    return item
  })
console.log(results)}
//typing effect -----------------------------------------
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");
const textArray = ["BEST TALENT", "TOP OG"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;
function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}
function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}
document.addEventListener("DOMContentLoaded", function () {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});
// caraousel----------------------------------------------
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
const loginBtn = document.getElementById("login-btn");
const registerBtn = document.getElementById("register-btn");
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
loginBtn.addEventListener("click", () => {
  loginBtn.classList.add("active");
  registerBtn.classList.remove("active");
  loginForm.style.display = "flex";
  registerForm.style.display = "none";
});
registerBtn.addEventListener("click", () => {
  registerBtn.classList.add("active");
  loginBtn.classList.remove("active");
  loginForm.style.display = "none";
  registerForm.style.display = "flex";
});
