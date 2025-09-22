// Select elements
const taskInput = document.querySelector("#taskInput");
const addTaskBtn = document.querySelector("#addTaskBtn");
const taskList = document.querySelector("#taskList");

// Function to add task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create task item
  const li = document.createElement("li");
  li.className = "flex justify-between items-center bg-gray-100 p-3 rounded-lg shadow";

  // Task text
  const span = document.createElement("span");
  span.textContent = taskText;
  span.className = "text-gray-800 flex-1 cursor-pointer";

  // Mark task as completed on click
  span.addEventListener("click", () => {
    span.classList.toggle("line-through");
    span.classList.toggle("text-gray-400");
  });

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.className = "ml-3 text-red-500 hover:text-red-700 transition";
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  // Append to list
  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";
}

// Event listeners
addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});
