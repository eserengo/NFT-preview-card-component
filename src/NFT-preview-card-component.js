const modalInput = document.getElementById("input");
const modal = document.querySelector(".modal");
const productCard = document.querySelector(".card");
const productImg = document.getElementById("product-img");
const modalTrigger = document.querySelectorAll(".modal-trigger");
const closeBtn = document.getElementById("closeBtn");

modalTrigger.forEach((trigger) => {
  trigger.addEventListener("click", (event) => {
    event.stopPropagation();
    productImg.setAttribute("src", modalInput.getAttribute("src"));
    activateDisplay();
  })
})

closeBtn.addEventListener("click", activateDisplay)

function activateDisplay() {
  modal.classList.toggle("inactive");
  productCard.classList.toggle("inactive");
}