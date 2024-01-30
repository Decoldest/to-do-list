const projects = {
  inbox: [],
};

function getProjects () {
  return projects;
}

function addToProjects (task, project) {
  projects[project] = projects[project] ?? [];
  projects[project].push(task);
  console.log(task.getData());
}

function createNewProject(name) {
  if (!projects[name]) {
    projects[name] = [];
  }
}

export { addToProjects, getProjects };
