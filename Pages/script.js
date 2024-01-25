
const txt1 = document.getElementById('user1');
const btn1 = document.getElementById('btn_lg1');
const out1 = document.getElementById('user2');


function login() {
    const username = txt1.value;
    localStorage.setItem('username', username);
    window.location.href = 'Pages/scrum.html';
}
btn1.addEventListener('click',login);
    