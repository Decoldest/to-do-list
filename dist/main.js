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
/* harmony export */   setNewProjectListener: () => (/* binding */ setNewProjectListener)
/* harmony export */ });
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");


const newProjectButton = document.getElementById('new-project');
const projectInput = document.getElementById('project-input');
const addProjectButton = document.getElementById('add-project');
const cancelAddProject = document.getElementById('cancel-add-project');
const projectsContainer = document.querySelector('.projects-container');

let currentProject = 'inbox';

const toggleProjectInput = () => {
  projectInput.classList.toggle('show');
  addProjectButton.classList.toggle('show');
  cancelAddProject.classList.toggle('show');
};

const handleAddProjectClick = () => {
  const projectName = projectInput.value;
  if(!projectName) return;

  (0,_projects_js__WEBPACK_IMPORTED_MODULE_0__.createNewProject)(projectName);
  resetNewProjectInput();
  projectsContainer.appendChild(makeNewProjectButton(projectName));
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
    console.log(currentProject);
  });
}

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
/* harmony export */   setNewToDoListener: () => (/* binding */ setNewToDoListener)
/* harmony export */ });
const newToDoButton = document.getElementById('new-to-do');
const newTaskForm = document.getElementById('task-form');

const toggleTaskForm = () => {
  newTaskForm.classList.toggle('show');
};

const setNewToDoListener = () => {
  newToDoButton.addEventListener('click', () => {
    toggleTaskForm();
  });
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
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");
/* harmony import */ var _toDos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDos.js */ "./src/toDos.js");
/* harmony import */ var _addProject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addProject.js */ "./src/addProject.js");
/* harmony import */ var _addToDos_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addToDos.js */ "./src/addToDos.js");






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
    currentProject,
  );
  console.log((0,_projects_js__WEBPACK_IMPORTED_MODULE_0__.getProjects)());
}

function setAddTaskConfirm() {
  const toDoForm = document.getElementById("task-form");
  toDoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    getTaskData(e.target);
    toDoForm.reset();
  });
}

