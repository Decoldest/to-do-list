class toDo {
  constructor(title, description, dueDate, priority, notes, checklist) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.checklist = checklist;
  }
  getData() {
    return { title:this.title, 
      description:this.description, 
      dueDate:dueDate, 
      priority:priority, 
      notes:notes, 
      checklist:checklist 
    };
  }
}

const makeToDo = (title, description, dueDate, priority, notes, checklist) => {
  return new toDo(title, description, dueDate, priority, notes, checklist);
}

export { makeToDo };