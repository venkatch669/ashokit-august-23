let btn = document.querySelector("#duplicate");
btn.addEventListener("click",function(){
    let src = document.querySelector("img").getAttribute("src");
    console.log(src);
    let img = document.createElement("img")
    img.setAttribute("src",src);
    // img.setAttribute("class","img");
    img.classList="img";
    document.querySelector("#box").appendChild(img);
})


let changeBtn = document.querySelector("#changeImg");
changeBtn.addEventListener("click",function(){
    document.querySelector("img").setAttribute("src","./images/palace.jpg");
})

document.body.append("<h1> welcome </h1>");
let h1 = document.createElement("h1")
h1.append("welcome venkat")
document.body.appendChild(h1) 
