
// Get the username from local storage
const username = localStorage.getItem("username");

// Update the userHeader element
document.getElementById("userHeader").innerHTML = "Bem vindo, " + username;

const btn_in = document.getElementById("btn_inicio");
btn_in.onclick = homeMenu;

//Quando clica no botao Inicio
function homeMenu(){
    // localStorage.clear();        [VC] Acho que esta linha fica melhor substituída pela seguinte
    localStorage.removeItem("username");
    document.location.href = '../index.html';
}  


const btnNewTask = document.getElementById("btn_criar");
btnNewTask.onclick = taskMenu;


//Todas as tarefas que faz quando entra na segunda página
function taskMenu(){
    localStorage.removeItem("userHeader");
    
    // Carrega as tarefas do localStorage quando a página é carregada
    window.addEventListener('load', function () {
        let storedTasks = localStorage.getItem('tasks');

        if (storedTasks) {
            // Se existirem tarefas no localStorage, converte a string JSON de volta para um array de objetos
            tasks = JSON.parse(storedTasks);

        
            // Exemplo: renderiza as tarefas ao carregar a página (substitua por sua lógica)    [VC] Falta editar aqui alguma coisa?
            renderTasksOnPage();
        }
    });
    
    document.location.href = 'task.html';
}


// window.onload = () =>{       [VC] Acho que este comando substitui o: document.addEventListener('DOMContentLoaded', function() { e fica como os slides da prof pg.74
// };

document.addEventListener('DOMContentLoaded', function() {

    // Carregar as tarefas existentes do localStorage, se houver
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Listar as tarefas nos quadros
    showTasks();

    // Função para listar as tarefas nos quadros
    function showTasks() {
        // Limpar os quadros antes de listar novamente
        document.getElementById("todo-cards").innerHTML = "";
        document.getElementById("doing-cards").innerHTML = "";
        document.getElementById("done-cards").innerHTML = "";

        // Iterar sobre as tarefas e adicioná-las aos quadros apropriados
        for (const t of tasks){
        // tasks.forEach(task => {
            // const cardElement = createCardElement(task.title);
            const cardElement = createCardElement(t.title);
            // const columnElement = document.getElementById(task.column);
            const columnElement = document.getElementById(t.column);
            columnElement.appendChild(cardElement);
        // });
        }
    }

    // Função para criar um elemento de cartão HTML para uma tarefa
    function createCardElement(title) {
        const cardElement = document.createElement("div");
        cardElement.className = "card";
        cardElement.draggable = true;
        cardElement.innerHTML = `
        <div class="card-header">${title}</div>
    `;
        return cardElement;
    }
});






