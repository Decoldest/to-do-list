const projects = {
  'inbox': [],
}

function getProjects() {
  return projects;
}

function addToProjects(task, project) {
  projects[project] = projects[project] ?? [];
  projects[project].push(task);
  console.log(task.getData());
}

export { addToProjects, getProjects };