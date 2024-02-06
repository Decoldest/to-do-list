import { setNewProjectListener } from "./addProject.js";
import { setNewToDoListener, setAddTaskConfirm } from "./addToDos.js";

window.addEventListener('load', () => {
  setAddTaskConfirm();
  setNewToDoListener();
  setNewProjectListener();
  document.getElementById('all').click();
  document.getElementById('all').focus();
});

