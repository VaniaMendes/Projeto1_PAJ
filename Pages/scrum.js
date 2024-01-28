
// Get the username from local storage
const username = localStorage.getItem("username");

// Update the userHeader element
document.getElementById("userHeader").innerHTML = "Bem vindo, " + username;


const btn_vl = document.getElementById("btn_voltar");
btn_vl.onclick = homeMenu;

const btnTarefa = document.getElementById("btn_criar");
btnTarefa.onclick = menuTarefa;


//Todas as tarefas que faz quando entra na segunda pagina
function menuTarefa(){
    localStorage.removeItem("userHeader");
    
    // Carrega as tarefas do localStorage quando a página é carregada
    window.addEventListener('load', function () {
        var storedTasks = localStorage.getItem('tasks');

        if (storedTasks) {
            // Se existirem tarefas no localStorage, converte a string JSON de volta para um array de objetos
            tasks = JSON.parse(storedTasks);

            // Exemplo: renderiza as tarefas ao carregar a página (substitua por sua lógica)
            renderTasksOnPage();
        }
    });
        
    
    document.location.href = 'task.html';
    }


//Quando clica no botao Inicio
function homeMenu(){
        localStorage.clear();
        document.location.href = '../index.html';
}    

document.addEventListener('DOMContentLoaded', function(){
    const todoColumn = document.getElementById('todo-cards');
    const doingColumn = document.getElementById('doing-cards');
    const doneColumn = document.getElementById('done-cards');

    const tasks = [
        { id: 1, text: 'Task 1' },
        { id: 2, text: 'Task 2' },
        { id: 3, text: 'Task 3' }

    ]

    renderTasks(todoColumn, tasks);

    function renderTasks(column, tasks){
        tasks.forEach(function (task) {
            const card = createCard(task);
            column.appendChild(card);
        });
    }

    function createCard(task){
        const card = document.createElement('div');
        card.className = 'card';
        card.textContent = task.text;

        card.addEventListener('click', function(){
            moveTask(task.id);
        });
        return card;
    }

    //Funcao mover a task para outra coluna

    function moveTask(taskId){
        const taskIndex = tasks.findIndex(function(task){
            return task.id === taskId;
        });

        if(taskIndex !== -1){
            const movedTask = tasks.splice(taskIndex,1)[0];

            var nextColumnId;
            if(todoColumn.contains(event.target)){
                nextColumnId = 'doing-cards';
            }
            
            const nextColumn = document.getElementById(nextColumnId);
            renderTasks(nextColumn, [movedTask]);
        }
    }


})




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