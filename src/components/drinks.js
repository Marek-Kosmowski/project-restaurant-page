function mojito() {
    const drinkContainer = document.createElement('div');
    drinkContainer.classList.add('drink-container')
    const drinkName = document.createElement('h3');
    drinkName.innerHTML = 'Mojito'
    const drinkDescription = document.createElement('p');
    drinkDescription.innerHTML = 'Flor de Cana Rum, fresh limes, Cane Sugar, fresh Mint,(Mango, Lychee, Passion Fruit, Strawberry, Kiwi or Ginger flavor add $1)';
    const drinkPrice = document.createElement('h4');
    drinkPrice.innerHTML = '$5.80'
    drinkContainer.appendChild(drinkName)
    drinkContainer.appendChild(drinkDescription)
    drinkContainer.appendChild(drinkPrice)

    return drinkContainer;
}

function thaiBreeze() {
    const drinkContainer = document.createElement('div');
    drinkContainer.classList.add('drink-container')
    const drinkName = document.createElement('h3');
    drinkName.innerHTML = 'Thai Breeze'
    const drinkDescription = document.createElement('p');
    drinkDescription.innerHTML = 'Mekhong Thai Rum, Thai Punch (Pineapple, Cranberry, Lime)';
    const drinkPrice = document.createElement('h4');
    drinkPrice.innerHTML = '$7.20'
    drinkContainer.appendChild(drinkName)
    drinkContainer.appendChild(drinkDescription)
    drinkContainer.appendChild(drinkPrice)

    return drinkContainer;
}

function blueKamikaze() {
    const drinkContainer = document.createElement('div');
    drinkContainer.classList.add('drink-container')
    const drinkName = document.createElement('h3');
    drinkName.innerHTML = 'Blue Kamikaze'
    const drinkDescription = document.createElement('p');
    drinkDescription.innerHTML = 'GREY GOOSE, fresh lemon, blue curacao & Sprite';
    const drinkPrice = document.createElement('h4');
    drinkPrice.innerHTML = '$6.50'
    drinkContainer.appendChild(drinkName)
    drinkContainer.appendChild(drinkDescription)
    drinkContainer.appendChild(drinkPrice)

    return drinkContainer;
}

function mimosa() {
    const drinkContainer = document.createElement('div');
    drinkContainer.classList.add('drink-container')
    const drinkName = document.createElement('h3');
    drinkName.innerHTML = 'Mimosa'
    const drinkDescription = document.createElement('p');
    drinkDescription.innerHTML = 'Santa Marina Prosecco (Lychee, Strawberry, Mango, Passion Fruit or Guava)';
    const drinkPrice = document.createElement('h4');
    drinkPrice.innerHTML = '$6.80'
    drinkContainer.appendChild(drinkName)
    drinkContainer.appendChild(drinkDescription)
    drinkContainer.appendChild(drinkPrice)

    return drinkContainer;
}



export {
    mojito,
    thaiBreeze,
    blueKamikaze,
    mimosa
};