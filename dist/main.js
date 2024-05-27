/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,oCAAoC;IACpC,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;EACf","sourcesContent":[".modal {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 1000;\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/appClasses.js":
/*!***************************!*\
  !*** ./src/appClasses.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   App: () => (/* binding */ App),
/* harmony export */   AppController: () => (/* binding */ AppController),
/* harmony export */   AppDOM: () => (/* binding */ AppDOM)
/* harmony export */ });
/* harmony import */ var _projectClasses_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectClasses.js */ "./src/projectClasses.js");


class App {
    constructor() {
        this.appList = {};
    }

    createProject(name) {
        const project = new _projectClasses_js__WEBPACK_IMPORTED_MODULE_0__.Project(name);
        this.appList[name] = project;

        return project;
    }
    
    //delete Project
    deleteProject(project) {
        delete this.appList[project.name];
    }
}

class AppDOM {
    constructor(app) {
        this.app = app; // reference to the app object
        this.appList = app.appList; // reference to the projectList object
        this.appDOMList = {}; // empty map to hold the projectDOM objects
        this.appDOM = document.createElement('div');
        this.appDOM.id = 'appDOM';

        //create new project button
        this.newProjectButton = document.createElement('button');
        this.newProjectButton.id = 'newProjectButton';
        this.newProjectButton.textContent = 'Create New Project';

        //input button
        this.newProjectInput = document.createElement('input');
        this.newProjectInput.id = 'newProjectInput';
        this.newProjectInput.placeholder = 'Project Name';
      
        //event listener to button
        this.newProjectButton.addEventListener('click', () => {
            const projectName = this.newProjectInput.value;
            if (projectName) {
                appController.createProjectController(projectName);
                this.newProjectInput.value = '';
                this.renderHome();
            }
        });
    }

    createProjectDOM(project) {
        const projectDOM = new _projectClasses_js__WEBPACK_IMPORTED_MODULE_0__.ProjectDOM(project);
        this.appDOMList[project.name] = projectDOM;
    }

    renderHome() {
        document.body.innerHTML = '';
        this.appDOM.innerHTML = '';
        this.appDOM.appendChild(this.newProjectInput);
        this.appDOM.appendChild(this.newProjectButton);
        
        Object.values(this.appDOMList).forEach(projectDOM => {
            this.appDOM.appendChild(projectDOM.projectTitle);
        });

        document.body.appendChild(this.appDOM);
    }
}

class AppController {
    constructor() {
    }

    createProjectController(name) {
        const project = app.createProject(name);
        appDOM.createProjectDOM(project);
    }
}






/***/ }),

/***/ "./src/projectClasses.js":
/*!*******************************!*\
  !*** ./src/projectClasses.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project),
/* harmony export */   ProjectController: () => (/* binding */ ProjectController),
/* harmony export */   ProjectDOM: () => (/* binding */ ProjectDOM)
/* harmony export */ });
/* harmony import */ var _showNewForm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showNewForm.js */ "./src/showNewForm.js");
/* harmony import */ var _todoClasses_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoClasses.js */ "./src/todoClasses.js");




class Project {
    constructor(projectName) {
        this.name = projectName;
        this.projectList = []; //list of ToDo objects 
        this.projectDOM = null;
    }

    // Create new ToDo
    createToDo(formValues) {
        const toDo = new _todoClasses_js__WEBPACK_IMPORTED_MODULE_1__.ToDo(
            formValues.title,
            formValues.description,
            formValues.dueDate,
            formValues.priority,
            formValues.notes,
            formValues.checklist
        );

        toDo.project = this;
        this.projectList.push(toDo);

        return toDo;
    }

    // Delete ToDo
    deleteToDo(toDo) {
        const index = this.projectList.indexOf(toDo);
        if (index > -1) {
            this.projectList.splice(index, 1);
        }
    }
}

class ProjectDOM {
    constructor(project) {
        //initialization
        this.project = project; //project object
        this.project.projectDOM = this; //self-referencing
        this.projectDOMList = []; //list of ToDo DOM elements

        //creating project DOM element
        const projectDOM = document.createElement('div');
        projectDOM.classList.add('project');
        this.projectDOM = projectDOM;

        const title = document.createElement('h1');
        title.textContent = this.project.name;
        this.projectTitle = title;
        this.projectDOM.appendChild(this.projectTitle);

        //event listener to open the project
        this.projectTitle.addEventListener('click', () => {
            this.displayProject();
        });

        //create home button
        const homeButton = document.createElement('button');
        homeButton.classList.add('homeButton');
        homeButton.textContent = 'Return Home';
        this.homeButton = homeButton;
        this.homeButton.addEventListener('click', () => {
            appDOM.renderHome();
        });

        //create new ToDo button
        const newToDoButton = document.createElement('button');
        newToDoButton.classList.add('newButton');
        newToDoButton.textContent = 'New ToDo';
        this.newToDoButton = newToDoButton;
        this.newToDoButton.addEventListener('click', () => {
            (0,_showNewForm_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this.project);
        });
    }

