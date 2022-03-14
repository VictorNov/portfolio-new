let contactButton = document.querySelector(".contacts-button");
let closeContactButton = document.querySelector(".modal-contacts .icon-close");
//let modalBackground = document.querySelector(".modal-contacts-container");
let submitButton = document.querySelector(".contacts-form input[type='submit']");
let modalContacts = document.querySelector(".modal-contacts-container");

contactButton.addEventListener( "click", () => modalContacts.classList.add("open") );
closeContactButton.addEventListener( "click", () => modalContacts.classList.remove("open") );
submitButton.addEventListener( "click", () => modalContacts.classList.remove("open") );
//modalBackground.addEventListener( "click", () => modalContacts.classList.remove("open") );
