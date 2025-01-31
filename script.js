// Function to add a task
function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskValue = taskInput.value.trim();

    if (taskValue !== "") {
        // Create a new list item
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = taskValue;

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function () {
            li.remove();
        };

        // Append the elements to the list item
        li.appendChild(span);
        li.appendChild(deleteButton);

        // Add the list item to the task list
        const taskList = document.getElementById('task-list');
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}

// Optional: Allow pressing Enter to add a task
document.getElementById('task-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
