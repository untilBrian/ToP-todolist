class Project {
    constructor(projectName) {
        this.name = projectName;
        this.projectList = []; //list of ToDo objects 
        this.projectDOM = null;
    }

    // Create new ToDo
    createToDo(formValues) {
        const toDo = new ToDo(formValues);
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

        //append ToDoDOMs to the project DOM
        this.projectDOMList.forEach(toDoDOM => {
            projectDOM.appendChild(toDoDOM);
        });

        //event listener to open the project
        this.projectDOM.addEventListener('click', () => {
            this.displayProject()
        });

        //create home button
        const homeButton = document.createElement('button');
        homeButton.classList.add('homeButton');
        homeButton.textContent = 'Return Home';
        this.homeButton = homeButton;
        this.projectDOM.appendChild(this.homeButton);

        //event listener to return home
        this.homeButton.addEventListener('click', () => {
            app.renderHome();
        });

        //create new ToDo button
        const newToDoButton = document.createElement('button');
        newToDoButton.classList.add('newButton');
        newToDoButton.textContent = 'New ToDo';
        this.newToDoButton = newToDoButton;
        this.projectDOM.appendChild(this.newToDoButton);
        this.newToDoButton.addEventListener('click', () => {
            showNewForm(this.project, this.projectDOM);
        });
    }

    createToDoDOM(toDo) {
        const toDoDOM = document.createElement('div');
        toDoDOM.classList.add('toDo');

        const properties = ['title', 'description', 'dueDate', 'priority', 'notes'];
        properties.forEach(prop => {
            const element = document.createElement(prop === 'title' ? 'h1' : prop === 'description' ? 'h2' : 'p');
            element.textContent = toDo[prop];
            element.id = prop;
            this.toDoDOM.appendChild(element);
        });

        this.projectDOMList.push(toDoDOM);
        this.projectDOM.appendChild(toDoDOM);
    }

    deleteToDoDOM(toDoDOM) {
        this.projectDOMList = this.projectDOMList.filter(dom => dom !== toDoDOM); //remove from DOM data
        this.projectDOM.removeChild(toDoDOM); //remove from DOM
    }

    displayProject() {
        appDOM.innerHTML = '';
        appDOM.appendChild(this.projectDOM);
        appDOM.appendChild(this.newToDoButton);
        appDOM.appendChild(this.homeButton);
    }
}

class ProjectController {
    constructor() {
    }

    createToDoControl(project, formValues) {
        const toDo = project.createToDo(...formValues);
        project.projectDOM.createToDoDOM(toDo);
    }

    deleteToDoControl(project, toDo, toDoDOM) {
        project.deleteToDo(toDo);
        project.projectDOM.deleteToDoDOM(toDoDOM);
    }
}

export { Project, ProjectDOM, ProjectController };
