function createPhoneContainer() {
    const phoneInfoContainer = document.createElement('div');
    phoneInfoContainer.classList.add('phone-container');
    const phoneTitle = document.createElement('h2');
    phoneTitle.innerHTML = 'PHONE NUMBER:';
    const phoneNumber = document.createElement('p');
    phoneNumber.innerHTML = '305-799-0658';
    phoneInfoContainer.append(phoneTitle, phoneNumber);
}

function createAddressContainer() {
    const addressInfoContainer = document.createElement('div');
    addressInfoContainer.classList.add('address-container');
    const addressTitle = document.createElement('h2');
    addressTitle.innerHTML = 'ADDRESS:';
    const addressInfo = document.createElement('p');
    addressInfo.innerHTML = '7294 Bayberry Avenue Jacksonville, FL 32205';
    addressInfoContainer.append(addressTitle, addressInfo);

}


function createContactPage() {
    const content = document.querySelector('content');
    const contentContainer = document.createElement('div');
    contentContainer.classList.add('content-container');



}


function contactPage() {
    // const content = document.getElementById('content');
    const pageTitle = document.querySelector('.hero-title');
    pageTitle.innerHTML = 'CONTACT'



}

export default contactPage;