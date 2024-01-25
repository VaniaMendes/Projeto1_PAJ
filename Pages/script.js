document.addEventListener('DOMContentLoaded', function() {
    var usertext = document.getElementById("usertext1");
    var btn1 = document.getElementById("btn_login1");
    var userHeader = document.getElementById("userHeader");

    function login() {
        sessionStorage.setItem("username", usertext.value);
        userHeader.innerHTML = "Welcome, " + sessionStorage.getItem("username") + "!";
    }

    if (btn1) {
        btn1.addEventListener('click', login);
    }

    // Set the username in the header if it exists in localStorage
    var storedUsername = sessionStorage.getItem("username");
    if (storedUsername) {
        userHeader.innerHTML = "Welcome, " + storedUsername + "!";
    }
});
