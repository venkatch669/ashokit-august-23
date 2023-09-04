// function demoFun(a){
//     a();
// }

// // var a=function(){
// //     let a=10;
// //     let b=20;
// //     console.log(a+b);
// // }
// demoFun(()=>{
//     let a=10;
//     let b=20;
//     console.log(a+b);
// });


// [10].forEach(function(e){
//         console.log(e);
// })

// [10].forEach((e)=>{
//     console.log(e);
// })




function f1(c){
    let a=10;
    let b=20;
    console.log(a+b);	
    // c(a);
    return function(){       
        console.log("f2", a);
    }
}
function f2(a){
    console.log("f2", a);
}
f1(f2);


setTimeout(()=>{
    console.log("a1");
})

setTimeout(()=>{
    console.log("a2");
},1000)

// closure is a nested a function, which can access the parent function scope and return it 