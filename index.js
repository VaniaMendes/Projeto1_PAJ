// Cria uma variável relativa ao botao login e adiciona um Event Listener
const btnLogin = document.getElementById("index_btn_login");
btnLogin.onclick = login;

// Faz login e grava o nome de utilizador
function login() {
    const user = document.getElementById("index_usertext").value.trim();
    const pass = document.getElementById("index_password").value.trim();
    // Verifica que os campos não estão em branco
    if(user === "" || pass === ""){
        alert("Por favor preencha todos os campos.");
        return;  
    }  
    // Se os campos estiverem preenchidos avança para a página Scrum Board
    window.location.href = "Pages/scrum.html";

    // Guarda o username no armazenamento local
    localStorage.setItem("username", user);
} 