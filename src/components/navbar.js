function header() {
    const body = document.querySelector('body');
    const navbar = document.createElement('navbar');
    const navbarList = document.createElement('ul');
    const navTab = ['Home', 'Menu', 'Contact'];

    for (let i = 0; i < navTab.length; i++) {
        const navElement = document.createElement('li');
        navElement.innerHTML = navTab[i];
        navbarList.appendChild(navElement)
    }


    body.appendChild(navbar);
    navbar.appendChild(navbarList);





}


export default header;