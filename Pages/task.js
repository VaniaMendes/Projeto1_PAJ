
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


task1 = {
    titulo: document.getElementById("title").value,
    descricao: document.getElementById("description").value,
}
tasks.add(task1)