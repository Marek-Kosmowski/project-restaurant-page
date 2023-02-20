function homePage() {
    const content = document.getElementById('content');
    const headingContainer = document.createElement('div');
    headingContainer.classList.add('heading-container');
    const heading = document.createElement('div');
    heading.classList.add('heading');
    const headingTitle = document.createElement('h1');
    headingTitle.innerHTML = 'TEST';
    content.appendChild(headingContainer);
    headingContainer.appendChild(heading);
    heading.appendChild(headingTitle);
}

export default homePage;