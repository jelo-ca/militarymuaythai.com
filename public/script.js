// DECODE ANIMATION

//TESTIMONIAL CAROUSEL
const carouselButton = document.querySelectorAll("[data-carousel-btn]");

carouselButton.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselBtn === "next" ? 1 : -1;
    const slides = button
      .closest(".carousel-container")
      .querySelector(".carousel");

    const activeSlide = slides.querySelector("[data-active]");
    const nextSlide = slides.querySelector("[data-next]");
    const prevSlide = slides.querySelector("[data-prev]");

    let newIndex = [...slides.children].indexOf(activeSlide) + offset;

    delete nextSlide.dataset.next;
    delete prevSlide.dataset.prev;
    delete activeSlide.dataset.active;

    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    let nextIndex = newIndex >= slides.children.length - 1 ? 0 : newIndex + 1;
    let prevIndex = newIndex - 1;

    if (prevIndex < 0) prevIndex = slides.children.length - 1;
    if (prevIndex >= slides.children.length) prevIndex = 0;

    console.log("prev: " + prevIndex);
    console.log("new: " + newIndex);
    console.log("next: " + nextIndex);

    slides.children[prevIndex].dataset.prev = true;
    slides.children[newIndex].dataset.active = true;
    slides.children[nextIndex].dataset.next = true;
  });
});
