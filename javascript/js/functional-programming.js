
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

function demoFun(a){
    var num=10;
    return a(num);
}

demoFun(function(n){
    console.log(n);
})	
