const newToDoButton = document.getElementById('new-to-do');
const newTaskForm = document.getElementById('task-form');

const toggleTaskForm = () => {
  newTaskForm.classList.toggle('show');
};

const setNewToDoListener = () => {
  newToDoButton.addEventListener('click', () => {
    toggleTaskForm();
  });
}

export { setNewToDoListener }