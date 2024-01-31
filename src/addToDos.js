import { addToProjects, getProjects } from "./projects.js";
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
  console.log(newTask);
  newTask.dueDate = formatDate(newTask.dueDate)
  return newTask;

  function formatDate(date){
    let formattedDate = new Date(newTask.dueDate);

    return isValid(formattedDate) ? format(formattedDate, 'eee, PPP') :
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