setAddTaskConfirm();
(0,_addToDos_js__WEBPACK_IMPORTED_MODULE_3__.setNewToDoListener)();
(0,_addProject_js__WEBPACK_IMPORTED_MODULE_2__.setNewProjectListener)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0U7O0FBRXRFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSw4REFBaUI7QUFDbkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVzQzs7Ozs7Ozs7Ozs7Ozs7O0FDcEJ0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztVQ3BCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTjJEO0FBQ3JCO0FBQ2tCO0FBQ0w7OztBQUduRDtBQUNBO0FBQ0EsRUFBRSwyREFBYTtBQUNmLElBQUksbURBQVE7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyx5REFBVztBQUN6Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSxnRUFBa0I7QUFDbEIscUVBQXFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9hZGRQcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvYWRkVG9Eb3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvRG9zLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZU5ld1Byb2plY3QgYXMgYWRkVG9Qcm9qZWN0QXJyYXkgfSBmcm9tICcuL3Byb2plY3RzLmpzJztcblxuY29uc3QgbmV3UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctcHJvamVjdCcpO1xuY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtaW5wdXQnKTtcbmNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXByb2plY3QnKTtcbmNvbnN0IGNhbmNlbEFkZFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FuY2VsLWFkZC1wcm9qZWN0Jyk7XG5jb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy1jb250YWluZXInKTtcblxubGV0IGN1cnJlbnRQcm9qZWN0ID0gJ2luYm94JztcblxuY29uc3QgdG9nZ2xlUHJvamVjdElucHV0ID0gKCkgPT4ge1xuICBwcm9qZWN0SW5wdXQuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpO1xuICBhZGRQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3cnKTtcbiAgY2FuY2VsQWRkUHJvamVjdC5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XG59O1xuXG5jb25zdCBoYW5kbGVBZGRQcm9qZWN0Q2xpY2sgPSAoKSA9PiB7XG4gIGNvbnN0IHByb2plY3ROYW1lID0gcHJvamVjdElucHV0LnZhbHVlO1xuICBpZighcHJvamVjdE5hbWUpIHJldHVybjtcblxuICBhZGRUb1Byb2plY3RBcnJheShwcm9qZWN0TmFtZSk7XG4gIHJlc2V0TmV3UHJvamVjdElucHV0KCk7XG4gIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKG1ha2VOZXdQcm9qZWN0QnV0dG9uKHByb2plY3ROYW1lKSk7XG59O1xuXG5jb25zdCBoYW5kbGVDYW5jZWxBZGRQcm9qZWN0Q2xpY2sgPSAoKSA9PiB7XG4gIHJlc2V0TmV3UHJvamVjdElucHV0KCk7XG4gIHRvZ2dsZVByb2plY3RJbnB1dCgpO1xufTtcblxuY29uc3QgcmVzZXROZXdQcm9qZWN0SW5wdXQgPSAoKSA9PiB7XG4gIHByb2plY3RJbnB1dC52YWx1ZSA9ICcnO1xufTtcblxuY29uc3QgY3JlYXRlQnV0dG9uID0gKG5hbWUpID0+IHtcbiAgbGV0IG5ld0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBuZXdCdXR0b24udGV4dENvbnRlbnQgPSBuYW1lO1xuICBuZXdCdXR0b24uaWQgPSBuYW1lO1xuICByZXR1cm4gbmV3QnV0dG9uO1xufVxuXG5jb25zdCBwcm9qZWN0QmFyTGlzdGVuZXIgPSAoYnV0dG9uKSA9PiB7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjdXJyZW50UHJvamVjdCA9IGJ1dHRvbi5pZDtcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBtYWtlTmV3UHJvamVjdEJ1dHRvbihuYW1lKSB7XG4gIGNvbnN0IG5ld1Byb2plY3RCdXR0b24gPSBjcmVhdGVCdXR0b24obmFtZSk7XG4gIHByb2plY3RCYXJMaXN0ZW5lcihuZXdQcm9qZWN0QnV0dG9uKTtcbiAgcmV0dXJuIG5ld1Byb2plY3RCdXR0b247XG59XG5cbmFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVBZGRQcm9qZWN0Q2xpY2spO1xuY2FuY2VsQWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNhbmNlbEFkZFByb2plY3RDbGljayk7XG5cbmNvbnN0IHNldE5ld1Byb2plY3RMaXN0ZW5lciA9ICgpID0+IHtcbiAgbmV3UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB0b2dnbGVQcm9qZWN0SW5wdXQoKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBzZXROZXdQcm9qZWN0TGlzdGVuZXIgfSIsImNvbnN0IG5ld1RvRG9CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXRvLWRvJyk7XG5jb25zdCBuZXdUYXNrRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWZvcm0nKTtcblxuY29uc3QgdG9nZ2xlVGFza0Zvcm0gPSAoKSA9PiB7XG4gIG5ld1Rhc2tGb3JtLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3cnKTtcbn07XG5cbmNvbnN0IHNldE5ld1RvRG9MaXN0ZW5lciA9ICgpID0+IHtcbiAgbmV3VG9Eb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB0b2dnbGVUYXNrRm9ybSgpO1xuICB9KTtcbn1cblxuZXhwb3J0IHsgc2V0TmV3VG9Eb0xpc3RlbmVyIH0iLCJjb25zdCBwcm9qZWN0cyA9IHtcbiAgaW5ib3g6IFtdLFxufTtcblxuZnVuY3Rpb24gZ2V0UHJvamVjdHMgKCkge1xuICByZXR1cm4gcHJvamVjdHM7XG59XG5cbmZ1bmN0aW9uIGFkZFRvUHJvamVjdHMgKHRhc2ssIHByb2plY3QpIHtcbiAgcHJvamVjdHNbcHJvamVjdF0gPSBwcm9qZWN0c1twcm9qZWN0XSA/PyBbXTtcbiAgcHJvamVjdHNbcHJvamVjdF0ucHVzaCh0YXNrKTtcbiAgY29uc29sZS5sb2codGFzay5nZXREYXRhKCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTmV3UHJvamVjdChuYW1lKSB7XG4gIGlmICghcHJvamVjdHNbbmFtZV0pIHtcbiAgICBwcm9qZWN0c1tuYW1lXSA9IFtdO1xuICB9XG59XG5cbmV4cG9ydCB7IGFkZFRvUHJvamVjdHMsIGdldFByb2plY3RzIH07XG4iLCJjbGFzcyB0b0RvIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGUgfHwgXCJObyBEdWUgRGF0ZVwiO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLm5vdGVzID0gbm90ZXM7XG4gIH1cblxuICBnZXREYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogdGhpcy50aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgZHVlRGF0ZTogdGhpcy5kdWVEYXRlLFxuICAgICAgcHJpb3JpdHk6IHRoaXMucHJpb3JpdHksXG4gICAgICBub3RlczogdGhpcy5ub3RlcyxcbiAgICB9O1xuICB9XG59XG5cbmNvbnN0IG1ha2VUb0RvID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzKSA9PiBuZXcgdG9Ebyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3Rlcyk7XG5cbmV4cG9ydCB7IG1ha2VUb0RvIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBhZGRUb1Byb2plY3RzLCBnZXRQcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzLmpzXCI7XG5pbXBvcnQgeyBtYWtlVG9EbyB9IGZyb20gXCIuL3RvRG9zLmpzXCI7XG5pbXBvcnQgeyBzZXROZXdQcm9qZWN0TGlzdGVuZXIgfSBmcm9tIFwiLi9hZGRQcm9qZWN0LmpzXCI7XG5pbXBvcnQgeyBzZXROZXdUb0RvTGlzdGVuZXIgfSBmcm9tIFwiLi9hZGRUb0Rvcy5qc1wiO1xuXG5cbmZ1bmN0aW9uIGdldFRhc2tEYXRhKGZvcm0pIHtcbiAgY29uc3QgbmV3VGFzayA9IE9iamVjdC5mcm9tRW50cmllcyhuZXcgRm9ybURhdGEoZm9ybSkpO1xuICBhZGRUb1Byb2plY3RzKFxuICAgIG1ha2VUb0RvKFxuICAgICAgbmV3VGFzay50aXRsZSxcbiAgICAgIG5ld1Rhc2suZGVzY3JpcHRpb24sXG4gICAgICBuZXdUYXNrLmR1ZURhdGUsXG4gICAgICBuZXdUYXNrLnByaW9yaXR5LFxuICAgICAgbmV3VGFzay5ub3RlcyxcbiAgICApLFxuICAgIGN1cnJlbnRQcm9qZWN0LFxuICApO1xuICBjb25zb2xlLmxvZyhnZXRQcm9qZWN0cygpKTtcbn1cblxuZnVuY3Rpb24gc2V0QWRkVGFza0NvbmZpcm0oKSB7XG4gIGNvbnN0IHRvRG9Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWZvcm1cIik7XG4gIHRvRG9Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZ2V0VGFza0RhdGEoZS50YXJnZXQpO1xuICAgIHRvRG9Gb3JtLnJlc2V0KCk7XG4gIH0pO1xufVxuXG5zZXRBZGRUYXNrQ29uZmlybSgpO1xuc2V0TmV3VG9Eb0xpc3RlbmVyKCk7XG5zZXROZXdQcm9qZWN0TGlzdGVuZXIoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==