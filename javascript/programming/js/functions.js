

// function demoFun(num){
//     let isPrime=true;
//     for(let i=2;i<num;i++){
//         if(num%i==0){
//             isPrime=false;
//         } 
//     }
//     if(isPrime){
//         console.log(num +"is prime number")
//     }else{
//         console.log(num +"is not a prime number")
//     }
// }
// demoFun(prompt("enter a value"));
// demoFun(prompt("enter b value"));
// demoFun(prompt("enter c value"));

let result = returnFun(10,20);
console.log(result)

// 1. function declaration
// function returnFun(a,b){
//     return a+b;
// }

// 2. function expression 
// let returnFun = function(a,b){
//     return a+b;
// }

// 3. arrow expression 
let returnFun = (a,b)=> a+b;
