// Obter o nome de utilizador do armazenamento local
const username = localStorage.getItem("username");

// Atualizar a mensagem de boas vindas
document.getElementById("userHeader").innerHTML = "Bem vindo, " + username;

// Carregar as tarefas existentes do localStorage, se existir um array senao cria um novo
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

//Adiciona um  event listenner ao botao Adicionar Tarefa
const submitButton = document.getElementById("newTask_btn_submit");
submitButton.onclick = addTask;

//Criar uma nova tarefa
function addTask() {
  // Obtém os valores dos inputs
  const titleInput = document.getElementById("newTask_title");
  const descriptionInput = document.getElementById("newTask_description");

  // Verifica tamanho máximo de caracteres do Título
  const maxLength = 50;
  const title="";
  if (titleInput.value.length > maxLength) {
    alert(
      "Ultrapassou o máximo de caracteres para o Título = " + maxLength + "!"
    );
    return;
  } else {
    title = titleInput.value;
  }
  const description = descriptionInput.value;

  // Verifica se o título já existe em alguma tarefa, devolve um boolean
  const existentTitle = tasks.some((task) => task.title === title);

  if (titleInput.value === "") {
    alert("Por favor preencha o título.");
    //Verifica se o titulo ja existe
  } else if (existentTitle) {
    alert("Já existe uma tarefa com esse título.");
  } else {
    // se o titulo ainda não existir cria uma nova tarefa
    const newTask = {
      title: title,
      column: "todo-cards",
      description: description,
    };
    // Adicionar a nova tarefa ao array
    tasks.push(newTask);
    //Grava as alterações no local Storage
    localStorage.setItem("tasks", JSON.stringify(tasks));
    alert("Nova tarefa adicionada com sucesso!");
  }

  // Limpar os campos após adicionar uma nova tarefa
  titleInput.value = "";
  descriptionInput.value = "";
}
