const username = localStorage.getItem('username');
const memory = localStorage.getItem('memory');
let welcome = document.querySelector('.user');
let mem_percent = document.querySelector('.mem_percent');
var name = 'Khethelo';

welcome.innerHTML = "Welcome " + username;


///fetch('/api/memory')
///.then(response => response.json())
///.then(memory => mem_percent.innerHTML=memory);

