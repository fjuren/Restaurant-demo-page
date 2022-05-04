import { pageSection } from "../page components/components";
import pizzaTable from '/assets/images/pizza-table.png'

const pageContent = () => {
    // // add home page content
    const title = "Classics"
    const subText = "Find a pizza you'll love";   
    const image = pizzaTable;
    const content = "Menu content goes here."
    const sectionContent = new pageSection(title,subText, image, content);

    const divContent = document.getElementById("contentPages");
    const divPage = document.createElement("div");
    divPage.id = "menuPage";
    divPage.classList.add("tabContent");
    const divCoverMenu1 = document.createElement("div");
    divCoverMenu1.id = "divCoverMenu1"

    divContent.appendChild(divPage);
    divPage.appendChild(divCoverMenu1);
    divCoverMenu1.appendChild(sectionContent.addPageTitle());
    // divPage.appendChild(sectionContent.addSubText());
    // image comes from CSS instead
    // divCoverMenu1Menu.appendChild(sectionContent.addImage()); 
    divPage.appendChild(sectionContent.addContent()); 

    // divContent.appendChild(divPage);
    // // divPage.appendChild(sectionContent.addPageTitle());
    // // divPage.appendChild(sectionContent.addSubText());
    // divPage.appendChild(sectionContent.addImage());
    // divPage.appendChild(sectionContent.addContent());

    // // icon section
    // const flexDiv = document.createElement("div");
    // flexDiv.classList.add("flex-container");
    // const divIcon1 = document.createElement("div");
    // const divIcon2 = document.createElement("div");
    // // add icon images as nodes with id
    // const icons = (x, id) => {
    //     const icon1 = document.createElement("img");
    //     icon1.id = id;
    //     icon1.setAttribute("src", x);
    //     return icon1
    // }
    // // add icons to page with flexbox
    // document.getElementById("contentID").insertAdjacentElement("afterend", flexDiv);
    // flexDiv.appendChild(divIcon1);
    // // divIcon1.appendChild(icons(uberEats, "uberEats"));
    // flexDiv.appendChild(divIcon2);
    // // divIcon2.appendChild(icons(doorDash, "doorDash"));

    return divContent;
}

const loadPage = () => {
    const menu = pageContent();
    return menu;
    }

export default {loadPage}