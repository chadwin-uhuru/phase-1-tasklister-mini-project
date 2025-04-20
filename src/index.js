document.addEventListener("DOMContentLoaded", () => {
  // Step 1: Get the form and task list elements
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  // Step 2: Add event listener for form submission
  form.addEventListener("submit", function(event) {
    // Step 3: Prevent default form submission behavior
    event.preventDefault();
    
    // Step 4: Get the task description from input field
    const taskDescription = document.getElementById("new-task-description").value;
    
    // Step 5: Don't add empty tasks
    if (taskDescription.trim() === "") return;
    
    // Step 6: Create new task element
    const taskItem = document.createElement("li");
    taskItem.textContent = taskDescription;
    
    // Step 7: Add delete button to task
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.addEventListener("click", () => {
      taskItem.remove();
    });
    
    // Step 8: Append elements to the DOM
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
    
    // Step 9: Clear the input field
    document.getElementById("new-task-description").value = "";
  });
});