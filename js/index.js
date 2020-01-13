//Get Modal

let modals = document.querySelectorAll(".modal");

let cards = document.querySelectorAll(".j-card");

cards.forEach(card => {
  // modal.style.display = "block";
  card.addEventListener("click", () => {
    let card1 = card.dataset.click;
    let modal1 = document.querySelector(`.modal[data-target="${card1}"]`);
    let modalContent = modal1.querySelector(".modal-content");

    modal1.style.display = "block";
    setTimeout(() => {
      modalContent.classList.remove("close-modal");
      modalContent.classList.add("open-modal");
    }, 1);

    let span = modal1.querySelector(".close");
    span.onclick = () => {
      modals.forEach(modal => {
        modalContent.classList.remove("open-modal");
        modalContent.classList.add("close-modal");
        setTimeout(() => {
          modal.style.display = "none";
        }, 500);
      });
    };

    window.onclick = function(event) {
      modals.forEach(modal => {
        if (event.target == modal) {
          modalContent.classList.remove("open-modal");
          modalContent.classList.add("close-modal");
          setTimeout(() => {
            modal.style.display = "none";
          }, 500);
        }
      });
    };
  });
});


