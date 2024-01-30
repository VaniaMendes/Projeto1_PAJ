
// Get the username from local storage
const username = localStorage.getItem("username");

// Update the userHeader element
document.getElementById("userHeader").innerHTML = "Bem vindo, " + username;

// Carregar as tarefas existentes do localStorage, se existir um array senao cria um novo
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const submitButton = document.getElementById("btn_edt");
submitButton.onclick = edit_task;


//Adiciona uma nova task
function edit_task(){

    const editTask = localStorage.getItem("editTask");

    document.getElementById('title2').textContent = editTask.title;
    document.getElementById('description2').textContent = editTask.description;

    document.getElementById("btn_edt").textContent = "Gravar";
}
