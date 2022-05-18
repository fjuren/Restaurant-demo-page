// import { pageSection } from "../page components/components";
// import pizzaTable from '/assets/images/pizza-table.png'

const pageContent = () => {
    // // add home page content
    // const title = "Classics"
    // const subText = "Find a pizza you'll love";   
    // const image = pizzaTable;
    // const content = "Menu content goes here."
    // const sectionContent = new pageSection(subText, image);

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

    //  first menu section (classics)
    divContent.appendChild(divPage);
    divPage.appendChild(divCoverMenu1);
    // Second menu section (coctails)
    divPage.appendChild(divCoverMenu2);
    // divPage.appendChild(sectionContent.addContent()); 

    // menu Titles:
    const classicsDiv = document.createElement("div");
    divPage.appendChild(classicsDiv);
    classicsDiv.id = "classics"
    const classicsTitle = document.createElement("h1");
    classicsTitle.textContent = "Classics"
    classicsDiv.appendChild(classicsTitle);

    const cocktailDiv = document.createElement("div");
    divPage.appendChild(cocktailDiv);
    cocktailDiv.id = "cocktails"
    const cocktailTitle = document.createElement("h1");
    cocktailTitle.textContent = "Cocktails"
    cocktailDiv.appendChild(cocktailTitle);

    // Create pizzas for the menu
    const margherita = createMenuItem("Margherita", [ingredients.cheese, ingredients.tomato], "menuItem1");
    divCoverMenu1.appendChild(margherita);
    const hawaiian = createMenuItem("Hawaiian", [ingredients.ham, ingredients.pineapple], "menuItem2");
    divCoverMenu1.appendChild(hawaiian);
    const bacon = createMenuItem("Crispy Bacon", [ingredients.redOnion, ingredients.mushroom, ingredients.bacon], "menuItem3");
    divCoverMenu1.appendChild(bacon);
    const prosciutto = createMenuItem("Prosciutto", [ingredients.prosciutto, ingredients.basil, ingredients.cheese], "menuItem4");
    divCoverMenu1.appendChild(prosciutto);

    // Create Cocktails
    const coco = createMenuItem("Coco Skellington", [ingredients.rum, ingredients.gin, ingredients.lime, ingredients.creme, ingredients.orangeB], "menuItem5");
    divCoverMenu2.appendChild(coco);
    const edward = createMenuItem("Edward's Lemonade", [ingredients.whiskey, ingredients.cherry, ingredients.orange, ingredients.splash], "menuItem6");
    divCoverMenu2.appendChild(edward);
    const beetle = createMenuItem("Beetle Juice", [ingredients.tequila, ingredients.muddled, ingredients.cranberry], "menuItem7");
    divCoverMenu2.appendChild(beetle);
    const vertigo = createMenuItem("Vertigo", [ingredients.ilegal, ingredients.cocchi, ingredients.velvet, ingredients.lemon, ingredients.gingerB], "menuItem8");
    divCoverMenu2.appendChild(vertigo);

    return divContent;
}

const ingredients = {

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
    artichoke: "Artichoke",
    // Coco Skellington
    rum: "Rum",
    gin: "Gin",
    lime: "Lime",
    creme: "Crème de Coconut",
    orangeB: "Orange Blossom",
    // edward's lemonade
    whiskey: "Whiskey",
    cherry: "Cherry",
    orange: "Orange",
    splash: "Splash of Simple Syrup",
    // Beetle Juice
    tequila: "Tequila",
    muddled: "Muddled Blackberry",
    cranberry: "Cranberry Jerry",
    // vertigo
    ilegal: "Ilegal Joven Mezcal",
    cocchi: "Cocchi Americano",
    velvet: "Velvet Falernum",
    lemon: "Lemon",
    gingerB: "Ginger Beer"
};

const createMenuItem = (name, ingred, id) => {
    const menuItemDiv = document.createElement("div");
    menuItemDiv.classList.add("menuItem")
    menuItemDiv.id = id;

    const itemName = document.createElement("h2");
    itemName.textContent = name;

    const menuIngredients = document.createElement("p");
    ingred.forEach(ingredient => {
        menuIngredients.textContent += ingredient
        menuIngredients.textContent += " | "
    });
 
    // slices off last " | " from end of pizza ingredients
    const shortenedMenuIngredients = document.createElement("p")
    shortenedMenuIngredients.textContent = menuIngredients.textContent.slice(0,-3);

    menuItemDiv.appendChild(itemName);
    menuItemDiv.appendChild(shortenedMenuIngredients);

    return menuItemDiv
}

const loadPage = () => {
    const menu = pageContent();
    return menu;
    }

export default {loadPage}