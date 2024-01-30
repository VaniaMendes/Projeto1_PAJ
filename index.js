const btn_lg = document.getElementById("btn_login1");
btn_lg.onclick = login;

// Faz login e grava o nome de utilizador
function login() {
    const user1 = document.getElementById("usertext1").value.trim();
    const pass1 = document.getElementById("password1").value.trim();
    // Verifica que os campos não estão em branco
    if(user1 === "" || pass1 === ""){
        alert("Por favor preencha todos os campos.");
        return;  
    }  
    window.location.href = "Pages/scrum.html";
    localStorage.setItem("username", user1);
} 