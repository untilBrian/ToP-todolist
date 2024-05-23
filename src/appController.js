import { Project } from './projectClass.js';
import { ToDo } from './todoClass.js';

class AppController {
    constructor() {
        this.projectList = {};
        this.masterToDoList = {};
    }

    //ALL TODO METHODS
    //create new ToDo
  
    createToDo(project, title, description, dueDate, priority, notes, checklist) {
            const toDo = new ToDo(title, description, dueDate, priority, notes, checklist);    
            this.projectList[project].toDos[toDo.id] = toDo;
            this.masterToDoList[toDo.id] = toDo;

            return toDo;
        }
    
    //change ToDo property
    editProperty(item, property, newValue) {
        this.masterToDoList[item][property] = newValue;
        console.log("New property value for " + item + "'s " + property + ": " + this.masterToDoList[item][property]);
    }

    //delete ToDo
    deleteToDo(project, item) {
        delete this.projectList[project].toDos[item];
        delete this.masterToDoList[item];
    }    

      //retrieve toDo by ID
    getToDoByID(id) {
        return this.masterToDoList[id];
    }

    //ALL PROJECT METHODS
    //create Project
    createProject(name) {
        const project = new Project(name);
        this.projectList[name] = project;
        
        return project;
    }

    //get all ToDos from a Project
    getToDosFromProject(project) {
        return this.projectList[project].toDos;
    }

    //delete Project
    deleteProject(project) {
        delete this.projectList[project];
    }
}

export default AppController;