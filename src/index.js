import './styles/style.css';
import starterPage from './components/starterpage';
import menuPage from './components/menupage';
import homePage from './components/homepage';

const homeBtn = document.querySelector('.home-button');
const menuBtn = document.querySelector('.menu-button');
const contactBtn = document.querySelector('.contact-button');

menuBtn.addEventListener('click', () => {
    const drinkMenu = document.querySelector('.menu-drinks-container')
    const aboutContainer = document.querySelector('.about-container');
    const hoursContainer = document.querySelector('.hours-container')
    aboutContainer.classList.add('hidden')
    hoursContainer.classList.add('hidden')
    if (!drinkMenu) {
        menuPage();
    }
});

homeBtn.addEventListener('click', () => {
    const menuDrinksContainer = document.querySelector('.menu-drinks-container');
    if (menuDrinksContainer) {
        menuDrinksContainer.classList.add('hidden');
        content.removeChild(menuDrinksContainer);
    }
    homePage();
})


starterPage();