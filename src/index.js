import pizzaDining from '../assets/images/pizza-table.png'  // added for images
import "../assets/css/tabstyles.css"
import {loadHeader, loadDefaultTab} from "./headertabs";
import homePage from "./pages/home";
import contactPage from "./pages/contact";
import menuPage from "./pages/menu";

console.log(pizzaDining)
loadHeader();
homePage.loadPage();
menuPage.loadPage();
contactPage.loadPage();
loadDefaultTab();