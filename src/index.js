import pizzaDining from '../assets/images/pizza-table.png'  // added for images

// importing global css first
import "../assets/css/globalStyle.css";
// page specific css importedafter global
import "../assets/css/home.css";
import "../assets/css/tabstyles.css";

// page js imported
import {loadHeader, loadDefaultTab} from "./headertabs";
import homePage from "./pages/home";
import contactPage from "./pages/contact";
import menuPage from "./pages/menu";
import footer from "./footer"



loadHeader();
homePage.loadPage();
menuPage.loadPage();
contactPage.loadPage();
loadDefaultTab();
footer.loadFooter();