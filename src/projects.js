const projects = {
};

function getProjects () {
  return projects;
}

function removeTaskFromProjects (taskToDelete) {
  for (const project in projects) {
    console.log(taskToDelete);
    console.log(projects[project]);
    
    const index = projects[project].findIndex(i => i.id === taskToDelete.id);
    console.log(index);

    if (index !== -1) {
      projects[project].splice(index, 1);
    }
  }
}

function addToProjects (task, project) {
  projects[project] = projects[project] ?? [];
  projects[project].push(task);
  console.log(task.getData());
  console.log(projects);
}

function getAllTasks() {
  return Object.entries(projects).reduce((accumulator, [_, projectTasks]) => accumulator.concat(projectTasks), []);
}

export function createNewProject(name) {
  if (!projects[name]) {
    projects[name] = [];
  }
}

export { addToProjects, getProjects, removeTaskFromProjects, getAllTasks };
