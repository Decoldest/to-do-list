/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/addProject.js":
/*!***************************!*\
  !*** ./src/addProject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   currentProject: () => (/* binding */ currentProject),
/* harmony export */   setNewProjectListener: () => (/* binding */ setNewProjectListener)
/* harmony export */ });
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");


const newProjectButton = document.getElementById('new-project');
const projectInput = document.getElementById('project-input');
const addProjectButton = document.getElementById('add-project');
const cancelAddProject = document.getElementById('cancel-add-project');
const projectsContainer = document.querySelector('.projects-container');

let currentProject = 'inbox';

//Allows new project input to slide in 
const toggleProjectInput = () => {
  projectInput.classList.toggle('show');
  addProjectButton.classList.toggle('show');
  cancelAddProject.classList.toggle('show');
};

const handleAddProjectClick = () => {
  const projectName = projectInput.value;
  //Prevent adding empty button
  if(!projectName) return;

  (0,_projects_js__WEBPACK_IMPORTED_MODULE_0__.createNewProject)(projectName);
  resetNewProjectInput();
  projectsContainer.appendChild(makeNewProjectButton(projectName));
  toggleProjectInput();
};

const handleCancelAddProjectClick = () => {
  resetNewProjectInput();
  toggleProjectInput();
};

const resetNewProjectInput = () => {
  projectInput.value = '';
};

const createButton = (name) => {
  let newButton = document.createElement('button');
  newButton.textContent = name;
  newButton.id = name;
  return newButton;
}

const projectBarListener = (button) => {
  button.addEventListener('click', () => {
    currentProject = button.id;
//    console.log(currentProject);
  });
}

//Creates a new project button for the project bar
function makeNewProjectButton(name) {
  const newProjectButton = createButton(name);
  projectBarListener(newProjectButton);
  return newProjectButton;
}

addProjectButton.addEventListener('click', handleAddProjectClick);
cancelAddProject.addEventListener('click', handleCancelAddProjectClick);

const setNewProjectListener = () => {
  newProjectButton.addEventListener('click', () => {
    toggleProjectInput();
  });
};



/***/ }),

/***/ "./src/addToDos.js":
/*!*************************!*\
  !*** ./src/addToDos.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setAddTaskConfirm: () => (/* binding */ setAddTaskConfirm),
/* harmony export */   setNewToDoListener: () => (/* binding */ setNewToDoListener),
/* harmony export */   updateTaskDisplay: () => (/* binding */ updateTaskDisplay)
/* harmony export */ });
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");
/* harmony import */ var _toDos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDos.js */ "./src/toDos.js");
/* harmony import */ var _addProject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addProject.js */ "./src/addProject.js");




const newToDoButton = document.getElementById('new-to-do');
const newTaskForm = document.getElementById('task-form');
const toDoContainer = document.querySelector('.to-do-container');

const toggleTaskForm = () => {
  newTaskForm.classList.toggle('show');
};

const setNewToDoListener = () => {
  newToDoButton.addEventListener('click', () => {
    toggleTaskForm();
  });
}

function getTaskData(form) {
  const newTask = Object.fromEntries(new FormData(form));
  (0,_projects_js__WEBPACK_IMPORTED_MODULE_0__.addToProjects)(
    (0,_toDos_js__WEBPACK_IMPORTED_MODULE_1__.makeToDo)(
      newTask.title,
      newTask.description,
      newTask.dueDate,
      newTask.priority,
      newTask.notes,
    ),
    _addProject_js__WEBPACK_IMPORTED_MODULE_2__.currentProject
  );
  return newTask;
}

function setAddTaskConfirm() {
  newTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addSingleTask(getTaskData(e.target));
    resetTaskForm();
  });
}

const resetTaskForm = () => {
  newTaskForm.reset();
  toggleTaskForm();
}

//Updates entire display
const updateTaskDisplay = () => {
  toDoContainer.innerHTML = "";
  const currentTaskArray = (0,_projects_js__WEBPACK_IMPORTED_MODULE_0__.getProjects)()[_addProject_js__WEBPACK_IMPORTED_MODULE_2__.currentProject];
  for (const task of currentTaskArray) {
    appendTask(task.title, task.description, task.dueDate, task.priority, task.notes);
  }
}

//Adds only one task
const addSingleTask = (newTask) => {
  appendTask(newTask.title, newTask.description, newTask.dueDate, newTask.priority, newTask.notes);
}

const appendTask = (title, description, dueDate, priority, notes) => {
  const taskCardContainer = document.createElement('div');
  taskCardContainer.innerHTML = 
  `<h2>${title}</h2>
  <p>${description}</p>
  <h4>${dueDate}</h4>
  <p>${priority}</p>
  <p>${notes}</p>`

  toDoContainer.appendChild(taskCardContainer);
}



