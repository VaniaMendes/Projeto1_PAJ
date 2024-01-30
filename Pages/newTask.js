"use strict";

// Obter o nome de utilizador do armazenamento local
const username = localStorage.getItem("username");

// Atualizar o elemento userHeader
document.getElementById("userHeader").innerHTML = "Bem vindo, " + username;

// Carregar as tarefas existentes do localStorage, se existir um array senao cria um novo
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const submitButton = document.getElementById("btn_submit");
submitButton.onclick = add_task;

//Adiciona uma nova tarefa
function add_task() {
  const titleInput = document.getElementById("title1");
  const descriptionInput = document.getElementById("description1");

  // Obtém os valores dos inputs
  const title = titleInput.value;
  const description = descriptionInput.value;

  // Verifica se o título já existe em alguma tarefa
  const existentTitle = tasks.some((task) => task.title === title);

  if (titleInput.value === "") {
    alert("Por favor preencha o título.");
  } else {
    if (existentTitle) {
      alert("Já existe uma tarefa com esse título.");
    } else {
      // Cria um novo objecto tarefa
      const newTask = {
        title: title,
        column: "todo-cards",
        description: description,
      };
      // Adicionar a nova tarefa ao array
      tasks.push(newTask);
      newTask.column = "todo-cards";
      localStorage.setItem("tasks", JSON.stringify(tasks));

      alert("Nova tarefa adicionada com sucesso!");
    }

    // Limpar os campos após adicionar uma nova tarefa
    titleInput.value = "";
    descriptionInput.value = "";
  }
}
