//search feature-----------------------------------------
window.addEventListener("DOMContentLoaded",showAllCandidates)
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
      // if (document.getElementsByClassName("noResult")) {
      //   var removeNode = document.getElementById("resultsSection");
      //   removeNode.removeChild(removeNode.firstChild);
      // }
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
    clearResults()
    const fetchedResult = searchFunction();
    // console.log(fetchedResult);
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