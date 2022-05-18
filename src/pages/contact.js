const pageContent = () => {

// Contact Us
// Contact
// Location
// Hours

    const divContent = document.getElementById("contentPages");
    const divPage = document.createElement("div");
    divPage.id = "contactPage";
    divPage.classList.add("tabContent");

    // build menu where each section has an image (divCoverMenu), image title, and menu 
    // items below. Parent div for all menu items
    const divCoverContact = document.createElement("div");
    divCoverContact.id = "divCoverContact";
    divCoverContact.classList.add("grid-container-contact");


    //  Contact us details fall below this div
    divContent.appendChild(divPage);
    divPage.appendChild(divCoverContact);

    // Contact
    const contactDiv = document.createElement("div");
    contactDiv.classList.add("contactItems");
    // contactDiv.id = "contactID";
    divCoverContact.appendChild(contactDiv);
    // contactDiv.textContent = "hi"

    // Location
    const locationDiv = document.createElement("div");
    locationDiv.classList.add("contactItems");
    // locationDiv.id = "locationID";
    divCoverContact.appendChild(locationDiv);

    // Hours
    const hoursDiv = document.createElement("div");
    hoursDiv.classList.add("contactItems");
    // hoursDiv.id = "hoursID";
    divCoverContact.appendChild(hoursDiv);

    // menu Titles:
    const contactUsDiv = document.createElement("div");
    divPage.appendChild(contactUsDiv);
    contactUsDiv.id = "contactUs"
    const contactUsTitle = document.createElement("h1");
    contactUsTitle.textContent = "Contact Us"
    contactUsDiv.appendChild(contactUsTitle);

    return divContent;
};

const loadPage = () => {
    const contact = pageContent();
    return contact;
    }

export default {loadPage}

