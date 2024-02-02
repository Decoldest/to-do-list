const projects = {
  inbox: [],
};

function getProjects () {
  return projects;
}

function removeTaskFromProjects (taskToDelete) {
  for (const project in projects) {
    console.log(taskToDelete);
    console.log(projects[project]);
    
    const index = projects[project].findIndex(i => i.title === taskToDelete.title 
      && i.dueDate === taskToDelete.dueDate);
    console.log(index);

    if (index !== -1) {
      console.log('found');
      projects[project].splice(index, 1);
    }
  }
  console.log(projects);
}

function addToProjects (task, project) {
  projects[project] = projects[project] ?? [];
  projects[project].push(task);
  console.log(task.getData());
  console.log(projects);
}

export function createNewProject(name) {
  if (!projects[name]) {
    projects[name] = [];
  }
}

export { addToProjects, getProjects, removeTaskFromProjects };
