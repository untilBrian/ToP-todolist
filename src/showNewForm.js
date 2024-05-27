import './styles.css';

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
    newForm.addEventListener('submit', (event) => {
        console.log("Before preventDefault");
        event.preventDefault();
        console.log("After preventDefault");
        const formValues = {
            title: newForm.elements['title'].value,
            description: newForm.elements['description'].value,
            dueDate: newForm.elements['dueDate'].value,
            priority: newForm.elements['priority'].value,
            notes: newForm.elements['notes'].value,
        };
        modal.remove();
        projectController.createToDoControl(project, formValues);
    });

    // Create event listener for cancel button
    document.querySelector('#cancel').addEventListener('click', () => {
        modal.remove();
    });
}

export default showNewForm;
