const cardFooterElement = document.querySelector(".card-footer");
const buttonElement = document.querySelectorAll(".share-button");

buttonElement.forEach(button => {
  button.addEventListener("click", () => {
    cardFooterElement.classList.toggle("share");
  });
})
