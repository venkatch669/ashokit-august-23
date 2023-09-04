var arr=[10,23,30,43,50,60,70];
// console.log(arr);
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])
// console.log(arr)
console.log("---- for of")
for(let r of arr){
    console.log(r);
}

console.log("---- for")
for(let i=0;i<arr.length;i++){
    console.log(arr[i])
    if(i<5){
        break;
    }
}
console.log("----- forEach")
var fun = function(e){
    console.log(e);
}
arr.forEach(fun)


// :: anonymous ::
// : that type of function that has no name or we can say which is without any name

// function(){
//     console.log(e);
// }
function demoFun(){
    console.log(e);
}
console.log("----- filter")
// Returns the elements of an array that meet the condition specified in a callback function.
arr.filter((e)=>{
    if(e%2==0){
        console.log(e)
    }
})
var result = arr.forEach((e) => e%2!=0);
console.log("forEach", result)
var result = arr.filter((e) => e%2!=0);
console.log("filter", result)
var result = arr.map((e) => e+1);
// write a program to accept all odd numbers and convert into even numbers
// map is array function 
// which will iterate on each of element of Array
// and returns the update array 

var result = arr.map((e) => {
    if(e%2!==0){
        e= e+1
    }
    return e;
});
console.log("map", result);

console.log(arr.push(1));
console.log(arr);
console.log(arr.pop());
arr.unshift(0);
console.log(arr);

