// SIDEBAR TOGGLE

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar() {
  if(!sidebarOpen) {
    sidebar.classList.add("sidebar-responsive");
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if(sidebarOpen) {
    sidebar.classList.remove("sidebar-responsive");
    sidebarOpen = false;
  }
}

const linkCollapse = document.getElementsByClassName('collapse_link');
var i;

for (i=0; i<linkCollapse.length; i++){
    linkCollapse[i].addEventListener('click', function(){
        const collapseMenu = this.nextElementSibling;
        collapseMenu.classList.toggle('showCollapse');
    })
}

