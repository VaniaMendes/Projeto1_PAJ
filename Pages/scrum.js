// Obter o nome de utilizador do armazenamento local
const username = localStorage.getItem("username");

// Atualizar o elemento userHeader
document.getElementById("userHeader").innerHTML = "Bem vindo, " + username;

const btnLogout = document.getElementById("scrum_btn_logout");
btnLogout.onclick = homeMenu;

// Função para voltar ao menu inicial
function homeMenu() {
  localStorage.removeItem("username");
  document.location.href = "../index.html";
}

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

window.onload = () => {
  // Listar as tarefas nos quadros
  showTasks();

  // Função para listar as tarefas nos quadros
  function showTasks() {
    // Limpar os quadros antes de listar novamente
    document.getElementById("todo-cards").innerHTML = "";
    document.getElementById("doing-cards").innerHTML = "";
    document.getElementById("done-cards").innerHTML = "";

    // Iterar sobre as tarefas e adicioná-las aos quadros apropriados
    for (const t of tasks) {
      const cardElement = createCardElement(t.title);
      const columnElement = document.getElementById(t.column);
      columnElement.appendChild(cardElement);
    }
  }

  // Função para criar um elemento de cartão HTML para uma tarefa
  function createCardElement(title) {
    const cardElement = document.createElement("div");
    cardElement.className = "card";
    const cardHeaderElement = document.createElement("div");
    cardHeaderElement.className = "card-header";
    cardHeaderElement.textContent = title;

    // Adicionar Event Listener para exibir opções
    cardHeaderElement.addEventListener("click", function () {
      showOptions(cardElement);
    });

    cardElement.appendChild(cardHeaderElement);
    return cardElement;
  }

  function showOptions(cardElement) {
    // Verificar se já há opções exibidas, se sim, remover
    const existingOptions = cardElement.querySelector(".task-options");
    if (existingOptions) {
      existingOptions.remove();
      return;
    }
    // Criar opcoes de tarefa
    const optionsContainer = document.createElement("div");
    optionsContainer.className = "task-options";
    optionsContainer.innerHTML = `
            <button onclick="consultTask('${
              cardElement.querySelector(".card-header").textContent
            }')">Consultar</button>
            <button onclick="deleteTask('${
              cardElement.querySelector(".card-header").textContent
            }')">Apagar</button>
            <button onclick="moveTask('${
              cardElement.querySelector(".card-header").textContent
            }')">Mover</button>
        `;

    // Adicionar opções de tarefa à página
    cardElement.appendChild(optionsContainer);

    // Adicionar um Event Listener para fechar as opções quando clicar fora delas
    document.addEventListener("click", function closeOptions(event) {
      if (!cardElement.contains(event.target)) {
        optionsContainer.remove();
        document.removeEventListener("click", closeOptions);
      }
    });
  }
};

// Função consultar tarefa
function consultTask(title) {
  const taskIndex = tasks.findIndex((task) => task.title === title);

  if (taskIndex !== -1) {
    sessionStorage.setItem("index", taskIndex);
    window.location.href = "editTask.html";
  } else {
    alert("Tarefa não encontrada");
  }
}

// Função apagar tarefa
function deleteTask(title) {
  // Encontrar a tarefa com o título correspondente na lista de tarefas
  const taskIndex = tasks.findIndex((task) => task.title === title);
  // Verificar se a tarefa foi encontrada
  if (taskIndex !== -1) {
    //Confirmação do utilizador de apagar tarefa
    const userConfirmed = confirm(
      "Tem a certeza que pretende remover esta tarefa?"
    );
    if (userConfirmed) {
      // Remover a tarefa da lista
      tasks.splice(taskIndex, 1);

      // Atualizar o localStorage
      localStorage.setItem("tasks", JSON.stringify(tasks));

      alert(
        " A tarefa com o título: " + title + ",  foi eliminada com sucesso."
      );
      window.onload();
    }
  }
}

// Função mover tarefa
function moveTask(title) {
  
  // Cria uma caixa de diálogo com botões das colunas
  Swal.fire({
    title: "Selecione a coluna de destino",
    input: "select",
    inputOptions: {
      "todo-cards": "ToDo",
      "doing-cards": "Doing",
      "done-cards": "Done",
    },
    inputPlaceholder: "Selecione a coluna",
    showCancelButton: true,
    inputValidator: (value) => {
      const destinationColumn = value;
     
        const taskIndex = tasks.findIndex((task) => task.title === title);
        if (tasks[taskIndex].column === destinationColumn) {
          alert("A tarefa já se encontra nesta coluna!");
        } else{
          tasks[taskIndex].column = destinationColumn;
          localStorage.setItem("tasks", JSON.stringify(tasks));
          window.onload();
      }
    },
  });
}
