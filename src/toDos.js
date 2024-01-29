class toDo {
  constructor(title, description, dueDate, priority, notes) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
  }
  getData() {
    return { title:this.title, 
      description:this.description, 
      dueDate:dueDate, 
      priority:priority, 
      notes:notes, 
    };
  }
}

const makeToDo = (title, description, dueDate, priority, notes) => {
  return new toDo(title, description, dueDate, priority, notes);
}

export { makeToDo };