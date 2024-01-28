
// Get the username from local storage
const username = localStorage.getItem("username");

// Update the userHeader element
document.getElementById("userHeader").innerHTML = "Bem vindo, " + username;

// Carregar as tarefas existentes do localStorage, se existir um array senao cria um novo
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// 
const submitButton = document.getElementById("btn_submit");
submitButton.onclick = add_task;



//Adiciona uma nova task
function add_task(){
   
    //Gera um novo id sempre que seja criada uma tarefa
    function generateID(){

        return tasks.length + 1;
    }

    const newId = generateID();

    // console.log(newId); [VC] - verificar se é para apagar
    const titleInput = document.getElementById('title1');
    const descriptionInput = document.getElementById('description1');

    // Obtém os valores dos inputs
    const title = titleInput.value;
    const description = descriptionInput.value;


    // Create a new task object
    const newTask = {
        id: newId,
        title: title,
        column: 'todo-cards',
        description: description
    };

    //Adicionar a nova tarefa ao array
    tasks.push(newTask);
    newTask.column ='todo-cards';
    localStorage.setItem("tasks", JSON.stringify(tasks));
    // Limpar os campos após adicionar uma nova tarefa
    titleInput.value = "";
    descriptionInput.value = "";

    alert('Nova tarefa adicionada com sucesso: ' + '"'  + newTask.title + '"');
    
    listTasks();

    document.location.href = 'scrum.html';
    
}

function listTasks(){
    // Limpar os quadros antes de listar novamente
    document.getElementById("todo-cards").innerHTML = "";
    document.getElementById("doing-cards").innerHTML = "";
    document.getElementById("done-cards").innerHTML = "";


    // Iterar sobre as tarefas e adicioná-las aos quadros apropriados
    tasks.forEach(task => {
        const cardElement = createCardElement(task.title);
        const columnElement = document.getElementById(task.column);
        columnElement.appendChild(cardElement);
    });

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



