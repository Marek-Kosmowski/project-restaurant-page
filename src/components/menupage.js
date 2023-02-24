import starterPage from "./starterpage";
import {
    mojito,
    blueKamikaze,
    thaiBreeze,
    mimosa
} from "./drinks";



function menuPage() {
    const pageTitle = document.querySelector('.hero-title');
    const pageContent = document.querySelector('.page-content-container');
    pageContent.classList.add('menu-page');
    pageTitle.innerHTML = 'MENU';
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-drinks-container');
    menuContainer.classList.add('visible');
    pageContent.appendChild(menuContainer);
    const menuCategoryTitle = document.createElement('h1');
    menuCategoryTitle.classList.add('menu-container-title');
    menuCategoryTitle.innerHTML = 'DRINKS'
    menuContainer.appendChild(menuCategoryTitle);
    const drinkMojito = mojito();
    const drinkBlueKamikaze = blueKamikaze();
    const drinkThaiBreeze = thaiBreeze();
    const drinkMimosa = mimosa();
    menuContainer.append(drinkMojito, drinkBlueKamikaze, drinkThaiBreeze, drinkMimosa);
    return pageContent;
}


export default menuPage;