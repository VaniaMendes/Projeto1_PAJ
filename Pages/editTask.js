
// Get the username from local storage
const username = localStorage.getItem("username");

// Update the userHeader element
document.getElementById("userHeader").innerHTML = "Bem vindo, " + username;

// Carregar as tarefas existentes do localStorage
let tasks = JSON.parse(localStorage.getItem("tasks"))

let index = sessionStorage.getItem('index');

let titleText = document.getElementById('title2');
let descriptionText = document.getElementById('description2')

titleText.value = tasks[index].title;
descriptionText.value = tasks[index].description;

titleText.onclick = change_Name;
descriptionText.onclick = change_Name;



//Muda nome do botão Editar para Gravar
function change_Name(){
    editButton.value = "Gravar";
}

const editButton = document.getElementById("btn_edt");

editButton.onclick = edit_task;

//Grava a task após edição
function edit_task(){
    tasks[index].title = document.getElementById('title2').value;
    tasks[index].description = document.getElementById('description2').value;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    alert('Tarefa gravada com sucesso!')
}
