import { pageSection } from "../page components/components";

const pageContent = () => {
    // // add home page content
    const title = "CICI Pizzeria"
    const subText ="We put quality ingredients in every pizza!"   
    const image = "../assets/images/pizza-dining-room.jfif"
    const content = "Etiam feugiat iaculis leo. Sed in nisi eget magna maximus rutrum vel nec nunc. Integer pretium enim eget est auctor laoreet. Aenean laoreet porttitor pellentesque. Sed id arcu ut augue gravida pretium eleifend eget magna. Nulla scelerisque fermentum quam, sed posuere velit accumsan in. Maecenas placerat nisl a orci bibendum aliquet. Quisque at venenatis mi. Mauris dolor libero, fermentum non sagittis sed, bibendum a ex. Curabitur dapibus leo sed lectus aliquet posuere. Aenean sodales ullamcorper arcu, vestibulum volutpat eros.Etiam semper est eu consequat hendrerit. Vestibulum gravida magna id felis congue interdum. Proin vulputate sodales neque, non egestas ipsum laoreet in. Maecenas eu suscipit sem, quis laoreet mauris. Suspendisse blandit metus non mattis dignissim. Sed felis tortor, laoreet ut feugiat id, consequat ac elit. Proin sed tristique magna, quis fringilla eros. Nulla facilisi. Nam non odio bibendum, porta arcu ut, egestas erat. Donec erat lorem, porta eget malesuada vitae, auctor nec leo. Duis a porta lectus. Nulla fermentum non justo at aliquet. Cras eget tempus urna. Nullam porttitor augue lorem, in placerat purus elementum vitae. Morbi lacus eros, bibendum ac maximus a, blandit eu nulla. Nam sollicitudin massa justo, et eleifend erat fermentum non. Nunc non porttitor turpis. Phasellus tellus massa, mollis sed semper vel, tempus ut sem. Nulla ut placerat felis. Donec suscipit, ante in sollicitudin bibendum, leo purus vulputate urna, id pellentesque ante est sed felis."
    const sectionContent = new pageSection(title,subText, image, content);

    const divContent = document.getElementById("contentPages");
    const divPage = document.createElement("div");
    divPage.id = "homePage";
    divPage.classList.add("tabContent");

    divContent.appendChild(divPage);
    divPage.appendChild(sectionContent.addPageTitle());
    divPage.appendChild(sectionContent.addSubText());
    divPage.appendChild(sectionContent.addImage());
    divPage.appendChild(sectionContent.addContent());
    return divContent;
}

const loadPage = () => {
    const home = pageContent();
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