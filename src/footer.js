const addFooter = () => {
    const divOuter = document.createElement("div");
    divOuter.id = "pageFooter";
    divOuter.classList.add("footer", "fixed-bottom");
    const p = document.createElement("p");
    divOuter.appendChild(p);
    p.textContent = "© Copyright 2022 - Created by Fabian Juren"
    
    // place footer after contentPages div 
    document.getElementById("contentPages").insertAdjacentElement("afterend",divOuter);

    return divOuter;
}

const loadFooter = () => {
    const footer = addFooter();
    return footer;
}

export default {loadFooter}
