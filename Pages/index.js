
const btn_lg = document.getElementById("btn_login1");

btn_lg.onclick = login;

function login() {
    const user1 = document.getElementById("usertext1").value.trim();
    localStorage.setItem("username", user1);
} 