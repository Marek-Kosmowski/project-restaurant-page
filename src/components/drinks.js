import mojito from '../assets/mojito.jpg';
import mimosa from '../assets/mimosa.jpg';
import blueKamikaze from '../assets/blueKamikaze.jpg';
import thaiBreeze from '../assets/thaiBreeze.jpg';


function mojitoDrink() {
    const drinkContainer = document.createElement('div');
    const image = document.createElement('img');
    image.src = mojito;
    drinkContainer.classList.add('drink-container')
    const drinkName = document.createElement('h3');
    drinkName.innerHTML = 'Mojito'
    const drinkDescription = document.createElement('p');
    drinkDescription.innerHTML = 'Flor de Cana Rum, fresh limes, Cane Sugar, fresh Mint,(Mango, Lychee, Passion Fruit, Strawberry, Kiwi or Ginger flavor add $1)';
    const drinkPrice = document.createElement('h4');
    drinkPrice.innerHTML = '$5.80'
    drinkContainer.append(drinkName, image, drinkDescription, drinkPrice);

    return drinkContainer;
}

function thaiBreezeDrink() {
    const drinkContainer = document.createElement('div');
    const image = document.createElement('img');
    image.src = thaiBreeze;
    drinkContainer.classList.add('drink-container')
    const drinkName = document.createElement('h3');
    drinkName.innerHTML = 'Thai Breeze'
    const drinkDescription = document.createElement('p');
    drinkDescription.innerHTML = 'Mekhong Thai Rum, Thai Punch (Pineapple, Cranberry, Lime)';
    const drinkPrice = document.createElement('h4');
    drinkPrice.innerHTML = '$7.20'
    drinkContainer.append(drinkName, image, drinkDescription, drinkPrice);

    return drinkContainer;
}

function blueKamikazeDrink() {
    const drinkContainer = document.createElement('div');
    const image = document.createElement('img');
    image.src = blueKamikaze;
    drinkContainer.classList.add('drink-container')
    const drinkName = document.createElement('h3');
    drinkName.innerHTML = 'Blue Kamikaze'
    const drinkDescription = document.createElement('p');
    drinkDescription.innerHTML = 'GREY GOOSE, fresh lemon, blue curacao & Sprite';
    const drinkPrice = document.createElement('h4');
    drinkPrice.innerHTML = '$6.50'
    drinkContainer.append(drinkName, image, drinkDescription, drinkPrice);

    return drinkContainer;
}

function mimosaDrink() {
    const drinkContainer = document.createElement('div');
    const image = document.createElement('img');
    image.src = mimosa;
    drinkContainer.classList.add('drink-container')
    const drinkName = document.createElement('h3');
    drinkName.innerHTML = 'Mimosa'
    const drinkDescription = document.createElement('p');
    drinkDescription.innerHTML = 'Santa Marina Prosecco (Lychee, Strawberry, Mango, Passion Fruit or Guava)';
    const drinkPrice = document.createElement('h4');
    drinkPrice.innerHTML = '$6.80'
    drinkContainer.append(drinkName, image, drinkDescription, drinkPrice);

    return drinkContainer;
}



export {
    mojitoDrink,
    thaiBreezeDrink,
    blueKamikazeDrink,
    mimosaDrink
};