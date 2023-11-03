const express = require('express');
const bodyParser = require('body-parser')
const app=express();
const port=5000;
const jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const student=[];
app.get("/",(req,res)=>{
    res.send("student controller");
})
// return list of student names;
app.get("/names",(req,res)=>{
    res.send(student);
});

// update student name by using id
app.put("/updateName",(req,res)=>{
    res.send("update name | api")
})

// create student name and return id;
app.post("/createName",jsonParser, (req,res)=>{
    console.log(req.body);
    student.push(req.body);
    res.send("successfully created")
})

// delete student name by using id
app.delete("/deleteName",(req,res)=>{
    res.send("delete name | api")
})

app.listen(port, () => {
    console.log(`Student Controller listening on port ${port}`)
})