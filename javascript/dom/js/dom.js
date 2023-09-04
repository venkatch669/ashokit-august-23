
let idvalue = document.getElementById("demo");
let tagvalue = document.getElementsByTagName("h1")[0];
let classvalue = document.getElementsByClassName("box")[2];

console.log(classvalue)
console.log(idvalue);
console.log(tagvalue);


let queryClass = document.querySelector(".box");

let queryClasses = document.querySelectorAll(".box")[1];

let queryid = document.querySelector("#demo");
console.log("queryClasses", queryClasses)
console.log(queryid);
console.log(queryClass);