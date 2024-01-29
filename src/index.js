import { addToProjects, getProjects } from './projects.js';
console.log("hello");

function setAddTaskConfirm() {
  document.getElementById('task-form').addEventListener("submit", function (e){
    e.preventDefault();
  });
}



console.log(getProjects());