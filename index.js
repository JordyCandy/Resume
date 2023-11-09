var btn = document.querySelector(".btn");
var body = document.body;
var resume = document.querySelector(".resume");

btn.addEventListener("click", myFunc);

function myFunc(){
    body.classList.toggle("dark");
    btn.classList.toggle("light");
    resume.classList.toggle("color");

    if (btn.textContent != "Light mode"){
        btn.textContent = "Light mode";
    }else{
        btn.textContent = "Dark mode";
    }
}

if (window.innerWidth <= 450){
    btn.style.display = "none";
}