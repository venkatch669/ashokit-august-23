let h1tag = document.querySelector("h1");
console.log("innerHTML", h1tag.innerHTML);
console.log("innerText", h1tag.innerText);

let changeH1Value = (event) =>{
    console.log(event);
 h1tag.innerHTML = "<b> venkat </b>"
    //h1tag.innerText = "<b> venkat </b>"
console.log(h1tag)
}

let button = document.querySelector("button");
button.addEventListener("click", changeH1Value)