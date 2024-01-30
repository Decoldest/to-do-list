const projectInput = document.getElementById('project-input');
const addProjectButton = document.getElementById('add');
const cancelAddProject = document.getElementById('cancel');

function toggleProjectInput() {
  projectInput.classList.toggle('show');
  addProjectButton.classList.toggle('show');
  cancelAddProject.classList.toggle('show');
}

addProjectButton.addEventListener('click', () => {
  let newProjectName = projectInput.value;
  resetNewProjectInput();
});

cancelAddProject.addEventListener('click', () => {
  resetNewProjectInput();
  toggleProjectInput();
});

const resetNewProjectInput = () => {
  projectInput.value = '';
}

export { toggleProjectInput }