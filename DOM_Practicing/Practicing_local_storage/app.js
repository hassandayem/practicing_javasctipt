// Define the UI vars
const form = document.querySelector("#task-form");
const input = document.querySelector("#task");
const filter = document.querySelector("#filter");
const tasks = document.querySelector(".collection");
const clear = document.querySelector(".clear-tasks");

// Call an event listener runner
loadEventListeners();

//Load all the listeners
function loadEventListeners() {
  // Listen to the DOM loading
  document.addEventListener("DOMContentLoaded", getTasks);
  // Add task event
  form.addEventListener("submit", addTask);
  // Click to mark as completed
  tasks.addEventListener("click", completeTask);
  // Remove task event
  tasks.addEventListener("click", removeItem);
  // Clear all tasks event
  clear.addEventListener("click", removeTasks);
  // Filter tasks event
  filter.addEventListener("keyup", filterTasks);
}

// Load saved tasks from local storage
function getTasks(task) {
  let tasksList;
  if (localStorage.getItem("tasksList") === null) {
    tasksList = [];
  } else {
    tasksList = JSON.parse(localStorage.getItem("tasksList"));
  }

  // Add restored tasks to UI
  tasksList.forEach(function (task) {
    // Create a list item
    const li = document.createElement("li");
    // Add class to li
    li.className = "collection-item";
    // Create a text node and append it to the list item
    const textNode = document.createTextNode(task);
    li.appendChild(textNode);
    // Create anchor link to remove a task
    const removeBtn = document.createElement("a");
    // Add a class to removeBtn element
    removeBtn.className = "delete-item secondary-content";
    // Append an icon to the anchor
    removeBtn.innerHTML = `<i class="fas fa-trash-alt"></i>`;
    // Append to li
    li.appendChild(removeBtn);

    // Append a list item to the ul
    tasks.appendChild(li);
  });
}

// Click to complete the task
function completeTask(e) {
  const li = e.target;
  //console.log(li);
  li.classList.toggle("complete");
}

// Add Task TO The UI
function addTask(e) {
  if (input.value === "") {
    alert("Please add a task");
  } else {
    // Create a list item
    const li = document.createElement("li");
    // Add class to li
    li.className = "collection-item";
    // Create a text node and append it to the list item
    const textNode = document.createTextNode(input.value);
    li.appendChild(textNode);
    // Create anchor link to remove a task
    const removeBtn = document.createElement("a");
    // Add a class to removeBtn element
    removeBtn.className = "delete-item secondary-content";
    // Append an icon to the anchor
    removeBtn.innerHTML = `<i class="fas fa-trash-alt"></i>`;
    // Append to li
    li.appendChild(removeBtn);

    // Append a list item to the ul
    tasks.appendChild(li);

    // Save the task to local storage
    storeTaskInLocalStorage(input.value);

    // Clear the field
    input.value = "";

    // Prevent Default
    e.preventDefault();
  }
}

// Remove Item function
function removeItem(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are You Sure?")) {
      e.target.parentElement.parentElement.remove();
    }
    removeTaskFromLocalStorage(e.target.parentElement.parentElement);
  }
}

// Remove the item from local storage
function removeTaskFromLocalStorage(taksItem) {
  let tasksList;
  if (localStorage.getItem("tasksList") === null) {
    tasksList = [];
  } else {
    tasksList = JSON.parse(localStorage.getItem("tasksList"));
  }

  tasksList.forEach(function (task, index) {
    if (taksItem.textContent === task) {
      tasksList.splice(index, 1);
    }
  });

  localStorage.setItem("tasksList", JSON.stringify(tasksList));
}

// Clear All the tasks function
function removeTasks() {
  while (tasks.firstChild) {
    tasks.removeChild(tasks.firstChild);
  }

  clearTasksFromLocalStorage();
}

// Clear all tasks from local storage
function clearTasksFromLocalStorage() {
  localStorage.clear();
}

// Filter tasks function
function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll(".collection-item").forEach(function (task) {
    const listItem = task.firstChild.textContent;

    if (listItem.toLowerCase().indexOf(text) !== -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}

// Save tasks in local storage
function storeTaskInLocalStorage(task) {
  let tasksList;
  if (localStorage.getItem("tasksList") === null) {
    tasksList = [];
  } else {
    tasksList = JSON.parse(localStorage.getItem("tasksList"));
  }

  tasksList.push(task);

  localStorage.setItem("tasksList", JSON.stringify(tasksList));
}
