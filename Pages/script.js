document.addEventListener('DOMContentLoaded', function() {
    const usertext = document.getElementById("usertext1");
    const btn1 = document.getElementById("btn_login1");
    const userHeader = document.getElementById("userHeader");

    function login() {
        sessionStorage.setItem("username", usertext.value);
        userHeader.innerHTML = "Welcome, " + sessionStorage.getItem("username");
    }

    if (btn1) {
        btn1.addEventListener('click', login);
    }

    // Set the username in the header if it exists in localStorage
    const storedUsername = sessionStorage.getItem("username");
    if (storedUsername) {
        userHeader.innerHTML = "Welcome, " + storedUsername;
    }
});

// Create a Map of tasks
let tasks = new Map();
document.getElementById("btn_submit").onclick = new_task;

function new_task(){
    let title_new = document.getElementById("title").value;
    let description_new = document.getElementById("description").value;

    tasks.set(title_new, description_new);
    const list1 = document.createElement("li");
    list1.innerText = title_new;

    const todoList = document.getElementById("todo");
    todoList.appendChild(list1);

    // Clear the input fields after adding the task
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";

    window.location.href = 'scrum.html';
}
