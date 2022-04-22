import addTabs from "./tabs";

// load tabs in header
const loadHeader = () => {
    const navHeader = document.getElementById("navHeader");
    navHeader.appendChild(addTabs());
}

// have homePage open as default tab
const loadDefaultTab = () => {
    document.getElementById("homeButton").click();
}

export {loadHeader, loadDefaultTab}