import { pageSection } from "../page components/components";
import pizzaDining from '/assets/images/pizza-dining-homepage.png'
import doorDash from '/assets/images/doorDash.png'
import uberEats from '/assets/images/uberEats.png'

const pageContent = () => {
    // // add home page content
    const title = "CICI Pizzeria"
    const subText = "Local, fresh, and high quality ingredients on every pizza"   
    const image = pizzaDining;
    const content = "Order now"
    const sectionContent = new pageSection(title, subText, image, content);

    const divContent = document.getElementById("contentPages");
    const divPage = document.createElement("div");
    divPage.id = "homePage";
    divPage.classList.add("tabContent");
    const divCoverHome = document.createElement("div");
    divCoverHome.id = "divCoverHome"

    divContent.appendChild(divPage);
    divPage.appendChild(divCoverHome);
    divCoverHome.appendChild(sectionContent.addPageTitle());
    divPage.appendChild(sectionContent.addSubText());
    // image comes from CSS instead
    // divCoverHome.appendChild(sectionContent.addImage()); 
    divPage.appendChild(sectionContent.addContent()); 

    // icon section
    const flexDiv = document.createElement("div");
    flexDiv.classList.add("flex-container");
    const divIcon1 = document.createElement("div");
    const divIcon2 = document.createElement("div");
    // add icon images as nodes with id
    const icons = (x, id) => {
        const icon1 = document.createElement("img");
        icon1.id = id;
        icon1.setAttribute("src", x);
        return icon1
    }
    // add icons to page with flexbox
    document.getElementById("contentID").insertAdjacentElement("afterend", flexDiv);
    flexDiv.appendChild(divIcon1);
    divIcon1.appendChild(icons(uberEats, "uberEats"));
    flexDiv.appendChild(divIcon2);
    divIcon2.appendChild(icons(doorDash, "doorDash"));

    return divContent;
}

// add styling unique to homepage
// const addStyling = () => {
//     const body = document.getElementById("homePage");
//     body.classList.add("insertClass")
//     // console.log(body);
//     return body
// }

const loadPage = () => {
    const home = pageContent();
    // const styles = addStyling();
    return home;
    }



export default {loadPage}

// Archived
// commenting out these functions because I want to practice classes

// const titleHeader = (title) => {
//     const h1 = document.createElement("h1");
//     h1.textContent = title
//     return h1
// } 

// const subTitle = (subTitle) => {
//     const h3 = document.createElement("h3");
//     h3.textContent = subTitle;
//     return h3
// }

// const addImage = () => {
//     const image = "../assets/pizza-dining-room.jfif"
//     const img = document.createElement("img");
//     img.setAttribute("src", image)
//     return img
// }

// const storyPara = (story) => {
//     const p = document.createElement("p");
//     p.textContent = story
//     return p
// }