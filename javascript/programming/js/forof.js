var obj={
    "name":"venkat",
    "sno":1,
    "marks":[10,50,60,40],
    "firstname":"venkat",
    "lastname":"ch",
    "address":"hyd",
    "emaild":"ch.venkat669@gmail.com"
}
console.log(obj.name);
console.log(obj.sno);
console.log("------- for in")
for(let key in obj){
    console.log(obj[key])
}
console.log("------- for of")
for(let val of obj['marks']){
    console.log(val);
}
