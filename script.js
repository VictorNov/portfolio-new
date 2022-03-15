let burgerButton = document.querySelector(".burger-menu-button");
let burgerIcon = document.querySelector(".burger-menu-icon");
let modalMenu = document.querySelector(".header-menu-modal");
let modalMenuButtons = document.querySelectorAll(".menu-modal-item");

burgerButton.addEventListener( "click", () => {
    burgerIcon.classList.toggle("active");
    modalMenu.classList.toggle("open");
} );
modalMenuButtons.forEach( (item) => item.addEventListener( "click", () => {
    burgerIcon.classList.remove("active");
    modalMenu.classList.remove("open");
} ) );

let contactButton = document.querySelector(".contacts-button");
let closeContactButton = document.querySelector(".modal-contacts .icon-close");
let submitButton = document.querySelector(".contacts-form input[type='submit']");
let modalContacts = document.querySelector(".modal-contacts-container");

contactButton.addEventListener( "click", () => modalContacts.classList.add("contacts-open") );
closeContactButton.addEventListener( "click", () => modalContacts.classList.remove("contacts-open") );
submitButton.addEventListener( "click", () => modalContacts.classList.remove("contacts-open") );

let toTopButton = document.querySelector(".to-top-button");

window.addEventListener( "scroll", () => {
    if (scrollY > document.documentElement.clientHeight) {
        toTopButton.classList.add("to-top-button-show");
    } else {
        toTopButton.classList.remove("to-top-button-show");
    }
} );

toTopButton.addEventListener( "click", () => window.scrollTo(scrollX, 0) );