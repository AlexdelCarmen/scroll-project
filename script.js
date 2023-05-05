const menuButton = document.querySelector(".burger-icon");
const navbar = document.getElementById("navbar");

menuButton.addEventListener("click", () => {
  navbar.classList.toggle("hide");
});
