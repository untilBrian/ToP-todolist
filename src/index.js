import { App, AppDOM, AppController } from './appClasses.js';
import { ProjectController } from './projectClasses.js';
import { ToDoController } from './todoClasses.js';

global.app = new App();
global.appDOM = new AppDOM(app);
global.appController = new AppController();
global.projectController = new ProjectController();
global.toDoController = new ToDoController();
appDOM.renderHome();

//click on title -> open prpject -> add everything -> return home = clear  