import { addToProjects, getProjects } from './projects.js';
import { makeToDo } from './toDos.js';
console.log("hello");

function setAddTaskConfirm() {
  document.getElementById('task-form').addEventListener("submit", function (e){
    e.preventDefault();
    getTaskData(e.target)
  });
}

function getTaskData(form) {
  const newTask = Object.fromEntries(new FormData(form));
  addToProjects(makeToDo(newTask.title, newTask.description, newTask.dueDate, newTask.priority, newTask.notes), 'inbox');
  console.log(getProjects());
}


setAddTaskConfirm()
//addToProjects(makeToDo('fg', 'sfg', 'tert', 'wt', 'wrttrt'), 'Guys');

