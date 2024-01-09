// app.js
const apiUrl = '/api/tasks';

function fetchTasks() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(tasks => {
            // Update UI with tasks
           
        });
}

function addTask() {
    // Show add/edit task form
  
}

function editTask(id) {
    // Show add/edit task form with data pre-filled
    // ...
}

function saveTask(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

    // Save task to backend

    // Refresh tasks
    fetchTasks();
}

function deleteTask(id) {
    // Delete task from backend
    

    // Refresh tasks
    fetchTasks();
}

// Initial fetch of tasks
fetchTasks();
