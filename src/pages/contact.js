import { pageSection } from "../page components/components";
import pizzaDining from '/assets/images/pizza-table.png'

// Contact Us
// Contact
// Location
// Hours

const pageContent = () => {
    // // add home page content
    const title = "Contact Us"
    const subText =""   
    const image = pizzaDining;
    const contentHours = "HOURS woooo"
    const sectionContent = new pageSection(title,subText, image, contentHours);

    const divContent = document.getElementById("contentPages");
    const divPage = document.createElement("div");
    divPage.id = "contactPage";
    divPage.classList.add("tabContent");

    divContent.appendChild(divPage);
    divPage.appendChild(sectionContent.addPageTitle());
    divPage.appendChild(sectionContent.addSubText());
    divPage.appendChild(sectionContent.addImage());
    divPage.appendChild(sectionContent.addContent());
    return navHeader, divContent;
}

const loadPage = () => {
    const contact = pageContent();
    return contact;
    }

export default {loadPage}

