import { makeToDo } from './toDos.js';

const projects = {
  'inbox': [],
}

function getProjects() {
  return projects;
}

function addToProjects(task, project) {
  projects[project] = projects[project] ?? [];
  projects[project].push(task);
}

addToProjects(makeToDo('title', 'description', 'dueDate', 'priority', 'notes'), 'Groceries');
addToProjects(makeToDo('title', 'description', 'dueDate', 'priority', 'notes'), 'inbox');
addToProjects(makeToDo('teetle', 'description', 'dueDate', 'priority', 'notes'), 'inbox');


export { makeToDo, addToProjects, getProjects };