document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");
  const prioritySelect = document.createElement("select");
  
  // Add priority options
  const priorities = [
    { value: "high", text: "High", color: "red" },
    { value: "medium", text: "Medium", color: "yellow" },
    { value: "low", text: "Low", color: "green" }
  ];
  
  priorities.forEach(priority => {
    const option = document.createElement("option");
    option.value = priority.value;
    option.textContent = priority.text;
    prioritySelect.appendChild(option);
  });
  
  // Add priority dropdown to form
  const priorityLabel = document.createElement("label");
  priorityLabel.textContent = "Priority: ";
  priorityLabel.appendChild(prioritySelect);
  form.insertBefore(priorityLabel, form.lastElementChild);

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const taskDescription = document.getElementById("new-task-description").value;
    if (taskDescription.trim() === "") return;
    
    const selectedPriority = prioritySelect.value;
    const priority = priorities.find(p => p.value === selectedPriority);
    
    const taskItem = document.createElement("li");
    taskItem.textContent = taskDescription;
    taskItem.style.color = priority.color;
    
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.addEventListener("click", () => {
      taskItem.remove();
    });
    
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
    
    document.getElementById("new-task-description").value = "";
  });

  // Add sorting functionality
  const sortButton = document.createElement("button");
  sortButton.textContent = "Sort by Priority";
  sortButton.addEventListener("click", () => {
    const tasks = Array.from(taskList.children);
    
    tasks.sort((a, b) => {
      const aPriority = priorities.findIndex(p => p.color === a.style.color);
      const bPriority = priorities.findIndex(p => p.color === b.style.color);
      return aPriority - bPriority;
    });
    
    // Clear and re-add sorted tasks
    taskList.innerHTML = "";
    tasks.forEach(task => taskList.appendChild(task));
  });
  
  document.body.appendChild(sortButton);
});