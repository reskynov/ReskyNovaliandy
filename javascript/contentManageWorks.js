let modals = document.querySelectorAll(".works-desc-modal");
let openModals = document.querySelectorAll(".works-button");
let closeModals = document.querySelectorAll(".back-button");


//Opening dialog modal in work
openModals.forEach((openModal, index) => {
    openModal.addEventListener('click', () =>{
        modals[index].showModal();
    });
});

//closing dialog modal in work
modals.forEach((modal, index) => {
    modal.addEventListener("click", (e) =>{
        if(e.target.nodeName === "DIALOG") {
            modals[index].close();
        }
    });
});

closeModals.forEach((closeModal, index) => {
    closeModal.addEventListener('click', () =>{
        modals[index].setAttribute("closing", "");

        modals[index].addEventListener("animationend", () => {
            modals[index].removeAttribute("closing");
            modals[index].close();
          }, { once: true });
    });
});

