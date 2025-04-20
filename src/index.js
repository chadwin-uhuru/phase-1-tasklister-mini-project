document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // 🛑 Prevent form from refreshing the page

    const taskInput = document.getElementById("new-task-description");
    const task = taskInput.value;

    if (task.trim() !== "") {
      const newTask = document.createElement("li");
      newTask.textContent = task;

      taskList.appendChild(newTask); // ✅ Add task to the DOM
      taskInput.value = ""; // Clear input after adding
    }
  });
});
