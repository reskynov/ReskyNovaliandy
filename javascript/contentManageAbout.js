let imgProfile = document.querySelector(".img-profile");
var gun = new Audio("sounds/gun sound.mp3");
let tabs = document.querySelectorAll(".tabs-title");
let contents = document.querySelectorAll(".table-content");

//imgProfile hover effect
imgProfile.addEventListener('mouseover', () => {
    imgProfile.classList.add('hover-new-profile-pic');
});
imgProfile.addEventListener('mouseout', () => {
    imgProfile.classList.remove("hover-new-profile-pic");
});

imgProfile.addEventListener('click', () =>{
    gun.play();
    imgProfile.classList.add("click-new-profile-pic");
    setTimeout( () =>{
        imgProfile.classList.remove("click-new-profile-pic");
    }, 2000);
});

//tabs in about
tabs.forEach((tab, index) => {
    tab.addEventListener('click', (e) => {
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