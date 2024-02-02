import { addToProjects, getProjects, removeTaskFromProjects, getAllTasks } from "./projects.js";
import { makeToDo } from "./toDos.js";
import { currentProject } from "./addProject.js";
import { format, isValid, isThisWeek, parseISO, isToday } from "date-fns";

const newToDoButton = document.getElementById('new-to-do');
const newTaskForm = document.getElementById('task-form');
const toDoContainer = document.querySelector('.to-do-container');
const taskButtons = Array.from(document.querySelectorAll('.task-section'));

let currentFilter = () => true;

window.onload = function () {
  document.getElementById("all").autofocus;
};

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
  newTask.dueDate = newTask.dueDate;
  return newTask;
}

function formatDate(date){
  let formattedDate = parseISO(date);
  return isValid(formattedDate) ? format(formattedDate, 'eee, MMM d') : 'No Due Date';
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

const getCurrentTaskArray = () => {
  return getProjects()[currentProject];
}

//Updates entire display
const updateTaskDisplay = (currentTaskArray) => {
  toDoContainer.innerHTML = "";
  for (const task of currentTaskArray) {
    appendTask(task);
  }
}

//Adds only one task
const addSingleTask = (newTask) => {
  addToProjects(
    makeToDo(
      newTask.title,
      newTask.description,
      newTask.dueDate,
      newTask.priority,
      newTask.notes,
    ),
    currentProject
  );
  if(currentFilter(newTask)) { appendTask(newTask); }
}

const createTaskCardHTML = (newTask) => `
  <h2>${newTask.title}</h2>
  <p>${newTask.description}</p>
  <h4>${formatDate(newTask.dueDate)}</h4>
  <p>${newTask.priority}</p>
  <h6>${newTask.notes}</h6>`;

const addButton = (text, clickHandler) => {
  const button = document.createElement('button');
  button.textContent = text;
  button.addEventListener('click', clickHandler);
  return button;
};

const addCompletedButton = () => addButton('Complete', (e) => {
  e.currentTarget.parentNode.classList.toggle('completed');
});

const addDeleteButton = (newTask) => addButton('Delete', (e) => {
  e.currentTarget.parentNode.remove();
  removeTaskFromProjects(newTask);
});

const appendTask = (newTask) => {
  console.log(newTask);
  const taskCardContainer = document.createElement('div');
  taskCardContainer.innerHTML = createTaskCardHTML(newTask);

  const completedButton = addCompletedButton();
  taskCardContainer.insertBefore(completedButton, taskCardContainer.children[0]);

  const deleteButton = addDeleteButton(newTask);
  taskCardContainer.appendChild(deleteButton);

  toDoContainer.appendChild(taskCardContainer);
};

taskButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    switch (btn.id) {
      case 'today':
        currentFilter = (task) => isToday(task.dueDate);
        break;
      case 'week':
        currentFilter = (task) => isThisWeek(task.dueDate);
        break;
      case 'all':
        currentFilter = () => true; // Reset filter, includes all tasks
        break;
      default:
        break;
    }

    filterDisplay(currentFilter);
  });
});

const filterDisplay = (currentFilter) => {
  const selection = getAllTasks().filter(task => currentFilter(task));
  updateTaskDisplay(selection);
}

export { setNewToDoListener, setAddTaskConfirm, updateTaskDisplay }