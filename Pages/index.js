
const btn_lg = document.getElementById("btn_login1");

btn_lg.onclick = login;

function login() {
    const user1 = document.getElementById("usertext1").value.trim();

    if(user1 === ""){
        alert("Por favor preencha os campos.");
        return;  
    }  
    window.location.href = "Pages/scrum.html";
    localStorage.removeItem("username");
    localStorage.setItem("username", user1);
} 


