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

// Function to add default tasks if they haven't been added already
// Function to add default tasks if they don't exist
function addDefaultTasks() {
  const defaultTasks = [
    {
      id: '0',
      title: 'Walk Dog',
      description: 'He needs three walks a day',
      dueDate: '2024-02-06',
      priority: 'High',
      notes: 'His name is Bubba',
      completed: 'no',
      project: 'Default Project'
    },
    {
      id: '1',
      title: 'Make lasagna',
      description: 'Garfield wants lasagna',
      dueDate: '2024-02-07',
      priority: 'Medium',
      notes: 'Don\'t give him too much or he\'ll get fat',
      completed: 'no',
      project: 'Default Project'
    }
  ];

  const projects = getProjects();
  const defaultProjectTasks = projects['Default Project'];

  if (!defaultProjectTasks || defaultProjectTasks.length === 0) {
    addToProjects(defaultTasks[0], 'Default Project');
    addToProjects(defaultTasks[1], 'Default Project');
  }
}

addDefaultTasks();


export { addToProjects, getProjects, removeTaskFromProjects, getAllTasks, upDateComplete };