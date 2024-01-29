import { makeToDo } from './toDos.js';

const projects = {
  'inbox': ['sfas', 'afafff'],
}

function getProjects() {
  return projects;
}

function addToProjects(task, project) {
  projects[project] = [task];
}

addToProjects(makeToDo('title', 'description', 'dueDate', 'priority', 'notes', 'checklist'), 'Groceries');


export { addToProjects, getProjects };