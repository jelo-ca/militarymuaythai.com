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

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

const carouselButton = document.querySelectorAll("[data-carousel-btn]");

carouselButton.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselBtn === "next" ? 1 : -1;
    const slides = button
      .closest(".carousel-container")
      .querySelector(".carousel");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});
