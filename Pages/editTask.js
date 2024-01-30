"use strict";

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

//Muda o painel para edição e altera o nome do botão Editar para Gravar
function edit_saveTask() {
  if (editButton.value === "Editar") {
    // Transforma em editável os campos de texto
    titleText.disabled = false;
    descriptionText.disabled = false;
    editButton.value = "Gravar";
  } else if (editButton.value === "Gravar") {
    //Grava a tarefa após edição
    tasks[index].title = document.getElementById("title2").value;
    tasks[index].description = document.getElementById("description2").value;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    alert("Tarefa gravada com sucesso!");
    titleText.disabled = true;
    descriptionText.disabled = true;
    editButton.value = "Editar";
  }
}