    createToDoDOM(toDo) {
        const toDoDOM = new _todoClasses_js__WEBPACK_IMPORTED_MODULE_1__.ToDoDOM(toDo);
        this.projectDOMList.push(toDoDOM);
        this.projectDOM.appendChild(toDoDOM.toDoDOM);
    }

    deleteToDoDOM(toDoDOM) {
        this.projectDOMList = this.projectDOMList.filter(dom => dom !== toDoDOM); //remove from DOM data
        this.projectDOM.removeChild(toDoDOM); //remove from DOM
    }

    displayProject() {
        appDOM.appDOM.innerHTML = '';
        appDOM.appDOM.appendChild(this.projectDOM);
        appDOM.appDOM.appendChild(this.newToDoButton);
        appDOM.appDOM.appendChild(this.homeButton); 
    }
}

class ProjectController {
    constructor() {
    }

    createToDoControl(project, formValues) {
        const toDo = project.createToDo(formValues);
        toDo.project = project;
        project.projectDOM.createToDoDOM(toDo);
    }

    deleteToDoControl(project, toDo, toDoDOM) {
        project.deleteToDo(toDo);
        project.projectDOM.deleteToDoDOM(toDoDOM);
    }
}




/***/ }),

/***/ "./src/showEditForm.js":
/*!*****************************!*\
  !*** ./src/showEditForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todoClasses_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoClasses.js */ "./src/todoClasses.js");


function showEditForm(toDo, toDoDOM) {
    // Create edit form
    const editForm = document.createElement('form');
    editForm.id = 'editForm';
    editForm.innerHTML = `
        <label>Title: <input type="text" name="title" value="${toDo.title}"></label>
        <label>Description: <input type="text" name="description" value="${toDo.description}"></label>
        <label>Due Date: <input type="date" name="dueDate" value="${toDo.dueDate}"></label>
        <label>Priority: <input type="text" name="priority" value="${toDo.priority}"></label>
        <label>Notes: <textarea name="notes">${toDo.notes}</textarea></label>
        <button type="submit">Save</button>
        <button type="button" id="cancel">Cancel</button>
    `;

    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.appendChild(editForm);
    document.body.appendChild(modal);

    // Create event listener for form submission
    editForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formValues = {
            title: editForm.elements['title'].value,
            description: editForm.elements['description'].value,
            dueDate: editForm.elements['dueDate'].value,
            priority: editForm.elements['priority'].value,
            notes: editForm.elements['notes'].value,
        };
        modal.remove();
        toDoController.editPropertiesControl(toDo, toDoDOM, formValues);

    });

    // Create event listener for cancel button
    document.querySelector('#cancel').addEventListener('click', () => {
        modal.remove();
    });

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showEditForm);

/***/ }),

/***/ "./src/showNewForm.js":
/*!****************************!*\
  !*** ./src/showNewForm.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");


function showNewForm(project) {
    // Create edit form
    const newForm = document.createElement('form');
    newForm.id = 'newForm';
    newForm.innerHTML = `
        <label>Title: <input type="text" name="title"></label>
        <label>Description: <input type="text" name="description"></label>
        <label>Due Date: <input type="date" name="dueDate"></label>
        <label>Priority: <input type="text" name="priority"></label>
        <label>Notes: <textarea name="notes"></textarea></label>
        <button type="submit">Save</button>
        <button type="button" id="cancel">Cancel</button>
    `;

    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.appendChild(newForm);
    document.body.appendChild(modal);

    // Create event listener for form submission
    newForm.addEventListener('submit', (event) => {
        console.log("Before preventDefault");
        event.preventDefault();
        console.log("After preventDefault");
        const formValues = {
            title: newForm.elements['title'].value,
            description: newForm.elements['description'].value,
            dueDate: newForm.elements['dueDate'].value,
            priority: newForm.elements['priority'].value,
            notes: newForm.elements['notes'].value,
        };
        modal.remove();
        projectController.createToDoControl(project, formValues);
    });

    // Create event listener for cancel button
    document.querySelector('#cancel').addEventListener('click', () => {
        modal.remove();
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showNewForm);


/***/ }),

/***/ "./src/todoClasses.js":
/*!****************************!*\
  !*** ./src/todoClasses.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToDo: () => (/* binding */ ToDo),
