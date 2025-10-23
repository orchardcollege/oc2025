// Load saved tasks when the page loads
document.addEventListener("DOMContentLoaded", () => {
    loadTasks();
    updateDateTime();
    setInterval(updateDateTime, 1000); // Update date & time every second
});

// Function to update the date and time
function updateDateTime() {
    const now = new Date();
    const formattedDateTime = now.toLocaleString();
    document.getElementById("dateTime").textContent = formattedDateTime;
}

// Function to add a task

function addTask() {
    let taskText = document.getElementById("taskInput").value.trim();
    if (taskText === "") return; // Prevent adding empty tasks

    // Create task object
    let task = {
        text: taskText,
        completed: false,
        important: taskText.includes("(i)") // Check if task contains "(i)"
    };

    // Get tasks from localStorage or create an empty array
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Add new task and save
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    renderTasks();
    document.getElementById("taskInput").value = ""; // Clear input
}

// Function to render tasks
function renderTasks() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; // Clear the list before re-rendering

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Separate tasks into three categories:
    let importantTasks = tasks.filter(task => task.text.includes("(i)") && !task.completed);
    let normalTasks = tasks.filter(task => !task.text.includes("(i)") && !task.completed);
    let completedTasks = tasks.filter(task => task.completed); // Completed tasks

    // Combine in the correct order: important first, then normal, completed at the bottom
    let sortedTasks = [...importantTasks, ...normalTasks, ...completedTasks];

    sortedTasks.forEach((task, index) => {
        let li = document.createElement("li");

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.onclick = () => toggleTask(index);

        let div = document.createElement("div");
        div.textContent = task.text;
        div.classList.add("array");
        if (task.text.includes("(i)")) {
            div.classList.add("important"); // Highlight important tasks
        }
        if (task.completed) {
            div.classList.add("completed"); // Apply strikethrough effect
        }

        let deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "X";
        deleteBtn.onclick = () => deleteTask(index);

        li.appendChild(checkbox);
        li.appendChild(div);
        li.appendChild(deleteBtn);

        taskList.appendChild(li);
    });

    // Update localStorage to maintain order across refreshes
    localStorage.setItem("tasks", JSON.stringify(sortedTasks));
}


// Function to toggle task completion (line-through effect and reordering)
function toggleTask(index) {
    let tasks = JSON.parse(localStorage.getItem("tasks"));

    // Toggle completed status
    tasks[index].completed = !tasks[index].completed;

    // Move completed tasks to the end of the array
    if (tasks[index].completed) {
        tasks.push(tasks.splice(index, 1)[0]); // Move task to the end
    }

    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
}

// Function to delete a task with password protection
function deleteTask(index) {
    const password = prompt("password?");
    const correctPassword = "oc"; // Set your password here

    if (password === correctPassword) {
        let tasks = JSON.parse(localStorage.getItem("tasks"));
        tasks.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        renderTasks();
        alert("Tarea eliminada!");
    } else {
        alert("Password incorrecto! No podemos borrar la tarea.");
    }
}

// Function to load tasks
function loadTasks() {
    renderTasks();
}

// Listen for "Enter" key press to add a task
document.getElementById("taskInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
