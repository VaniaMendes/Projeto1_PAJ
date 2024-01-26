

document.getElementById("btn_submit").onclick = new_task;

tasks = Array();

function new_task(){
    
    let title_new = document.getElementById("title").value;
    let description_new = document.getElementById("description").value;
    task = {
        titulo: title_new,
        descricao: description_new,
        id: tasks.size + 1
    }
    tasks.push(task);
    console.log(tasks);
    
    // tasks.set(title_new, description_new);
    // const list1 = document.createElement("li");
    // list1.innerText = title_new;

    // const todoList = document.getElementById("todo");
    // todoList.appendChild(list1);

}