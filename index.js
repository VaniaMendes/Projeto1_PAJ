
//Cria uma variável relativa ao botao login e adiciona um event listenner
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
    // Seos campos estiverem preenchidos avança para a página seguinte
    window.location.href = "Pages/scrum.html";

    //Guarda o username no localstorage
    localStorage.setItem("username", user);
} 