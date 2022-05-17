let tabs = document.querySelectorAll('.tabs-title');
let contents = document.querySelectorAll('.table-content');
let shapesOp = document.querySelectorAll('.bg-shape-op');
let shapesEd = document.querySelectorAll('.bg-shape-ed');

let modals = document.querySelectorAll(".works-desc-modal");
let openModals = document.querySelectorAll(".works-button");
let closeModals = document.querySelectorAll(".back-button");

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        contents.forEach((content) => {
            content.classList.remove('is-active');
        });
        tabs.forEach((tab) => {
            tab.classList.remove('is-active');
        });
        contents[index].classList.add('is-active');
        tabs[index].classList.add('is-active');
    });
});

openModals.forEach((openModal, index) => {
    openModal.addEventListener('click', () =>{
        modals[index].showModal();
    });
});

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

