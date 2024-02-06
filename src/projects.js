const projectsKey = 'projects';

function getProjects() {
  return JSON.parse(localStorage.getItem(projectsKey)) || {};
}

function saveProjects(projects) {
  localStorage.setItem(projectsKey, JSON.stringify(projects));
}

function removeTaskFromProjects(taskToDelete) {
  let projects = getProjects();
  for (const project in projects) {
    const index = projects[project].findIndex(i => i.id === taskToDelete.id);
    if (index !== -1) {
      projects[project].splice(index, 1);
    }
  }
  saveProjects(projects);
}

function addToProjects(task, project) {
  let projects = getProjects();
  projects[project] = projects[project] ?? [];
  projects[project].push(task);
  saveProjects(projects);
}

function getAllTasks() {
  return Object.entries(getProjects()).reduce((accumulator, [_, projectTasks]) => accumulator.concat(projectTasks), []);
}

export function createNewProject(name) {
  let projects = getProjects();
  if (!projects[name]) {
    projects[name] = [];
    saveProjects(projects);
  }
}

const defaults = [
  { 
    title: "Walk Dog",
    description: "He needs to run around",
    dueDate: "2024-02-10",
    priority: "High",
    notes: "His name is Bubba"
  },
  {
    title: "Take a shower",
    description: "Use new soap",
    dueDate: "2024-02-15",
    priority: "Low",
    notes: "Someone said I smell like shit"
  },
  {
    title: "Learn how to be nice",
    description: "Nah I'm good",
    dueDate: new Date(),
    priority: "Medium",
    notes: "N/A"
  }
];

saveProjects(defaults);

export { addToProjects, removeTaskFromProjects, getAllTasks };
