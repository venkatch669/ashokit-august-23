// const addToNumbers =(a,b)=>{
//     return a+b;
// }
// let result = addToNumbers(10,20);
// console.log("result", result);

// ------------------------------------------
export default function FunctionTypes(){
const addToNumbers =(a:any,b:any=0):number=>{
    if(a==b)
    {

    }    
    return a+b;
}

const addToNumbers2 =(a:Function):number=>{
   
    return a(19,20);
}

let result:number = addToNumbers(10);
let result1:number = addToNumbers(10,20);
let result3:number = addToNumbers2(addToNumbers);
console.log("result", result);
}