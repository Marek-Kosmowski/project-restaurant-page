import starterPage from "./starterpage";
import {
    mojitoDrink,
    blueKamikazeDrink,
    thaiBreezeDrink,
    mimosaDrink
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
    const drinkMojito = mojitoDrink();
    const drinkBlueKamikaze = blueKamikazeDrink();
    const drinkThaiBreeze = thaiBreezeDrink();
    const drinkMimosa = mimosaDrink();
    menuContainer.append(drinkMojito, drinkBlueKamikaze, drinkThaiBreeze, drinkMimosa);
    return pageContent;
}


export default menuPage;