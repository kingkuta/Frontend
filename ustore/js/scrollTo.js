let aboutButton = document.querySelector('.lng-about');
let catalogButton = document.querySelector('.lng-catalog');
let howToBuyButton = document.querySelector('.lng-howToBuy');
let contactsButton = document.querySelector('.lng-contacts');

let catalogButtonToUp = document.querySelector('.buttonToUpCatalog');
let howToBuyButtonToUp = document.querySelector('.buttonToUpHowToBuy');
let aboutButtonToUp = document.querySelector('.buttonToUpAbout');
let contactsButtonToUp = document.querySelector('.buttonToUpContacts');


let aboutSection = document.querySelector('.aboutSection');
let catalogSection = document.querySelector('.catalogSection');
let howToBuySection = document.querySelector('.howToBuySection');
let contactsSection = document.querySelector('.contactsSection');

let mainSection = document.querySelector('header');

function scrollTo(element) {
    window.scroll({
            left: 0,
            top: element.offsetTop,
            behavior: 'smooth'
        }
    )
}

aboutButton.addEventListener('click', () => {
    scrollTo(aboutSection);
})

catalogButton.addEventListener('click', () => {
    scrollTo(catalogSection);
})

howToBuyButton.addEventListener('click', () => {
    scrollTo(howToBuySection);
})

contactsButton.addEventListener('click', () => {
    scrollTo(contactsSection);
})

catalogButtonToUp.addEventListener('click', () => {
    scrollTo(mainSection);
})

howToBuyButtonToUp.addEventListener('click', () => {
    scrollTo(mainSection);
})

aboutButtonToUp.addEventListener('click', () => {
    scrollTo(mainSection);
})

contactsButtonToUp.addEventListener('click', () => {
    scrollTo(mainSection);
})