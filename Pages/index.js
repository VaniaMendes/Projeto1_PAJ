document.addEventListener('DOMContentLoaded', function() {
    const usertext = document.getElementById("usertext1");
    const btn1 = document.getElementById("btn_login1");
    const userHeader = document.getElementById("userHeader");

    function login() {
        sessionStorage.setItem("username", usertext.value);
        userHeader.innerHTML = "Welcome, " + sessionStorage.getItem("username");
    }

    if (btn1) {
        btn1.addEventListener('click', login);
    }

    // Set the username in the header if it exists in localStorage
    const storedUsername = sessionStorage.getItem("username");
    if (storedUsername) {
        userHeader.innerHTML = "Welcome, " + storedUsername;
    }
});



localStorage.setItem("name", "John Doe");
localStorage.getItem("name");

removeItem(keyname)