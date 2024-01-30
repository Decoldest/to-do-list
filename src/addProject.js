import { createNewProject } from './projects.js'

const projectInput = document.getElementById('project-input');
const addProjectButton = document.getElementById('add-project');
const cancelAddProject = document.getElementById('cancel-add-project');

const toggleProjectInput = () => {
  projectInput.classList.toggle('show');
  addProjectButton.classList.toggle('show');
  cancelAddProject.classList.toggle('show');
};

const handleAddProjectClick = () => {
  createNewProject(projectInput.value);
  resetNewProjectInput();
};

const handleCancelAddProjectClick = () => {
  resetNewProjectInput();
  toggleProjectInput();
};

const resetNewProjectInput = () => {
  projectInput.value = '';
};

addProjectButton.addEventListener('click', handleAddProjectClick);
cancelAddProject.addEventListener('click', handleCancelAddProjectClick);

export { toggleProjectInput };