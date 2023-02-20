import './style.css';
// import {
//     sum,
//     divide,
//     printMe
// } from './menu.js'

const content = document.querySelector('#content');


function component() {
    const element = document.createElement('div')
    element.innerHTML = 'Hi. im from index.js'
    element.classList.add('hello')
    return element;
}

function homeButton() {
    const homeBtn = document.createElement('button');
    homeBtn.innerHTML = 'HOME';
    return homeBtn;
}

function menuButton() {
    const menuBtn = document.createElement('button');
    menuBtn.innerHTML = 'MENU';
    return menuBtn;


}

function contactButton() {
    const contactBtn = document.createElement('button');
    contactBtn.innerHTML = 'CONTACT'
    return contactBtn;
}




document.body.appendChild(component());
content.appendChild(homeButton());
content.appendChild(menuButton());
content.appendChild(contactButton());