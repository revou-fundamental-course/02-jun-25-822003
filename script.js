console.log("JavaScript is Running");

// Form Validation
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const nameInput = document.getElementById("name-input").value.trim();

    if (nameInput === "") {
      alert("Please enter your name!");
    } else {
      alert(`Hello, ${nameInput}!`);
      document.getElementById("name-input").value = "";
    }
  });

// Banner Slideshow
let indexBanner = 0;
const banners = document.querySelectorAll(".banner-img");

function showBanner() {
  banners.forEach((img, index) => {
    img.style.display = index === indexBanner ? "block" : "none";
  });
}

function nextBanner() {
  indexBanner = (indexBanner + 1) % banners.length;
  showBanner();
}

// Initial Call
showBanner();
setInterval(nextBanner, 3000);
