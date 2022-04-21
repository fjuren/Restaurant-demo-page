// the structure for each tab
const createTab = (tabName) => {
    const div = document.createElement("div");
    div.id = "nav" + tabName;

    const button = document.createElement("button");
    const funFunction = () => {
        console.log("it worked for "  +tabName);
    }
    // function funFunction(event, page) {
    //     // Declare all variables
    //     var i, tabContent, tabLinks;
      
    //     // Get all elements with class="tabcontent" and hide them
    //     // consider changin with querySelectorAll
    //     tabContent = document.getElementsByClassName("tabContent");
    //     for (i = 0; i < tabContent.length; i++) {
    //       tabContent[i].style.display = "none";
    //     }
      
    //     // Get all elements with class="tablinks" and remove the class "active"
    //     tabLinks = document.getElementsByClassName("tabLinks");
    //     for (i = 0; i < tabLinks.length; i++) {
    //       tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    //     }
      
    //     // Show the current tab, and add an "active" class to the button that opened the tab
    //     document.getElementById(page).style.display = "block";
    //     event.currentTarget.className += " active";
    //   }

    button.classList.add("tabLinks");
    button.onclick = funFunction; // need to add the event and page name
    button.value = tabName;
    button.textContent = tabName
    div.appendChild(button);
    return div
}

// adding tabs to a nav
const addTabs = () => {
    const tabNav = document.createElement("nav");
    tabNav.classList.add("navTabs");
    const pageNames = ["Home", "Menu", "Contact"]
    pageNames.forEach(n => {
        const tab = createTab(n)
        tabNav.appendChild(tab);
    });
    return tabNav
}

export default addTabs