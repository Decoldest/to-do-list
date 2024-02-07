import { addToProjects, removeTaskFromProjects, getAllTasks, upDateComplete } from "./projects.js";
import { makeToDo } from "./toDos.js";
import { currentProject, updateCurrentProject } from "./addProject.js";
import { format, isValid, isThisWeek, parseISO, isToday } from "date-fns";

const newToDoButton = document.getElementById('new-to-do');
const newTaskForm = document.getElementById('task-form');
const toDoContainer = document.querySelector('.to-do-container');
const taskButtons = Array.from(document.querySelectorAll('.task-section'));
const editForm = document.getElementById('edit-form')
const displayCategory = document.getElementById('category');

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

document.getElementById('modal-cancel').addEventListener('click', function(e) {
  e.preventDefault();
  toggleTaskForm();
});

const resetTaskForm = () => {
  newTaskForm.reset();
  toggleTaskForm();
}

//Updates entire display
const updateTaskDisplay = (currentTaskArray) => {
  toDoContainer.innerHTML = "";
  if (currentTaskArray.length === 0) {
    toDoContainer.textContent = "No tasks.";
  }
  for (const task of currentTaskArray) {
    appendTask(task);
  }
}

//Adds only one task
const addSingleTask = (newTask) => {
  const temp = makeToDo(
    newTask.title,
    newTask.description,
    newTask.dueDate,
    newTask.priority,
    newTask.notes,
    currentProject,
  );
  addToProjects(
    temp,
    currentProject
  );
  if(currentFilter(temp)) { appendTask(temp); }
}

const createTaskCardHTML = (newTask) => `
  <h2>${newTask.title}</h2>
  <h4>${newTask.description}</h4>
  <h4>${formatDate(newTask.dueDate)}</h4>
  <p>${newTask.priority}</p>
  <h6>${newTask.notes}</h6>`;

const addButton = (text, clickHandler) => {
  const button = document.createElement('button');
  button.textContent = text;
  button.addEventListener('click', clickHandler);
  return button;
};

const addCompletedButton = (newTask) => addButton('Complete', (e) => {
  e.currentTarget.parentNode.classList.toggle('pending');
  e.currentTarget.parentNode.classList.toggle('completed');
  upDateComplete(newTask);
});

const addDeleteButton = (newTask) => addButton('Delete', (e) => {
  e.currentTarget.parentNode.remove();
  removeTaskFromProjects(newTask);
});

const addEditButton = (task) => addButton('Edit', (e) => {
  editToDo(task, e);
});

const editToDo = (task, e) => {
  if (!editForm.classList.contains('hidden')) return;
  let taskCardContainer = e.currentTarget.parentNode;
  editForm.classList.remove('hidden');
  taskCardContainer.classList.add('hidden');
  let completed = taskCardContainer.classList.contains('completed') ? 'yes' : 'no'; 
  
  taskCardContainer.parentNode.insertBefore(setEditForm(task, completed), taskCardContainer);
}

const setEditForm = (task, completed) => {
  populateEditForm(task);

  function populateEditForm(task) {
    document.getElementById("edit-title").value = task.title;
    document.getElementById("edit-description").value = task.description || "Description...";
    document.getElementById("edit-dueDate").value = task.dueDate;
    document.getElementById("edit-priority").value = task.priority || "Low";
    document.getElementById("edit-notes").value = task.notes || "Notes";
  };

  editForm.addEventListener("submit", (e) => {
    e.preventDefault();
    editForm.classList.add('hidden');
    const temp = getTaskData(e.target);
    if (completed === 'yes') {
      temp.completed = 'yes';
    }
    e.currentTarget.nextSibling.replaceWith(makeTaskUI(temp));
  });

  return editForm;
}

function makeTaskUI (task) {
  const taskCardContainer = document.createElement('div');
  taskCardContainer.innerHTML = createTaskCardHTML(task);

  const completedButton = addCompletedButton(task);
  taskCardContainer.insertBefore(completedButton, taskCardContainer.children[0]);

  const editButton = addEditButton(task, taskCardContainer);
  taskCardContainer.appendChild(editButton);

  const deleteButton = addDeleteButton(task, taskCardContainer);
  taskCardContainer.appendChild(deleteButton);
  
  if (task.completed === 'yes'){
    taskCardContainer.classList.add('completed');
  } else {
    taskCardContainer.classList.add('pending');
  }

  return taskCardContainer;
}

const appendTask = (newTask) => {
  toDoContainer.appendChild(makeTaskUI(newTask));
};

taskButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    switch (btn.id) {
      case 'today':
        displayCategory.textContent = 'Today';
        currentFilter = (task) => isToday(task.dueDate);
        break;
      case 'week':
        displayCategory.textContent = 'This Week';
        currentFilter = (task) => isThisWeek(task.dueDate);
        break;
      case 'all':
        displayCategory.textContent = 'All Tasks';
        currentFilter = () => true; // Reset filter, includes all tasks
        break;
      default:
        break;
    }
    updateCurrentProject('');
    filterDisplay(currentFilter);
  });
});

const filterDisplay = (currentFilter) => {
  const selection = getAllTasks().filter(task => currentFilter(task));
  updateTaskDisplay(selection);
}

export { setNewToDoListener, setAddTaskConfirm, updateTaskDisplay, filterDisplay }