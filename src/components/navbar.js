function header() {
    const content = document.querySelector('#content');
    const navbar = document.createElement('div');
    navbar.classList.add('navbar')
    const navbarList = document.createElement('ul');
    navbarList.classList.add('navbar-list')
    const navTab = ['Home', 'Menu', 'Contact'];

    for (let i = 0; i < navTab.length; i++) {
        const navElement = document.createElement('li');
        navElement.innerHTML = navTab[i];
        navbarList.appendChild(navElement)
    }


    content.appendChild(navbar);
    navbar.appendChild(navbarList);





}


export default header;