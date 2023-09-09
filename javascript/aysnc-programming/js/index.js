// console.log("a");		
// console.log("b");		
// setInterval(()=>{		
// 	console.log("c")
// },1000)
// console.log("d");
// console.log("e");
// setTimeout(()=>{		
// 	console.log("f")
// })

console.log("before api call");
fetch('http://localhost:3004/posts').then((res) => res.json()).then((res)=>{
    console.log("response", res);
}) // move it web api 
console.log("after api call");