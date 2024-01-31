// Obter o nome de utilizador do armazenamento local
const username = localStorage.getItem("username");

// Atualizar o elemento userHeader
document.getElementById("userHeader").innerHTML = "Bem vindo, " + username;

// Carregar as tarefas existentes do localStorage
let tasks = JSON.parse(localStorage.getItem("tasks"));
let index = sessionStorage.getItem("index");

let titleText = document.getElementById("title2");
let descriptionText = document.getElementById("description2");

titleText.value = tasks[index].title;
descriptionText.value = tasks[index].description;

const editButton = document.getElementById("btn_edt");
editButton.onclick = edit_saveTask;

// No primeiro click muda o painel para edição e altera o nome do botão Editar para Gravar
function edit_saveTask() {
  if (editButton.value === "Editar") {
    // Transforma em editável os campos de texto
    titleText.disabled = false;
    descriptionText.disabled = false;
    editButton.value = "Gravar";
  }
  // No segundo click grava a informação e volta a proteger o texto para consulta
  else if (editButton.value === "Gravar") {
    //Grava a tarefa após edição

    // Obtém os valores dos inputs
    titleText.value = document.getElementById("title2").value;
    descriptionText.value = document.getElementById("description2").value;

    // Verifica tamanho máximo de caracteres do Título
    const maxLength = 55;
    console.log("max= " + titleText.value.length);
    if (titleText.value.length > maxLength) {
      alert("Máximo de caracteres para o Título = " + maxLength + "!");
      return;
    } else {
      tasks[index].title = titleText.value;
    }
    tasks[index].description = descriptionText.value;

    localStorage.setItem("tasks", JSON.stringify(tasks));
    alert("Alterações gravadas com sucesso!");
    titleText.disabled = true;
    descriptionText.disabled = true;
    editButton.value = "Editar";
  }
}