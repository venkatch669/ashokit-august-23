const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/getStudent', (req, res) => {
   // console.log(req); // what you ever passing from client to server 
    // console.log(res); // what you trying to send to server to client
    const obj={
        name:"venkat"
    }
    res.send(obj)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})