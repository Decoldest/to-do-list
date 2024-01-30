import { addToProjects, getProjects } from "./projects.js";
import { makeToDo } from "./toDos.js";
import { setNewProjectListener } from "./addProject.js";
import { setNewToDoListener } from "./addToDos.js";


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
setNewToDoListener();
setNewProjectListener();
