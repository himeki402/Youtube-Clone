var menuButton = document.querySelector(".menu-button");
var sideBar = document.querySelector(".sidebar");
var sideBarLarge = document.querySelector(".sidebar-large")
let body = document.querySelector("body")

menuButton.addEventListener("click",()=>{
    sideBar.classList.toggle("none")
    sideBarLarge.classList.toggle("block")
    body.classList.toggle("change-body")
})