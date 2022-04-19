import addTabs from "./tabs";

const loadHeader = () => {
    const navHeader = document.getElementById("navHeader");
    navHeader.appendChild(addTabs());
}

export default loadHeader