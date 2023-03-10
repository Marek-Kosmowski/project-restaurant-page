import './styles/style.css';
import starterPage from './components/starterpage';
import menuPage from './components/menupage';
import homePage from './components/homepage';
import contactPage from './components/contactpage';
const homeBtn = document.querySelector('.home-button');
const menuBtn = document.querySelector('.menu-button');
const contactBtn = document.querySelector('.contact-button');


function removeContactContent() {
    const pageContent = document.querySelector('.page-content-container')
    const contactContentPage = document.querySelector('.content-container');
    if (contactContentPage) {
        contactContentPage.classList.add('hidden')
        pageContent.removeChild(contactContentPage);
    }
}

function removeMenuContent() {
    const pageContent = document.querySelector('.page-content-container')
    const drinkMenu = document.querySelector('.menu-drinks-container')
    const menuPage = document.querySelector('.menu-page')
    if (drinkMenu) {
        drinkMenu.classList.add('hidden');
        menuPage.classList.remove('menu-page')
        pageContent.removeChild(drinkMenu);
    }
}

function removeHomeContent() {
    const aboutContainer = document.querySelector('.about-container');
    const hoursContainer = document.querySelector('.hours-container');
    aboutContainer.classList.add('hidden');
    hoursContainer.classList.add('hidden');
}

homeBtn.addEventListener('click', () => {
    removeMenuContent();
    homePage();
    removeContactContent();
})

menuBtn.addEventListener('click', () => {
    const drinkMenu = document.querySelector('.menu-drinks-container')
    removeHomeContent();
    if (!drinkMenu) {
        menuPage();
    }
    removeContactContent()
});

contactBtn.addEventListener('click', () => {
    const contactContentPage = document.querySelector('.content-container');
    removeHomeContent();
    removeMenuContent();
    if (!contactContentPage) {
        contactPage();
    }
})

starterPage();