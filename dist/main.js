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
/* harmony export */   toggleProjectInput: () => (/* binding */ toggleProjectInput)
/* harmony export */ });
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");


const projectInput = document.getElementById('project-input');
const addProjectButton = document.getElementById('add-project');
const cancelAddProject = document.getElementById('cancel-add-project');

const toggleProjectInput = () => {
  projectInput.classList.toggle('show');
  addProjectButton.classList.toggle('show');
  cancelAddProject.classList.toggle('show');
};

const handleAddProjectClick = () => {
  (0,_projects_js__WEBPACK_IMPORTED_MODULE_0__.createNewProject)(projectInput.value);
  resetNewProjectInput();
};

const handleCancelAddProjectClick = () => {
  resetNewProjectInput();
  toggleProjectInput();
};

const resetNewProjectInput = () => {
  projectInput.value = '';
};

addProjectButton.addEventListener('click', handleAddProjectClick);
cancelAddProject.addEventListener('click', handleCancelAddProjectClick);



/***/ }),

/***/ "./src/addToDos.js":
/*!*************************!*\
  !*** ./src/addToDos.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toggleTaskForm: () => (/* binding */ toggleTaskForm)
/* harmony export */ });
const addToDo = document.getElementById("new-to-do");
const newTaskForm = document.getElementById('task-form');

const toggleTaskForm = () => {
  newTaskForm.classList.toggle('show');
};




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






let currentProject = 'inbox';
const buttons = Array.from(document.querySelectorAll('.current-project'));

for (let button of buttons) {
  button.addEventListener('click', () => {
    currentProject = button.id;
  });
}

