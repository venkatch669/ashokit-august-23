const express = require('express');
const bodyParser = require('body-parser')
const app=express();
const port=5000;
const jsonParser = bodyParser.json();
const mysql = require('mysql2')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'user'
})

app.get("/",(req,res)=>{
    res.send("tutorials controller");
})

app.get("/tutorials",(req,res)=>{
    connection.connect();
    connection.query('SELECT * from book', (err, rows, fields) => {
      if (err) throw err    
      console.log('response is: ', rows);
      connection.end();
      res.send(rows);
    })    
})

app.listen(port, () => {
    console.log(`tutorials Controller listening on port ${port}`)
})