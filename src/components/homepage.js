function homePage() {
    const pageTitle = document.querySelector('.hero-title');
    const aboutContainer = document.querySelector('.about-container');
    const hoursContainer = document.querySelector('.hours-container')
    aboutContainer.classList.remove('hidden');
    hoursContainer.classList.remove('hidden');
    pageTitle.innerHTML = 'Welcome To Magical Place'

}


export default homePage;