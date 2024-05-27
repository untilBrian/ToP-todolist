import AppController from './app.js';

function testAppController() {
    const app = new AppController();
    console.log("Created App:", app);
    
    // Test createProject
    app.createProject('Default');
    console.log("Created Project:", app.projectList['Default']);

    // Test createToDo
    const toDo1 = app.createToDo('Default', 'Test ToDo', 'Description', '2023-12-31', 'High', 'Some notes', ['item1']);
    console.log('Created ToDo:', toDo1);

    // Test editProperty
    app.editProperty(toDo1.id, 'title', 'Updated Test ToDo');
    console.log('Edited ToDo:', app.getToDoByID(toDo1.id));

    // Test deleteToDo
    app.deleteToDo('Default', toDo1.id);
    console.log('Deleted ToDo:', app.getToDoByID(toDo1.id));

    // Test getToDosFromProject
    const toDo2 = app.createToDo('Default', 'Another ToDo', 'Another Description', '2023-12-31', 'Medium', 'More notes', ['item2']);
    console.log('ToDos in Default Project:', app.getToDosFromProject('Default'));

    // Test deleteProject
    app.deleteProject('Default');   
    console.log('Deleted Project:', app.projectList['Default']);
}

export default testAppController; 