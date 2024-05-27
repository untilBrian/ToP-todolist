import { ToDo, ToDoDOM, ToDoController } from './todoClasses.js';

function showEditForm(toDo, toDoDOM) {
    // Create edit form
    const editForm = document.createElement('form');
    editForm.id = 'editForm';
    editForm.innerHTML = `
        <label>Title: <input type="text" name="title" value="${toDo.title}"></label>
        <label>Description: <input type="text" name="description" value="${toDo.description}"></label>
        <label>Due Date: <input type="date" name="dueDate" value="${toDo.dueDate}"></label>
        <label>Priority: <input type="text" name="priority" value="${toDo.priority}"></label>
        <label>Notes: <textarea name="notes">${toDo.notes}</textarea></label>
        <button type="submit">Save</button>
        <button type="button" id="cancel">Cancel</button>
    `;

    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.appendChild(editForm);
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
        toDoController.editPropertiesControl(toDo, toDoDOM, formValues);

    });

    // Create event listener for cancel button
    document.querySelector('#cancel').addEventListener('click', () => {
        closeModal(modal);    
    });

}

export default showEditForm;