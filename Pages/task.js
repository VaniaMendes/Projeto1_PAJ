
// Get the username from local storage
const username = localStorage.getItem("username");

// Update the userHeader element
document.getElementById("userHeader").innerHTML = "Bem vindo, " + username;

// Verifique se o botão de envio está sendo encontrado corretamente
var submitButton = document.getElementById("btn_submit");
submitButton.onclick = add_task;



//Adiciona uma nova task
function add_task(id, title, description){
    // Verifica se o array de tasks existe, se nao existir cria um novo

    if(!Array.isArray(tasks)){
        var tasks = [];
       
    }


    //Gera um novo id sempre que seja criada uma tarefa
    function generateID(){

        return tasks.length + 1;
    }

    var newId = generateID();

    console.log(newId);
    var titleInput = document.getElementById('title1');
    var descriptionInput = document.getElementById('description1');

    // Obtém os valores dos inputs
    var title = titleInput.value;
    var description = descriptionInput.value;


    // Create a new task object
    var newTask = {
        id: newId,
        title: title,
        column: 'todo-cards',
        description: description
    };

    //Adicionar a nova tarefa ao array
    tasks.push(newTask);
    alert('Nova tarefa adicionada com sucesso: ' + '"'  + newTask.title + '"');
}