/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addToProjects: () => (/* binding */ addToProjects),
/* harmony export */   createNewProject: () => (/* binding */ createNewProject),
/* harmony export */   getProjects: () => (/* binding */ getProjects)
/* harmony export */ });
const projects = {
  inbox: [],
};

function getProjects () {
  return projects;
}

function addToProjects (task, project) {
  projects[project] = projects[project] ?? [];
  projects[project].push(task);
  console.log(task.getData());
}

function createNewProject(name) {
  if (!projects[name]) {
    projects[name] = [];
  }
}




/***/ }),

/***/ "./src/toDos.js":
/*!**********************!*\
  !*** ./src/toDos.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   makeToDo: () => (/* binding */ makeToDo)
/* harmony export */ });
class toDo {
  constructor(title, description, dueDate, priority, notes) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate || "No Due Date";
    this.priority = priority;
    this.notes = notes;
    this.completed = 'no';
  }

  getData() {
    return {
      title: this.title,
      description: this.description,
      dueDate: this.dueDate,
      priority: this.priority,
      notes: this.notes,
    };
  }
}

const makeToDo = (title, description, dueDate, priority, notes) => new toDo(title, description, dueDate, priority, notes);



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
/* harmony import */ var _addProject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addProject.js */ "./src/addProject.js");
/* harmony import */ var _addToDos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addToDos.js */ "./src/addToDos.js");




