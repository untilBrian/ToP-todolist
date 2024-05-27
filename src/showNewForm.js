import { ToDo, ToDoDOM, ToDoController } from './todoClasses.js';

function showNewForm(project) {
    // Create edit form
    const newForm = document.createElement('form');
    newForm.id = 'newForm';
    newForm.innerHTML = `
        <label>Title: <input type="text" name="title"></label>
        <label>Description: <input type="text" name="description"></label>
        <label>Due Date: <input type="date" name="dueDate"></label>
        <label>Priority: <input type="text" name="priority"></label>
        <label>Notes: <textarea name="notes"></textarea></label>
        <button type="submit">Save</button>
        <button type="button" id="cancel">Cancel</button>
    `;

    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.appendChild(newForm);
    document.body.appendChild(modal);

    // Create event listener for form submission
    editForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formValues = {
            title: editForm.elements['title'].value,
            description: editForm.elements['description'].value,
            dueDate: editForm.elements['dueDate'].value,
            priority: editForm.elements['priority'].value,
            notes: editForm.elements['notes'].value,
        };
        closeModal(modal);
        projectController.createToDoControl(project, formValues);
    });

    // Create event listener for cancel button
    document.querySelector('#cancel').addEventListener('click', () => {
        closeModal(modal);    
    });
}

export default showNewForm;
