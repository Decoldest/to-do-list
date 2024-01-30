const addToDo = document.getElementById("new-to-do");
const newTaskForm = document.getElementById('task-form');

const toggleTaskForm = () => {
  newTaskForm.classList.toggle('show');
};


export { toggleTaskForm }