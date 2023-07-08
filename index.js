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
const userShowContainer = document.getElementById("resultsSection");
function searchFunction() {
  const reqSkill = document
    .getElementById("searchSkillBox")
    .value.toUpperCase();
  const reqLocation = document
    .getElementById("searchLocationBox")
    .value.toUpperCase();
  
    if (reqSkill == "" || reqLocation == "") {
    if (document.getElementsByClassName("noResult")) {
      var removeNode = document.getElementById("resultsSection");
      removeNode.removeChild(removeNode.firstChild);
    }
    return user;
  } 
  else {
    return user.filter((item) => {
      if (item.location == reqLocation && item.role == reqSkill) return item;
    });
  }
}

function showAllCandidates() {
  user.map((item) => {
    const resultElementDiv = document.createElement("div");
    resultElementDiv.classList.add("candidateCard");
    resultElementDiv.innerHTML = `<div class="candidateImg"><img
    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80"
    alt=""></div>

<div class="candidateData">
  <div class="candidateName">Name <span>${item.name}</span></div>
  <div class="candidateName">Location <span>${item.location}</span></div>
  <div class="candidateAge">Age <span>${item.age} </span></div>
  <div class="candidateSkills">Skills <span>${item.role}</span></div>
  <div class="candidateExpectedPrice">ExpectedPrice <span>50K </span></div>
  <div class="candidateIntro">ExpectedPrice <span>Lorem ipsum dolor sit amet consectetur adipisicing elit
      Hic
      dignissimos repellendus aliquam doloribus vitae illo sapiente sequi necessitatibus temporibus
      dolore</span>
  </div>
  <button>Connect</button>
</div>`;
    document.getElementById("resultsSection").appendChild(resultElementDiv);
  });
}
function showResult() {
  const fetchedResult = searchFunction();
  console.log(fetchedResult);
  if (fetchedResult.length != 0)
    fetchedResult.map((item) => {
      const resultElementDiv = document.createElement("div");
      resultElementDiv.classList.add("candidateCard");
      resultElementDiv.innerHTML = `<div class="candidateImg"><img
    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80"
    alt=""></div>

<div class="candidateData">
  <div class="candidateName">Name <span>${item.name}</span></div>
  <div class="candidateName">Location <span>${item.location}</span></div>
  <div class="candidateAge">Age <span>${item.age} </span></div>
  <div class="candidateSkills">Skills <span>${item.role}</span></div>
  <div class="candidateExpectedPrice">ExpectedPrice <span>50K </span></div>
  <div class="candidateIntro">ExpectedPrice <span>Lorem ipsum dolor sit amet consectetur adipisicing elit
      Hic
      dignissimos repellendus aliquam doloribus vitae illo sapiente sequi necessitatibus temporibus
      dolore</span>
  </div>
  <button>Connect</button>
</div>`;
      document.getElementById("resultsSection").appendChild(resultElementDiv);
    });
  else {
    clearResults();
    const reqSkill = document
      .getElementById("searchSkillBox")
      .value.toUpperCase();
    const reqLocation = document
      .getElementById("searchLocationBox")
      .value.toUpperCase();

    if (reqSkill == "" || reqLocation == "") {
      if (document.getElementsByClassName("noResult")) {
        var removeNode = document.getElementById("resultsSection");
        removeNode.removeChild(removeNode.firstChild);
        showAllCandidates();
      }
    } else {
      const resultElementDiv = document.createElement("div");
      resultElementDiv.classList.add("noResult");
      resultElementDiv.innerHTML = "No results found";
      document.getElementById("resultsSection").appendChild(resultElementDiv);
    }
  }
}
function clearResults() {
  const myNode = document.getElementById("resultsSection");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
  }
}
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
  showAllCandidates();
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