(0,_addToDos_js__WEBPACK_IMPORTED_MODULE_1__.setAddTaskConfirm)();
(0,_addToDos_js__WEBPACK_IMPORTED_MODULE_1__.setNewToDoListener)();
(0,_addProject_js__WEBPACK_IMPORTED_MODULE_0__.setNewProjectListener)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXNFOztBQUV0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLDhEQUFpQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakUyRDtBQUNyQjtBQUNXOztBQUVqRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EsRUFBRSwyREFBYTtBQUNmLElBQUksbURBQVE7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDBEQUFjO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQix5REFBVyxHQUFHLDBEQUFjO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsTUFBTTtBQUNmLE9BQU8sWUFBWTtBQUNuQixRQUFRLFFBQVE7QUFDaEIsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sTUFBTTs7QUFFYjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRXNDOzs7Ozs7Ozs7Ozs7Ozs7QUNwQnRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7VUNyQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOd0Q7QUFDYzs7O0FBR3RFLCtEQUFpQjtBQUNqQixnRUFBa0I7QUFDbEIscUVBQXFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9hZGRQcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvYWRkVG9Eb3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvRG9zLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZU5ld1Byb2plY3QgYXMgYWRkVG9Qcm9qZWN0QXJyYXkgfSBmcm9tICcuL3Byb2plY3RzLmpzJztcblxuY29uc3QgbmV3UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctcHJvamVjdCcpO1xuY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtaW5wdXQnKTtcbmNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXByb2plY3QnKTtcbmNvbnN0IGNhbmNlbEFkZFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FuY2VsLWFkZC1wcm9qZWN0Jyk7XG5jb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy1jb250YWluZXInKTtcblxubGV0IGN1cnJlbnRQcm9qZWN0ID0gJ2luYm94JztcblxuLy9BbGxvd3MgbmV3IHByb2plY3QgaW5wdXQgdG8gc2xpZGUgaW4gXG5jb25zdCB0b2dnbGVQcm9qZWN0SW5wdXQgPSAoKSA9PiB7XG4gIHByb2plY3RJbnB1dC5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XG4gIGFkZFByb2plY3RCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpO1xuICBjYW5jZWxBZGRQcm9qZWN0LmNsYXNzTGlzdC50b2dnbGUoJ3Nob3cnKTtcbn07XG5cbmNvbnN0IGhhbmRsZUFkZFByb2plY3RDbGljayA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBwcm9qZWN0SW5wdXQudmFsdWU7XG4gIC8vUHJldmVudCBhZGRpbmcgZW1wdHkgYnV0dG9uXG4gIGlmKCFwcm9qZWN0TmFtZSkgcmV0dXJuO1xuXG4gIGFkZFRvUHJvamVjdEFycmF5KHByb2plY3ROYW1lKTtcbiAgcmVzZXROZXdQcm9qZWN0SW5wdXQoKTtcbiAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQobWFrZU5ld1Byb2plY3RCdXR0b24ocHJvamVjdE5hbWUpKTtcbiAgdG9nZ2xlUHJvamVjdElucHV0KCk7XG59O1xuXG5jb25zdCBoYW5kbGVDYW5jZWxBZGRQcm9qZWN0Q2xpY2sgPSAoKSA9PiB7XG4gIHJlc2V0TmV3UHJvamVjdElucHV0KCk7XG4gIHRvZ2dsZVByb2plY3RJbnB1dCgpO1xufTtcblxuY29uc3QgcmVzZXROZXdQcm9qZWN0SW5wdXQgPSAoKSA9PiB7XG4gIHByb2plY3RJbnB1dC52YWx1ZSA9ICcnO1xufTtcblxuY29uc3QgY3JlYXRlQnV0dG9uID0gKG5hbWUpID0+IHtcbiAgbGV0IG5ld0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBuZXdCdXR0b24udGV4dENvbnRlbnQgPSBuYW1lO1xuICBuZXdCdXR0b24uaWQgPSBuYW1lO1xuICByZXR1cm4gbmV3QnV0dG9uO1xufVxuXG5jb25zdCBwcm9qZWN0QmFyTGlzdGVuZXIgPSAoYnV0dG9uKSA9PiB7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjdXJyZW50UHJvamVjdCA9IGJ1dHRvbi5pZDtcbi8vICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0KTtcbiAgfSk7XG59XG5cbi8vQ3JlYXRlcyBhIG5ldyBwcm9qZWN0IGJ1dHRvbiBmb3IgdGhlIHByb2plY3QgYmFyXG5mdW5jdGlvbiBtYWtlTmV3UHJvamVjdEJ1dHRvbihuYW1lKSB7XG4gIGNvbnN0IG5ld1Byb2plY3RCdXR0b24gPSBjcmVhdGVCdXR0b24obmFtZSk7XG4gIHByb2plY3RCYXJMaXN0ZW5lcihuZXdQcm9qZWN0QnV0dG9uKTtcbiAgcmV0dXJuIG5ld1Byb2plY3RCdXR0b247XG59XG5cbmFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVBZGRQcm9qZWN0Q2xpY2spO1xuY2FuY2VsQWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNhbmNlbEFkZFByb2plY3RDbGljayk7XG5cbmNvbnN0IHNldE5ld1Byb2plY3RMaXN0ZW5lciA9ICgpID0+IHtcbiAgbmV3UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB0b2dnbGVQcm9qZWN0SW5wdXQoKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBzZXROZXdQcm9qZWN0TGlzdGVuZXIsIGN1cnJlbnRQcm9qZWN0IH0iLCJpbXBvcnQgeyBhZGRUb1Byb2plY3RzLCBnZXRQcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzLmpzXCI7XG5pbXBvcnQgeyBtYWtlVG9EbyB9IGZyb20gXCIuL3RvRG9zLmpzXCI7XG5pbXBvcnQgeyBjdXJyZW50UHJvamVjdCB9IGZyb20gXCIuL2FkZFByb2plY3QuanNcIjtcblxuY29uc3QgbmV3VG9Eb0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctdG8tZG8nKTtcbmNvbnN0IG5ld1Rhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stZm9ybScpO1xuY29uc3QgdG9Eb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50by1kby1jb250YWluZXInKTtcblxuY29uc3QgdG9nZ2xlVGFza0Zvcm0gPSAoKSA9PiB7XG4gIG5ld1Rhc2tGb3JtLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3cnKTtcbn07XG5cbmNvbnN0IHNldE5ld1RvRG9MaXN0ZW5lciA9ICgpID0+IHtcbiAgbmV3VG9Eb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB0b2dnbGVUYXNrRm9ybSgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0VGFza0RhdGEoZm9ybSkge1xuICBjb25zdCBuZXdUYXNrID0gT2JqZWN0LmZyb21FbnRyaWVzKG5ldyBGb3JtRGF0YShmb3JtKSk7XG4gIGFkZFRvUHJvamVjdHMoXG4gICAgbWFrZVRvRG8oXG4gICAgICBuZXdUYXNrLnRpdGxlLFxuICAgICAgbmV3VGFzay5kZXNjcmlwdGlvbixcbiAgICAgIG5ld1Rhc2suZHVlRGF0ZSxcbiAgICAgIG5ld1Rhc2sucHJpb3JpdHksXG4gICAgICBuZXdUYXNrLm5vdGVzLFxuICAgICksXG4gICAgY3VycmVudFByb2plY3RcbiAgKTtcbiAgcmV0dXJuIG5ld1Rhc2s7XG59XG5cbmZ1bmN0aW9uIHNldEFkZFRhc2tDb25maXJtKCkge1xuICBuZXdUYXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGFkZFNpbmdsZVRhc2soZ2V0VGFza0RhdGEoZS50YXJnZXQpKTtcbiAgICByZXNldFRhc2tGb3JtKCk7XG4gIH0pO1xufVxuXG5jb25zdCByZXNldFRhc2tGb3JtID0gKCkgPT4ge1xuICBuZXdUYXNrRm9ybS5yZXNldCgpO1xuICB0b2dnbGVUYXNrRm9ybSgpO1xufVxuXG4vL1VwZGF0ZXMgZW50aXJlIGRpc3BsYXlcbmNvbnN0IHVwZGF0ZVRhc2tEaXNwbGF5ID0gKCkgPT4ge1xuICB0b0RvQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gIGNvbnN0IGN1cnJlbnRUYXNrQXJyYXkgPSBnZXRQcm9qZWN0cygpW2N1cnJlbnRQcm9qZWN0XTtcbiAgZm9yIChjb25zdCB0YXNrIG9mIGN1cnJlbnRUYXNrQXJyYXkpIHtcbiAgICBhcHBlbmRUYXNrKHRhc2sudGl0bGUsIHRhc2suZGVzY3JpcHRpb24sIHRhc2suZHVlRGF0ZSwgdGFzay5wcmlvcml0eSwgdGFzay5ub3Rlcyk7XG4gIH1cbn1cblxuLy9BZGRzIG9ubHkgb25lIHRhc2tcbmNvbnN0IGFkZFNpbmdsZVRhc2sgPSAobmV3VGFzaykgPT4ge1xuICBhcHBlbmRUYXNrKG5ld1Rhc2sudGl0bGUsIG5ld1Rhc2suZGVzY3JpcHRpb24sIG5ld1Rhc2suZHVlRGF0ZSwgbmV3VGFzay5wcmlvcml0eSwgbmV3VGFzay5ub3Rlcyk7XG59XG5cbmNvbnN0IGFwcGVuZFRhc2sgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMpID0+IHtcbiAgY29uc3QgdGFza0NhcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGFza0NhcmRDb250YWluZXIuaW5uZXJIVE1MID0gXG4gIGA8aDI+JHt0aXRsZX08L2gyPlxuICA8cD4ke2Rlc2NyaXB0aW9ufTwvcD5cbiAgPGg0PiR7ZHVlRGF0ZX08L2g0PlxuICA8cD4ke3ByaW9yaXR5fTwvcD5cbiAgPHA+JHtub3Rlc308L3A+YFxuXG4gIHRvRG9Db250YWluZXIuYXBwZW5kQ2hpbGQodGFza0NhcmRDb250YWluZXIpO1xufVxuXG5leHBvcnQgeyBzZXROZXdUb0RvTGlzdGVuZXIsIHNldEFkZFRhc2tDb25maXJtLCB1cGRhdGVUYXNrRGlzcGxheSB9IiwiY29uc3QgcHJvamVjdHMgPSB7XG4gIGluYm94OiBbXSxcbn07XG5cbmZ1bmN0aW9uIGdldFByb2plY3RzICgpIHtcbiAgcmV0dXJuIHByb2plY3RzO1xufVxuXG5mdW5jdGlvbiBhZGRUb1Byb2plY3RzICh0YXNrLCBwcm9qZWN0KSB7XG4gIHByb2plY3RzW3Byb2plY3RdID0gcHJvamVjdHNbcHJvamVjdF0gPz8gW107XG4gIHByb2plY3RzW3Byb2plY3RdLnB1c2godGFzayk7XG4gIGNvbnNvbGUubG9nKHRhc2suZ2V0RGF0YSgpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3QobmFtZSkge1xuICBpZiAoIXByb2plY3RzW25hbWVdKSB7XG4gICAgcHJvamVjdHNbbmFtZV0gPSBbXTtcbiAgfVxufVxuXG5leHBvcnQgeyBhZGRUb1Byb2plY3RzLCBnZXRQcm9qZWN0cyB9O1xuIiwiY2xhc3MgdG9EbyB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlIHx8IFwiTm8gRHVlIERhdGVcIjtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICAgIHRoaXMuY29tcGxldGVkID0gJ25vJztcbiAgfVxuXG4gIGdldERhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICBkdWVEYXRlOiB0aGlzLmR1ZURhdGUsXG4gICAgICBwcmlvcml0eTogdGhpcy5wcmlvcml0eSxcbiAgICAgIG5vdGVzOiB0aGlzLm5vdGVzLFxuICAgIH07XG4gIH1cbn1cblxuY29uc3QgbWFrZVRvRG8gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMpID0+IG5ldyB0b0RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzKTtcblxuZXhwb3J0IHsgbWFrZVRvRG8gfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHNldE5ld1Byb2plY3RMaXN0ZW5lciB9IGZyb20gXCIuL2FkZFByb2plY3QuanNcIjtcbmltcG9ydCB7IHNldE5ld1RvRG9MaXN0ZW5lciwgc2V0QWRkVGFza0NvbmZpcm0gfSBmcm9tIFwiLi9hZGRUb0Rvcy5qc1wiO1xuXG5cbnNldEFkZFRhc2tDb25maXJtKCk7XG5zZXROZXdUb0RvTGlzdGVuZXIoKTtcbnNldE5ld1Byb2plY3RMaXN0ZW5lcigpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9