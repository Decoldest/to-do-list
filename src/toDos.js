class toDo {
  static nextID = 0;
  constructor(title, description, dueDate, priority, notes, project) {
    this.id = toDo.nextID++;
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