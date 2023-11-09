var body = document.body;
var btn = document.querySelector(".btn");

btn.addEventListener("Click", myFunc);

function myFunc(){
    body.classList.toggle("light-mode");
    body.classList.toggle("dark-mode");
}