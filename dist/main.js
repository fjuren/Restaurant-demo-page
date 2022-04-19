/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/headertabs.js":
/*!***************************!*\
  !*** ./src/headertabs.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs */ "./src/tabs.js");


const loadHeader = () => {
    const navHeader = document.getElementById("navHeader");
    navHeader.appendChild((0,_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHeader);

/***/ }),

/***/ "./src/page components/components.js":
/*!*******************************************!*\
  !*** ./src/page components/components.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pageSection": () => (/* binding */ pageSection)
/* harmony export */ });
class pageSection {
    constructor(title,subText, image, content){
        this.section = document.createElement('section');
        this.title = title;
        this.subtext = subText;
        this.image = image;
        this.content = content;
    }


    addPageTitle() {
        const h1 = document.createElement("h1");
        h1.textContent = this.title;
        return this.section.appendChild(h1);        
    }

    addSubText() {
        const h3 = document.createElement("h3");
        h3.textContent = this.subText;
        return this.section.appendChild(h3);
    }

    addImage() {
        const img = document.createElement("img");
        img.setAttribute("src", this.image);
        return this.section.appendChild(img);
    }

    addContent() {
        const p = document.createElement("p");
        p.textContent = this.content
        return this.section.appendChild(p);
    }
}


/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _page_components_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../page components/components */ "./src/page components/components.js");



// Contact Us
// Contact
// Location
// Hours

const pageContent = () => {
    // // add home page content
    const title = "Contact Us"
    const subText =""   
    const image = "../assets/pizza-table.png"
    const contentHours = "HOURS woooo"
    const sectionContent = new _page_components_components__WEBPACK_IMPORTED_MODULE_0__.pageSection(title,subText, image, contentHours);

    const divContent = document.getElementById("contentPages");
    const divPage = document.createElement("div");
    divPage.id = "contactPage";
    divPage.classList.add("tabContent");

    divContent.appendChild(divPage);
    divPage.appendChild(sectionContent.addPageTitle());
    divPage.appendChild(sectionContent.addSubText());
    divPage.appendChild(sectionContent.addImage());
    divPage.appendChild(sectionContent.addContent());
    return navHeader, divContent;
}

const loadPage = () => {
    const contact = pageContent();
    return contact;
    }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({loadPage});



/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _page_components_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../page components/components */ "./src/page components/components.js");


const pageContent = () => {
    // // add home page content
    const title = "CICI Pizzeria"
    const subText ="We put quality ingredients in every pizza!"   
    const image = "../assets/pizza-dining-room.jfif"
    const content = "Etiam feugiat iaculis leo. Sed in nisi eget magna maximus rutrum vel nec nunc. Integer pretium enim eget est auctor laoreet. Aenean laoreet porttitor pellentesque. Sed id arcu ut augue gravida pretium eleifend eget magna. Nulla scelerisque fermentum quam, sed posuere velit accumsan in. Maecenas placerat nisl a orci bibendum aliquet. Quisque at venenatis mi. Mauris dolor libero, fermentum non sagittis sed, bibendum a ex. Curabitur dapibus leo sed lectus aliquet posuere. Aenean sodales ullamcorper arcu, vestibulum volutpat eros.Etiam semper est eu consequat hendrerit. Vestibulum gravida magna id felis congue interdum. Proin vulputate sodales neque, non egestas ipsum laoreet in. Maecenas eu suscipit sem, quis laoreet mauris. Suspendisse blandit metus non mattis dignissim. Sed felis tortor, laoreet ut feugiat id, consequat ac elit. Proin sed tristique magna, quis fringilla eros. Nulla facilisi. Nam non odio bibendum, porta arcu ut, egestas erat. Donec erat lorem, porta eget malesuada vitae, auctor nec leo. Duis a porta lectus. Nulla fermentum non justo at aliquet. Cras eget tempus urna. Nullam porttitor augue lorem, in placerat purus elementum vitae. Morbi lacus eros, bibendum ac maximus a, blandit eu nulla. Nam sollicitudin massa justo, et eleifend erat fermentum non. Nunc non porttitor turpis. Phasellus tellus massa, mollis sed semper vel, tempus ut sem. Nulla ut placerat felis. Donec suscipit, ante in sollicitudin bibendum, leo purus vulputate urna, id pellentesque ante est sed felis."
    const sectionContent = new _page_components_components__WEBPACK_IMPORTED_MODULE_0__.pageSection(title,subText, image, content);

    const divContent = document.getElementById("contentPages");
    const divPage = document.createElement("div");
    divPage.id = "homePage";
    divPage.classList.add("tabContent");
    
    divContent.appendChild(divPage);
    divPage.appendChild(sectionContent.addPageTitle());
    divPage.appendChild(sectionContent.addSubText());
    divPage.appendChild(sectionContent.addImage());
    divPage.appendChild(sectionContent.addContent());
    return divContent;
}

