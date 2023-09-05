
let button = document.querySelector("button");

button.addEventListener("click",()=>{
    document.querySelector("h1").style.color="red";
    document.querySelector("h1").style.fontSize="70px";
})

let showdivbutton = document.querySelector("#showdiv");
showdivbutton.addEventListener("click",()=>{
    // document.querySelector(".wrapper").style.display="block";
    if(document.querySelector(".wrapper").classList.contains("show")){
        document.querySelector(".wrapper").classList.remove("show");
        document.querySelector(".wrapper").classList.add("hide");        
    }
    else{
        document.querySelector(".wrapper").classList.add("show");
        document.querySelector(".wrapper").classList.remove("hide");
    }
})

let showsidebar = document.querySelector("#showsidebar");
showsidebar.addEventListener("click",()=>{
    document.querySelector(".sidebar").style.right="0px"
})


let closebtn = document.querySelector("#closebtn");
closebtn.addEventListener("click",()=>{
    document.querySelector(".sidebar").style.right="-120px"
})