document.getElementById('new-project').onclick = _addProject_js__WEBPACK_IMPORTED_MODULE_2__.toggleProjectInput;
document.getElementById('new-to-do').onclick = _addToDos_js__WEBPACK_IMPORTED_MODULE_3__.toggleTaskForm;

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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7O0FBRWhEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSw4REFBZ0I7QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVzQzs7Ozs7Ozs7Ozs7Ozs7O0FDcEJ0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztVQ3BCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTjJEO0FBQ3JCO0FBQ2U7QUFDTjs7O0FBRy9DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLGlEQUFpRCw4REFBa0I7QUFDbkUsK0NBQStDLHdEQUFjOztBQUU3RDtBQUNBO0FBQ0EsRUFBRSwyREFBYTtBQUNmLElBQUksbURBQVE7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyx5REFBVztBQUN6Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2FkZFByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9hZGRUb0Rvcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9Eb3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlTmV3UHJvamVjdCB9IGZyb20gJy4vcHJvamVjdHMuanMnXG5cbmNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWlucHV0Jyk7XG5jb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1wcm9qZWN0Jyk7XG5jb25zdCBjYW5jZWxBZGRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbmNlbC1hZGQtcHJvamVjdCcpO1xuXG5jb25zdCB0b2dnbGVQcm9qZWN0SW5wdXQgPSAoKSA9PiB7XG4gIHByb2plY3RJbnB1dC5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XG4gIGFkZFByb2plY3RCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpO1xuICBjYW5jZWxBZGRQcm9qZWN0LmNsYXNzTGlzdC50b2dnbGUoJ3Nob3cnKTtcbn07XG5cbmNvbnN0IGhhbmRsZUFkZFByb2plY3RDbGljayA9ICgpID0+IHtcbiAgY3JlYXRlTmV3UHJvamVjdChwcm9qZWN0SW5wdXQudmFsdWUpO1xuICByZXNldE5ld1Byb2plY3RJbnB1dCgpO1xufTtcblxuY29uc3QgaGFuZGxlQ2FuY2VsQWRkUHJvamVjdENsaWNrID0gKCkgPT4ge1xuICByZXNldE5ld1Byb2plY3RJbnB1dCgpO1xuICB0b2dnbGVQcm9qZWN0SW5wdXQoKTtcbn07XG5cbmNvbnN0IHJlc2V0TmV3UHJvamVjdElucHV0ID0gKCkgPT4ge1xuICBwcm9qZWN0SW5wdXQudmFsdWUgPSAnJztcbn07XG5cbmFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVBZGRQcm9qZWN0Q2xpY2spO1xuY2FuY2VsQWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNhbmNlbEFkZFByb2plY3RDbGljayk7XG5cbmV4cG9ydCB7IHRvZ2dsZVByb2plY3RJbnB1dCB9OyIsImNvbnN0IGFkZFRvRG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy10by1kb1wiKTtcbmNvbnN0IG5ld1Rhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stZm9ybScpO1xuXG5jb25zdCB0b2dnbGVUYXNrRm9ybSA9ICgpID0+IHtcbiAgbmV3VGFza0Zvcm0uY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpO1xufTtcblxuXG5leHBvcnQgeyB0b2dnbGVUYXNrRm9ybSB9IiwiY29uc3QgcHJvamVjdHMgPSB7XG4gIGluYm94OiBbXSxcbn07XG5cbmZ1bmN0aW9uIGdldFByb2plY3RzICgpIHtcbiAgcmV0dXJuIHByb2plY3RzO1xufVxuXG5mdW5jdGlvbiBhZGRUb1Byb2plY3RzICh0YXNrLCBwcm9qZWN0KSB7XG4gIHByb2plY3RzW3Byb2plY3RdID0gcHJvamVjdHNbcHJvamVjdF0gPz8gW107XG4gIHByb2plY3RzW3Byb2plY3RdLnB1c2godGFzayk7XG4gIGNvbnNvbGUubG9nKHRhc2suZ2V0RGF0YSgpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3QobmFtZSkge1xuICBpZiAoIXByb2plY3RzW25hbWVdKSB7XG4gICAgcHJvamVjdHNbbmFtZV0gPSBbXTtcbiAgfVxufVxuXG5leHBvcnQgeyBhZGRUb1Byb2plY3RzLCBnZXRQcm9qZWN0cyB9O1xuIiwiY2xhc3MgdG9EbyB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlIHx8IFwiTm8gRHVlIERhdGVcIjtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICB9XG5cbiAgZ2V0RGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgIGR1ZURhdGU6IHRoaXMuZHVlRGF0ZSxcbiAgICAgIHByaW9yaXR5OiB0aGlzLnByaW9yaXR5LFxuICAgICAgbm90ZXM6IHRoaXMubm90ZXMsXG4gICAgfTtcbiAgfVxufVxuXG5jb25zdCBtYWtlVG9EbyA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcykgPT4gbmV3IHRvRG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMpO1xuXG5leHBvcnQgeyBtYWtlVG9EbyB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgYWRkVG9Qcm9qZWN0cywgZ2V0UHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0cy5qc1wiO1xuaW1wb3J0IHsgbWFrZVRvRG8gfSBmcm9tIFwiLi90b0Rvcy5qc1wiO1xuaW1wb3J0IHsgdG9nZ2xlUHJvamVjdElucHV0IH0gZnJvbSBcIi4vYWRkUHJvamVjdC5qc1wiO1xuaW1wb3J0IHsgdG9nZ2xlVGFza0Zvcm0gfSBmcm9tIFwiLi9hZGRUb0Rvcy5qc1wiO1xuXG5cbmxldCBjdXJyZW50UHJvamVjdCA9ICdpbmJveCc7XG5jb25zdCBidXR0b25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY3VycmVudC1wcm9qZWN0JykpO1xuXG5mb3IgKGxldCBidXR0b24gb2YgYnV0dG9ucykge1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY3VycmVudFByb2plY3QgPSBidXR0b24uaWQ7XG4gIH0pO1xufVxuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXByb2plY3QnKS5vbmNsaWNrID0gdG9nZ2xlUHJvamVjdElucHV0O1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy10by1kbycpLm9uY2xpY2sgPSB0b2dnbGVUYXNrRm9ybTtcblxuZnVuY3Rpb24gZ2V0VGFza0RhdGEoZm9ybSkge1xuICBjb25zdCBuZXdUYXNrID0gT2JqZWN0LmZyb21FbnRyaWVzKG5ldyBGb3JtRGF0YShmb3JtKSk7XG4gIGFkZFRvUHJvamVjdHMoXG4gICAgbWFrZVRvRG8oXG4gICAgICBuZXdUYXNrLnRpdGxlLFxuICAgICAgbmV3VGFzay5kZXNjcmlwdGlvbixcbiAgICAgIG5ld1Rhc2suZHVlRGF0ZSxcbiAgICAgIG5ld1Rhc2sucHJpb3JpdHksXG4gICAgICBuZXdUYXNrLm5vdGVzLFxuICAgICksXG4gICAgY3VycmVudFByb2plY3QsXG4gICk7XG4gIGNvbnNvbGUubG9nKGdldFByb2plY3RzKCkpO1xufVxuXG5mdW5jdGlvbiBzZXRBZGRUYXNrQ29uZmlybSgpIHtcbiAgY29uc3QgdG9Eb0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZm9ybVwiKTtcbiAgdG9Eb0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBnZXRUYXNrRGF0YShlLnRhcmdldCk7XG4gICAgdG9Eb0Zvcm0ucmVzZXQoKTtcbiAgfSk7XG59XG5cbnNldEFkZFRhc2tDb25maXJtKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=