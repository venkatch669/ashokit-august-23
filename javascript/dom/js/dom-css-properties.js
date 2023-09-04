
let button = document.querySelector("button");

button.addEventListener("click",()=>{
    document.querySelector("h1").style.color="red";
    document.querySelector("h1").style.fontSize="70px";
})

let showdivbutton = document.querySelector("#showdiv");
showdivbutton.addEventListener("click",()=>{
    document.querySelector(".wrapper").style.display="block";
})