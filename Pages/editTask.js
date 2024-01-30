
// Get the username from local storage
const username = localStorage.getItem("username");

// Update the userHeader element
document.getElementById("userHeader").innerHTML = "Bem vindo, " + username;

// Carregar as tarefas existentes do localStorage, se existir um array senao cria um novo
let tasks = JSON.parse(localStorage.getItem("tasks"))

let titleText = document.getElementById('title2');
let descriptionText = document.getElementById('description2')

titleText.value = localStorage.getItem('titleEdit');
descriptionText.value = localStorage.getItem('descriptionEdit');




const editButton = document.getElementById("btn_edt");
submitButton.onclick = edit_task;


//Adiciona uma nova task
function edit_task(){

    document.getElementById("btn_edt").textContent = "Gravar";
}
