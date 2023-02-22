function homeBtn() {
    const homeButton = document.createElement('button');
    homeButton.classList.add('home-button')
    homeButton.innerText = 'HOME'
    return homeButton;
}

function menuBtn() {
    const menuButton = document.createElement('button');
    menuButton.classList.add('menu-button');
    menuButton.innerText = 'MENU'
    return menuButton;
}

function contactBtn() {
    const contactButton = document.createElement('button');
    contactButton.classList.add('contact-button');
    contactButton.innerText = 'CONTACT'
    return contactButton;
}


function navbar() {
    const content = document.getElementById('content');
    const navButtonsContainer = document.createElement('nav-btns-container');
    content.appendChild(navButtonsContainer);
    const home = homeBtn();
    const menu = menuBtn();
    const contact = contactBtn();
    navButtonsContainer.appendChild(home);
    navButtonsContainer.appendChild(menu);
    navButtonsContainer.appendChild(contact);
}



export default navbar;