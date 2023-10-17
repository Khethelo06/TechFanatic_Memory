const username = localStorage.getItem('username');
let welcome = document.querySelector('.user')
var name = 'Khethelo'

welcome.innerHTML = "Welcome " + username;