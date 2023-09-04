// console.log("lodash");

// var obj1={
//     name:"venkat",
//     marks:[10,30,50,60,80]
// }
// var obj2=obj1;

// // using spread operator 
// // var obj2={...obj1};

// // using Object.assign operator 
// var obj2=Object.assign({},obj1);

// // using cloneDeep from lodash 
// var obj2=_.cloneDeep(obj1);

// // ......................

// console.log("obj2", obj2); 
// console.log("obj1", obj1);


// // -----------------------
// // String functions... 

// var name="venkat";
// name.concat("ch")
// name.substring(0,3)
// var val = "This method is like _.clone except that it recursively clones value."
// val.indexOf("_")
// val.indexOf("_asdf")
// val.lastIndexOf("t")
// val.indexOf("t")
// val.includes("this") 
// val.includes("This") 

// val.includes("this") 
// // VM847:1 Uncaught TypeError: val.tolincludes is not a function
//     // at <anonymous>:1:5
// // (anonymous) @ VM847:1
// val.toLowerCase().includes("this") 
// // VM861:1 Uncaught TypeError: val.toLowerCase(...).lincludes is not a function
//     // at <anonymous>:1:19
// // (anonymous) @ VM861:1
// val.toLowerCase().includes("this") 
// true



console.log('Date');
var date = new Date();
console.log("Date", date);
console.log("date", date.getDate())
setInterval(()=>{
date = new Date();
console.log("time", date.getHours() + "" + date.getMinutes() + ":" + date.getSeconds());
},1000);

console.log(moment().format('L'))