/* harmony export */   ToDoController: () => (/* binding */ ToDoController),
/* harmony export */   ToDoDOM: () => (/* binding */ ToDoDOM)
/* harmony export */ });
/* harmony import */ var _showEditForm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showEditForm.js */ "./src/showEditForm.js");
/* harmony import */ var _projectClasses_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectClasses.js */ "./src/projectClasses.js");



class ToDo {
    constructor(title = 'Untitled', description = '', dueDate = null, priority = null, notes = '') {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;

        this.project = null;
        this.toDoDOM = null;
    }

    editProperty (property, newValue) {
        this[property] = newValue;
    }
}

class ToDoDOM {
    constructor (toDo) {
        //create to-do div
        this.toDo = toDo;
        this.toDo.toDoDOM = this;
        this.toDoDOM = document.createElement('div');
        this.toDoDOM.classList.add('todo');
        this.projectDOM = toDo.project.projectDOM.projectDOM;

        //add event listener
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.id = 'editButton';
        editButton.addEventListener('click', () => {
            (0,_showEditForm_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this.toDo, this, toDoController);
        });
        this.editButton = editButton;

        //add delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.id = 'deleteButton';
        deleteButton.addEventListener('click', () => {
            projectController.deleteToDoControl(this.toDo.project, this.toDo, this.toDoDOM);
        });
        this.deleteButton = deleteButton;

        //add show full to-do
        const showFullButton = document.createElement('button');
        showFullButton.textContent = 'Show Full To-Do';
        showFullButton.id = 'showFullButton';
        showFullButton.addEventListener('click', () => {
            this.showFullToDo();
        });
        this.showFullButton = showFullButton;

        //add show less button
        const showLessButton = document.createElement('button');
        showLessButton.textContent = 'Show Less';
        showLessButton.id = 'showLessButton';
        showLessButton.addEventListener('click', () => {
            this.showLessToDo();
        });
        this.showLessButton = showLessButton;

        this.editProperties(); //render to-do properties in toDoDOM
        this.showLessToDo(); //show less button
    }

    editProperties () {
        this.toDoDOM.innerHTML = '';

        const properties = ['title', 'description', 'dueDate', 'priority', 'notes'];
        properties.forEach(prop => {
            const element = document.createElement(prop === 'title' ? 'h1' : prop === 'description' ? 'h2' : 'p');
            element.textContent = this.toDo[prop];
            element.id = prop;
            this.toDoDOM.appendChild(element);
        });
    }

    showFullToDo () {
        this.toDoDOM.innerHTML = '';
        this.editProperties();

        this.toDoDOM.appendChild(this.showLessButton);
        this.toDoDOM.appendChild(this.editButton);
        this.toDoDOM.appendChild(this.deleteButton);
    }

    showLessToDo () {
        const children = Array.from(this.toDoDOM.children);
        children.forEach(child => {
            if (child.tagName.toLowerCase() === 'p' || child.id === 'showLessButton' || child.id === 'editButton' || child.id === 'deleteButton') {
                this.toDoDOM.removeChild(child);
            }
        });
        this.projectDOM.appendChild(this.toDoDOM);        
        this.toDoDOM.appendChild(this.showFullButton);
    }
}

class ToDoController {
    constructor () {
    }

    editPropertiesControl (toDo, toDoDOM, formValues) {
        Object.entries(formValues).forEach(([property, value]) => {
            toDo.editProperty(property, value);
        });

        toDoDOM.editProperties();
        toDoDOM.showLessToDo();
        toDoDOM.toDoDOM.appendChild(toDoDOM.showFullButton);
    }
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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _appClasses_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appClasses.js */ "./src/appClasses.js");
/* harmony import */ var _projectClasses_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectClasses.js */ "./src/projectClasses.js");
/* harmony import */ var _todoClasses_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoClasses.js */ "./src/todoClasses.js");




__webpack_require__.g.app = new _appClasses_js__WEBPACK_IMPORTED_MODULE_0__.App();
__webpack_require__.g.appDOM = new _appClasses_js__WEBPACK_IMPORTED_MODULE_0__.AppDOM(app);
__webpack_require__.g.appController = new _appClasses_js__WEBPACK_IMPORTED_MODULE_0__.AppController();
__webpack_require__.g.projectController = new _projectClasses_js__WEBPACK_IMPORTED_MODULE_1__.ProjectController();
__webpack_require__.g.toDoController = new _todoClasses_js__WEBPACK_IMPORTED_MODULE_2__.ToDoController();
appDOM.renderHome();

//click on title -> open prpject -> add everything -> return home = clear  
})();

/******/ })()
;
//# sourceMappingURL=main.js.map