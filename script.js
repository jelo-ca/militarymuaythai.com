const popup = document.querySelector(".popup-container");
const closePopup = document.querySelector(".age-confirm-btn");

popup.showModal();

closePopup.addEventListener("click", () => {
  popup.close();
});

const hambuger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".hamburger-nav-links-container");

hambuger.addEventListener("click", () => {
  hambuger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
