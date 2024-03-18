const popup = document.querySelector(".popup-container");
const closePopup = document.querySelector(".age-confirm-btn");

popup.showModal();

closePopup.addEventListener("click", () => {
  popup.close();
});
