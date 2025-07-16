const toggleBtn = document.querySelector(".menu-toggle i");
const navMenu = document.querySelector(".nav ul");

toggleBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  toggleBtn.classList.toggle("fa-bars");
  toggleBtn.classList.toggle("fa-xmark");
});
