import { addToProjects, getProjects } from "./projects.js";
import { makeToDo } from "./toDos.js";

let currentProject = 'inbox';
const buttons = Array.from(document.querySelectorAll('.current-project'));

for (let button of buttons) {
  button.addEventListener('click', () => {
    currentProject = button.id;
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
    currentProject,
  );
  console.log(getProjects());
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
// addToProjects(makeToDo('fg', 'sfg', 'tert', 'wt', 'wrttrt'), 'Guys');
