import showEditForm from './showEditForm.js';
import { Project, ProjectDOM, ProjectController } from './projectClasses.js';

class ToDo {
    constructor(title = 'Untitled', description = '', dueDate = null, priority = null, notes = '') {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;

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
        this.projectDOM = toDo.project.projectDOM.projectDOM;

        //add event listener
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.id = 'editButton';
        editButton.addEventListener('click', () => {
            showEditForm(this.toDo, this, toDoController);
        });
        this.editButton = editButton;

        //add delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.id = 'deleteButton';
        deleteButton.addEventListener('click', () => {
            projectController.deleteToDoControl(this.toDo.project, this.toDo, this.toDoDOM);
        });
        this.deleteButton = deleteButton;

        //add show full to-do
        const showFullButton = document.createElement('button');
        showFullButton.textContent = 'Show Full To-Do';
        showFullButton.id = 'showFullButton';
        showFullButton.addEventListener('click', () => {
            this.showFullToDo();
        });
        this.showFullButton = showFullButton;

        //add show less button
        const showLessButton = document.createElement('button');
        showLessButton.textContent = 'Show Less';
        showLessButton.id = 'showLessButton';
        showLessButton.addEventListener('click', () => {
            this.showLessToDo();
        });
        this.showLessButton = showLessButton;

        this.editProperties(); //render to-do properties in toDoDOM
        this.showLessToDo(); //show less button
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

        this.toDoDOM.appendChild(this.showLessButton);
        this.toDoDOM.appendChild(this.editButton);
        this.toDoDOM.appendChild(this.deleteButton);
    }

    showLessToDo () {
        const children = Array.from(this.toDoDOM.children);
        children.forEach(child => {
            if (child.tagName.toLowerCase() === 'p' || child.id === 'showLessButton' || child.id === 'editButton' || child.id === 'deleteButton') {
                this.toDoDOM.removeChild(child);
            }
        });
        this.projectDOM.appendChild(this.toDoDOM);        
        this.toDoDOM.appendChild(this.showFullButton);
    }
}

class ToDoController {
    constructor () {
    }

    editPropertiesControl (toDo, toDoDOM, formValues) {
        Object.entries(formValues).forEach(([property, value]) => {
            toDo.editProperty(property, value);
        });

        toDoDOM.editProperties();
        toDoDOM.showLessToDo();
        toDoDOM.toDoDOM.appendChild(toDoDOM.showFullButton);
    }
}

export { ToDo, ToDoDOM, ToDoController };
