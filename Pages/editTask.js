// Obter o nome de utilizador do armazenamento local
const username = localStorage.getItem("username");

// Atualizar o elemento userHeader
document.getElementById("userHeader").innerHTML = "Bem vindo, " + username;

// Carregar as tarefas existentes do localStorage
let tasks = JSON.parse(localStorage.getItem("tasks"));

//Vai buscar o indice guardado no session Storage
let index = sessionStorage.getItem("index");

//Vai buscar os campos do titulo e da descricao
let titleText = document.getElementById("editTask_title");
let descriptionText = document.getElementById("editTask_description");

titleText.value = tasks[index].title;
descriptionText.value = tasks[index].description;

const editButton = document.getElementById("editTask_btn_submit");
editButton.onclick = editTask;

// No primeiro click muda o painel para edição e altera o nome do botão Editar para Gravar
function editTask() {
  if (editButton.value === "Editar") {
    // Transforma em editável os campos de texto
    titleText.disabled = false;
    descriptionText.disabled = false;
    editButton.value = "Gravar";
  }
  // No segundo click grava a informação e volta à página do Scrum Board
  else if (editButton.value === "Gravar") {
    
    // Verifica tamanho máximo de caracteres do Título
    const maxLength = 50;
    if (titleText.value.length > maxLength) {
      alert("Ultrapassou o máximo de caracteres para o Título = " + maxLength + "!");
      return;
    } else {
      tasks[index].title = titleText.value;
    }
    tasks[index].description = descriptionText.value;

    //Grava a tarefa após edição
    localStorage.setItem("tasks", JSON.stringify(tasks));
    alert("Alterações gravadas com sucesso!");
    document.location.href = "scrum.html";
  }
}