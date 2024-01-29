class toDo {
  constructor(title, description, dueDate, priority, notes) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate ? dueDate : 'No Due Date';
    this.priority = priority;
    this.notes = notes;
  }
  getData() {
    return { title:this.title, 
      description:this.description, 
      dueDate:this.dueDate, 
      priority:this.priority, 
      notes:this.notes, 
    };
  }
}

const makeToDo = (title, description, dueDate, priority, notes) => {
  return new toDo(title, description, dueDate, priority, notes);
}

export { makeToDo };