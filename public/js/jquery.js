let explore = document.getElementById("explore");
let submit = document.getElementById("submit");

function next(){
    location.href = "/about";
}

function message(){
    alert("Thank you your information has sucessfully sent!!");
    location.href = "/";
}

explore.addEventListener("click",next,false);
submit.addEventListener("click",message,false);
