
// var a=[10,20,30,40];

// function appendValue(val){
//     a.push(val);
// }

// function removeValue(){
//     a.pop();
// }

// removeValue();
// appendValue(50)
// removeValue();
// appendValue(60);
// removeValue();

// console.log(a); 10,20,30

// function demoFun(a){
//     var num=10;
//     return a(num);
// }

// demoFun(function(n){
//     console.log(n);
// })	

// impure function
// var a=[];
// function append(val){
//     a.push(val);
//     return a;
// }
// var result = append(10);
// append(20);
// append(30);
// console.log("result", result)
// console.log("orginal", a)

// pure function 
// var a=[];
// function append(val){
//     var b=a.concat(val);
//     return b;
// }
// append(10);
// append(20);
// var result = append(30);
// console.log("result", result)
// console.log("orginal", a)

// Clousure 
function getObj(value){
    var initalValue =value;
    function increment(){
        return initalValue++;
    }
    function decrement() {
        return initalValue--;
    }
    return {increment, decrement}							 
 }

var result = getObj(10);
console.log(result.decrement());
console.log(result.decrement());
console.log(result.decrement());