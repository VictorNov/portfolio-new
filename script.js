let burgerButton = document.querySelector(".burger-menu-button");
let burgerIcon = document.querySelector(".burger-menu-icon");
let modalMenu = document.querySelector(".header-menu-modal");
let modalMenuButtons = document.querySelectorAll(".menu-modal-item");

burgerButton.addEventListener( "click", () => {
    burgerIcon.classList.toggle("active");
    modalMenu.classList.toggle("open");
    document.body.classList.toggle("fixed");
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

let form = document.forms[0];

form.submit.addEventListener( "click", sendRequest )

function sendRequest(event) {
    event.preventDefault();
    let formData = new FormData(form);

    let request = new XMLHttpRequest();

    request.open("POST", form.action);

    request.send(formData);

    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            form.name.value = "";
            form.email.value = "";
            form.phone.value = "";
            form.message.value = "";
            alert("Сообщение успешно отправлено");
        }
    }
}