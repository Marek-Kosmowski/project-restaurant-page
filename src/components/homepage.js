function homePage() {
    const content = document.getElementById('content');

    const pageTitleContainer = document.createElement('div');
    pageTitleContainer.classList.add('title-container')
    const pageTitle = document.createElement('h1');
    pageTitle.classList.add('hero-title');
    pageTitle.innerHTML = 'HOME'
    // content.appendChild(navbar);
    // const pageNavbar = navbar();
    // content.appendChild(pageNavbar);
    content.appendChild(pageTitleContainer);
    pageTitleContainer.appendChild(pageTitle);

}


export default homePage;