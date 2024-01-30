import { createNewProject as addToProjectArray } from './projects.js';

const newProjectButton = document.getElementById('new-project');
const projectInput = document.getElementById('project-input');
const addProjectButton = document.getElementById('add-project');
const cancelAddProject = document.getElementById('cancel-add-project');
const projectsContainer = document.querySelector('.projects-container');

let currentProject = 'inbox';

const toggleProjectInput = () => {
  projectInput.classList.toggle('show');
  addProjectButton.classList.toggle('show');
  cancelAddProject.classList.toggle('show');
};

const handleAddProjectClick = () => {
  const projectName = projectInput.value;
  if(!projectName) return;

  addToProjectArray(projectName);
  resetNewProjectInput();
  projectsContainer.appendChild(makeNewProjectButton(projectName));
};

const handleCancelAddProjectClick = () => {
  resetNewProjectInput();
  toggleProjectInput();
};

const resetNewProjectInput = () => {
  projectInput.value = '';
};

const createButton = (name) => {
  let newButton = document.createElement('button');
  newButton.textContent = name;
  newButton.id = name;
  return newButton;
}

const projectBarListener = (button) => {
  button.addEventListener('click', () => {
    currentProject = button.id;
    console.log(currentProject);
  });
}

function makeNewProjectButton(name) {
  const newProjectButton = createButton(name);
  projectBarListener(newProjectButton);
  return newProjectButton;
}

addProjectButton.addEventListener('click', handleAddProjectClick);
cancelAddProject.addEventListener('click', handleCancelAddProjectClick);

const setNewProjectListener = () => {
  newProjectButton.addEventListener('click', () => {
    toggleProjectInput();
  });
};

export { setNewProjectListener }