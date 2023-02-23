import './styles/style.css';
import starterPage from './components/starterpage';
import menuPage from './components/menupage';

const homeBtn = document.querySelector('.home-button');
const menuBtn = document.querySelector('.menu-button');
const contactBtn = document.querySelector('.contact-button');

menuBtn.addEventListener('click', () => {
    const aboutContainer = document.querySelector('.about-container');
    const hoursContainer = document.querySelector('.hours-container')
    aboutContainer.classList.add('hidden')
    hoursContainer.classList.add('hidden')
    menuPage();
});

homeBtn.addEventListener('click', () => {
    const aboutContainer = document.querySelector('.about-container');
    const hoursContainer = document.querySelector('.hours-container');
    aboutContainer.classList.remove('hidden');
    hoursContainer.classList.remove('hidden');
    starterPage();
})


starterPage();