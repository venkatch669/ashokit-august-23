// `use strict`
// demoFun();
// demoFun1();
// function demoFun(){
//     console.log("test");
// }
// let demoFun1 = function(){
//     console.log("test");
// }
// let demoFun2 = ()=>{
//     console.log("test");
// }

// demoFun();
// demoFun();

// function getSumArray(fun,arr){
//     return fun(arr);
// }

// let sum = (arr) =>{
//     let total=0;
//     for(let i=0;i<arr.length;i++){
//     total= total + arr[i]
//     }
//     return total;
// }

// let result = getSumArray(sum,[1,2,3,4,5]);
// console.log("result", result);


// function demoFun(i){
//     console.log(i)
// 	if(i>0){
//         i--;	
//         demoFun(i);
//     }
// }
// demoFun(10)
// arrays, object, // non- primitive // mutable
const obj={
    data:{
        name:"venkat"
    }
}
const obj2= obj;
obj2.data.name="rajesh";	
console.log(obj2.data.name); // rajesh  
console.log(obj.data.name); // venkat 
// ---------------------------------
const arr=[10,4,50];
const arr2 = arr ;
arr2[2]=40;
console.log(arr2[2]) // 40
console.log(arr[2]) // 40
// -------------------------
const arr1=[10,4,50];
arr1.length=1;
console.log(arr1[0]);
