// the structure for each tab
const createTab = (tabName) => {
    const div = document.createElement("div");
    div.id = "nav" + tabName;

    const button = document.createElement("button");
    const funFunction = () => {
        console.log("it worked for "  +tabName);
    }
    button.classList.add("tablinks");
    button.onclick = funFunction;
    button.value = tabName;
    button.textContent = tabName
    div.appendChild(button);
    return div
}

// adding tabs to a nav
const addTabs = () => {
    const tabNav = document.createElement("nav");
    tabNav.id = "navTabs"
    const pageNames = ["Home", "Menu", "Contact"]
    pageNames.forEach(n => {
        const tab = createTab(n)
        tabNav.appendChild(tab);
    });
    return tabNav
}

export default addTabs