const loadPage = () => {
    const home = pageContent();
    return home;
    }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({loadPage});

// Archived
// commenting out these functions because I want to practice classes

// const titleHeader = (title) => {
//     const h1 = document.createElement("h1");
//     h1.textContent = title
//     return h1
// } 

// const subTitle = (subTitle) => {
//     const h3 = document.createElement("h3");
//     h3.textContent = subTitle;
//     return h3
// }

// const addImage = () => {
//     const image = "../assets/pizza-dining-room.jfif"
//     const img = document.createElement("img");
//     img.setAttribute("src", image)
//     return img
// }

// const storyPara = (story) => {
//     const p = document.createElement("p");
//     p.textContent = story
//     return p
// }

/***/ }),

/***/ "./src/tabs.js":
/*!*********************!*\
  !*** ./src/tabs.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTabs);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _headertabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./headertabs */ "./src/headertabs.js");
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home */ "./src/pages/home.js");
/* harmony import */ var _pages_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/contact */ "./src/pages/contact.js");





// import navigation from naviagiona


// const navHeader = document.querySelector("#navHeader");
// navHeader.addEventListener("click", (e) => {
//     e.preventDefault();
//     console.log(e);

// })

(0,_headertabs__WEBPACK_IMPORTED_MODULE_0__["default"])();
_pages_home__WEBPACK_IMPORTED_MODULE_1__["default"].loadPage();
_pages_contact__WEBPACK_IMPORTED_MODULE_2__["default"].loadPage();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGlEQUFPO0FBQ2pDO0FBQ0E7QUFDQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7QUNQUjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDNEQ7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isb0VBQVc7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxDQUFDLFNBQVM7QUFDekI7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQzREO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLG9FQUFXO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsQ0FBQyxTQUFTO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxpRUFBZTs7Ozs7O1VDN0JmO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05zQztBQUNGO0FBQ007QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSx1REFBVTtBQUNWLDREQUFpQjtBQUNqQiwrREFBb0IsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9oZWFkZXJ0YWJzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlIGNvbXBvbmVudHMvY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvdGFicy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFkZFRhYnMgZnJvbSBcIi4vdGFic1wiO1xyXG5cclxuY29uc3QgbG9hZEhlYWRlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IG5hdkhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2SGVhZGVyXCIpO1xyXG4gICAgbmF2SGVhZGVyLmFwcGVuZENoaWxkKGFkZFRhYnMoKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvYWRIZWFkZXIiLCJleHBvcnQgY2xhc3MgcGFnZVNlY3Rpb24ge1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUsc3ViVGV4dCwgaW1hZ2UsIGNvbnRlbnQpe1xyXG4gICAgICAgIHRoaXMuc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5zdWJ0ZXh0ID0gc3ViVGV4dDtcclxuICAgICAgICB0aGlzLmltYWdlID0gaW1hZ2U7XHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgYWRkUGFnZVRpdGxlKCkge1xyXG4gICAgICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgICAgIGgxLnRleHRDb250ZW50ID0gdGhpcy50aXRsZTtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZWN0aW9uLmFwcGVuZENoaWxkKGgxKTsgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGFkZFN1YlRleHQoKSB7XHJcbiAgICAgICAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgICAgICAgaDMudGV4dENvbnRlbnQgPSB0aGlzLnN1YlRleHQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VjdGlvbi5hcHBlbmRDaGlsZChoMyk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkSW1hZ2UoKSB7XHJcbiAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICBpbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIHRoaXMuaW1hZ2UpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlY3Rpb24uYXBwZW5kQ2hpbGQoaW1nKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRDb250ZW50KCkge1xyXG4gICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICBwLnRleHRDb250ZW50ID0gdGhpcy5jb250ZW50XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VjdGlvbi5hcHBlbmRDaGlsZChwKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBwYWdlU2VjdGlvbiB9IGZyb20gXCIuLi9wYWdlIGNvbXBvbmVudHMvY29tcG9uZW50c1wiO1xyXG5cclxuXHJcbi8vIENvbnRhY3QgVXNcclxuLy8gQ29udGFjdFxyXG4vLyBMb2NhdGlvblxyXG4vLyBIb3Vyc1xyXG5cclxuY29uc3QgcGFnZUNvbnRlbnQgPSAoKSA9PiB7XHJcbiAgICAvLyAvLyBhZGQgaG9tZSBwYWdlIGNvbnRlbnRcclxuICAgIGNvbnN0IHRpdGxlID0gXCJDb250YWN0IFVzXCJcclxuICAgIGNvbnN0IHN1YlRleHQgPVwiXCIgICBcclxuICAgIGNvbnN0IGltYWdlID0gXCIuLi9hc3NldHMvcGl6emEtdGFibGUucG5nXCJcclxuICAgIGNvbnN0IGNvbnRlbnRIb3VycyA9IFwiSE9VUlMgd29vb29cIlxyXG4gICAgY29uc3Qgc2VjdGlvbkNvbnRlbnQgPSBuZXcgcGFnZVNlY3Rpb24odGl0bGUsc3ViVGV4dCwgaW1hZ2UsIGNvbnRlbnRIb3Vycyk7XHJcblxyXG4gICAgY29uc3QgZGl2Q29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFBhZ2VzXCIpO1xyXG4gICAgY29uc3QgZGl2UGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkaXZQYWdlLmlkID0gXCJjb250YWN0UGFnZVwiO1xyXG4gICAgZGl2UGFnZS5jbGFzc0xpc3QuYWRkKFwidGFiQ29udGVudFwiKTtcclxuXHJcbiAgICBkaXZDb250ZW50LmFwcGVuZENoaWxkKGRpdlBhZ2UpO1xyXG4gICAgZGl2UGFnZS5hcHBlbmRDaGlsZChzZWN0aW9uQ29udGVudC5hZGRQYWdlVGl0bGUoKSk7XHJcbiAgICBkaXZQYWdlLmFwcGVuZENoaWxkKHNlY3Rpb25Db250ZW50LmFkZFN1YlRleHQoKSk7XHJcbiAgICBkaXZQYWdlLmFwcGVuZENoaWxkKHNlY3Rpb25Db250ZW50LmFkZEltYWdlKCkpO1xyXG4gICAgZGl2UGFnZS5hcHBlbmRDaGlsZChzZWN0aW9uQ29udGVudC5hZGRDb250ZW50KCkpO1xyXG4gICAgcmV0dXJuIG5hdkhlYWRlciwgZGl2Q29udGVudDtcclxufVxyXG5cclxuY29uc3QgbG9hZFBhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb250YWN0ID0gcGFnZUNvbnRlbnQoKTtcclxuICAgIHJldHVybiBjb250YWN0O1xyXG4gICAgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge2xvYWRQYWdlfVxyXG5cclxuIiwiaW1wb3J0IHsgcGFnZVNlY3Rpb24gfSBmcm9tIFwiLi4vcGFnZSBjb21wb25lbnRzL2NvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IHBhZ2VDb250ZW50ID0gKCkgPT4ge1xyXG4gICAgLy8gLy8gYWRkIGhvbWUgcGFnZSBjb250ZW50XHJcbiAgICBjb25zdCB0aXRsZSA9IFwiQ0lDSSBQaXp6ZXJpYVwiXHJcbiAgICBjb25zdCBzdWJUZXh0ID1cIldlIHB1dCBxdWFsaXR5IGluZ3JlZGllbnRzIGluIGV2ZXJ5IHBpenphIVwiICAgXHJcbiAgICBjb25zdCBpbWFnZSA9IFwiLi4vYXNzZXRzL3BpenphLWRpbmluZy1yb29tLmpmaWZcIlxyXG4gICAgY29uc3QgY29udGVudCA9IFwiRXRpYW0gZmV1Z2lhdCBpYWN1bGlzIGxlby4gU2VkIGluIG5pc2kgZWdldCBtYWduYSBtYXhpbXVzIHJ1dHJ1bSB2ZWwgbmVjIG51bmMuIEludGVnZXIgcHJldGl1bSBlbmltIGVnZXQgZXN0IGF1Y3RvciBsYW9yZWV0LiBBZW5lYW4gbGFvcmVldCBwb3J0dGl0b3IgcGVsbGVudGVzcXVlLiBTZWQgaWQgYXJjdSB1dCBhdWd1ZSBncmF2aWRhIHByZXRpdW0gZWxlaWZlbmQgZWdldCBtYWduYS4gTnVsbGEgc2NlbGVyaXNxdWUgZmVybWVudHVtIHF1YW0sIHNlZCBwb3N1ZXJlIHZlbGl0IGFjY3Vtc2FuIGluLiBNYWVjZW5hcyBwbGFjZXJhdCBuaXNsIGEgb3JjaSBiaWJlbmR1bSBhbGlxdWV0LiBRdWlzcXVlIGF0IHZlbmVuYXRpcyBtaS4gTWF1cmlzIGRvbG9yIGxpYmVybywgZmVybWVudHVtIG5vbiBzYWdpdHRpcyBzZWQsIGJpYmVuZHVtIGEgZXguIEN1cmFiaXR1ciBkYXBpYnVzIGxlbyBzZWQgbGVjdHVzIGFsaXF1ZXQgcG9zdWVyZS4gQWVuZWFuIHNvZGFsZXMgdWxsYW1jb3JwZXIgYXJjdSwgdmVzdGlidWx1bSB2b2x1dHBhdCBlcm9zLkV0aWFtIHNlbXBlciBlc3QgZXUgY29uc2VxdWF0IGhlbmRyZXJpdC4gVmVzdGlidWx1bSBncmF2aWRhIG1hZ25hIGlkIGZlbGlzIGNvbmd1ZSBpbnRlcmR1bS4gUHJvaW4gdnVscHV0YXRlIHNvZGFsZXMgbmVxdWUsIG5vbiBlZ2VzdGFzIGlwc3VtIGxhb3JlZXQgaW4uIE1hZWNlbmFzIGV1IHN1c2NpcGl0IHNlbSwgcXVpcyBsYW9yZWV0IG1hdXJpcy4gU3VzcGVuZGlzc2UgYmxhbmRpdCBtZXR1cyBub24gbWF0dGlzIGRpZ25pc3NpbS4gU2VkIGZlbGlzIHRvcnRvciwgbGFvcmVldCB1dCBmZXVnaWF0IGlkLCBjb25zZXF1YXQgYWMgZWxpdC4gUHJvaW4gc2VkIHRyaXN0aXF1ZSBtYWduYSwgcXVpcyBmcmluZ2lsbGEgZXJvcy4gTnVsbGEgZmFjaWxpc2kuIE5hbSBub24gb2RpbyBiaWJlbmR1bSwgcG9ydGEgYXJjdSB1dCwgZWdlc3RhcyBlcmF0LiBEb25lYyBlcmF0IGxvcmVtLCBwb3J0YSBlZ2V0IG1hbGVzdWFkYSB2aXRhZSwgYXVjdG9yIG5lYyBsZW8uIER1aXMgYSBwb3J0YSBsZWN0dXMuIE51bGxhIGZlcm1lbnR1bSBub24ganVzdG8gYXQgYWxpcXVldC4gQ3JhcyBlZ2V0IHRlbXB1cyB1cm5hLiBOdWxsYW0gcG9ydHRpdG9yIGF1Z3VlIGxvcmVtLCBpbiBwbGFjZXJhdCBwdXJ1cyBlbGVtZW50dW0gdml0YWUuIE1vcmJpIGxhY3VzIGVyb3MsIGJpYmVuZHVtIGFjIG1heGltdXMgYSwgYmxhbmRpdCBldSBudWxsYS4gTmFtIHNvbGxpY2l0dWRpbiBtYXNzYSBqdXN0bywgZXQgZWxlaWZlbmQgZXJhdCBmZXJtZW50dW0gbm9uLiBOdW5jIG5vbiBwb3J0dGl0b3IgdHVycGlzLiBQaGFzZWxsdXMgdGVsbHVzIG1hc3NhLCBtb2xsaXMgc2VkIHNlbXBlciB2ZWwsIHRlbXB1cyB1dCBzZW0uIE51bGxhIHV0IHBsYWNlcmF0IGZlbGlzLiBEb25lYyBzdXNjaXBpdCwgYW50ZSBpbiBzb2xsaWNpdHVkaW4gYmliZW5kdW0sIGxlbyBwdXJ1cyB2dWxwdXRhdGUgdXJuYSwgaWQgcGVsbGVudGVzcXVlIGFudGUgZXN0IHNlZCBmZWxpcy5cIlxyXG4gICAgY29uc3Qgc2VjdGlvbkNvbnRlbnQgPSBuZXcgcGFnZVNlY3Rpb24odGl0bGUsc3ViVGV4dCwgaW1hZ2UsIGNvbnRlbnQpO1xyXG5cclxuICAgIGNvbnN0IGRpdkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRQYWdlc1wiKTtcclxuICAgIGNvbnN0IGRpdlBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZGl2UGFnZS5pZCA9IFwiaG9tZVBhZ2VcIjtcclxuICAgIGRpdlBhZ2UuY2xhc3NMaXN0LmFkZChcInRhYkNvbnRlbnRcIik7XHJcbiAgICBcclxuICAgIGRpdkNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2UGFnZSk7XHJcbiAgICBkaXZQYWdlLmFwcGVuZENoaWxkKHNlY3Rpb25Db250ZW50LmFkZFBhZ2VUaXRsZSgpKTtcclxuICAgIGRpdlBhZ2UuYXBwZW5kQ2hpbGQoc2VjdGlvbkNvbnRlbnQuYWRkU3ViVGV4dCgpKTtcclxuICAgIGRpdlBhZ2UuYXBwZW5kQ2hpbGQoc2VjdGlvbkNvbnRlbnQuYWRkSW1hZ2UoKSk7XHJcbiAgICBkaXZQYWdlLmFwcGVuZENoaWxkKHNlY3Rpb25Db250ZW50LmFkZENvbnRlbnQoKSk7XHJcbiAgICByZXR1cm4gZGl2Q29udGVudDtcclxufVxyXG5cclxuY29uc3QgbG9hZFBhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBob21lID0gcGFnZUNvbnRlbnQoKTtcclxuICAgIHJldHVybiBob21lO1xyXG4gICAgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge2xvYWRQYWdlfVxyXG5cclxuLy8gQXJjaGl2ZWRcclxuLy8gY29tbWVudGluZyBvdXQgdGhlc2UgZnVuY3Rpb25zIGJlY2F1c2UgSSB3YW50IHRvIHByYWN0aWNlIGNsYXNzZXNcclxuXHJcbi8vIGNvbnN0IHRpdGxlSGVhZGVyID0gKHRpdGxlKSA9PiB7XHJcbi8vICAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuLy8gICAgIGgxLnRleHRDb250ZW50ID0gdGl0bGVcclxuLy8gICAgIHJldHVybiBoMVxyXG4vLyB9IFxyXG5cclxuLy8gY29uc3Qgc3ViVGl0bGUgPSAoc3ViVGl0bGUpID0+IHtcclxuLy8gICAgIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4vLyAgICAgaDMudGV4dENvbnRlbnQgPSBzdWJUaXRsZTtcclxuLy8gICAgIHJldHVybiBoM1xyXG4vLyB9XHJcblxyXG4vLyBjb25zdCBhZGRJbWFnZSA9ICgpID0+IHtcclxuLy8gICAgIGNvbnN0IGltYWdlID0gXCIuLi9hc3NldHMvcGl6emEtZGluaW5nLXJvb20uamZpZlwiXHJcbi8vICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4vLyAgICAgaW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBpbWFnZSlcclxuLy8gICAgIHJldHVybiBpbWdcclxuLy8gfVxyXG5cclxuLy8gY29uc3Qgc3RvcnlQYXJhID0gKHN0b3J5KSA9PiB7XHJcbi8vICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbi8vICAgICBwLnRleHRDb250ZW50ID0gc3RvcnlcclxuLy8gICAgIHJldHVybiBwXHJcbi8vIH0iLCIvLyB0aGUgc3RydWN0dXJlIGZvciBlYWNoIHRhYlxyXG5jb25zdCBjcmVhdGVUYWIgPSAodGFiTmFtZSkgPT4ge1xyXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGRpdi5pZCA9IFwibmF2XCIgKyB0YWJOYW1lO1xyXG5cclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBjb25zdCBmdW5GdW5jdGlvbiA9ICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIml0IHdvcmtlZCBmb3IgXCIgICt0YWJOYW1lKTtcclxuICAgIH1cclxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwidGFibGlua3NcIik7XHJcbiAgICBidXR0b24ub25jbGljayA9IGZ1bkZ1bmN0aW9uO1xyXG4gICAgYnV0dG9uLnZhbHVlID0gdGFiTmFtZTtcclxuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IHRhYk5hbWVcclxuICAgIGRpdi5hcHBlbmRDaGlsZChidXR0b24pO1xyXG4gICAgcmV0dXJuIGRpdlxyXG59XHJcblxyXG4vLyBhZGRpbmcgdGFicyB0byBhIG5hdlxyXG5jb25zdCBhZGRUYWJzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdGFiTmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcclxuICAgIHRhYk5hdi5pZCA9IFwibmF2VGFic1wiXHJcbiAgICBjb25zdCBwYWdlTmFtZXMgPSBbXCJIb21lXCIsIFwiTWVudVwiLCBcIkNvbnRhY3RcIl1cclxuICAgIHBhZ2VOYW1lcy5mb3JFYWNoKG4gPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhYiA9IGNyZWF0ZVRhYihuKVxyXG4gICAgICAgIHRhYk5hdi5hcHBlbmRDaGlsZCh0YWIpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdGFiTmF2XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFkZFRhYnMiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBsb2FkSGVhZGVyIGZyb20gXCIuL2hlYWRlcnRhYnNcIjtcclxuaW1wb3J0IGhvbWVQYWdlIGZyb20gXCIuL3BhZ2VzL2hvbWVcIjtcclxuaW1wb3J0IGNvbnRhY3RQYWdlIGZyb20gXCIuL3BhZ2VzL2NvbnRhY3RcIjtcclxuXHJcblxyXG4vLyBpbXBvcnQgbmF2aWdhdGlvbiBmcm9tIG5hdmlhZ2lvbmFcclxuXHJcblxyXG4vLyBjb25zdCBuYXZIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hdkhlYWRlclwiKTtcclxuLy8gbmF2SGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4vLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4vLyAgICAgY29uc29sZS5sb2coZSk7XHJcblxyXG4vLyB9KVxyXG5cclxubG9hZEhlYWRlcigpO1xyXG5ob21lUGFnZS5sb2FkUGFnZSgpO1xyXG5jb250YWN0UGFnZS5sb2FkUGFnZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==