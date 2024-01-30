
// Get the username from local storage
const username = localStorage.getItem("username");

// Update the userHeader element
document.getElementById("userHeader").innerHTML = "Bem vindo, " + username;

// Carregar as tarefas existentes do localStorage, se existir um array senao cria um novo
let tasks = JSON.parse(localStorage.getItem("tasks"))

document.getElementById('title2').value = localStorage.getItem('titleEdit');
document.getElementById('description2').value = localStorage.getItem('descriptionEdit');


const submitButton = document.getElementById("btn_edt");
submitButton.onclick = edit_task;


//Adiciona uma nova task
function edit_task(){

    document.getElementById("btn_edt").textContent = "Gravar";
}
