const username = localStorage.getItem('username');
let welcome = document.querySelector('.user');
var name = 'Mbali'

welcome.innerHTML = "Welcome " + username;

const textEl = document.getElementById("text_area")
const totalEl = document.getElementById("total_counter")
const remainingEl = document.getElementById("remaining_counter")

updateCounter()

textEl.addEventListener("keyup", ()=>{
    updateCounter()
})

function updateCounter(){
    totalEl.innerText = textEl.value.length
    remainingEl.innerText = textEl.getAttribute("maxlength") - textEl.value.length
}