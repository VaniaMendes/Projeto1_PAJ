
// Get the username from local storage
const username = localStorage.getItem("username");

// Update the userHeader element
document.getElementById("userHeader").innerHTML = "Bem vindo, " + username;

const btn_in = document.getElementById("btn_inicio");
btn_in.onclick = homeMenu;

// When press "btn_inicio"
function homeMenu(){
    localStorage.removeItem("username");
    document.location.href = '../index.html';
}  

window.onload = () =>{

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
        
            const cardElement = createCardElement(t.title);
            const columnElement = document.getElementById(t.column);
            columnElement.appendChild(cardElement);
        }
    }

    // Função para criar um elemento de cartão HTML para uma tarefa
    function createCardElement(title) {
        const cardElement = document.createElement("div");
        cardElement.className = "card";
        cardElement.draggable = true;
        const cardHeaderElement = document.createElement("div");
        cardHeaderElement.className = "card-header";
        cardHeaderElement.textContent = title;

        // Adicionar evento de clique para exibir opções
        cardHeaderElement.addEventListener("click", function () {
            showOptions(cardElement);
        });

        cardElement.appendChild(cardHeaderElement);

        return cardElement;
    }

    function showOptions(cardElement) {
        // Verificar se já há opções exibidas, se sim, remover
        const existingOptions = cardElement.querySelector('.task-options');
        if (existingOptions) {
            existingOptions.remove();
            return;
        }

        // Criar opcoes de tarefa
        const optionsContainer = document.createElement('div');
        optionsContainer.className = "task-options";
        optionsContainer.innerHTML = `
            <button onclick="editTask('${cardElement.querySelector(".card-header").textContent}')">Editar</button>
            <button onclick="deleteTask('${cardElement.querySelector(".card-header").textContent}')">Apagar</button>
        `;

        // Adicionar opções de tarefa à página
        cardElement.appendChild(optionsContainer);

        // Adicionar um event listener para fechar as opções quando clicar fora delas
        document.addEventListener("click", function closeOptions(event) {
            if (!cardElement.contains(event.target)) {
                optionsContainer.remove();
                document.removeEventListener("click", closeOptions);
            }
        });
    }
    
    function deleteTask(title) {
        // Encontrar a tarefa com o título correspondente na lista de tarefas
        const taskIndex = tasks.findIndex(task => task.title === title);
    
        // Verificar se a tarefa foi encontrada
        if (taskIndex !== -1) {
            // Remover a tarefa da lista
            tasks.splice(taskIndex, 1);
    
            // Atualizar a exibição dos quadros
            showTasks();
    
            // Atualizar o localStorage
            localStorage.setItem("tasks", JSON.stringify(tasks));
            alert('Tarefa eliminada com sucesso' + title)
        } else {
            alert("Tarefa não encontrada");
        }
    }

};