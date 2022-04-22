import "../styles/tabstyles.css"
import loadHeader from "./headertabs";
import homePage from "./pages/home";
import contactPage from "./pages/contact";
import menuPage from "./pages/menu";



loadHeader();
homePage.loadPage();
menuPage.loadPage();
contactPage.loadPage();