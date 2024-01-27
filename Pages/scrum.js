
// Get the username from local storage
const username = localStorage.getItem("username");

// Update the userHeader element
document.getElementById("userHeader").innerHTML = "Bem vindo, " + username;


const btn_vl = document.getElementById("btn_voltar");
btn_vl.onclick = homeMenu;

function homeMenu(){
    localStorage.removeItem("userHeader");
    document.location.href = '../index.html';
}


/*
// Criação de array com 3 propriedades representantes de cada coluna

const tasks = {
    todo: [],
    doing: [],
    done: []
};

// Adicionar nova tarefa na coluna To Do

const todoColumn = document.getElementById("todo-column");
function addTask() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    // Cria a nova task em format json para guardar em localstorage
    const newTask = {
        titulo: title,
        descricao: description
    };
    // Guarda a task no array anterior
    tasks.todo.push(newTask);
        
    // Atualiza a local storage
    localStorage.setItem("tasks", JSON.stringify(tasks.todo));
    
    // Cria a nova tarefa no frontend, criando um div no html
    const taskElement = document.createElement("div");
        
    // Adiciona a tarefa criada ao elemento div
    taskElement.classList.add("task");
          
    // Adiciona o titulo apenas
    taskElement.textContent = task.titulo;
         
    // Adiciona o div criado (já com os dados) na "todoColumn"
    todoColumn.appendChild(taskElement);
}

const doingColumn = document.getElementById("doing-column");

function moveTask() {
    
    const movedTask = document.getElementById("title");

    // Guarda a task no array anterior
    tasks.doing.push(movedTask);
        
    // Atualiza a local storage
    localStorage.setItem("tasks", JSON.stringify(tasks.doing));
    
    // Cria a nova tarefa no frontend, criando um div no html
    const taskElement = document.createElement("div");
        
    // Adiciona a tarefa selecionada ao elemento div
    taskElement.classList.add("movedTask");
          
    // Adiciona o titulo apenas
    taskElement.textContent = task.titulo;
         
    // Adiciona o div criado (já com os dados) na "doingColumn"
    doingColumn.appendChild(taskElement);
}
*/