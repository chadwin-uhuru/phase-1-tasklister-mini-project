document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  form.addEventListener('submit', handleSubmit);
});

function handleSubmit(event) {
  event.preventDefault();
  const inputField = document.getElementById('new-task-description');
  const task = inputField.value.trim();

  if (task) {
    // Add the task to the list
    addTaskToList(task);
  }

  // Reset the input field
  inputField.value = '';
}

function addTaskToList(task) {
  const ul = document.getElementById('tasks'); // Target the <ul> where tasks will be listed
  const li = document.createElement('li');
  li.textContent = task;

  // Optionally add a delete button to each task
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.onclick = () => li.remove();
  li.appendChild(deleteButton);

  ul.appendChild(li);
}
