import { addToProjects, getProjects } from "./projects.js";
import { makeToDo } from "./toDos.js";
import { currentProject } from "./addProject.js";

const newToDoButton = document.getElementById('new-to-do');
const newTaskForm = document.getElementById('task-form');
const toDoContainer = document.querySelector('.main-content');

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
}

function setAddTaskConfirm() {
  newTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    getTaskData(e.target);
    resetTaskForm();
  });
}

const resetTaskForm = () => {
  newTaskForm.reset();
  updateTaskDisplay();
  toggleTaskForm();
}

const updateTaskDisplay = () => {
  const currentTaskArray = getProjects()[currentProject];
  for (const task of currentTaskArray) {
    console.log(task);
    appendTask(task.title, task.description, task.dueDate, task.priority, task.notes);
  }
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
  console.log("appended");
}

export { setNewToDoListener, setAddTaskConfirm }