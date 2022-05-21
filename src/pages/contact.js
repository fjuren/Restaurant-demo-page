const pageContent = () => {

// Contact Us
// Contact
// Location
// Hours

const divContent = document.getElementById("contentPages");
const divPage = document.createElement("div");
divPage.id = "contactPage";
divPage.classList.add("tabContent");

divContent.appendChild(divPage);

    // menu Titles:
    const contactUsDiv = document.createElement("div");
    contactUsDiv.id = "contactUs"
    const contactUsTitle = document.createElement("h1");
    contactUsTitle.textContent = "Contact Us"
    contactUsDiv.appendChild(contactUsTitle);
    divPage.appendChild(contactUsDiv);

    // build menu where each section has an image (divCoverMenu), image title, and menu 
    // items below. Parent div for all menu items
    const divCoverContact = document.createElement("div");
    divCoverContact.id = "divCoverContact";
    divCoverContact.classList.add("grid-container-contact");


    //  Contact us details fall below this div
    divPage.appendChild(divCoverContact);
    
    // Location
    const locationDiv = document.createElement("div");
    locationDiv.classList.add("contactItems");
    // locationDiv.id = "locationID";
    divCoverContact.appendChild(locationDiv);
    // Location content
    const locationTitle = document.createElement("h2");
    const addressInfo = document.createElement("h4");
    locationTitle.innerHTML = "Location";
    addressInfo.innerHTML = "4123 Green Street" + "<br />" + "Vancouver BC, V7L 4H1";
    locationDiv.appendChild(locationTitle);
    locationDiv.appendChild(addressInfo);

    // Hours
    const hoursDiv = document.createElement("div");
    hoursDiv.classList.add("contactItems");
    // hoursDiv.id = "hoursID";
    divCoverContact.appendChild(hoursDiv);
    // Hours content
    const hoursTitle = document.createElement("h2");
    const hoursInfo = document.createElement("h4");
    hoursTitle.innerHTML = "Hours";
    hoursInfo.innerHTML = "Tue - Thu, 11am - 10pm" + "<br />" + "Fri - Sun, 11am - 11pm" + "<br />" + "Closed Mondays";
    hoursDiv.appendChild(hoursTitle);
    hoursDiv.appendChild(hoursInfo);


    // Contact
    const contactDiv = document.createElement("div");
    contactDiv.classList.add("contactItems");
    // contactDiv.id = "contactID";
    divCoverContact.appendChild(contactDiv);
    // contact content
    const contactTitle = document.createElement("h2");
    const contactInfo = document.createElement("h4");
    contactTitle.innerHTML = "Contact Us";
    contactInfo.innerHTML = "(781) 555-8471" + "<br />" + "CiciPizza@gmail.com"
    contactDiv.appendChild(contactTitle);
    contactDiv.appendChild(contactInfo);

    return divContent;
};

const loadPage = () => {
    const contact = pageContent();
    return contact;
    }

export default {loadPage}

