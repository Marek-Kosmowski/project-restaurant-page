function homePage() {
    const content = document.getElementById('content');
    const headingContainer = document.createElement('div');
    headingContainer.classList.add('heading-container');

    const headingTitle = document.createElement('h1');
    headingTitle.innerHTML = 'TEST';
    content.appendChild(headingContainer);

    const homepageContainer = document.createElement('div');
    homepageContainer.classList.add('homepage-container');
    content.appendChild(homepageContainer);
    homepageContainer.appendChild(headingContainer)
    headingContainer.appendChild(headingTitle)
}

export default homePage;