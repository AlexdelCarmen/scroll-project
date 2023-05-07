const menuButton = document.querySelector(".burger-icon");
const navbar = document.getElementById("navbar");

menuButton.addEventListener("click", () => {
  navbar.classList.toggle("hide");
});


const homeButton = document.getElementById("home-button");
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  var scrollY = window.scrollY;
  if (scrollY > 80) {
    homeButton.classList.remove("hide-button");
  } else {
    homeButton.classList.add("hide-button");
  }
});
