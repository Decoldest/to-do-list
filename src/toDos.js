class toDo {
  constructor(title, description, dueDate, priority, notes, project) {
    if (!localStorage.getItem('nextID')) {
      localStorage.setItem('nextID', '0');
    }
    this.id = parseInt(localStorage.getItem('nextID'));
    localStorage.setItem('nextID', (this.id + 1).toString());
    
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.completed = 'no';
    this.project = project;
  }

  getData() {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      dueDate: this.dueDate,
      priority: this.priority,
      notes: this.notes,
      completed: this.completed,
      project: this.project,
    };
  }
}

const makeToDo = (title, description, dueDate, priority, notes, project) => new toDo(title, description, dueDate, priority, notes, project);

export { makeToDo };