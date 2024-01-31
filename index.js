const btn_lg = document.getElementById("btn_login1");
btn_lg.onclick = login;

// Faz login e grava o nome de utilizador
function login() {
    const user = document.getElementById("index_usertext").value.trim();
    const pass = document.getElementById("index_password").value.trim();
    // Verifica que os campos não estão em branco
    if(user === "" || pass === ""){
        alert("Por favor preencha todos os campos.");
        return;  
    }  
    window.location.href = "Pages/scrum.html";
    localStorage.setItem("username", user);
} 