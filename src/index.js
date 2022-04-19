import loadHeader from "./headertabs";
import homePage from "./pages/home";
import contactPage from "./pages/contact";


// import navigation from naviagiona


// const navHeader = document.querySelector("#navHeader");
// navHeader.addEventListener("click", (e) => {
//     e.preventDefault();
//     console.log(e);

// })

loadHeader();
homePage.loadPage();
contactPage.loadPage();