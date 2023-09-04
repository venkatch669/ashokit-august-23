
// :: global scope  && function scope
// let a=10;

// function addTwoNumber(){
//     let b=20;
//     console.log("b", a+b);
//     console.log("addTwoNumber func - ",a);
// }
// addTwoNumber();
// console.log("global scope",  a);
// // console.log("b", b);

// write a logic, which is supposed excutable immediatly and it should prevent global scope / function scope 

// :: iife ::

// (function(){
//     let aa=10;
//     console.log("iife", aa);
// })();
// console.log(aa)

// :: scope chain ::
let name="venkat";
function demoFun1(demoFun3){

    let name="rajesh";
    let a1=10;
    console.log("name", name);
    console.log("a1", a1);
    
    // nested function - is sub a function which can access the parent function scope 
    function demoFun2(){
       console.log("---- demofun2");
       console.log(a1);
       let a2="20";
       console.log(a2);
       console.log(name);
       demoFun3();
       
    }

    demoFun2();

}

function demoFun3(){
    console.log("---demoFun3");
    console.log(name);
}
demoFun3(); //
demoFun1(demoFun3);

// current scope -> parent scope ->   parent scope -> global scope 

(function(a){
    let iife=a;   
    console.log("----iife", iife);
})(10)

console.log(iife);