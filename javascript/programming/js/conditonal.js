
// find the biggest number in given 4 variables
// var a=prompt("please enter a number")
// var b=prompt("please enter b number")
// var c=prompt("please enter c number")
// var d=prompt("please enter d number")

// if(a>b && a>c && a>d){
//     alert("a is bigger")
// }
// else if(b>a && b>c && b>d){
//     alert("b is bigger")
// }
// else if(d>b && d>c && d>a){
//     alert("d is bigger")
// }
// else{
//     alert("c is bigger")
// }

// -----------------
// display respecitive message in console based given input
// let logtype = prompt("enter console type");
// if(logtype=='log'){
//     console.log("you selected log")
// }
// else if(logtype=='info'){
//     console.info("you selected info")
// }
// else if(logtype=='warn'){
//     console.warn("you selected warn")
// }
// else if(logtype=='error'){
//     console.error("you selected warn")
// }
// else{
//     console.log("you entered different value");
// }
// ----
// switch(logtype){
//     case 'log': console.log("you selected log"); break;
//     case 'info': console.info("you selected info"); break;
//     case 'warn': console.warn("you selected warn"); break;
//     case 'error': console.error("you selected error"); break;
//     default : console.log("you entered different value");
// }

// find the prime number in given two number 
// 4, 5 - prime number 
// find the even/odd number in given two number 
// 4, 5 - 4 even, 5 is odd number 


let val = prompt("enter a number");
for(let i=1;i<=val;i++){
    if(i%2==0){
        console.log("even", i)
    }else{
        console.log("odd", i)
    }
}
// -------------- while 
let j=0
while(j<10){
    console.log("j", j);
    j++;
}
// output 0....9
// --- do while 
var k;
do{
    console.log(k);
    if(k===undefined){
        k=0
    }
    k++;
}while(k<5);
// output undefined....4
