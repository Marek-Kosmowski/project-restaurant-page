import navbar from './navbar';
navbar();


const workingHours = {
    Sunday: ' 8 am - 8 pm',
    Monday: '6 am - 6 pm',
    Tuesday: '6 am - 6 pm',
    Wednesday: ' 6 am - 6 pm',
    Thursday: '6 am - 10 pm',
    Friday: '6 am - 10 pm',
    Saturday: '8 am - 10 pm',
}

function aboutContent() {
    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('about-container');
    const aboutTitle = document.createElement('h2');
    aboutTitle.innerHTML = 'About';
    const about = document.createElement('p');
    about.innerHTML = 'Nam lacinia nibh at pretium blandit. Aliquam aliquet ex nibh, vitae pellentesque sapien faucibus eget. Pellentesque iaculis dictum gravida. Morbi euismod nisi id enim auctor, tincidunt vestibulum metus fringilla.'
    aboutContainer.appendChild(aboutTitle)
    aboutContainer.appendChild(about);
    return aboutContainer;
}

function workingHoursContent() {
    const hoursContainer = document.createElement('div');
    hoursContainer.classList.add('hours-container');
    const hoursTitle = document.createElement('h2');
    hoursContainer.appendChild(hoursTitle);
    hoursTitle.classList.add('hours-title')
    hoursTitle.innerHTML = 'Hours';

    for (let key in workingHours) {
        // hoursContainer.append(`${key} ${workingHours[key]}`)
        const para = document.createElement('p');
        para.innerHTML = `${key}: ${workingHours[key]}`;
        hoursContainer.append(para)
    }
    return hoursContainer;

}

function starterPage() {
    const content = document.getElementById('content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content-container');
    content.appendChild(pageContent);
    const pageTitleContainer = document.createElement('div');
    pageTitleContainer.classList.add('title-container');
    const pageTitle = document.createElement('h1');
    pageTitle.classList.add('hero-title');
    pageTitle.innerHTML = 'Welcome To Magical Place'
    const aboutSection = aboutContent();
    const workingHours = workingHoursContent();
    content.appendChild(pageTitle);
    content.appendChild(aboutSection);
    content.appendChild(workingHours);



}

export default starterPage;