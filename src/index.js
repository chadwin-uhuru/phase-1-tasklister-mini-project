document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the page from reloading

    const input = document.getElementById("new-task-description");
    const taskText = input.value;

    if (taskText.trim() !== "") {
      const li = document.createElement("li");
      li.textContent = taskText;

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "X";
      deleteBtn.addEventListener("click", () => {
        li.remove(); // Remove the task when you click the delete button
            });

      li.appendChild(deleteBtn);
      taskList.appendChild(li);

      input.value = ""; // Clear the input field after submitting
    }
  });
});
