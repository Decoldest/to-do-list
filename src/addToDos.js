import { addToProjects, getProjects, removeTaskFromProjects } from "./projects.js";
import { makeToDo } from "./toDos.js";
import { currentProject } from "./addProject.js";
import { format, isValid } from "date-fns";

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
  newTask.dueDate = formatDate(newTask.dueDate)
  return newTask;

  function formatDate(date){
    let formattedDate = new Date(date);

    return isValid(formattedDate) ? format(formattedDate, 'eee, MMM wo') :
      'No Due Date';
  }
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
const updateTaskDisplay = () => {
  toDoContainer.innerHTML = "";
  const currentTaskArray = getCurrentTaskArray();
  for (const task of currentTaskArray) {
    appendTask(task.title, task.description, task.dueDate, task.priority, task.notes);
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
  appendTask(newTask);
}

const appendTask = (newTask) => {
  const taskCardContainer = document.createElement('div');
  
  taskCardContainer.innerHTML = 
  `<h2>${newTask.title}</h2>
  <p>${newTask.description}</p>
  <h4>${newTask.dueDate}</h4>
  <p>${newTask.priority}</p>
  <p>${newTask.notes}</p>`

  const completedButton = addCompletedButton();
  taskCardContainer.insertBefore(completedButton, taskCardContainer.children[0])

  const deleteButton = addDeleteTaskListener(newTask);
  taskCardContainer.appendChild(deleteButton);
  
  toDoContainer.appendChild(taskCardContainer);
}

const addCompletedButton = () => {
  const completedButton = document.createElement('button');
  completedButton.addEventListener('click', (e) => {
    e.currentTarget.parentNode.classList.toggle('completed');
  });
  return completedButton;
}

const addDeleteTaskListener = (newTask) => {
  const deleteButton = document.createElement('button');
  deleteButton.addEventListener('click', (e) => {
    e.currentTarget.parentNode.remove();
    removeTaskFromProjects(newTask);
  });
  return deleteButton;
}

export { setNewToDoListener, setAddTaskConfirm, updateTaskDisplay }