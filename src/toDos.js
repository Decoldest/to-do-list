class toDo {

  constructor(title, description, dueDate, priority, notes) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.completed = 'no';
  }

  getData() {
    return {
      title: this.title,
      description: this.description,
      dueDate: this.dueDate,
      priority: this.priority,
      notes: this.notes,
      id:this.id
    };
  }
}

const makeToDo = (title, description, dueDate, priority, notes) => new toDo(title, description, dueDate, priority, notes);

export { makeToDo };