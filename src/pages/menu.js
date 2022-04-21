import { pageSection } from "../page components/components";

const pageContent = () => {
    // // add home page content
    const title = "Menu"
    const subText ="Menu subtext"   
    const image = "../assets/pizza-dining-room.jfif"
    const content = "Menu content goes here."
    const sectionContent = new pageSection(title,subText, image, content);

    const divContent = document.getElementById("contentPages");
    const divPage = document.createElement("div");
    divPage.id = "menuPage";
    divPage.classList.add("tabContent");
    
    divContent.appendChild(divPage);
    divPage.appendChild(sectionContent.addPageTitle());
    divPage.appendChild(sectionContent.addSubText());
    divPage.appendChild(sectionContent.addImage());
    divPage.appendChild(sectionContent.addContent());
    return divContent;
}

const loadPage = () => {
    const menu = pageContent();
    return menu;
    }

export default {loadPage}