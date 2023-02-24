function createPhoneContainer() {
    const phoneInfoContainer = document.createElement('div');
    phoneInfoContainer.classList.add('phone-container');
    const phoneTitle = document.createElement('h2');
    phoneTitle.innerHTML = 'PHONE NUMBER:';
    const phoneNumber = document.createElement('p');
    phoneNumber.innerHTML = '305-799-0658';
    phoneInfoContainer.append(phoneTitle, phoneNumber);
    return phoneInfoContainer;
}

function createAddressContainer() {
    const addressInfoContainer = document.createElement('div');
    addressInfoContainer.classList.add('address-container');
    const addressTitle = document.createElement('h2');
    addressTitle.innerHTML = 'ADDRESS:';
    const addressInfo = document.createElement('p');
    addressInfo.innerHTML = '7294 Bayberry Avenue Jacksonville, FL 32205';
    addressInfoContainer.append(addressTitle, addressInfo);
    return addressInfoContainer;
}


function createContactPage() {

    const content = document.getElementById('content');
    const contentContainer = document.createElement('div');
    contentContainer.classList.add('content-container');
    const createPhone = createPhoneContainer();
    const createAddress = createAddressContainer();
    content.appendChild(contentContainer);
    contentContainer.append(createPhone, createAddress);

}


function contactPage() {
    // const content = document.getElementById('content');
    const pageTitle = document.querySelector('.hero-title');
    pageTitle.innerHTML = 'CONTACT'

    createContactPage();

}

export default contactPage;