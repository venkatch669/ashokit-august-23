
// write prime number from given two number 
// 2,3
// a number is which divisiable by 1 or it self is called prime number 

let  a = prompt("enter a number");
let  b = prompt("enter b number");
let isAPrime = true;
let isBPrime = true;

// 10 
// 10/2 ==0 
// 10/3 == 
// 10/4
// 10/5 
const max = a>b? a: b;
for(let i=2;i<max;i++){
    if(a%i==0 && i!=a){
        isAPrime=false;
    } 
    if(b%i==0 && i!=b){
        isBPrime=false;
    }
}
if(isAPrime){
    console.log(a +" a - is prime number")
}
if(isBPrime){
    console.log(b +" b - is prime number")
}else{
    console.log("both are not prime number")
}


// write a program to identify even/odd from given two numbers

// 1. write your own logic 
// 2. refer existing logic and follow it 
// 3. copy & paste 