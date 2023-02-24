import starterPage from "./starterpage";
import {
    mojito,
    blueKamikaze,
    thaiBreeze,
    mimosa
} from "./drinks";

function menuPage() {
    const content = document.getElementById('content');
    const pageTitle = document.querySelector('.hero-title')
    pageTitle.innerHTML = 'MENU'
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-drinks-container')
    menuContainer.classList.add('visible')
    content.append(menuContainer);
    const menuCategoryTitle = document.createElement('h1')
    menuCategoryTitle.innerHTML = 'DRINKS'
    menuContainer.appendChild(menuCategoryTitle);
    const drinkMojito = mojito();
    const drinkBlueKamikaze = blueKamikaze();
    const drinkThaiBreeze = thaiBreeze();
    const drinkMimosa = mimosa();
    menuContainer.append(drinkMojito, drinkBlueKamikaze, drinkThaiBreeze, drinkMimosa);
    return menuContainer;
}


export default menuPage;