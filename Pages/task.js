
// Get the username from local storage
const username = localStorage.getItem("username");

// Update the userHeader element
document.getElementById("userHeader").innerHTML = "Bem vindo, " + username;

// Carregar as tarefas existentes do localStorage, se existir um array senao cria um novo
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const submitButton = document.getElementById("btn_submit");
submitButton.onclick = add_task;



//Adiciona uma nova task
function add_task(){

    const titleInput = document.getElementById('title1');
    const descriptionInput = document.getElementById('description1');

    // Obtém os valores dos inputs
    const title = titleInput.value;
    const description = descriptionInput.value;

    // Create a new task object
    const newTask = {
        id: tasks.length + 1,
        title: title,
        column: 'todo-cards',
        description: description
    };

    //Adicionar a nova tarefa ao array
    tasks.push(newTask);
    newTask.column ='todo-cards';
    localStorage.setItem("tasks", JSON.stringify(tasks));

    if(titleInput.value === ""){
        alert("Por favor preencha todos os campos.");
    } 
    else{
        alert('Nova tarefa adicionada com sucesso: ' + '"'  + newTask.title + '"');
        document.location.href = 'scrum.html';
    }

    // Limpar os campos após adicionar uma nova tarefa
    titleInput.value = "";
    descriptionInput.value = "";
}
