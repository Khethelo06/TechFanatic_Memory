

let btnSignin = document.getElementById('btnSignIn');
let btnLogin = document.getElementById('btnLogIn');
let nameField = document.getElementById('nameField');
const username =document.getElementById('username');
let title = document.getElementById('title');



btnLogin.onclick = function(){
    nameField.style.maxHeight = "0";
    title.innerHTML = "Log In";
    btnLogin.classList.remove("disabled");
    btnSignin.classList.add("disabled");

    window.location.href = '/Framework/Home/home.html'
}


