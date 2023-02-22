import './styles/style.css';
import navbar from './components/navbar';
import homePage from './components/homepage';
import menuPage from './components/menupage';
import contactPage from './components/contactpage';

navbar();
homePage();



const homeButton = document.querySelector('.home-button');
homeButton.addEventListener('click', () => {
    console.log('home button')
})

const contactButton = document.querySelector('.contact-button');
contactButton.addEventListener('click', contactPage);

const menuButton = document.querySelector('.menu-button')
menuButton.addEventListener('click', menuPage);