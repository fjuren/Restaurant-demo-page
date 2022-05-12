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

    // build menu where each section has an image (divCoverMenu), image title, and menu 
    // items below. Parent div for all menu items
    const divCoverMenu1 = document.createElement("div");
    divCoverMenu1.id = "divCoverMenu1"
    divCoverMenu1.classList.add("grid-container-menu");
    const divCoverMenu2 = document.createElement("div");
    divCoverMenu2.id = "divCoverMenu2"
    divCoverMenu2.classList.add("grid-container-menu");

    // middle div for all menu items for positioning
    // const divMenu1Items = document.createElement("div");
    // divMenu1Items.classList.add("menu1Items");
    // divCoverMenu1.appendChild(divMenu1Items);
    // // const divMenu2Items = document.createElement("div");
    // // divMenu2Items.classList.add("menu2Items");
    // divCoverMenu2.appendChild(divMenu2Items)

    //  first menu section
    divContent.appendChild(divPage);
    divPage.appendChild(divCoverMenu1);
    divPage.appendChild(divCoverMenu2);
    divPage.appendChild(sectionContent.addContent()); 

    // Create pizzas for the menu
    const margherita = createMenuItem("Margherita", [pizzaIngredients.cheese, pizzaIngredients.tomato], "menuItem1")
    divCoverMenu1.appendChild(margherita);
    const hawaiian = createMenuItem("Hawaiian", [pizzaIngredients.ham, pizzaIngredients.pineapple], "menuItem2");
    divCoverMenu1.appendChild(hawaiian);
    const bacon = createMenuItem("Crispy Bacon", [pizzaIngredients.redOnion, pizzaIngredients.mushroom, pizzaIngredients.bacon], "menuItem3")
    divCoverMenu1.appendChild(bacon);
    const prosciutto = createMenuItem("Prosciutto", [pizzaIngredients.prosciutto, pizzaIngredients.basil, pizzaIngredients.cheese], "menuItem4")
    divCoverMenu1.appendChild(prosciutto);

    return divContent;
}

const pizzaIngredients = {

    cheese: "Cheese",
    tomato: "Tomato",
    ham: "Ham",
    prosciutto: "Prosciutto",
    basil: "Basil",
    pineapple: "Pineapple",
    mushroom: "Mushroom",
    tuna: "Tuna",
    prawn: "Prawn",
    anchovies: "Anchovies",
    onions: "Onions",
    redOnion: "Red Onion",
    bacon: "Crispy Bacon",
    greenPepper: "Green Pepper",
    onion: "Onion",
    jalapeno: "Jalapeño",
    artichoke: "Artichoke"
}

const createMenuItem = (name, ingredients, id) => {
    const menuItemDiv = document.createElement("div");
    menuItemDiv.classList.add("menuItem")
    menuItemDiv.id = id;

    const pizzaName = document.createElement("h2");
    pizzaName.textContent = name;

    const pizzaIngredients = document.createElement("p");
    ingredients.forEach(ingredient => {
        pizzaIngredients.textContent += ingredient
        pizzaIngredients.textContent += " | "
    });
 
    // slices off last " | " from end of pizza ingredients
    const shortenedPizzaIngredients = document.createElement("p")
    shortenedPizzaIngredients.textContent = pizzaIngredients.textContent.slice(0,-3);

    menuItemDiv.appendChild(pizzaName);
    menuItemDiv.appendChild(shortenedPizzaIngredients);

    return menuItemDiv
}

const loadPage = () => {
    const menu = pageContent();
    return menu;
    }

export default {loadPage}