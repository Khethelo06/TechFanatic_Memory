const username = localStorage.getItem('username');
let welcome = document.querySelector('.user')
var name = 'Mbali'

welcome.innerHTML = "Welcome " + username;