import { createNewProject as addToProjectArray, getAllTasks } from './projects.js';
import { updateTaskDisplay } from './addToDos.js'


const newProjectButton = document.getElementById('new-project');
const projectInput = document.getElementById('project-input');
const addProjectButton = document.getElementById('add-project');
const cancelAddProject = document.getElementById('cancel-add-project');
const projectsContainer = document.querySelector('.projects-container');

let currentProject = '';

//Allows new project input to slide in 
const toggleProjectInput = () => {
  projectInput.classList.toggle('show');
  addProjectButton.classList.toggle('show');
  cancelAddProject.classList.toggle('show');
};

const handleAddProjectClick = () => {
  const projectName = projectInput.value;
  //Prevent adding empty button
  if(!projectName) return;

  addToProjectArray(projectName);
  resetNewProjectInput();
  projectsContainer.appendChild(makeNewProjectButton(projectName));
  toggleProjectInput();
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
    updateCurrentProject(button.id);
    console.log(currentProject);
    filterDisplay(currentProject);
  });
}

const updateCurrentProject = (project) => {
  currentProject = project;
}

const filterDisplay = (currentProject) => {
  const selection = getAllTasks().filter(task => task.project === currentProject);
  updateTaskDisplay(selection);
}

//Creates a new project button for the project bar
function makeNewProjectButton(name) {
  const newProjectButton = createButton(name);
  projectBarListener(newProjectButton);
  return newProjectButton;
}

addProjectButton.addEventListener('click', handleAddProjectClick);
cancelAddProject.addEventListener('click', handleCancelAddProjectClick);

document.querySelectorAll('.current-project').forEach(button => {
    projectBarListener(button);
});

const setNewProjectListener = () => {
  newProjectButton.addEventListener('click', () => {
    toggleProjectInput();
  });
};

export { setNewProjectListener, currentProject, updateCurrentProject }