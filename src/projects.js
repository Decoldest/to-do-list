let projects = {
};

const projectsKey = 'projects';

function getProjects() {
  return JSON.parse(localStorage.getItem(projectsKey)) || {};
}

function saveProjects(projects) {
  localStorage.setItem(projectsKey, JSON.stringify(projects));
}

function removeTaskFromProjects (taskToDelete) {
  const projects = getProjects();
  for (const project in projects) {
    
    const index = projects[project].findIndex(i => i.id === taskToDelete.id);
    console.log(index);

    if (index !== -1) {
      projects[project].splice(index, 1);
    }
  }
  saveProjects(projects);

}

function upDateComplete(taskCompleted) {
  let projects = getProjects();

  for (const project in projects) {
    for (const task of projects[project]) {
      if (task.id === taskCompleted.id) {
        task.completed = "yes";
      }
    }
  }
  saveProjects(projects);
}


function addToProjects (task, project) {
  projects = getProjects()
  projects[project] = projects[project] ?? [];
  projects[project].push(task);
  saveProjects(projects);
  console.table(projects);
}

function getAllTasks() {
  return Object.entries(getProjects()).reduce((accumulator, [_, projectTasks]) => accumulator.concat(projectTasks), []);
}

export function createNewProject(name) {
  
  if (!projects[name]) {
    projects[name] = [];
  }
}

function addDefaultTasks() {
  const defaultTasks = [
    {
      title: 'Default Task 1',
      description: 'Description of Default Task 1',
      dueDate: '2024-02-06',
      priority: 'High',
      notes: 'Notes for Default Task 1',
      completed: 'no',
      project: 'Default Project'
    },
    {
      title: 'Default Task 2',
      description: 'Description of Default Task 2',
      dueDate: '2024-02-07',
      priority: 'Medium',
      notes: 'Notes for Default Task 2',
      completed: 'no',
      project: 'Default Project'
    },
    {
      title: 'Default Task 5',
      description: 'Description of Default Task 2',
      dueDate: '2024-02-07',
      priority: 'Medium',
      notes: 'Notes for Default Task 2',
      completed: 'no',
      project: 'Default Project'
    },
    {
      title: 'Default Task 6',
      description: 'Description of Default Task 2',
      dueDate: '2024-02-07',
      priority: 'Medium',
      notes: 'Notes for Default Task 2',
      completed: 'no',
      project: 'Default Project'
    }
  ];

  addToProjects(defaultTasks[0], 'Default Project');
  addToProjects(defaultTasks[1], 'Default Project');
}

function initializeDefaults() {
  if (!localStorage.getItem('defaultsAdded')) {
    addDefaultTasks();
    localStorage.setItem('defaultsAdded', 'true');
  }
}
initializeDefaults();

export { addToProjects, getProjects, removeTaskFromProjects, getAllTasks, upDateComplete };