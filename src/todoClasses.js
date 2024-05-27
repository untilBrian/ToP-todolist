import { generateUniqueID } from './uniqueID.js';

class ToDo {
    constructor(title = 'Untitled', description = '', dueDate = null, priority = null, notes = '', checklist = []) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.checklist = checklist;

        this.project = null;
        this.toDoDOM = null;
    }

    editProperty (property, newValue) {
        this[property] = newValue;
    }
}

class ToDoDOM {
    constructor (toDo) {
        //create to-do div
        this.toDo = toDo;
        this.toDo.toDoDOM = this;
        this.toDoDOM = document.createElement('div');
        this.toDoDOM.classList.add('todo');

        //add event listener
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.id = 'editButton';
        editButton.addEventListener('click', () => {
            showEditForm(this.toDo, this.toDoDOM, toDoController);
        });

        //add delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.id = 'deleteButton';
        deleteButton.addEventListener('click', () => {
            projectController.deleteToDoControl(this.toDo.project, this.toDo, this.toDoDOM);
        });

        //add show full to-do
        const showFullButton = document.createElement('button');
        showFullButton.textContent = 'Show Full To-Do';
        showFullButton.id = 'showFullButton';
        showFullToDoButton.addEventListener('click', () => {
            this.showFullToDo();
        });

        //add show less button
        const showLessButton = document.createElement('button');
        showLessButton.textContent = 'Show Less';
        showLessButton.id = 'showLessButton';
        showLessButton.addEventListener('click', () => {
            this.showLess();
        });

        //append buttons
        this.toDoDOM.appendChild(editButton);
        this.toDoDOM.appendChild(showFullButton);
        this.toDoDOM.appendChild(showLessButton);
    }

    editProperties () {
        this.toDoDOM.innerHTML = '';

        const properties = ['title', 'description', 'dueDate', 'priority', 'notes'];
        properties.forEach(prop => {
            const element = document.createElement(prop === 'title' ? 'h1' : prop === 'description' ? 'h2' : 'p');
            element.textContent = this.toDo[prop];
            element.id = prop;
            this.toDoDOM.appendChild(element);
        });
    }

    showFullToDo () {
        this.toDoDOM.innerHTML = '';
        this.editProperties();
    }

    showLessToDo () {
        const children = Array.from(this.toDoDOM.children);
        children.forEach(child => {
            if (child.tagName.toLowerCase() === 'p') {
                this.toDoDOM.removeChild(child);
            }
        });
    }

    renderToDoDOM () {
    //append to-do Div to project List
    } 
}

class ToDoController {
    constructor () {
    }

    editPropertiesControl (toDo, toDoDOM, formValues) {
        
        formValues.forEach((formValue) => {
            const { property, value } = formValue;
            toDo.editProperty(property, value);
        });

        toDoDOM.editProperties();
    }
}

export { ToDo, ToDoDOM, ToDoController };

//create toDo
//pass info from form into controller
//controller creates toDo object/etc