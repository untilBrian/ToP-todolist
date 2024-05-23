import { generateUniqueID } from './uniqueID.js';

class ToDo {
    constructor(title = 'Untitled', description = '', dueDate = null, priority = null, notes = '', checklist = []) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.checklist = checklist;
        this.id = generateUniqueID();
    }
}

export { ToDo };

