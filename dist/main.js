/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/appController.js":
/*!******************************!*\
  !*** ./src/appController.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _projectClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectClass.js */ "./src/projectClass.js");
/* harmony import */ var _todoClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoClass.js */ "./src/todoClass.js");



class AppController {
    constructor() {
        this.projectList = {};
        this.masterToDoList = {};
    }

    //ALL TODO METHODS
    //create new ToDo
  
    createToDo(project, title, description, dueDate, priority, notes, checklist) {
            const toDo = new _todoClass_js__WEBPACK_IMPORTED_MODULE_1__.ToDo(title, description, dueDate, priority, notes, checklist);    
            this.projectList[project].toDos[toDo.id] = toDo;
            this.masterToDoList[toDo.id] = toDo;

            return toDo;
        }
    
    //change ToDo property
    editProperty(item, property, newValue) {
        this.masterToDoList[item][property] = newValue;
        console.log("New property value for " + item + "'s " + property + ": " + this.masterToDoList[item][property]);
    }

    //delete ToDo
    deleteToDo(project, item) {
        delete this.projectList[project].toDos[item];
        delete this.masterToDoList[item];
    }    

      //retrieve toDo by ID
    getToDoByID(id) {
        return this.masterToDoList[id];
    }

    //ALL PROJECT METHODS
    //create Project
    createProject(name) {
        const project = new _projectClass_js__WEBPACK_IMPORTED_MODULE_0__.Project(name);
        this.projectList[name] = project;
        
        return project;
    }

    //get all ToDos from a Project
    getToDosFromProject(project) {
        return this.projectList[project].toDos;
    }

    //delete Project
    deleteProject(project) {
        delete this.projectList[project];
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppController);

/***/ }),

/***/ "./src/projectClass.js":
/*!*****************************!*\
  !*** ./src/projectClass.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project)
/* harmony export */ });
class Project {
    constructor(name) {
        this.name = name;
        this.toDos = {};
    }
}





/***/ }),

/***/ "./src/test.js":
/*!*********************!*\
  !*** ./src/test.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _appController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appController.js */ "./src/appController.js");


function testAppController() {
    const app = new _appController_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    console.log("Created App:", app);
    
    // Test createProject
    app.createProject('Default');
    console.log("Created Project:", app.projectList['Default']);

    // Test createToDo
    const toDo1 = app.createToDo('Default', 'Test ToDo', 'Description', '2023-12-31', 'High', 'Some notes', ['item1']);
    console.log('Created ToDo:', toDo1);

    // Test editProperty
    app.editProperty(toDo1.id, 'title', 'Updated Test ToDo');
    console.log('Edited ToDo:', app.getToDoByID(toDo1.id));

    // Test deleteToDo
    app.deleteToDo('Default', toDo1.id);
    console.log('Deleted ToDo:', app.getToDoByID(toDo1.id));

    // Test getToDosFromProject
    const toDo2 = app.createToDo('Default', 'Another ToDo', 'Another Description', '2023-12-31', 'Medium', 'More notes', ['item2']);
    console.log('ToDos in Default Project:', app.getToDosFromProject('Default'));

    // Test deleteProject
    app.deleteProject('Default');   
    console.log('Deleted Project:', app.projectList['Default']);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (testAppController); 

/***/ }),

/***/ "./src/todoClass.js":
/*!**************************!*\
  !*** ./src/todoClass.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToDo: () => (/* binding */ ToDo)
/* harmony export */ });
/* harmony import */ var _uniqueID_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uniqueID.js */ "./src/uniqueID.js");


class ToDo {
    constructor(title = 'Untitled', description = '', dueDate = null, priority = null, notes = '', checklist = []) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.checklist = checklist;
        this.id = (0,_uniqueID_js__WEBPACK_IMPORTED_MODULE_0__.generateUniqueID)();
    }
}





/***/ }),

/***/ "./src/uniqueID.js":
/*!*************************!*\
  !*** ./src/uniqueID.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateUniqueID: () => (/* binding */ generateUniqueID)
/* harmony export */ });
const generatedIDs = new Set();

function generateUniqueID() {
    let id;
    do {
        id = Math.floor(Math.random() * 1000000);
    } while (generatedIDs.has(id));
    generatedIDs.add(id);
    return id;
}



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
/* harmony import */ var _test_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test.js */ "./src/test.js");


(0,_test_js__WEBPACK_IMPORTED_MODULE_0__["default"])();


//requirements 
    //project object - 
        //X start with default project
        //X method - switch between projects
        //X method - view all projects
    //to-do object - 
        // X properties - title; description; dueDate; priority; notes; checklist
        // X methods - add; delete; view properties; 
            // X method - edit (with just typing & enter)

})();

/******/ })()
;
//# sourceMappingURL=main.js.map