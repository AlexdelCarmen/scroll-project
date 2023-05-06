const menuButton = document.querySelector(".burger-icon");
const navbar = document.getElementById("navbar");

menuButton.addEventListener("click", () => {
  navbar.classList.toggle("hide");
});

var scrollY = window.scrollY;
const homeButton = document.getElementById("home-button");
const header = document.querySelector("header");

console.log(header);
