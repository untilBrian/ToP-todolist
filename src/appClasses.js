import { Project, ProjectDOM, ProjectController } from './projectClasses.js';

class App {
    constructor() {
        this.appList = {};
    }

    createProject(name) {
        const project = new Project(name);
        this.appList[name] = project;

        return project;
    }
    
    //delete Project
    deleteProject(project) {
        delete this.appList[project.name];
    }
}

class AppDOM {
    constructor(app) {
        this.app = app; // reference to the app object
        this.appList = app.appList; // reference to the projectList object
        this.appDOMList = {}; // empty map to hold the projectDOM objects
        this.appDOM = document.createElement('div');
        this.appDOM.id = 'appDOM';

        //create new project button
        this.newProjectButton = document.createElement('button');
        this.newProjectButton.id = 'newProjectButton';
        this.newProjectButton.textContent = 'Create New Project';

        //input button
        this.newProjectInput = document.createElement('input');
        this.newProjectInput.id = 'newProjectInput';
        this.newProjectInput.placeholder = 'Project Name';
      
        //event listener to button
        this.newProjectButton.addEventListener('click', () => {
            const projectName = this.newProjectInput.value;
            if (projectName) {
                appController.createProjectController(projectName);
                this.newProjectInput.value = '';
                this.renderHome();
            }
        });
    }

    createProjectDOM(project) {
        const projectDOM = new ProjectDOM(project);
        this.appDOMList[project.name] = projectDOM;
    }

    renderHome() {
        document.body.innerHTML = '';
        this.appDOM.innerHTML = '';
        this.appDOM.appendChild(this.newProjectInput);
        this.appDOM.appendChild(this.newProjectButton);
        
        Object.values(this.appDOMList).forEach(projectDOM => {
            this.appDOM.appendChild(projectDOM.projectTitle);
        });

        document.body.appendChild(this.appDOM);
    }
}

class AppController {
    constructor() {
    }

    createProjectController(name) {
        const project = app.createProject(name);
        appDOM.createProjectDOM(project);
    }
}


export { App, AppDOM, AppController };

