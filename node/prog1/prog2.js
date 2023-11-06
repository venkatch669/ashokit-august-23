const fs = require('fs');
const data =[
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    }
];

console.log("A");
fs.writeFile("./demo.json", JSON.stringify(data),(err)=>{
    if(err){
        console.log("something went wrong,please try again")
    }
    else{
        console.log("file created, successfully");
    }
})
console.log("B");
fs.readFile("./demo.json",'utf8',(err,res)=>{
    if(err){
        console.log("no file found");
    }else{
        console.log(res);
    }
});
console.log("C");