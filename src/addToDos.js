import { addToProjects, getProjects } from "./projects.js";
import { makeToDo } from "./toDos.js";
import { currentProject } from "./addProject.js";

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
  const currentTaskArray = getProjects()[currentProject];
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

export { setNewToDoListener, setAddTaskConfirm, updateTaskDisplay }