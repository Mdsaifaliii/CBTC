document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("task-input");
  const addTaskBtn = document.getElementById("add-task-btn");
  const taskList = document.getElementById("task-list");
  const completedTaskList = document.getElementById("completed-task-list");

  addTaskBtn.addEventListener("click", addTask);

  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      const taskItem = createTaskItem(taskText);
      taskList.appendChild(taskItem);
      taskInput.value = "";
    }
  }

  function createTaskItem(taskText) {
    const taskItem = document.createElement("li");
    const taskContent = document.createElement("span");
    const timestamp = document.createElement("span");
    const completeBtn = document.createElement("button");

    taskContent.textContent = taskText;
    timestamp.textContent = `Added on: ${new Date().toLocaleString()}`;
    timestamp.className = "timestamp";
    completeBtn.textContent = "Complete";
    completeBtn.className = "complete-btn";

    completeBtn.addEventListener("click", () =>
      completeTask(taskItem, taskText)
    );

    taskItem.appendChild(taskContent);
    taskItem.appendChild(timestamp);
    taskItem.appendChild(completeBtn);

    return taskItem;
  }

  function completeTask(taskItem, taskText) {
    taskList.removeChild(taskItem);
    const completedItem = document.createElement("li");
    const taskContent = document.createElement("span");
    const timestamp = document.createElement("span");

    taskContent.textContent = taskText;
    timestamp.textContent = `Completed on: ${new Date().toLocaleString()}`;
    timestamp.className = "timestamp";

    completedItem.appendChild(taskContent);
    completedItem.appendChild(timestamp);
    completedTaskList.appendChild(completedItem);
  }
});

