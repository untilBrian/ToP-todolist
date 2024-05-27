import showNewForm from './showNewForm.js';
import { ToDo } from './todoClasses.js';
import { ToDoDOM } from './todoClasses.js';

class Project {
    constructor(projectName) {
        this.name = projectName;
        this.projectList = []; //list of ToDo objects 
        this.projectDOM = null;
    }

    // Create new ToDo
    createToDo(formValues) {
        const toDo = new ToDo(
            formValues.title,
            formValues.description,
            formValues.dueDate,
            formValues.priority,
            formValues.notes,
            formValues.checklist
        );

        toDo.project = this;
        this.projectList.push(toDo);

        return toDo;
    }

    // Delete ToDo
    deleteToDo(toDo) {
        const index = this.projectList.indexOf(toDo);
        if (index > -1) {
            this.projectList.splice(index, 1);
        }
    }
}

class ProjectDOM {
    constructor(project) {
        //initialization
        this.project = project; //project object
        this.project.projectDOM = this; //self-referencing
        this.projectDOMList = []; //list of ToDo DOM elements

        //creating project DOM element
        const projectDOM = document.createElement('div');
        projectDOM.classList.add('project');
        this.projectDOM = projectDOM;

        const title = document.createElement('h1');
        title.textContent = this.project.name;
        this.projectTitle = title;
        this.projectDOM.appendChild(this.projectTitle);

        //event listener to open the project
        this.projectTitle.addEventListener('click', () => {
            this.displayProject();
        });

        //create home button
        const homeButton = document.createElement('button');
        homeButton.classList.add('homeButton');
        homeButton.textContent = 'Return Home';
        this.homeButton = homeButton;
        this.homeButton.addEventListener('click', () => {
            appDOM.renderHome();
        });

        //create new ToDo button
        const newToDoButton = document.createElement('button');
        newToDoButton.classList.add('newButton');
        newToDoButton.textContent = 'New ToDo';
        this.newToDoButton = newToDoButton;
        this.newToDoButton.addEventListener('click', () => {
            showNewForm(this.project);
        });
    }

    createToDoDOM(toDo) {
        const toDoDOM = new ToDoDOM(toDo);
        this.projectDOMList.push(toDoDOM);
        this.projectDOM.appendChild(toDoDOM.toDoDOM);
    }

    deleteToDoDOM(toDoDOM) {
        this.projectDOMList = this.projectDOMList.filter(dom => dom !== toDoDOM); //remove from DOM data
        this.projectDOM.removeChild(toDoDOM); //remove from DOM
    }

    displayProject() {
        appDOM.appDOM.innerHTML = '';
        appDOM.appDOM.appendChild(this.projectDOM);
        appDOM.appDOM.appendChild(this.newToDoButton);
        appDOM.appDOM.appendChild(this.homeButton); 
    }
}

class ProjectController {
    constructor() {
    }

    createToDoControl(project, formValues) {
        const toDo = project.createToDo(formValues);
        toDo.project = project;
        project.projectDOM.createToDoDOM(toDo);
    }

    deleteToDoControl(project, toDo, toDoDOM) {
        project.deleteToDo(toDo);
        project.projectDOM.deleteToDoDOM(toDoDOM);
    }
}

export { Project, ProjectDOM, ProjectController };
