const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  menuToggle.classList.toggle("open");
})

const viewMoreBtn = document.querySelector("#viewMoreBtn");
const extraItems = document.querySelectorAll(".extra-item");
viewMoreBtn.addEventListener("click", () => {
  extraItems.forEach(item => item.classList.toggle("visible"));
  viewMoreBtn.innerText = viewMoreBtn.innerText === "View More" ? "Show Less" : "View More";
});